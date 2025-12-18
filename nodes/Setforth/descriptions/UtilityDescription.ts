import type { INodeProperties } from 'n8n-workflow';

export const utilityOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['utility'],
			},
		},
		options: [
			{
				name: 'Get Data Sources',
				value: 'getDataSources',
				description: 'Get all available data sources',
				action: 'Get data sources',
			},
			{
				name: 'Link Spinwheel ID',
				value: 'linkSpinwheel',
				description: 'Link a Spinwheel ID to a contact',
				action: 'Link Spinwheel ID',
			},
			{
				name: 'Search by Phone',
				value: 'searchByPhone',
				description: 'Search for a contact by phone number',
				action: 'Search by phone',
			},
			{
				name: 'Validate Routing Number',
				value: 'validateRoutingNumber',
				description: 'Validate a bank routing number',
				action: 'Validate routing number',
			},
		],
		default: 'getDataSources',
	},
];

export const utilityFields: INodeProperties[] = [
	{
		displayName: 'Phone Number',
		name: 'phoneNumber',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['utility'],
				operation: ['searchByPhone'],
			},
		},
		default: '',
		description: 'Phone number to search for',
	},
	{
		displayName: 'Routing Number',
		name: 'routingNumber',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['utility'],
				operation: ['validateRoutingNumber'],
			},
		},
		default: '',
		description: 'Bank routing number to validate',
	},
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['utility'],
				operation: ['linkSpinwheel'],
			},
		},
		default: '',
		description: 'The ID of the contact',
	},
	{
		displayName: 'Spinwheel ID',
		name: 'spinwheelId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['utility'],
				operation: ['linkSpinwheel'],
			},
		},
		default: '',
		description: 'Spinwheel ID to link',
	},
];
