"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentPackageTemplateFields = exports.documentPackageTemplateOperations = exports.documentTemplateFields = exports.documentTemplateOperations = exports.documentTypeFields = exports.documentTypeOperations = exports.contentConfigFields = exports.contentConfigOperations = void 0;
exports.contentConfigOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['contentConfig'],
            },
        },
        options: [
            {
                name: 'Get All Contact Fields',
                value: 'getAllContactFields',
                description: 'Get all contact fields configuration',
                action: 'Get all contact fields',
            },
            {
                name: 'Get Debt Statuses',
                value: 'getDebtStatuses',
                description: 'Get all debt statuses',
                action: 'Get debt statuses',
            },
            {
                name: 'Get Debt Types',
                value: 'getDebtTypes',
                description: 'Get all debt types',
                action: 'Get debt types',
            },
            {
                name: 'Get Note Types',
                value: 'getNoteTypes',
                description: 'Get contact note types',
                action: 'Get note types',
            },
            {
                name: 'Update Debt Status',
                value: 'updateDebtStatus',
                description: 'Update a debt status',
                action: 'Update debt status',
            },
        ],
        default: 'getAllContactFields',
    },
];
exports.contentConfigFields = [
    {
        displayName: 'Status ID',
        name: 'statusId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['contentConfig'],
                operation: ['updateDebtStatus'],
            },
        },
        default: '',
        description: 'The ID of the debt status',
    },
    {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['contentConfig'],
                operation: ['updateDebtStatus'],
            },
        },
        options: [
            {
                displayName: 'Active',
                name: 'active',
                type: 'boolean',
                default: true,
                description: 'Whether the status is active',
            },
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                default: '',
                description: 'Status description',
            },
            {
                displayName: 'Name',
                name: 'name',
                type: 'string',
                default: '',
                description: 'Status name',
            },
        ],
    },
];
exports.documentTypeOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['documentType'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a document type',
                action: 'Create document type',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a document type',
                action: 'Delete document type',
            },
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all document types',
                action: 'Get all document types',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a document type',
                action: 'Update document type',
            },
        ],
        default: 'getAll',
    },
];
exports.documentTypeFields = [
    {
        displayName: 'Type ID',
        name: 'typeId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['documentType'],
                operation: ['delete', 'update'],
            },
        },
        default: '',
        description: 'The ID of the document type',
    },
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['documentType'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'Document type name',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['documentType'],
                operation: ['create'],
            },
        },
        options: [
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                default: '',
                description: 'Document type description',
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
                resource: ['documentType'],
                operation: ['update'],
            },
        },
        options: [
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                default: '',
                description: 'Document type description',
            },
            {
                displayName: 'Name',
                name: 'name',
                type: 'string',
                default: '',
                description: 'Document type name',
            },
        ],
    },
];
exports.documentTemplateOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['documentTemplate'],
            },
        },
        options: [
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all document templates',
                action: 'Get all document templates',
            },
        ],
        default: 'getAll',
    },
];
exports.documentTemplateFields = [];
exports.documentPackageTemplateOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['documentPackageTemplate'],
            },
        },
        options: [
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all document package templates',
                action: 'Get all document package templates',
            },
        ],
        default: 'getAll',
    },
];
exports.documentPackageTemplateFields = [];
//# sourceMappingURL=ConfigurationDescription.js.map