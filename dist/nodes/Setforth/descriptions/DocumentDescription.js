"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentPackageFields = exports.documentPackageOperations = exports.documentFields = exports.documentOperations = void 0;
exports.documentOperations = [
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
exports.documentFields = [
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
exports.documentPackageOperations = [
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
exports.documentPackageFields = [
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
//# sourceMappingURL=DocumentDescription.js.map