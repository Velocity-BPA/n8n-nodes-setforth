"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminUserFields = exports.adminUserOperations = exports.teamFields = exports.teamOperations = void 0;
exports.teamOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['team'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a team',
                action: 'Create team',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a team',
                action: 'Delete team',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a team',
                action: 'Get team',
            },
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all teams',
                action: 'Get all teams',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a team',
                action: 'Update team',
            },
        ],
        default: 'getAll',
    },
];
exports.teamFields = [
    {
        displayName: 'Team ID',
        name: 'teamId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['team'],
                operation: ['get', 'delete', 'update'],
            },
        },
        default: '',
        description: 'The ID of the team',
    },
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['team'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'Team name',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['team'],
                operation: ['create'],
            },
        },
        options: [
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                default: '',
                description: 'Team description',
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
                resource: ['team'],
                operation: ['update'],
            },
        },
        options: [
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                default: '',
                description: 'Team description',
            },
            {
                displayName: 'Name',
                name: 'name',
                type: 'string',
                default: '',
                description: 'Team name',
            },
        ],
    },
];
exports.adminUserOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['adminUser'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a user',
                action: 'Create admin user',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a user',
                action: 'Delete admin user',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a user',
                action: 'Get admin user',
            },
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all users',
                action: 'Get all admin users',
            },
            {
                name: 'Get Settings',
                value: 'getSettings',
                description: 'Get user settings',
                action: 'Get user settings',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a user',
                action: 'Update admin user',
            },
            {
                name: 'Update Settings',
                value: 'updateSettings',
                description: 'Update user settings',
                action: 'Update user settings',
            },
        ],
        default: 'getAll',
    },
];
exports.adminUserFields = [
    {
        displayName: 'User ID',
        name: 'userId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['adminUser'],
                operation: ['get', 'delete', 'update', 'getSettings', 'updateSettings'],
            },
        },
        default: '',
        description: 'The ID of the user',
    },
    {
        displayName: 'Email',
        name: 'email',
        type: 'string',
        placeholder: 'name@email.com',
        required: true,
        displayOptions: {
            show: {
                resource: ['adminUser'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'User email address',
    },
    {
        displayName: 'First Name',
        name: 'firstName',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['adminUser'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'User first name',
    },
    {
        displayName: 'Last Name',
        name: 'lastName',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['adminUser'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'User last name',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['adminUser'],
                operation: ['create'],
            },
        },
        options: [
            {
                displayName: 'Role',
                name: 'role',
                type: 'string',
                default: '',
                description: 'User role',
            },
            {
                displayName: 'Team ID',
                name: 'teamId',
                type: 'string',
                default: '',
                description: 'ID of the team to assign user to',
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
                resource: ['adminUser'],
                operation: ['update'],
            },
        },
        options: [
            {
                displayName: 'Email',
                name: 'email',
                type: 'string',
                default: '',
                description: 'User email address',
            },
            {
                displayName: 'First Name',
                name: 'firstName',
                type: 'string',
                default: '',
                description: 'User first name',
            },
            {
                displayName: 'Last Name',
                name: 'lastName',
                type: 'string',
                default: '',
                description: 'User last name',
            },
            {
                displayName: 'Role',
                name: 'role',
                type: 'string',
                default: '',
                description: 'User role',
            },
            {
                displayName: 'Team ID',
                name: 'teamId',
                type: 'string',
                default: '',
                description: 'ID of the team to assign user to',
            },
        ],
    },
    {
        displayName: 'Settings',
        name: 'settings',
        type: 'json',
        displayOptions: {
            show: {
                resource: ['adminUser'],
                operation: ['updateSettings'],
            },
        },
        default: '{}',
        description: 'JSON object containing settings to update',
    },
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: ['adminUser'],
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
                resource: ['adminUser'],
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
//# sourceMappingURL=AdministrationDescription.js.map