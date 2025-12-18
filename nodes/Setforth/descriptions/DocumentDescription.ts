import type { INodeProperties } from 'n8n-workflow';

export const documentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['document'],
			},
		},
		options: [
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a document',
				action: 'Delete document',
			},
			{
				name: 'Generate',
				value: 'generate',
				description: 'Generate a document from a template',
				action: 'Generate document',
			},
		],
		default: 'generate',
	},
];

export const documentFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['generate'],
			},
		},
		default: '',
		description: 'The ID of the contact',
	},
	{
		displayName: 'Template ID',
		name: 'templateId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['generate'],
			},
		},
		default: '',
		description: 'The ID of the document template',
	},
	{
		displayName: 'Document ID',
		name: 'documentId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'The ID of the document to delete',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['generate'],
			},
		},
		options: [
			{
				displayName: 'Custom Fields',
				name: 'customFields',
				type: 'json',
				default: '{}',
				description: 'JSON object with custom field values for the template',
			},
			{
				displayName: 'Document Name',
				name: 'documentName',
				type: 'string',
				default: '',
				description: 'Custom name for the generated document',
			},
		],
	},
];

export const documentPackageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['documentPackage'],
			},
		},
		options: [
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a document package',
				action: 'Delete document package',
			},
			{
				name: 'Generate',
				value: 'generate',
				description: 'Generate a document package from a template',
				action: 'Generate document package',
			},
		],
		default: 'generate',
	},
];

export const documentPackageFields: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['documentPackage'],
				operation: ['generate'],
			},
		},
		default: '',
		description: 'The ID of the contact',
	},
	{
		displayName: 'Package Template ID',
		name: 'packageTemplateId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['documentPackage'],
				operation: ['generate'],
			},
		},
		default: '',
		description: 'The ID of the document package template',
	},
	{
		displayName: 'Package ID',
		name: 'packageId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['documentPackage'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'The ID of the document package to delete',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['documentPackage'],
				operation: ['generate'],
			},
		},
		options: [
			{
				displayName: 'Custom Fields',
				name: 'customFields',
				type: 'json',
				default: '{}',
				description: 'JSON object with custom field values for the package',
			},
		],
	},
];
