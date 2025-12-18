import type {
	IHookFunctions,
	IWebhookFunctions,
	IDataObject,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
} from 'n8n-workflow';

import { setforthApiRequest } from './GenericFunctions';

export class SetforthTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Setforth Trigger',
		name: 'setforthTrigger',
		icon: 'file:setforth.svg',
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["event"]}}',
		description: 'Starts the workflow when Setforth events occur',
		defaults: {
			name: 'Setforth Trigger',
		},
		inputs: [],
		outputs: ['main'],
		credentials: [
			{
				name: 'setforthOAuth2Api',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Event',
				name: 'event',
				type: 'options',
				required: true,
				default: 'contact.created',
				options: [
					{
						name: 'Contact Created',
						value: 'contact.created',
						description: 'Triggers when a new contact is created',
					},
					{
						name: 'Contact Updated',
						value: 'contact.updated',
						description: 'Triggers when a contact is updated',
					},
					{
						name: 'Debt Created',
						value: 'debt.created',
						description: 'Triggers when a new debt is created',
					},
					{
						name: 'Debt Status Changed',
						value: 'debt.status_changed',
						description: 'Triggers when a debt status changes',
					},
					{
						name: 'Document Signed (Clixsign)',
						value: 'clixsign.document_signed',
						description: 'Triggers when a document is signed via Clixsign',
					},
					{
						name: 'Enrollment Approved',
						value: 'enrollment.approved',
						description: 'Triggers when an enrollment is approved',
					},
					{
						name: 'Enrollment Submitted',
						value: 'enrollment.submitted',
						description: 'Triggers when an enrollment is submitted',
					},
					{
						name: 'Payment Received',
						value: 'payment.received',
						description: 'Triggers when a payment is received',
					},
					{
						name: 'Settlement Offer Created',
						value: 'settlement.created',
						description: 'Triggers when a settlement offer is created',
					},
					{
						name: 'Settlement Offer Status Changed',
						value: 'settlement.status_changed',
						description: 'Triggers when a settlement offer status changes',
					},
					{
						name: 'Task Completed',
						value: 'task.completed',
						description: 'Triggers when a task is completed',
					},
					{
						name: 'Workflow Status Changed',
						value: 'workflow.status_changed',
						description: 'Triggers when a contact workflow status changes',
					},
				],
			},
			{
				displayName: 'Options',
				name: 'options',
				type: 'collection',
				placeholder: 'Add Option',
				default: {},
				options: [
					{
						displayName: 'Filter by Contact ID',
						name: 'contactId',
						type: 'string',
						default: '',
						description: 'Only trigger for events related to this contact ID',
					},
					{
						displayName: 'Filter by Status',
						name: 'status',
						type: 'string',
						default: '',
						description: 'Only trigger when status matches this value',
					},
					{
						displayName: 'Filter by Team ID',
						name: 'teamId',
						type: 'string',
						default: '',
						description: 'Only trigger for events from this team',
					},
				],
			},
		],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default') as string;
				const event = this.getNodeParameter('event') as string;

				try {
					const webhooks = await setforthApiRequest.call(this, 'GET', '/webhooks');
					
					for (const webhook of webhooks.data || webhooks || []) {
						if (webhook.url === webhookUrl && webhook.event === event) {
							const webhookData = this.getWorkflowStaticData('node');
							webhookData.webhookId = webhook.id;
							return true;
						}
					}
				} catch (error) {
					return false;
				}
				return false;
			},

			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default') as string;
				const event = this.getNodeParameter('event') as string;
				const options = this.getNodeParameter('options', {}) as IDataObject;

				const body: IDataObject = {
					url: webhookUrl,
					event,
					active: true,
				};

				if (options.contactId) {
					body.contact_id = options.contactId;
				}

				if (options.status) {
					body.status_filter = options.status;
				}

				if (options.teamId) {
					body.team_id = options.teamId;
				}

				try {
					const responseData = await setforthApiRequest.call(this, 'POST', '/webhooks', body);
					const webhookData = this.getWorkflowStaticData('node');
					webhookData.webhookId = responseData.id;
					return true;
				} catch (error) {
					return false;
				}
			},

			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');

				if (webhookData.webhookId !== undefined) {
					try {
						await setforthApiRequest.call(this, 'DELETE', `/webhooks/${webhookData.webhookId}`);
					} catch (error) {
						return false;
					}
					delete webhookData.webhookId;
				}
				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const req = this.getRequestObject();
		const body = req.body as IDataObject;

		// Verify webhook signature if present
		const signature = req.headers['x-setforth-signature'] as string;
		if (signature) {
			// Signature verification would be implemented here
			// For now, we trust the payload
		}

		return {
			workflowData: [this.helpers.returnJsonArray(body)],
		};
	}
}
