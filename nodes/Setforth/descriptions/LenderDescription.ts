import type { INodeProperties } from 'n8n-workflow';

export const lenderOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['lender'],
			},
		},
		options: [
			{
				name: 'Lending USA - Create Loan Status',
				value: 'lendingUsaCreateStatus',
				description: 'Create Lending USA loan status',
				action: 'Create Lending USA status',
			},
			{
				name: 'Lending USA - Delete Loan Status',
				value: 'lendingUsaDeleteStatus',
				description: 'Delete Lending USA loan status',
				action: 'Delete Lending USA status',
			},
			{
				name: 'Lending USA - Get All Statuses',
				value: 'lendingUsaGetStatuses',
				description: 'Get all Lending USA loan statuses',
				action: 'Get Lending USA statuses',
			},
			{
				name: 'Lending USA - Update Loan Offers',
				value: 'lendingUsaUpdateOffers',
				description: 'Update Lending USA loan offers',
				action: 'Update Lending USA offers',
			},
			{
				name: 'Lending USA - Update Loan Status',
				value: 'lendingUsaUpdateStatus',
				description: 'Update Lending USA loan status',
				action: 'Update Lending USA status',
			},
			{
				name: 'Lending USA - Update Submission',
				value: 'lendingUsaUpdateSubmission',
				description: 'Update Lending USA submission status',
				action: 'Update Lending USA submission',
			},
			{
				name: 'Monevo - Get All Lenders',
				value: 'monevoGetLenders',
				description: 'Get all Monevo lenders',
				action: 'Get Monevo lenders',
			},
			{
				name: 'Monevo - Import Loan Offers',
				value: 'monevoImportOffers',
				description: 'Import Monevo loan offers for a contact',
				action: 'Import Monevo offers',
			},
		],
		default: 'monevoGetLenders',
	},
];

export const lenderFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['lender'],
				operation: [
					'monevoImportOffers',
					'lendingUsaCreateStatus',
					'lendingUsaUpdateStatus',
					'lendingUsaDeleteStatus',
					'lendingUsaUpdateOffers',
					'lendingUsaUpdateSubmission',
				],
			},
		},
		default: '',
		description: 'The ID of the contact',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['lender'],
				operation: ['lendingUsaCreateStatus', 'lendingUsaUpdateStatus'],
			},
		},
		default: '',
		description: 'Loan status',
	},
	{
		displayName: 'Submission Status',
		name: 'submissionStatus',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['lender'],
				operation: ['lendingUsaUpdateSubmission'],
			},
		},
		default: '',
		description: 'Submission status',
	},
	{
		displayName: 'Offers',
		name: 'offers',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['lender'],
				operation: ['monevoImportOffers', 'lendingUsaUpdateOffers'],
			},
		},
		default: '[]',
		description: 'JSON array of loan offers',
	},
];
