"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskFields = exports.taskOperations = void 0;
exports.taskOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['task'],
            },
        },
        options: [
            {
                name: 'Complete',
                value: 'complete',
                description: 'Mark a task as complete',
                action: 'Complete task',
            },
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new task',
                action: 'Create task',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a task',
                action: 'Delete task',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a task',
                action: 'Get task',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a task',
                action: 'Update task',
            },
        ],
        default: 'get',
    },
];
exports.taskFields = [
    {
        displayName: 'Task ID',
        name: 'taskId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['task'],
                operation: ['get', 'delete', 'update', 'complete'],
            },
        },
        default: '',
        description: 'The ID of the task',
    },
    {
        displayName: 'Title',
        name: 'title',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['task'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'Task title',
    },
    {
        displayName: 'Due Date',
        name: 'dueDate',
        type: 'dateTime',
        required: true,
        displayOptions: {
            show: {
                resource: ['task'],
                operation: ['create'],
            },
        },
        default: '',
        description: 'Task due date',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['task'],
                operation: ['create'],
            },
        },
        options: [
            {
                displayName: 'Assigned User ID',
                name: 'assignedUserId',
                type: 'string',
                default: '',
                description: 'ID of the user to assign the task to',
            },
            {
                displayName: 'Contact ID',
                name: 'contactId',
                type: 'string',
                default: '',
                description: 'ID of the related contact',
            },
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                typeOptions: {
                    rows: 4,
                },
                default: '',
                description: 'Task description',
            },
            {
                displayName: 'Priority',
                name: 'priority',
                type: 'options',
                options: [
                    { name: 'Low', value: 'low' },
                    { name: 'Medium', value: 'medium' },
                    { name: 'High', value: 'high' },
                ],
                default: 'medium',
                description: 'Task priority',
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
                resource: ['task'],
                operation: ['update'],
            },
        },
        options: [
            {
                displayName: 'Assigned User ID',
                name: 'assignedUserId',
                type: 'string',
                default: '',
                description: 'ID of the user to assign the task to',
            },
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                typeOptions: {
                    rows: 4,
                },
                default: '',
                description: 'Task description',
            },
            {
                displayName: 'Due Date',
                name: 'dueDate',
                type: 'dateTime',
                default: '',
                description: 'Task due date',
            },
            {
                displayName: 'Priority',
                name: 'priority',
                type: 'options',
                options: [
                    { name: 'Low', value: 'low' },
                    { name: 'Medium', value: 'medium' },
                    { name: 'High', value: 'high' },
                ],
                default: 'medium',
                description: 'Task priority',
            },
            {
                displayName: 'Status',
                name: 'status',
                type: 'options',
                options: [
                    { name: 'Pending', value: 'pending' },
                    { name: 'In Progress', value: 'in_progress' },
                    { name: 'Completed', value: 'completed' },
                ],
                default: 'pending',
                description: 'Task status',
            },
            {
                displayName: 'Title',
                name: 'title',
                type: 'string',
                default: '',
                description: 'Task title',
            },
        ],
    },
];
//# sourceMappingURL=TaskDescription.js.map