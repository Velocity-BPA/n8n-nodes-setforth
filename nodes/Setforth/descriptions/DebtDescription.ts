/*
 * Copyright (c) Velocity BPA, LLC
 * Licensed under the Business Source License 1.1
 * Commercial use requires a separate commercial license.
 * See LICENSE file for details.
 */

import type { INodeProperties } from 'n8n-workflow';

export const debtOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['debt'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new debt',
				action: 'Create a debt',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a debt',
				action: 'Delete a debt',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a debt by ID',
				action: 'Get a debt',
			},
			{
				name: 'Get Documents',
				value: 'getDocuments',
				description: 'Get documents for a debt',
				action: 'Get debt documents',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a debt',
				action: 'Update a debt',
			},
			{
				name: 'Update Type',
				value: 'updateType',
				description: 'Update debt type',
				action: 'Update debt type',
			},
		],
		default: 'create',
	},
];

export const debtFields: INodeProperties[] = [
	// Create operation fields
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The ID of the contact this debt belongs to',
	},
	{
		displayName: 'Creditor Name',
		name: 'creditorName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name of the creditor',
	},
	{
		displayName: 'Original Balance',
		name: 'originalBalance',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Original balance of the debt',
	},
	{
		displayName: 'Current Balance',
		name: 'currentBalance',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Current balance of the debt',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Account Number',
				name: 'account_number',
				type: 'string',
				default: '',
				description: 'Account number for the debt',
			},
			{
				displayName: 'Debt Type',
				name: 'debt_type',
				type: 'string',
				default: '',
				description: 'Type of debt (e.g., Credit Card, Medical)',
			},
			{
				displayName: 'Interest Rate',
				name: 'interest_rate',
				type: 'number',
				default: 0,
				description: 'Interest rate percentage',
			},
			{
				displayName: 'Minimum Payment',
				name: 'minimum_payment',
				type: 'number',
				default: 0,
				description: 'Minimum monthly payment',
			},
			{
				displayName: 'Last Payment Date',
				name: 'last_payment_date',
				type: 'dateTime',
				default: '',
				description: 'Date of last payment',
			},
			{
				displayName: 'Last Payment Amount',
				name: 'last_payment_amount',
				type: 'number',
				default: 0,
				description: 'Amount of last payment',
			},
		],
	},
	// Get/Delete/Update operation fields
	{
		displayName: 'Debt ID',
		name: 'debtId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['get', 'update', 'delete', 'getDocuments', 'updateType'],
			},
		},
		default: '',
		description: 'The ID of the debt',
	},
	// Update operation fields
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Current Balance',
				name: 'current_balance',
				type: 'number',
				default: 0,
				description: 'Current balance of the debt',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Status of the debt',
			},
			{
				displayName: 'Creditor Name',
				name: 'creditor_name',
				type: 'string',
				default: '',
				description: 'Name of the creditor',
			},
			{
				displayName: 'Account Number',
				name: 'account_number',
				type: 'string',
				default: '',
				description: 'Account number',
			},
		],
	},
	// Update Type fields
	{
		displayName: 'New Type',
		name: 'newType',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['debt'],
				operation: ['updateType'],
			},
		},
		default: '',
		description: 'The new debt type',
	},
];
