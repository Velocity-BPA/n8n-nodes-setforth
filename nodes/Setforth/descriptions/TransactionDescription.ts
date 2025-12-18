import type { INodeProperties } from 'n8n-workflow';

export const transactionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['transaction'],
			},
		},
		options: [
			{
				name: 'Get All Subtypes',
				value: 'getAllSubtypes',
				description: 'Get all transaction subtypes',
				action: 'Get all transaction subtypes',
			},
			{
				name: 'Get All Types',
				value: 'getAllTypes',
				description: 'Get all transaction types',
				action: 'Get all transaction types',
			},
			{
				name: 'Get Contact Transactions',
				value: 'getContactTransactions',
				description: 'Get all transactions for a contact',
				action: 'Get contact transactions',
			},
		],
		default: 'getContactTransactions',
	},
];

export const transactionFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['getContactTransactions'],
			},
		},
		default: '',
		description: 'The ID of the contact',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['getContactTransactions'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['transaction'],
				operation: ['getContactTransactions'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
	},
];
