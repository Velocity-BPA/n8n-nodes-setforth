"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callFields = exports.callOperations = void 0;
exports.callOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['call'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a call record',
                action: 'Create call',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a call record',
                action: 'Delete call',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a call record',
                action: 'Get call',
            },
            {
                name: 'Get Dispositions',
                value: 'getDispositions',
                description: 'Get all call dispositions',
                action: 'Get call dispositions',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a call record',
                action: 'Update call',
            },
        ],
        default: 'get',
    },
];
exports.callFields = [
    {
        displayName: 'Call ID',
        name: 'callId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['call'],
                operation: ['get', 'delete', 'update'],
            },
        },
        default: '',
        description: 'The ID of the call',
    },
    {
        displayName: 'Contact ID',
        name: 'contactId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['call'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'The ID of the contact',
    },
    {
        displayName: 'Direction',
        name: 'direction',
        type: 'options',
        required: true,
        displayOptions: {
            show: {
                resource: ['call'],
                operation: ['create'],
            },
        },
        options: [
            {
                name: 'Inbound',
                value: 'inbound',
            },
            {
                name: 'Outbound',
                value: 'outbound',
            },
        ],
        default: 'outbound',
        description: 'Direction of the call',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['call'],
                operation: ['create'],
            },
        },
        options: [
            {
                displayName: 'Disposition ID',
                name: 'dispositionId',
                type: 'string',
                default: '',
                description: 'Call disposition ID',
            },
            {
                displayName: 'Duration (Seconds)',
                name: 'durationSeconds',
                type: 'number',
                default: 0,
                description: 'Call duration in seconds',
            },
            {
                displayName: 'Notes',
                name: 'notes',
                type: 'string',
                typeOptions: {
                    rows: 4,
                },
                default: '',
                description: 'Notes about the call',
            },
            {
                displayName: 'Phone Number',
                name: 'phoneNumber',
                type: 'string',
                default: '',
                description: 'Phone number for the call',
            },
            {
                displayName: 'Recording URL',
                name: 'recordingUrl',
                type: 'string',
                default: '',
                description: 'URL of the call recording',
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
                resource: ['call'],
                operation: ['update'],
            },
        },
        options: [
            {
                displayName: 'Disposition ID',
                name: 'dispositionId',
                type: 'string',
                default: '',
                description: 'Call disposition ID',
            },
            {
                displayName: 'Duration (Seconds)',
                name: 'durationSeconds',
                type: 'number',
                default: 0,
                description: 'Call duration in seconds',
            },
            {
                displayName: 'Notes',
                name: 'notes',
                type: 'string',
                typeOptions: {
                    rows: 4,
                },
                default: '',
                description: 'Notes about the call',
            },
        ],
    },
];
//# sourceMappingURL=CallDescription.js.map