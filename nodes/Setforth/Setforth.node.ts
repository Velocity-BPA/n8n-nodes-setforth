/*
 * Copyright (c) Velocity BPA, LLC
 * Licensed under the Business Source License 1.1
 * Commercial use requires a separate commercial license.
 * See LICENSE file for details.
 */

import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IDataObject,
} from 'n8n-workflow';

import { setforthApiRequest, setforthApiRequestAllItems } from './GenericFunctions';
import { logLicenseNotice } from './LicenseNotice';

import {
	contactOperations,
	contactFields,
	debtOperations,
	debtFields,
	enrollmentOperations,
	enrollmentFields,
	settlementOfferOperations,
	settlementOfferFields,
	clixsignOperations,
	clixsignFields,
	forthCreditOperations,
	forthCreditFields,
	contactAlertOperations,
	contactAlertFields,
	contactNoteOperations,
	contactNoteFields,
	contactCommunicationOperations,
	contactCommunicationFields,
	contactDocumentOperations,
	contactDocumentFields,
	contactDebtOperations,
	contactDebtFields,
	contactWorkflowOperations,
	contactWorkflowFields,
	contactBankingOperations,
	contactBankingFields,
	contactListOperations,
	contactListFields,
	contactCreditOperations,
	contactCreditFields,
	debtTaskOperations,
	debtTaskFields,
	debtNoteOperations,
	debtNoteFields,
	callOperations,
	callFields,
	documentOperations,
	documentFields,
	documentPackageOperations,
	documentPackageFields,
	documentTypeOperations,
	documentTypeFields,
	documentTemplateOperations,
	documentTemplateFields,
	documentPackageTemplateOperations,
	documentPackageTemplateFields,
	taskOperations,
	taskFields,
	calendarEventOperations,
	calendarEventFields,
	userOperations,
	userFields,
	campaignOperations,
	campaignFields,
	emailTemplateOperations,
	emailTemplateFields,
	teamOperations,
	teamFields,
	adminUserOperations,
	adminUserFields,
	payeeOperations,
	payeeFields,
	contentConfigOperations,
	contentConfigFields,
	creditorOperations,
	creditorFields,
	transactionOperations,
	transactionFields,
	accountStatementOperations,
	accountStatementFields,
	lenderOperations,
	lenderFields,
	utilityOperations,
	utilityFields,
	bulkOperations,
	bulkFields,
} from './descriptions';

export class Setforth implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Setforth',
		name: 'setforth',
		icon: 'file:setforth.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Setforth (FORTH) API for debt resolution services',
		defaults: {
			name: 'Setforth',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'setforthOAuth2Api',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Account Statement', value: 'accountStatement' },
					{ name: 'Admin User', value: 'adminUser' },
					{ name: 'Bulk Operations', value: 'bulk' },
					{ name: 'Calendar Event', value: 'calendarEvent' },
					{ name: 'Call', value: 'call' },
					{ name: 'Campaign', value: 'campaign' },
					{ name: 'Clixsign (E-Signature)', value: 'clixsign' },
					{ name: 'Contact', value: 'contact' },
					{ name: 'Contact Alert', value: 'contactAlert' },
					{ name: 'Contact Banking', value: 'contactBanking' },
					{ name: 'Contact Communication', value: 'contactCommunication' },
					{ name: 'Contact Credit Report', value: 'contactCredit' },
					{ name: 'Contact Debt', value: 'contactDebt' },
					{ name: 'Contact Document', value: 'contactDocument' },
					{ name: 'Contact List', value: 'contactList' },
					{ name: 'Contact Note', value: 'contactNote' },
					{ name: 'Contact Workflow', value: 'contactWorkflow' },
					{ name: 'Content Configuration', value: 'contentConfig' },
					{ name: 'Creditor', value: 'creditor' },
					{ name: 'Debt', value: 'debt' },
					{ name: 'Debt Note', value: 'debtNote' },
					{ name: 'Debt Task', value: 'debtTask' },
					{ name: 'Document', value: 'document' },
					{ name: 'Document Package', value: 'documentPackage' },
					{ name: 'Document Package Template', value: 'documentPackageTemplate' },
					{ name: 'Document Template', value: 'documentTemplate' },
					{ name: 'Document Type', value: 'documentType' },
					{ name: 'Email Template', value: 'emailTemplate' },
					{ name: 'Enrollment', value: 'enrollment' },
					{ name: 'Forth Credit', value: 'forthCredit' },
					{ name: 'Lender', value: 'lender' },
					{ name: 'Payee', value: 'payee' },
					{ name: 'Settlement Offer', value: 'settlementOffer' },
					{ name: 'Task', value: 'task' },
					{ name: 'Team', value: 'team' },
					{ name: 'Transaction', value: 'transaction' },
					{ name: 'User', value: 'user' },
					{ name: 'Utility', value: 'utility' },
				],
				default: 'contact',
			},
			// Contact
			...contactOperations,
			...contactFields,
			// Debt
			...debtOperations,
			...debtFields,
			// Enrollment
			...enrollmentOperations,
			...enrollmentFields,
			// Settlement Offer
			...settlementOfferOperations,
			...settlementOfferFields,
			// Clixsign
			...clixsignOperations,
			...clixsignFields,
			// Forth Credit
			...forthCreditOperations,
			...forthCreditFields,
			// Contact Alert
			...contactAlertOperations,
			...contactAlertFields,
			// Contact Note
			...contactNoteOperations,
			...contactNoteFields,
			// Contact Communication
			...contactCommunicationOperations,
			...contactCommunicationFields,
			// Contact Document
			...contactDocumentOperations,
			...contactDocumentFields,
			// Contact Debt
			...contactDebtOperations,
			...contactDebtFields,
			// Contact Workflow
			...contactWorkflowOperations,
			...contactWorkflowFields,
			// Contact Banking
			...contactBankingOperations,
			...contactBankingFields,
			// Contact List
			...contactListOperations,
			...contactListFields,
			// Contact Credit
			...contactCreditOperations,
			...contactCreditFields,
			// Debt Task
			...debtTaskOperations,
			...debtTaskFields,
			// Debt Note
			...debtNoteOperations,
			...debtNoteFields,
			// Call
			...callOperations,
			...callFields,
			// Document
			...documentOperations,
			...documentFields,
			// Document Package
			...documentPackageOperations,
			...documentPackageFields,
			// Document Type
			...documentTypeOperations,
			...documentTypeFields,
			// Document Template
			...documentTemplateOperations,
			...documentTemplateFields,
			// Document Package Template
			...documentPackageTemplateOperations,
			...documentPackageTemplateFields,
			// Task
			...taskOperations,
			...taskFields,
			// Calendar Event
			...calendarEventOperations,
			...calendarEventFields,
			// User
			...userOperations,
			...userFields,
			// Campaign
			...campaignOperations,
			...campaignFields,
			// Email Template
			...emailTemplateOperations,
			...emailTemplateFields,
			// Team
			...teamOperations,
			...teamFields,
			// Admin User
			...adminUserOperations,
			...adminUserFields,
			// Payee
			...payeeOperations,
			...payeeFields,
			// Content Config
			...contentConfigOperations,
			...contentConfigFields,
			// Creditor
			...creditorOperations,
			...creditorFields,
			// Transaction
			...transactionOperations,
			...transactionFields,
			// Account Statement
			...accountStatementOperations,
			...accountStatementFields,
			// Lender
			...lenderOperations,
			...lenderFields,
			// Utility
			...utilityOperations,
			...utilityFields,
			// Bulk
			...bulkOperations,
			...bulkFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		// Log license notice (once per node load)
		logLicenseNotice('Setforth');

		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		for (let i = 0; i < items.length; i++) {
			try {
				let responseData: IDataObject | IDataObject[] = {};

				// Contact Resource
				if (resource === 'contact') {
					if (operation === 'create') {
						const body: IDataObject = {
							first_name: this.getNodeParameter('firstName', i) as string,
							last_name: this.getNodeParameter('lastName', i) as string,
						};
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
						Object.assign(body, additionalFields);
						responseData = await setforthApiRequest.call(this, 'POST', '/v1/contacts', body);
					} else if (operation === 'get') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/v1/contacts/${contactId}`);
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						if (returnAll) {
							responseData = await setforthApiRequestAllItems.call(this, 'GET', '/v1/contacts', {}, filters);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							filters.limit = limit;
							const response = await setforthApiRequest.call(this, 'GET', '/v1/contacts', {}, filters);
							responseData = (response as IDataObject).data as IDataObject[] || [];
						}
					} else if (operation === 'update') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						responseData = await setforthApiRequest.call(this, 'PATCH', `/v1/contacts/${contactId}`, updateFields);
					} else if (operation === 'delete') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/v1/contacts/${contactId}`);
					} else if (operation === 'search') {
						const searchParams = this.getNodeParameter('searchParams', i) as IDataObject;
						responseData = await setforthApiRequest.call(this, 'POST', '/v1/contacts/search', searchParams);
					} else if (operation === 'getHistoryFeed') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/v1/contacts/${contactId}/history`);
					}
				}

				// Debt Resource
				else if (resource === 'debt') {
					if (operation === 'create') {
						const body: IDataObject = {
							contact_id: this.getNodeParameter('contactId', i) as string,
							creditor_name: this.getNodeParameter('creditorName', i) as string,
							original_balance: this.getNodeParameter('originalBalance', i) as number,
							current_balance: this.getNodeParameter('currentBalance', i) as number,
						};
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
						Object.assign(body, additionalFields);
						responseData = await setforthApiRequest.call(this, 'POST', '/v1/debts', body);
					} else if (operation === 'get') {
						const debtId = this.getNodeParameter('debtId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/v1/debts/${debtId}`);
					} else if (operation === 'update') {
						const debtId = this.getNodeParameter('debtId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;
						responseData = await setforthApiRequest.call(this, 'PATCH', `/v1/debts/${debtId}`, updateFields);
					} else if (operation === 'delete') {
						const debtId = this.getNodeParameter('debtId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/v1/debts/${debtId}`);
					} else if (operation === 'getDocuments') {
						const debtId = this.getNodeParameter('debtId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/v1/debts/${debtId}/documents`);
					} else if (operation === 'updateType') {
						const debtId = this.getNodeParameter('debtId', i) as string;
						const newType = this.getNodeParameter('newType', i) as string;
						responseData = await setforthApiRequest.call(this, 'PATCH', `/v1/debts/${debtId}/type`, { type: newType });
					}
				}

				// Generic handler for other resources
				else {
					const id = this.getNodeParameter('id', i, '') as string;
					if (operation === 'get' && id) {
						responseData = await setforthApiRequest.call(this, 'GET', `/v1/${resource}s/${id}`);
					} else if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						if (returnAll) {
							responseData = await setforthApiRequestAllItems.call(this, 'GET', `/v1/${resource}s`);
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							const response = await setforthApiRequest.call(this, 'GET', `/v1/${resource}s`, {}, { limit });
							responseData = (response as IDataObject).data as IDataObject[] || [];
						}
					}
				}

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData as IDataObject),
					{ itemData: { item: i } },
				);
				returnData.push(...executionData);
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: (error as Error).message }, pairedItem: { item: i } });
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
