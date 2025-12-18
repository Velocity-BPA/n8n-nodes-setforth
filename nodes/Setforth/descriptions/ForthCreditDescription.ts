import type { INodeProperties } from 'n8n-workflow';

export const forthCreditOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['forthCredit'],
			},
		},
		options: [
			{
				name: 'Connect Contact with KBA',
				value: 'connectKba',
				description: 'Connect contact using knowledge-based authentication',
				action: 'Connect with KBA',
			},
			{
				name: 'Connect Contact with SMS',
				value: 'connectSms',
				description: 'Connect contact using SMS verification',
				action: 'Connect with SMS',
			},
			{
				name: 'Delete Contact',
				value: 'deleteContact',
				description: 'Delete a contact from Forth Credit',
				action: 'Delete contact from Forth Credit',
			},
			{
				name: 'Order Equifax Report',
				value: 'orderEquifaxReport',
				description: 'Order an Equifax credit report',
				action: 'Order Equifax report',
			},
			{
				name: 'Refresh Equifax Report',
				value: 'refreshEquifaxReport',
				description: 'Refresh an Equifax credit report',
				action: 'Refresh Equifax report',
			},
			{
				name: 'Verify KBA Answers',
				value: 'verifyKba',
				description: 'Verify KBA answers',
				action: 'Verify KBA answers',
			},
			{
				name: 'Verify SMS Code',
				value: 'verifySms',
				description: 'Verify SMS verification code',
				action: 'Verify SMS code',
			},
		],
		default: 'connectKba',
	},
];

export const forthCreditFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['forthCredit'],
			},
		},
		default: '',
		description: 'The ID of the contact',
	},
	{
		displayName: 'KBA Answers',
		name: 'answers',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['forthCredit'],
				operation: ['verifyKba'],
			},
		},
		default: {},
		options: [
			{
				name: 'answerValues',
				displayName: 'Answer',
				values: [
					{
						displayName: 'Question ID',
						name: 'questionId',
						type: 'string',
						default: '',
						description: 'The ID of the KBA question',
					},
					{
						displayName: 'Answer',
						name: 'answer',
						type: 'string',
						default: '',
						description: 'The answer to the question',
					},
				],
			},
		],
		description: 'Answers to KBA questions',
	},
	{
		displayName: 'SMS Code',
		name: 'code',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['forthCredit'],
				operation: ['verifySms'],
			},
		},
		default: '',
		description: 'SMS verification code',
	},
];
