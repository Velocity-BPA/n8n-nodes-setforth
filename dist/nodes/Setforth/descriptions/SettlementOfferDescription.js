"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settlementOfferFields = exports.settlementOfferOperations = void 0;
exports.settlementOfferOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['settlementOffer'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a settlement offer',
                action: 'Create settlement offer',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a settlement offer',
                action: 'Delete settlement offer',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a settlement offer',
                action: 'Get settlement offer',
            },
            {
                name: 'Get All Statuses',
                value: 'getAllStatuses',
                description: 'Get all settlement offer statuses',
                action: 'Get all settlement statuses',
            },
            {
                name: 'Get Offers on Debt',
                value: 'getOffersOnDebt',
                description: 'Get all settlement offers for a debt',
                action: 'Get offers on debt',
            },
            {
                name: 'Get Status Workflow',
                value: 'getStatusWorkflow',
                description: 'Get the settlement status workflow',
                action: 'Get status workflow',
            },
            {
                name: 'Get Transaction Data',
                value: 'getTransactionData',
                description: 'Get transaction data for a completed offer',
                action: 'Get transaction data',
            },
            {
                name: 'Void',
                value: 'void',
                description: 'Void a settlement offer',
                action: 'Void settlement offer',
            },
        ],
        default: 'get',
    },
];
exports.settlementOfferFields = [
    {
        displayName: 'Offer ID',
        name: 'offerId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['settlementOffer'],
                operation: ['get', 'delete', 'void', 'getTransactionData'],
            },
        },
        default: '',
        description: 'The ID of the settlement offer',
    },
    {
        displayName: 'Debt ID',
        name: 'debtId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['settlementOffer'],
                operation: ['create', 'getOffersOnDebt'],
            },
        },
        default: '',
        description: 'The ID of the debt',
    },
    {
        displayName: 'Settlement Amount',
        name: 'settlementAmount',
        type: 'number',
        typeOptions: {
            numberPrecision: 2,
        },
        required: true,
        displayOptions: {
            show: {
                resource: ['settlementOffer'],
                operation: ['create'],
            },
        },
        default: 0,
        description: 'Settlement amount offered',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['settlementOffer'],
                operation: ['create'],
            },
        },
        options: [
            {
                displayName: 'Expiration Date',
                name: 'expirationDate',
                type: 'dateTime',
                default: '',
                description: 'Date when the offer expires',
            },
            {
                displayName: 'Notes',
                name: 'notes',
                type: 'string',
                typeOptions: {
                    rows: 4,
                },
                default: '',
                description: 'Notes about the settlement offer',
            },
            {
                displayName: 'Payment Schedule',
                name: 'paymentSchedule',
                type: 'json',
                default: '[]',
                description: 'JSON array of payment schedule entries',
            },
            {
                displayName: 'Settlement Percentage',
                name: 'settlementPercentage',
                type: 'number',
                typeOptions: {
                    numberPrecision: 2,
                },
                default: 0,
                description: 'Settlement percentage of original debt',
            },
        ],
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['settlementOffer'],
                operation: ['void'],
            },
        },
        options: [
            {
                displayName: 'Reason',
                name: 'reason',
                type: 'string',
                default: '',
                description: 'Reason for voiding the offer',
            },
        ],
    },
];
//# sourceMappingURL=SettlementOfferDescription.js.map