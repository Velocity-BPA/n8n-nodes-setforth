import type { INodeProperties } from 'n8n-workflow';

export const accountStatementOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['accountStatement'],
			},
		},
		options: [
			{
				name: 'Calculate Quote',
				value: 'calculateQuote',
				description: 'Calculate a quote for a contact',
				action: 'Calculate quote',
			},
			{
				name: 'Get Monthly Statement',
				value: 'getMonthlyStatement',
				description: 'Get monthly statement for a contact',
				action: 'Get monthly statement',
			},
		],
		default: 'calculateQuote',
	},
];

export const accountStatementFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['accountStatement'],
			},
		},
		default: '',
		description: 'The ID of the contact',
	},
	{
		displayName: 'Month',
		name: 'month',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['accountStatement'],
				operation: ['getMonthlyStatement'],
			},
		},
		options: [
			{ name: 'January', value: '01' },
			{ name: 'February', value: '02' },
			{ name: 'March', value: '03' },
			{ name: 'April', value: '04' },
			{ name: 'May', value: '05' },
			{ name: 'June', value: '06' },
			{ name: 'July', value: '07' },
			{ name: 'August', value: '08' },
			{ name: 'September', value: '09' },
			{ name: 'October', value: '10' },
			{ name: 'November', value: '11' },
			{ name: 'December', value: '12' },
		],
		default: '01',
		description: 'Statement month',
	},
	{
		displayName: 'Year',
		name: 'year',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['accountStatement'],
				operation: ['getMonthlyStatement'],
			},
		},
		default: 2024,
		description: 'Statement year',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['accountStatement'],
				operation: ['calculateQuote'],
			},
		},
		options: [
			{
				displayName: 'Include Fees',
				name: 'includeFees',
				type: 'boolean',
				default: true,
				description: 'Whether to include fees in the quote',
			},
			{
				displayName: 'Settlement Percentage',
				name: 'settlementPercentage',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Target settlement percentage',
			},
		],
	},
];
