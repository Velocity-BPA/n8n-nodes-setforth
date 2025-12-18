"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clixsignFields = exports.clixsignOperations = void 0;
exports.clixsignOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['clixsign'],
            },
        },
        options: [
            {
                name: 'Create Signing Request',
                value: 'createSigningRequest',
                description: 'Create an e-signature request',
                action: 'Create signing request',
            },
        ],
        default: 'createSigningRequest',
    },
];
exports.clixsignFields = [
    {
        displayName: 'Contact ID',
        name: 'contactId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['clixsign'],
                operation: ['createSigningRequest'],
            },
        },
        default: '',
        description: 'The ID of the contact',
    },
    {
        displayName: 'Document IDs',
        name: 'documentIds',
        type: 'string',
        typeOptions: {
            multipleValues: true,
        },
        required: true,
        displayOptions: {
            show: {
                resource: ['clixsign'],
                operation: ['createSigningRequest'],
            },
        },
        default: [],
        description: 'IDs of documents to be signed',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['clixsign'],
                operation: ['createSigningRequest'],
            },
        },
        options: [
            {
                displayName: 'Callback URL',
                name: 'callbackUrl',
                type: 'string',
                default: '',
                description: 'URL to receive webhook callback when signing is complete',
            },
            {
                displayName: 'Redirect URL',
                name: 'redirectUrl',
                type: 'string',
                default: '',
                description: 'URL to redirect the signer to after signing',
            },
            {
                displayName: 'Signer Email',
                name: 'signerEmail',
                type: 'string',
                default: '',
                description: 'Email address of the signer (if different from contact)',
            },
            {
                displayName: 'Signer Name',
                name: 'signerName',
                type: 'string',
                default: '',
                description: 'Name of the signer (if different from contact)',
            },
        ],
    },
];
//# sourceMappingURL=ClixsignDescription.js.map