"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrollmentFields = exports.enrollmentOperations = void 0;
exports.enrollmentOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['enrollment'],
            },
        },
        options: [
            {
                name: 'Add Program Sponsor',
                value: 'addProgramSponsor',
                description: 'Add a program sponsor to enrollment',
                action: 'Add program sponsor',
            },
            {
                name: 'Approve',
                value: 'approve',
                description: 'Approve an enrollment',
                action: 'Approve enrollment',
            },
            {
                name: 'Create Plans',
                value: 'createPlans',
                description: 'Create enrollment plans',
                action: 'Create enrollment plans',
            },
            {
                name: 'Delete Plans',
                value: 'deletePlans',
                description: 'Delete enrollment plans',
                action: 'Delete enrollment plans',
            },
            {
                name: 'Enroll Contact',
                value: 'enrollContact',
                description: 'Enroll a contact in a program',
                action: 'Enroll contact',
            },
            {
                name: 'Get Details',
                value: 'getDetails',
                description: 'Get enrollment details',
                action: 'Get enrollment details',
            },
            {
                name: 'Get Gateway Balance',
                value: 'getGatewayBalance',
                description: 'Get gateway balance for enrollment',
                action: 'Get gateway balance',
            },
            {
                name: 'Pause',
                value: 'pause',
                description: 'Pause enrollment payments',
                action: 'Pause enrollment',
            },
            {
                name: 'Resume Payments',
                value: 'resumePayments',
                description: 'Resume enrollment payments',
                action: 'Resume enrollment payments',
            },
            {
                name: 'Return Contact',
                value: 'returnContact',
                description: 'Return a contact from enrollment',
                action: 'Return contact',
            },
            {
                name: 'Return Plans',
                value: 'returnPlans',
                description: 'Return enrollment plans',
                action: 'Return enrollment plans',
            },
            {
                name: 'Submit',
                value: 'submit',
                description: 'Submit enrollment for approval',
                action: 'Submit enrollment',
            },
            {
                name: 'Unassign Plan',
                value: 'unassignPlan',
                description: 'Unassign a plan from enrollment',
                action: 'Unassign plan',
            },
            {
                name: 'Update Plans',
                value: 'updatePlans',
                description: 'Update enrollment plans',
                action: 'Update enrollment plans',
            },
            {
                name: 'Upload Gateway Auth',
                value: 'uploadGatewayAuth',
                description: 'Upload gateway authorization document',
                action: 'Upload gateway auth',
            },
        ],
        default: 'getDetails',
    },
];
exports.enrollmentFields = [
    {
        displayName: 'Contact ID',
        name: 'contactId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['enrollment'],
            },
        },
        default: '',
        description: 'The ID of the contact',
    },
    {
        displayName: 'Plans',
        name: 'plans',
        type: 'fixedCollection',
        typeOptions: {
            multipleValues: true,
        },
        displayOptions: {
            show: {
                resource: ['enrollment'],
                operation: ['createPlans', 'updatePlans'],
            },
        },
        default: {},
        options: [
            {
                name: 'planValues',
                displayName: 'Plan',
                values: [
                    {
                        displayName: 'Debt ID',
                        name: 'debtId',
                        type: 'string',
                        default: '',
                        description: 'The ID of the debt',
                    },
                    {
                        displayName: 'Monthly Payment',
                        name: 'monthlyPayment',
                        type: 'number',
                        typeOptions: {
                            numberPrecision: 2,
                        },
                        default: 0,
                        description: 'Monthly payment amount',
                    },
                    {
                        displayName: 'Term Months',
                        name: 'termMonths',
                        type: 'number',
                        default: 0,
                        description: 'Number of months for the plan',
                    },
                ],
            },
        ],
        description: 'Enrollment plans to create or update',
    },
    {
        displayName: 'Plan IDs',
        name: 'planIds',
        type: 'string',
        typeOptions: {
            multipleValues: true,
        },
        displayOptions: {
            show: {
                resource: ['enrollment'],
                operation: ['deletePlans', 'returnPlans'],
            },
        },
        default: [],
        description: 'IDs of plans to delete or return',
    },
    {
        displayName: 'Plan ID',
        name: 'planId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['enrollment'],
                operation: ['unassignPlan'],
            },
        },
        default: '',
        description: 'The ID of the plan to unassign',
    },
    {
        displayName: 'Sponsor ID',
        name: 'sponsorId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['enrollment'],
                operation: ['addProgramSponsor'],
            },
        },
        default: '',
        description: 'The ID of the program sponsor',
    },
    {
        displayName: 'Binary Property',
        name: 'binaryPropertyName',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['enrollment'],
                operation: ['uploadGatewayAuth'],
            },
        },
        default: 'data',
        description: 'Name of the binary property containing the authorization document',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['enrollment'],
                operation: ['enrollContact', 'returnContact', 'pause'],
            },
        },
        options: [
            {
                displayName: 'Notes',
                name: 'notes',
                type: 'string',
                typeOptions: {
                    rows: 4,
                },
                default: '',
                description: 'Notes for the operation',
            },
            {
                displayName: 'Reason',
                name: 'reason',
                type: 'string',
                default: '',
                description: 'Reason for the operation',
            },
        ],
    },
];
//# sourceMappingURL=EnrollmentDescription.js.map