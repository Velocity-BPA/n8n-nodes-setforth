import type { INodeProperties } from 'n8n-workflow';

export const debtOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['debt'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new debt',
				action: 'Create a debt',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a debt',
				action: 'Delete a debt',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a debt by ID',
				action: 'Get a debt',
			},
			{
				name: 'Get Documents',
				value: 'getDocuments',
				description: 'Get documents for a debt',
				action: 'Get debt documents',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a debt',
				action: 'Update a debt',
			},
			{
				name: 'Update Type',
				value: 'updateType',
				description: 'Update debt type',
				action: 'Update debt type',
			},
		],
		default: 'get',
	},
];

export const debtFields: INodeProperties[] = [
	// ----------------------------------
	//         debt:create
	// ----------------------------------
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The ID of the contact to add the debt to',
	},
	{
		displayName: 'Creditor Name',
		name: 'creditorName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name of the creditor',
	},
	{
		displayName: 'Original Balance',
		name: 'originalBalance',
		type: 'number',
		typeOptions: {
			numberPrecision: 2,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Original debt balance',
	},
	{
		displayName: 'Current Balance',
		name: 'currentBalance',
		type: 'number',
		typeOptions: {
			numberPrecision: 2,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Current debt balance',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Account Number',
				name: 'accountNumber',
				type: 'string',
				default: '',
				description: 'Account number with the creditor',
			},
			{
				displayName: 'Debt Type',
				name: 'debtType',
				type: 'string',
				default: '',
				description: 'Type of debt (e.g., credit card, medical, personal loan)',
			},
			{
				displayName: 'Interest Rate',
				name: 'interestRate',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Interest rate percentage',
			},
			{
				displayName: 'Last Payment Amount',
				name: 'lastPaymentAmount',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Amount of the last payment',
			},
			{
				displayName: 'Last Payment Date',
				name: 'lastPaymentDate',
				type: 'dateTime',
				default: '',
				description: 'Date of the last payment',
			},
			{
				displayName: 'Minimum Payment',
				name: 'minimumPayment',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Minimum monthly payment',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Notes about the debt',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Debt status',
			},
		],
	},

	// ----------------------------------
	//         debt:get/delete/update/getDocuments/updateType
	// ----------------------------------
	{
		displayName: 'Debt ID',
		name: 'debtId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['get', 'delete', 'update', 'getDocuments', 'updateType'],
			},
		},
		default: '',
		description: 'The ID of the debt',
	},

	// ----------------------------------
	//         debt:update
	// ----------------------------------
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Account Number',
				name: 'accountNumber',
				type: 'string',
				default: '',
				description: 'Account number with the creditor',
			},
			{
				displayName: 'Creditor Name',
				name: 'creditorName',
				type: 'string',
				default: '',
				description: 'Name of the creditor',
			},
			{
				displayName: 'Current Balance',
				name: 'currentBalance',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Current debt balance',
			},
			{
				displayName: 'Interest Rate',
				name: 'interestRate',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Interest rate percentage',
			},
			{
				displayName: 'Last Payment Amount',
				name: 'lastPaymentAmount',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Amount of the last payment',
			},
			{
				displayName: 'Last Payment Date',
				name: 'lastPaymentDate',
				type: 'dateTime',
				default: '',
				description: 'Date of the last payment',
			},
			{
				displayName: 'Minimum Payment',
				name: 'minimumPayment',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Minimum monthly payment',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Notes about the debt',
			},
			{
				displayName: 'Original Balance',
				name: 'originalBalance',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				description: 'Original debt balance',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Debt status',
			},
		],
	},

	// ----------------------------------
	//         debt:updateType
	// ----------------------------------
	{
		displayName: 'Debt Type ID',
		name: 'debtTypeId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['updateType'],
			},
		},
		default: '',
		description: 'The new debt type ID',
	},
];

// Debt Tasks Sub-resource
export const debtTaskOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['debtTask'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a task for a debt',
				action: 'Create debt task',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a debt task',
				action: 'Delete debt task',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all tasks for a debt',
				action: 'Get all debt tasks',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a debt task',
				action: 'Update debt task',
			},
		],
		default: 'getAll',
	},
];

export const debtTaskFields: INodeProperties[] = [
	{
		displayName: 'Debt ID',
		name: 'debtId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['debtTask'],
			},
		},
		default: '',
		description: 'The ID of the debt',
	},
	{
		displayName: 'Task ID',
		name: 'taskId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['debtTask'],
				operation: ['delete', 'update'],
			},
		},
		default: '',
		description: 'The ID of the task',
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['debtTask'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Task title',
	},
	{
		displayName: 'Due Date',
		name: 'dueDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['debtTask'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Task due date',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['debtTask'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Assigned User ID',
				name: 'assignedUserId',
				type: 'string',
				default: '',
				description: 'ID of the user to assign the task to',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Task description',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				options: [
					{
						name: 'Low',
						value: 'low',
					},
					{
						name: 'Medium',
						value: 'medium',
					},
					{
						name: 'High',
						value: 'high',
					},
				],
				default: 'medium',
				description: 'Task priority',
			},
		],
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['debtTask'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Assigned User ID',
				name: 'assignedUserId',
				type: 'string',
				default: '',
				description: 'ID of the user to assign the task to',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Task description',
			},
			{
				displayName: 'Due Date',
				name: 'dueDate',
				type: 'dateTime',
				default: '',
				description: 'Task due date',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				options: [
					{
						name: 'Low',
						value: 'low',
					},
					{
						name: 'Medium',
						value: 'medium',
					},
					{
						name: 'High',
						value: 'high',
					},
				],
				default: 'medium',
				description: 'Task priority',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Pending',
						value: 'pending',
					},
					{
						name: 'In Progress',
						value: 'in_progress',
					},
					{
						name: 'Completed',
						value: 'completed',
					},
				],
				default: 'pending',
				description: 'Task status',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Task title',
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['debtTask'],
				operation: ['getAll'],
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
				resource: ['debtTask'],
				operation: ['getAll'],
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

// Debt Notes Sub-resource
export const debtNoteOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['debtNote'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a note for a debt',
				action: 'Create debt note',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a debt note',
				action: 'Delete debt note',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all notes for a debt',
				action: 'Get all debt notes',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a debt note',
				action: 'Update debt note',
			},
		],
		default: 'getAll',
	},
];

export const debtNoteFields: INodeProperties[] = [
	{
		displayName: 'Debt ID',
		name: 'debtId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['debtNote'],
			},
		},
		default: '',
		description: 'The ID of the debt',
	},
	{
		displayName: 'Note ID',
		name: 'noteId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['debtNote'],
				operation: ['delete', 'update'],
			},
		},
		default: '',
		description: 'The ID of the note',
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['debtNote'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The note content',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['debtNote'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Content',
				name: 'content',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'The note content',
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['debtNote'],
				operation: ['getAll'],
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
				resource: ['debtNote'],
				operation: ['getAll'],
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
