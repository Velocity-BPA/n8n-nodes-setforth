"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creditorFields = exports.creditorOperations = void 0;
exports.creditorOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['creditor'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a creditor',
                action: 'Create creditor',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a creditor',
                action: 'Get creditor',
            },
        ],
        default: 'get',
    },
];
exports.creditorFields = [
    {
        displayName: 'Creditor ID',
        name: 'creditorId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['creditor'],
                operation: ['get'],
            },
        },
        default: '',
        description: 'The ID of the creditor',
    },
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['creditor'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'Creditor name',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['creditor'],
                operation: ['create'],
            },
        },
        options: [
            {
                displayName: 'Address',
                name: 'address',
                type: 'string',
                default: '',
                description: 'Creditor address',
            },
            {
                displayName: 'Email',
                name: 'email',
                type: 'string',
                default: '',
                description: 'Creditor email',
            },
            {
                displayName: 'Fax',
                name: 'fax',
                type: 'string',
                default: '',
                description: 'Creditor fax number',
            },
            {
                displayName: 'Phone',
                name: 'phone',
                type: 'string',
                default: '',
                description: 'Creditor phone number',
            },
        ],
    },
];
//# sourceMappingURL=CreditorDescription.js.map