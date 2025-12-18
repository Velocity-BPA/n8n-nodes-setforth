import type { INodeProperties } from 'n8n-workflow';

export const bulkOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bulk'],
			},
		},
		options: [
			{
				name: 'Apply Compensation Templates',
				value: 'applyCompensationTemplates',
				description: 'Apply compensation templates to multiple contacts',
				action: 'Apply compensation templates',
			},
			{
				name: 'Update Contacts',
				value: 'updateContacts',
				description: 'Update multiple contacts at once',
				action: 'Update multiple contacts',
			},
		],
		default: 'updateContacts',
	},
];

export const bulkFields: INodeProperties[] = [
	{
		displayName: 'Contact IDs',
		name: 'contactIds',
		type: 'string',
		typeOptions: {
			multipleValues: true,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['bulk'],
			},
		},
		default: [],
		description: 'IDs of contacts to update',
	},
	{
		displayName: 'Template ID',
		name: 'templateId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['bulk'],
				operation: ['applyCompensationTemplates'],
			},
		},
		default: '',
		description: 'ID of the compensation template to apply',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['bulk'],
				operation: ['updateContacts'],
			},
		},
		options: [
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description: 'First name to set',
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description: 'Last name to set',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Status to set',
			},
			{
				displayName: 'Team ID',
				name: 'teamId',
				type: 'string',
				default: '',
				description: 'Team ID to assign',
			},
		],
	},
];
