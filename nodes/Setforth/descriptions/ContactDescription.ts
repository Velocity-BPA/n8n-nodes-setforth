import type { INodeProperties } from 'n8n-workflow';

export const contactOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contact'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new contact',
				action: 'Create a contact',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a contact',
				action: 'Delete a contact',
			},
			{
				name: 'Delink Co-Applicant',
				value: 'delinkCoApplicant',
				description: 'Delink a co-applicant from a contact',
				action: 'Delink co-applicant from contact',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a contact by ID',
				action: 'Get a contact',
			},
			{
				name: 'Get History Feed',
				value: 'getHistoryFeed',
				description: 'Get the history feed for a contact',
				action: 'Get contact history feed',
			},
			{
				name: 'Search',
				value: 'search',
				description: 'Search for contacts',
				action: 'Search contacts',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a contact',
				action: 'Update a contact',
			},
		],
		default: 'get',
	},
];

export const contactFields: INodeProperties[] = [
	// ----------------------------------
	//         contact:create
	// ----------------------------------
	{
		displayName: 'First Name',
		name: 'firstName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'First name of the contact',
	},
	{
		displayName: 'Last Name',
		name: 'lastName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Last name of the contact',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Email address of the contact',
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Phone number of the contact',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Address Line 1',
				name: 'address1',
				type: 'string',
				default: '',
				description: 'Street address line 1',
			},
			{
				displayName: 'Address Line 2',
				name: 'address2',
				type: 'string',
				default: '',
				description: 'Street address line 2',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description: 'City of residence',
			},
			{
				displayName: 'Co-Applicant Email',
				name: 'coApplicantEmail',
				type: 'string',
				default: '',
				description: 'Email address of co-applicant',
			},
			{
				displayName: 'Co-Applicant First Name',
				name: 'coApplicantFirstName',
				type: 'string',
				default: '',
				description: 'First name of co-applicant',
			},
			{
				displayName: 'Co-Applicant Last Name',
				name: 'coApplicantLastName',
				type: 'string',
				default: '',
				description: 'Last name of co-applicant',
			},
			{
				displayName: 'Co-Applicant Phone',
				name: 'coApplicantPhone',
				type: 'string',
				default: '',
				description: 'Phone number of co-applicant',
			},
			{
				displayName: 'Date of Birth',
				name: 'dateOfBirth',
				type: 'dateTime',
				default: '',
				description: 'Date of birth of the contact',
			},
			{
				displayName: 'External ID',
				name: 'externalId',
				type: 'string',
				default: '',
				description: 'External identifier for the contact',
			},
			{
				displayName: 'Middle Name',
				name: 'middleName',
				type: 'string',
				default: '',
				description: 'Middle name of the contact',
			},
			{
				displayName: 'SSN (Last 4)',
				name: 'ssn4',
				type: 'string',
				default: '',
				description: 'Last 4 digits of Social Security Number',
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'string',
				default: '',
				description: 'State of residence',
			},
			{
				displayName: 'Zip Code',
				name: 'zipCode',
				type: 'string',
				default: '',
				description: 'ZIP code',
			},
		],
	},

	// ----------------------------------
	//         contact:get
	// ----------------------------------
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['get', 'delete', 'update', 'delinkCoApplicant', 'getHistoryFeed'],
			},
		},
		default: '',
		description: 'The ID of the contact',
	},

	// ----------------------------------
	//         contact:search
	// ----------------------------------
	{
		displayName: 'Search Query',
		name: 'searchQuery',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['search'],
			},
		},
		default: '',
		description: 'Search query (name, email, phone, or external ID)',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['search'],
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
				resource: ['contact'],
				operation: ['search'],
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
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['search'],
			},
		},
		options: [
			{
				displayName: 'Created After',
				name: 'createdAfter',
				type: 'dateTime',
				default: '',
				description: 'Filter contacts created after this date',
			},
			{
				displayName: 'Created Before',
				name: 'createdBefore',
				type: 'dateTime',
				default: '',
				description: 'Filter contacts created before this date',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				description: 'Filter by email address',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Filter by phone number',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Filter by contact status',
			},
		],
	},

	// ----------------------------------
	//         contact:update
	// ----------------------------------
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Address Line 1',
				name: 'address1',
				type: 'string',
				default: '',
				description: 'Street address line 1',
			},
			{
				displayName: 'Address Line 2',
				name: 'address2',
				type: 'string',
				default: '',
				description: 'Street address line 2',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description: 'City of residence',
			},
			{
				displayName: 'Date of Birth',
				name: 'dateOfBirth',
				type: 'dateTime',
				default: '',
				description: 'Date of birth of the contact',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'Email address of the contact',
			},
			{
				displayName: 'First Name',
				name: 'firstName',
				type: 'string',
				default: '',
				description: 'First name of the contact',
			},
			{
				displayName: 'Last Name',
				name: 'lastName',
				type: 'string',
				default: '',
				description: 'Last name of the contact',
			},
			{
				displayName: 'Middle Name',
				name: 'middleName',
				type: 'string',
				default: '',
				description: 'Middle name of the contact',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Phone number of the contact',
			},
			{
				displayName: 'SSN (Last 4)',
				name: 'ssn4',
				type: 'string',
				default: '',
				description: 'Last 4 digits of Social Security Number',
			},
			{
				displayName: 'State',
				name: 'state',
				type: 'string',
				default: '',
				description: 'State of residence',
			},
			{
				displayName: 'Zip Code',
				name: 'zipCode',
				type: 'string',
				default: '',
				description: 'ZIP code',
			},
		],
	},
];

// Contact Sub-resources
export const contactListOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contactList'],
			},
		},
		options: [
			{
				name: 'Download List',
				value: 'downloadList',
				description: 'Download a contact list',
				action: 'Download contact list',
			},
			{
				name: 'Get All Contacts in List',
				value: 'getAllContacts',
				description: 'Get all contacts in a list',
				action: 'Get all contacts in list',
			},
			{
				name: 'Get All Fields',
				value: 'getAllFields',
				description: 'Get all fields for contact lists',
				action: 'Get all contact list fields',
			},
			{
				name: 'Publish List',
				value: 'publishList',
				description: 'Publish a contact list',
				action: 'Publish contact list',
			},
		],
		default: 'getAllFields',
	},
];

export const contactListFields: INodeProperties[] = [
	{
		displayName: 'List ID',
		name: 'listId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactList'],
				operation: ['getAllContacts', 'downloadList', 'publishList'],
			},
		},
		default: '',
		description: 'The ID of the contact list',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['contactList'],
				operation: ['getAllContacts'],
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
				resource: ['contactList'],
				operation: ['getAllContacts'],
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

export const contactAlertOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contactAlert'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create an alert for a contact',
				action: 'Create contact alert',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an alert',
				action: 'Delete contact alert',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all alerts for a contact',
				action: 'Get all contact alerts',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an alert',
				action: 'Update contact alert',
			},
		],
		default: 'getAll',
	},
];

export const contactAlertFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactAlert'],
			},
		},
		default: '',
		description: 'The ID of the contact',
	},
	{
		displayName: 'Alert ID',
		name: 'alertId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactAlert'],
				operation: ['delete', 'update'],
			},
		},
		default: '',
		description: 'The ID of the alert',
	},
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactAlert'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The alert message',
	},
	{
		displayName: 'Alert Type',
		name: 'alertType',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['contactAlert'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Info',
				value: 'info',
			},
			{
				name: 'Warning',
				value: 'warning',
			},
			{
				name: 'Critical',
				value: 'critical',
			},
		],
		default: 'info',
		description: 'Type of alert',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contactAlert'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Alert Type',
				name: 'alertType',
				type: 'options',
				options: [
					{
						name: 'Info',
						value: 'info',
					},
					{
						name: 'Warning',
						value: 'warning',
					},
					{
						name: 'Critical',
						value: 'critical',
					},
				],
				default: 'info',
				description: 'Type of alert',
			},
			{
				displayName: 'Message',
				name: 'message',
				type: 'string',
				default: '',
				description: 'The alert message',
			},
		],
	},
];

export const contactNoteOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contactNote'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a note for a contact',
				action: 'Create contact note',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a note',
				action: 'Delete contact note',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all notes for a contact',
				action: 'Get all contact notes',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a note',
				action: 'Update contact note',
			},
		],
		default: 'getAll',
	},
];

export const contactNoteFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactNote'],
			},
		},
		default: '',
		description: 'The ID of the contact',
	},
	{
		displayName: 'Note ID',
		name: 'noteId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactNote'],
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
				resource: ['contactNote'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The note content',
	},
	{
		displayName: 'Note Type',
		name: 'noteType',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['contactNote'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Type of note',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contactNote'],
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
			{
				displayName: 'Note Type',
				name: 'noteType',
				type: 'string',
				default: '',
				description: 'Type of note',
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['contactNote'],
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
				resource: ['contactNote'],
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

export const contactCommunicationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contactCommunication'],
			},
		},
		options: [
			{
				name: 'Create SMS Log',
				value: 'createSmsLog',
				description: 'Create an SMS log entry',
				action: 'Create SMS log',
			},
			{
				name: 'Get SMS Records',
				value: 'getSmsRecords',
				description: 'Get SMS records for a contact',
				action: 'Get SMS records',
			},
			{
				name: 'Send Email',
				value: 'sendEmail',
				description: 'Send an email to a contact',
				action: 'Send email to contact',
			},
			{
				name: 'Send External Form Request',
				value: 'sendExternalFormRequest',
				description: 'Send an external form request',
				action: 'Send external form request',
			},
			{
				name: 'Send SMS',
				value: 'sendSms',
				description: 'Send an SMS to a contact',
				action: 'Send SMS to contact',
			},
		],
		default: 'sendEmail',
	},
];

export const contactCommunicationFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactCommunication'],
			},
		},
		default: '',
		description: 'The ID of the contact',
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactCommunication'],
				operation: ['sendEmail'],
			},
		},
		default: '',
		description: 'Email subject',
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'string',
		typeOptions: {
			rows: 6,
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['contactCommunication'],
				operation: ['sendEmail'],
			},
		},
		default: '',
		description: 'Email body content',
	},
	{
		displayName: 'Template ID',
		name: 'templateId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['contactCommunication'],
				operation: ['sendEmail'],
			},
		},
		default: '',
		description: 'Email template ID (optional)',
	},
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactCommunication'],
				operation: ['sendSms', 'createSmsLog'],
			},
		},
		default: '',
		description: 'SMS message content',
	},
	{
		displayName: 'Form ID',
		name: 'formId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactCommunication'],
				operation: ['sendExternalFormRequest'],
			},
		},
		default: '',
		description: 'External form ID',
	},
	{
		displayName: 'Direction',
		name: 'direction',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactCommunication'],
				operation: ['createSmsLog'],
			},
		},
		options: [
			{ name: 'Inbound', value: 'inbound' },
			{ name: 'Outbound', value: 'outbound' },
		],
		default: 'outbound',
		description: 'Direction of the SMS message',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contactCommunication'],
				operation: ['sendEmail', 'sendSms', 'sendExternalFormRequest'],
			},
		},
		options: [
			{
				displayName: 'CC',
				name: 'cc',
				type: 'string',
				default: '',
				description: 'CC recipients (comma-separated)',
			},
			{
				displayName: 'Phone Number',
				name: 'phoneNumber',
				type: 'string',
				default: '',
				description: 'Override phone number to send to',
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['contactCommunication'],
				operation: ['getSmsRecords'],
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
				resource: ['contactCommunication'],
				operation: ['getSmsRecords'],
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

export const contactCreditOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contactCredit'],
			},
		},
		options: [
			{
				name: 'Get Last Report',
				value: 'getLastReport',
				description: 'Get the last credit report for a contact',
				action: 'Get last credit report',
			},
			{
				name: 'Pull Credit',
				value: 'pullCredit',
				description: 'Pull a new credit report for a contact',
				action: 'Pull credit report',
			},
		],
		default: 'getLastReport',
	},
];

export const contactCreditFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactCredit'],
			},
		},
		default: '',
		description: 'The ID of the contact',
	},
	{
		displayName: 'Bureau',
		name: 'bureau',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['contactCredit'],
				operation: ['pullCredit'],
			},
		},
		options: [
			{
				name: 'Equifax',
				value: 'equifax',
			},
			{
				name: 'Experian',
				value: 'experian',
			},
			{
				name: 'TransUnion',
				value: 'transunion',
			},
		],
		default: 'equifax',
		description: 'Credit bureau to pull from',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contactCredit'],
				operation: ['pullCredit'],
			},
		},
		options: [
			{
				displayName: 'Refresh',
				name: 'refresh',
				type: 'boolean',
				default: false,
				description: 'Whether to refresh an existing report',
			},
		],
	},
];

export const contactDocumentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contactDocument'],
			},
		},
		options: [
			{
				name: 'Create/Upload',
				value: 'create',
				description: 'Upload a document for a contact',
				action: 'Upload contact document',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a document',
				action: 'Delete contact document',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a document',
				action: 'Get contact document',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all documents for a contact',
				action: 'Get all contact documents',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a document',
				action: 'Update contact document',
			},
		],
		default: 'getAll',
	},
];

export const contactDocumentFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactDocument'],
			},
		},
		default: '',
		description: 'The ID of the contact',
	},
	{
		displayName: 'Document ID',
		name: 'documentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactDocument'],
				operation: ['get', 'delete', 'update'],
			},
		},
		default: '',
		description: 'The ID of the document',
	},
	{
		displayName: 'Binary Property',
		name: 'binaryPropertyName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactDocument'],
				operation: ['create'],
			},
		},
		default: 'data',
		description: 'Name of the binary property containing the file to upload',
	},
	{
		displayName: 'Document Type',
		name: 'documentType',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['contactDocument'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Type of document',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contactDocument'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Document description',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Document name',
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
				resource: ['contactDocument'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Document description',
			},
			{
				displayName: 'Document Type',
				name: 'documentType',
				type: 'string',
				default: '',
				description: 'Type of document',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Document name',
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['contactDocument'],
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
				resource: ['contactDocument'],
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

export const contactDebtOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contactDebt'],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all debts for a contact',
				action: 'Get all contact debts',
			},
			{
				name: 'Get Enrolled',
				value: 'getEnrolled',
				description: 'Get enrolled debts for a contact',
				action: 'Get enrolled contact debts',
			},
			{
				name: 'Get Settled',
				value: 'getSettled',
				description: 'Get settled debts for a contact',
				action: 'Get settled contact debts',
			},
			{
				name: 'Get Unenrolled',
				value: 'getUnenrolled',
				description: 'Get unenrolled debts for a contact',
				action: 'Get unenrolled contact debts',
			},
			{
				name: 'Get Unsettled',
				value: 'getUnsettled',
				description: 'Get unsettled debts for a contact',
				action: 'Get unsettled contact debts',
			},
		],
		default: 'getAll',
	},
];

export const contactDebtFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactDebt'],
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
				resource: ['contactDebt'],
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
				resource: ['contactDebt'],
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

export const contactWorkflowOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contactWorkflow'],
			},
		},
		options: [
			{
				name: 'Get Status & History',
				value: 'getStatusHistory',
				description: 'Get workflow status and history for a contact',
				action: 'Get contact workflow status and history',
			},
			{
				name: 'List All Stages',
				value: 'listStages',
				description: 'List all workflow stages',
				action: 'List all workflow stages',
			},
			{
				name: 'List All Statuses',
				value: 'listStatuses',
				description: 'List all workflow statuses',
				action: 'List all workflow statuses',
			},
			{
				name: 'Update Status',
				value: 'updateStatus',
				description: 'Update workflow status for a contact',
				action: 'Update contact workflow status',
			},
		],
		default: 'getStatusHistory',
	},
];

export const contactWorkflowFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactWorkflow'],
				operation: ['getStatusHistory', 'updateStatus'],
			},
		},
		default: '',
		description: 'The ID of the contact',
	},
	{
		displayName: 'Status ID',
		name: 'statusId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactWorkflow'],
				operation: ['updateStatus'],
			},
		},
		default: '',
		description: 'The new status ID to set',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contactWorkflow'],
				operation: ['updateStatus'],
			},
		},
		options: [
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
				description: 'Note for status change',
			},
			{
				displayName: 'Reason',
				name: 'reason',
				type: 'string',
				default: '',
				description: 'Reason for status change',
			},
		],
	},
];

export const contactBankingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contactBanking'],
			},
		},
		options: [
			{
				name: 'Create Account',
				value: 'create',
				description: 'Create a bank account for a contact',
				action: 'Create contact bank account',
			},
			{
				name: 'Get Account',
				value: 'get',
				description: 'Get a bank account',
				action: 'Get contact bank account',
			},
			{
				name: 'Get Account Details',
				value: 'getDetails',
				description: 'Get bank account details for a contact',
				action: 'Get contact bank account details',
			},
			{
				name: 'Update Account',
				value: 'update',
				description: 'Update a bank account',
				action: 'Update contact bank account',
			},
		],
		default: 'getDetails',
	},
];

export const contactBankingFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactBanking'],
			},
		},
		default: '',
		description: 'The ID of the contact',
	},
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactBanking'],
				operation: ['get', 'update'],
			},
		},
		default: '',
		description: 'The ID of the bank account',
	},
	{
		displayName: 'Account Number',
		name: 'accountNumber',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactBanking'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Bank account number',
	},
	{
		displayName: 'Routing Number',
		name: 'routingNumber',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactBanking'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Bank routing number',
	},
	{
		displayName: 'Account Type',
		name: 'accountType',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['contactBanking'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Checking',
				value: 'checking',
			},
			{
				name: 'Savings',
				value: 'savings',
			},
		],
		default: 'checking',
		description: 'Type of bank account',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contactBanking'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Account Holder Name',
				name: 'accountHolderName',
				type: 'string',
				default: '',
				description: 'Name on the account',
			},
			{
				displayName: 'Bank Name',
				name: 'bankName',
				type: 'string',
				default: '',
				description: 'Name of the bank',
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
				resource: ['contactBanking'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Account Holder Name',
				name: 'accountHolderName',
				type: 'string',
				default: '',
				description: 'Name on the account',
			},
			{
				displayName: 'Account Number',
				name: 'accountNumber',
				type: 'string',
				default: '',
				description: 'Bank account number',
			},
			{
				displayName: 'Account Type',
				name: 'accountType',
				type: 'options',
				options: [
					{
						name: 'Checking',
						value: 'checking',
					},
					{
						name: 'Savings',
						value: 'savings',
					},
				],
				default: 'checking',
				description: 'Type of bank account',
			},
			{
				displayName: 'Bank Name',
				name: 'bankName',
				type: 'string',
				default: '',
				description: 'Name of the bank',
			},
			{
				displayName: 'Routing Number',
				name: 'routingNumber',
				type: 'string',
				default: '',
				description: 'Bank routing number',
			},
		],
	},
];
