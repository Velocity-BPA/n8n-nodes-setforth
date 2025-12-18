import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	setforthApiRequest,
	setforthApiRequestAllItems,
	setforthApiUploadFile,
	setforthApiDownloadFile,
	formatPhoneNumber,
	formatDate,
	parseAdditionalFields,
	buildFilters,
} from './GenericFunctions';

import {
	contactOperations,
	contactFields,
	contactListOperations,
	contactListFields,
	contactAlertOperations,
	contactAlertFields,
	contactNoteOperations,
	contactNoteFields,
	contactCommunicationOperations,
	contactCommunicationFields,
	contactCreditOperations,
	contactCreditFields,
	contactDocumentOperations,
	contactDocumentFields,
	contactDebtOperations,
	contactDebtFields,
	contactWorkflowOperations,
	contactWorkflowFields,
	contactBankingOperations,
	contactBankingFields,
} from './descriptions/ContactDescription';

import {
	debtOperations,
	debtFields,
	debtTaskOperations,
	debtTaskFields,
	debtNoteOperations,
	debtNoteFields,
} from './descriptions/DebtDescription';

import {
	enrollmentOperations,
	enrollmentFields,
} from './descriptions/EnrollmentDescription';

import {
	settlementOfferOperations,
	settlementOfferFields,
} from './descriptions/SettlementOfferDescription';

import {
	documentOperations,
	documentFields,
	documentPackageOperations,
	documentPackageFields,
} from './descriptions/DocumentDescription';

import {
	clixsignOperations,
	clixsignFields,
} from './descriptions/ClixsignDescription';

import {
	forthCreditOperations,
	forthCreditFields,
} from './descriptions/ForthCreditDescription';

import {
	callOperations,
	callFields,
} from './descriptions/CallDescription';

import {
	taskOperations,
	taskFields,
} from './descriptions/TaskDescription';

import {
	calendarEventOperations,
	calendarEventFields,
} from './descriptions/CalendarEventDescription';

import {
	userOperations,
	userFields,
} from './descriptions/UserDescription';

import {
	campaignOperations,
	campaignFields,
	emailTemplateOperations,
	emailTemplateFields,
} from './descriptions/MarketingDescription';

import {
	teamOperations,
	teamFields,
	adminUserOperations,
	adminUserFields,
} from './descriptions/AdministrationDescription';

import {
	payeeOperations,
	payeeFields,
} from './descriptions/CompanyDescription';

import {
	contentConfigOperations,
	contentConfigFields,
	documentTypeOperations,
	documentTypeFields,
	documentTemplateOperations,
	documentTemplateFields,
	documentPackageTemplateOperations,
	documentPackageTemplateFields,
} from './descriptions/ConfigurationDescription';

import {
	creditorOperations,
	creditorFields,
} from './descriptions/CreditorDescription';

import {
	transactionOperations,
	transactionFields,
} from './descriptions/TransactionDescription';

import {
	accountStatementOperations,
	accountStatementFields,
} from './descriptions/AccountStatementDescription';

import {
	lenderOperations,
	lenderFields,
} from './descriptions/LenderDescription';

import {
	utilityOperations,
	utilityFields,
} from './descriptions/UtilityDescription';

import {
	bulkOperations,
	bulkFields,
} from './descriptions/BulkDescription';

export class Setforth implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Setforth',
		name: 'setforth',
		icon: 'file:setforth.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Setforth (Forth) API for debt resolution services',
		defaults: {
			name: 'Setforth',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'setforthOAuth2Api',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Account Statement', value: 'accountStatement' },
					{ name: 'Admin User', value: 'adminUser' },
					{ name: 'Bulk Operations', value: 'bulk' },
					{ name: 'Calendar Event', value: 'calendarEvent' },
					{ name: 'Call', value: 'call' },
					{ name: 'Campaign', value: 'campaign' },
					{ name: 'Clixsign (E-Signature)', value: 'clixsign' },
					{ name: 'Contact', value: 'contact' },
					{ name: 'Contact Alert', value: 'contactAlert' },
					{ name: 'Contact Banking', value: 'contactBanking' },
					{ name: 'Contact Communication', value: 'contactCommunication' },
					{ name: 'Contact Credit Report', value: 'contactCredit' },
					{ name: 'Contact Debt', value: 'contactDebt' },
					{ name: 'Contact Document', value: 'contactDocument' },
					{ name: 'Contact List', value: 'contactList' },
					{ name: 'Contact Note', value: 'contactNote' },
					{ name: 'Contact Workflow', value: 'contactWorkflow' },
					{ name: 'Content Configuration', value: 'contentConfig' },
					{ name: 'Creditor', value: 'creditor' },
					{ name: 'Debt', value: 'debt' },
					{ name: 'Debt Note', value: 'debtNote' },
					{ name: 'Debt Task', value: 'debtTask' },
					{ name: 'Document', value: 'document' },
					{ name: 'Document Package', value: 'documentPackage' },
					{ name: 'Document Package Template', value: 'documentPackageTemplate' },
					{ name: 'Document Template', value: 'documentTemplate' },
					{ name: 'Document Type', value: 'documentType' },
					{ name: 'Email Template', value: 'emailTemplate' },
					{ name: 'Enrollment', value: 'enrollment' },
					{ name: 'Forth Credit', value: 'forthCredit' },
					{ name: 'Lender', value: 'lender' },
					{ name: 'Payee', value: 'payee' },
					{ name: 'Settlement Offer', value: 'settlementOffer' },
					{ name: 'Task', value: 'task' },
					{ name: 'Team', value: 'team' },
					{ name: 'Transaction', value: 'transaction' },
					{ name: 'User', value: 'user' },
					{ name: 'Utility', value: 'utility' },
				],
				default: 'contact',
			},
			// Contact Resource
			...contactOperations,
			...contactFields,
			// Contact Sub-resources
			...contactListOperations,
			...contactListFields,
			...contactAlertOperations,
			...contactAlertFields,
			...contactNoteOperations,
			...contactNoteFields,
			...contactCommunicationOperations,
			...contactCommunicationFields,
			...contactCreditOperations,
			...contactCreditFields,
			...contactDocumentOperations,
			...contactDocumentFields,
			...contactDebtOperations,
			...contactDebtFields,
			...contactWorkflowOperations,
			...contactWorkflowFields,
			...contactBankingOperations,
			...contactBankingFields,
			// Debt Resource
			...debtOperations,
			...debtFields,
			...debtTaskOperations,
			...debtTaskFields,
			...debtNoteOperations,
			...debtNoteFields,
			// Call Resource
			...callOperations,
			...callFields,
			// Document Resources
			...documentOperations,
			...documentFields,
			...documentPackageOperations,
			...documentPackageFields,
			// Task Resource
			...taskOperations,
			...taskFields,
			// Calendar Event Resource
			...calendarEventOperations,
			...calendarEventFields,
			// User Resource
			...userOperations,
			...userFields,
			// Marketing Resources
			...campaignOperations,
			...campaignFields,
			...emailTemplateOperations,
			...emailTemplateFields,
			// Administration Resources
			...teamOperations,
			...teamFields,
			...adminUserOperations,
			...adminUserFields,
			// Company Resources
			...payeeOperations,
			...payeeFields,
			// Configuration Resources
			...contentConfigOperations,
			...contentConfigFields,
			...documentTypeOperations,
			...documentTypeFields,
			...documentTemplateOperations,
			...documentTemplateFields,
			...documentPackageTemplateOperations,
			...documentPackageTemplateFields,
			// Creditor Resource
			...creditorOperations,
			...creditorFields,
			// Enrollment Resource
			...enrollmentOperations,
			...enrollmentFields,
			// Settlement Offer Resource
			...settlementOfferOperations,
			...settlementOfferFields,
			// Transaction Resource
			...transactionOperations,
			...transactionFields,
			// Account Statement Resource
			...accountStatementOperations,
			...accountStatementFields,
			// Lender Resource
			...lenderOperations,
			...lenderFields,
			// Clixsign Resource
			...clixsignOperations,
			...clixsignFields,
			// Forth Credit Resource
			...forthCreditOperations,
			...forthCreditFields,
			// Utility Resource
			...utilityOperations,
			...utilityFields,
			// Bulk Operations Resource
			...bulkOperations,
			...bulkFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		for (let i = 0; i < items.length; i++) {
			try {
				let responseData: any;

				// ===== CONTACT RESOURCE =====
				if (resource === 'contact') {
					if (operation === 'create') {
						const firstName = this.getNodeParameter('firstName', i) as string;
						const lastName = this.getNodeParameter('lastName', i) as string;
						const email = this.getNodeParameter('email', i) as string;
						const phone = this.getNodeParameter('phone', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							first_name: firstName,
							last_name: lastName,
						};

						if (email) body.email = email;
						if (phone) body.phone = formatPhoneNumber(phone);

						Object.assign(body, parseAdditionalFields(additionalFields, {
							address1: 'address_line_1',
							address2: 'address_line_2',
							zipCode: 'zip_code',
							dateOfBirth: 'date_of_birth',
							externalId: 'external_id',
							middleName: 'middle_name',
							ssn4: 'ssn_last_4',
							coApplicantFirstName: 'co_applicant_first_name',
							coApplicantLastName: 'co_applicant_last_name',
							coApplicantEmail: 'co_applicant_email',
							coApplicantPhone: 'co_applicant_phone',
						}));

						responseData = await setforthApiRequest.call(this, 'POST', '/contacts', body);
					}

					if (operation === 'get') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/contacts/${contactId}`);
					}

					if (operation === 'search') {
						const searchQuery = this.getNodeParameter('searchQuery', i) as string;
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;

						const qs: IDataObject = {};
						if (searchQuery) qs.q = searchQuery;
						Object.assign(qs, buildFilters(filters));

						if (returnAll) {
							responseData = await setforthApiRequestAllItems.call(this, 'GET', '/contacts', {}, qs, 'contacts');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							qs.limit = limit;
							responseData = await setforthApiRequest.call(this, 'GET', '/contacts', {}, qs);
							responseData = responseData.contacts || responseData;
						}
					}

					if (operation === 'update') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						const body = parseAdditionalFields(updateFields, {
							firstName: 'first_name',
							lastName: 'last_name',
							address1: 'address_line_1',
							address2: 'address_line_2',
							zipCode: 'zip_code',
							dateOfBirth: 'date_of_birth',
							externalId: 'external_id',
							middleName: 'middle_name',
						});

						responseData = await setforthApiRequest.call(this, 'PATCH', `/contacts/${contactId}`, body);
					}

					if (operation === 'delete') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/contacts/${contactId}`);
					}

					if (operation === 'delinkCoApplicant') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/delink-co-applicant`);
					}

					if (operation === 'getHistoryFeed') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/history`);
					}
				}

				// ===== CONTACT LIST RESOURCE =====
				if (resource === 'contactList') {
					if (operation === 'getAllFields') {
						responseData = await setforthApiRequest.call(this, 'GET', '/contact-lists/fields');
					}

					if (operation === 'getAllContacts') {
						const listId = this.getNodeParameter('listId', i) as string;
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;

						if (returnAll) {
							responseData = await setforthApiRequestAllItems.call(this, 'GET', `/contact-lists/${listId}/contacts`, {}, {}, 'contacts');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							responseData = await setforthApiRequest.call(this, 'GET', `/contact-lists/${listId}/contacts`, {}, { limit });
							responseData = responseData.contacts || responseData;
						}
					}

					if (operation === 'download') {
						const listId = this.getNodeParameter('listId', i) as string;
						const binaryData = await setforthApiDownloadFile.call(this, `/contact-lists/${listId}/download`);
						
						const data = await this.helpers.prepareBinaryData(binaryData, `contact-list-${listId}.csv`);
						responseData = { binary: { data } };
					}

					if (operation === 'publish') {
						const listId = this.getNodeParameter('listId', i) as string;
						responseData = await setforthApiRequest.call(this, 'POST', `/contact-lists/${listId}/publish`);
					}
				}

				// ===== CONTACT ALERT RESOURCE =====
				if (resource === 'contactAlert') {
					const contactId = this.getNodeParameter('contactId', i) as string;

					if (operation === 'getAll') {
						responseData = await setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/alerts`);
					}

					if (operation === 'create') {
						const message = this.getNodeParameter('message', i) as string;
						const alertType = this.getNodeParameter('alertType', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							message,
							type: alertType,
							...parseAdditionalFields(additionalFields),
						};

						responseData = await setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/alerts`, body);
					}

					if (operation === 'update') {
						const alertId = this.getNodeParameter('alertId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/contacts/${contactId}/alerts/${alertId}`, parseAdditionalFields(updateFields));
					}

					if (operation === 'delete') {
						const alertId = this.getNodeParameter('alertId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/contacts/${contactId}/alerts/${alertId}`);
					}
				}

				// ===== CONTACT NOTE RESOURCE =====
				if (resource === 'contactNote') {
					const contactId = this.getNodeParameter('contactId', i) as string;

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;

						if (returnAll) {
							responseData = await setforthApiRequestAllItems.call(this, 'GET', `/contacts/${contactId}/notes`, {}, {}, 'notes');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							responseData = await setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/notes`, {}, { limit });
							responseData = responseData.notes || responseData;
						}
					}

					if (operation === 'create') {
						const content = this.getNodeParameter('content', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							content,
							...parseAdditionalFields(additionalFields, { noteType: 'note_type' }),
						};

						responseData = await setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/notes`, body);
					}

					if (operation === 'update') {
						const noteId = this.getNodeParameter('noteId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/contacts/${contactId}/notes/${noteId}`, parseAdditionalFields(updateFields));
					}

					if (operation === 'delete') {
						const noteId = this.getNodeParameter('noteId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/contacts/${contactId}/notes/${noteId}`);
					}
				}

				// ===== CONTACT COMMUNICATION RESOURCE =====
				if (resource === 'contactCommunication') {
					const contactId = this.getNodeParameter('contactId', i) as string;

					if (operation === 'sendEmail') {
						const templateId = this.getNodeParameter('templateId', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							template_id: templateId,
							...parseAdditionalFields(additionalFields),
						};

						responseData = await setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/email`, body);
					}

					if (operation === 'sendSms') {
						const message = this.getNodeParameter('message', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							message,
							...parseAdditionalFields(additionalFields),
						};

						responseData = await setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/sms`, body);
					}

					if (operation === 'getSmsRecords') {
						responseData = await setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/sms`);
					}

					if (operation === 'createSmsLog') {
						const message = this.getNodeParameter('message', i) as string;
						const direction = this.getNodeParameter('direction', i) as string;

						const body: IDataObject = {
							message,
							direction,
						};

						responseData = await setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/sms/log`, body);
					}

					if (operation === 'sendExternalFormRequest') {
						const formId = this.getNodeParameter('formId', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							form_id: formId,
							...parseAdditionalFields(additionalFields),
						};

						responseData = await setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/external-form`, body);
					}
				}

				// ===== CONTACT CREDIT RESOURCE =====
				if (resource === 'contactCredit') {
					const contactId = this.getNodeParameter('contactId', i) as string;

					if (operation === 'pullCredit') {
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
						responseData = await setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/credit/pull`, parseAdditionalFields(additionalFields));
					}

					if (operation === 'getLastReport') {
						responseData = await setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/credit/last-report`);
					}
				}

				// ===== CONTACT DOCUMENT RESOURCE =====
				if (resource === 'contactDocument') {
					const contactId = this.getNodeParameter('contactId', i) as string;

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;

						if (returnAll) {
							responseData = await setforthApiRequestAllItems.call(this, 'GET', `/contacts/${contactId}/documents`, {}, {}, 'documents');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							responseData = await setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/documents`, {}, { limit });
							responseData = responseData.documents || responseData;
						}
					}

					if (operation === 'upload') {
						const binaryPropertyName = this.getNodeParameter('binaryPropertyName', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						responseData = await setforthApiUploadFile.call(this, `/contacts/${contactId}/documents`, binaryPropertyName, parseAdditionalFields(additionalFields, { documentType: 'document_type' }), i);
					}

					if (operation === 'get') {
						const documentId = this.getNodeParameter('documentId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/documents/${documentId}`);
					}

					if (operation === 'update') {
						const documentId = this.getNodeParameter('documentId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/contacts/${contactId}/documents/${documentId}`, parseAdditionalFields(updateFields));
					}

					if (operation === 'delete') {
						const documentId = this.getNodeParameter('documentId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/contacts/${contactId}/documents/${documentId}`);
					}
				}

				// ===== CONTACT DEBT RESOURCE =====
				if (resource === 'contactDebt') {
					const contactId = this.getNodeParameter('contactId', i) as string;
					const returnAll = this.getNodeParameter('returnAll', i) as boolean;
					let endpoint = `/contacts/${contactId}/debts`;

					if (operation === 'getEnrolled') endpoint += '/enrolled';
					if (operation === 'getUnenrolled') endpoint += '/unenrolled';
					if (operation === 'getSettled') endpoint += '/settled';
					if (operation === 'getUnsettled') endpoint += '/unsettled';

					if (returnAll) {
						responseData = await setforthApiRequestAllItems.call(this, 'GET', endpoint, {}, {}, 'debts');
					} else {
						const limit = this.getNodeParameter('limit', i) as number;
						responseData = await setforthApiRequest.call(this, 'GET', endpoint, {}, { limit });
						responseData = responseData.debts || responseData;
					}
				}

				// ===== CONTACT WORKFLOW RESOURCE =====
				if (resource === 'contactWorkflow') {
					if (operation === 'getStatusHistory') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/workflow`);
					}

					if (operation === 'listStages') {
						responseData = await setforthApiRequest.call(this, 'GET', '/workflow/stages');
					}

					if (operation === 'listStatuses') {
						responseData = await setforthApiRequest.call(this, 'GET', '/workflow/statuses');
					}

					if (operation === 'updateStatus') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const statusId = this.getNodeParameter('statusId', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							status_id: statusId,
							...parseAdditionalFields(additionalFields),
						};

						responseData = await setforthApiRequest.call(this, 'PATCH', `/contacts/${contactId}/workflow`, body);
					}
				}

				// ===== CONTACT BANKING RESOURCE =====
				if (resource === 'contactBanking') {
					const contactId = this.getNodeParameter('contactId', i) as string;

					if (operation === 'getDetails') {
						responseData = await setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/banking`);
					}

					if (operation === 'get') {
						const accountId = this.getNodeParameter('accountId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/banking/${accountId}`);
					}

					if (operation === 'create') {
						const accountNumber = this.getNodeParameter('accountNumber', i) as string;
						const routingNumber = this.getNodeParameter('routingNumber', i) as string;
						const accountType = this.getNodeParameter('accountType', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							account_number: accountNumber,
							routing_number: routingNumber,
							account_type: accountType,
							...parseAdditionalFields(additionalFields, { accountHolderName: 'account_holder_name', bankName: 'bank_name' }),
						};

						responseData = await setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/banking`, body);
					}

					if (operation === 'update') {
						const accountId = this.getNodeParameter('accountId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/contacts/${contactId}/banking/${accountId}`, parseAdditionalFields(updateFields, {
							accountNumber: 'account_number',
							routingNumber: 'routing_number',
							accountType: 'account_type',
							accountHolderName: 'account_holder_name',
							bankName: 'bank_name',
						}));
					}
				}

				// ===== DEBT RESOURCE =====
				if (resource === 'debt') {
					if (operation === 'create') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const creditorName = this.getNodeParameter('creditorName', i) as string;
						const originalBalance = this.getNodeParameter('originalBalance', i) as number;
						const currentBalance = this.getNodeParameter('currentBalance', i) as number;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							contact_id: contactId,
							creditor_name: creditorName,
							original_balance: originalBalance,
							current_balance: currentBalance,
							...parseAdditionalFields(additionalFields, {
								accountNumber: 'account_number',
								debtType: 'debt_type',
								interestRate: 'interest_rate',
								lastPaymentAmount: 'last_payment_amount',
								lastPaymentDate: 'last_payment_date',
								minimumPayment: 'minimum_payment',
							}),
						};

						responseData = await setforthApiRequest.call(this, 'POST', '/debts', body);
					}

					if (operation === 'get') {
						const debtId = this.getNodeParameter('debtId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/debts/${debtId}`);
					}

					if (operation === 'update') {
						const debtId = this.getNodeParameter('debtId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/debts/${debtId}`, parseAdditionalFields(updateFields, {
							creditorName: 'creditor_name',
							originalBalance: 'original_balance',
							currentBalance: 'current_balance',
							accountNumber: 'account_number',
							interestRate: 'interest_rate',
							lastPaymentAmount: 'last_payment_amount',
							lastPaymentDate: 'last_payment_date',
							minimumPayment: 'minimum_payment',
						}));
					}

					if (operation === 'delete') {
						const debtId = this.getNodeParameter('debtId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/debts/${debtId}`);
					}

					if (operation === 'updateType') {
						const debtId = this.getNodeParameter('debtId', i) as string;
						const debtTypeId = this.getNodeParameter('debtTypeId', i) as string;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/debts/${debtId}/type`, { debt_type_id: debtTypeId });
					}

					if (operation === 'getDocuments') {
						const debtId = this.getNodeParameter('debtId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/debts/${debtId}/documents`);
					}
				}

				// ===== DEBT TASK RESOURCE =====
				if (resource === 'debtTask') {
					const debtId = this.getNodeParameter('debtId', i) as string;

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;

						if (returnAll) {
							responseData = await setforthApiRequestAllItems.call(this, 'GET', `/debts/${debtId}/tasks`, {}, {}, 'tasks');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							responseData = await setforthApiRequest.call(this, 'GET', `/debts/${debtId}/tasks`, {}, { limit });
							responseData = responseData.tasks || responseData;
						}
					}

					if (operation === 'create') {
						const title = this.getNodeParameter('title', i) as string;
						const dueDate = this.getNodeParameter('dueDate', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							title,
							due_date: formatDate(dueDate),
							...parseAdditionalFields(additionalFields, { assignedUserId: 'assigned_user_id' }),
						};

						responseData = await setforthApiRequest.call(this, 'POST', `/debts/${debtId}/tasks`, body);
					}

					if (operation === 'update') {
						const taskId = this.getNodeParameter('taskId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						if (updateFields.dueDate) {
							updateFields.dueDate = formatDate(updateFields.dueDate as string);
						}

						responseData = await setforthApiRequest.call(this, 'PATCH', `/debts/${debtId}/tasks/${taskId}`, parseAdditionalFields(updateFields, {
							dueDate: 'due_date',
							assignedUserId: 'assigned_user_id',
						}));
					}

					if (operation === 'delete') {
						const taskId = this.getNodeParameter('taskId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/debts/${debtId}/tasks/${taskId}`);
					}
				}

				// ===== DEBT NOTE RESOURCE =====
				if (resource === 'debtNote') {
					const debtId = this.getNodeParameter('debtId', i) as string;

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;

						if (returnAll) {
							responseData = await setforthApiRequestAllItems.call(this, 'GET', `/debts/${debtId}/notes`, {}, {}, 'notes');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							responseData = await setforthApiRequest.call(this, 'GET', `/debts/${debtId}/notes`, {}, { limit });
							responseData = responseData.notes || responseData;
						}
					}

					if (operation === 'create') {
						const content = this.getNodeParameter('content', i) as string;
						responseData = await setforthApiRequest.call(this, 'POST', `/debts/${debtId}/notes`, { content });
					}

					if (operation === 'update') {
						const noteId = this.getNodeParameter('noteId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/debts/${debtId}/notes/${noteId}`, parseAdditionalFields(updateFields));
					}

					if (operation === 'delete') {
						const noteId = this.getNodeParameter('noteId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/debts/${debtId}/notes/${noteId}`);
					}
				}

				// ===== CALL RESOURCE =====
				if (resource === 'call') {
					if (operation === 'create') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const direction = this.getNodeParameter('direction', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							contact_id: contactId,
							direction,
							...parseAdditionalFields(additionalFields, {
								dispositionId: 'disposition_id',
								durationSeconds: 'duration_seconds',
								phoneNumber: 'phone_number',
								recordingUrl: 'recording_url',
							}),
						};

						responseData = await setforthApiRequest.call(this, 'POST', '/calls', body);
					}

					if (operation === 'get') {
						const callId = this.getNodeParameter('callId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/calls/${callId}`);
					}

					if (operation === 'update') {
						const callId = this.getNodeParameter('callId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/calls/${callId}`, parseAdditionalFields(updateFields, {
							dispositionId: 'disposition_id',
							durationSeconds: 'duration_seconds',
						}));
					}

					if (operation === 'delete') {
						const callId = this.getNodeParameter('callId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/calls/${callId}`);
					}

					if (operation === 'getDispositions') {
						responseData = await setforthApiRequest.call(this, 'GET', '/calls/dispositions');
					}
				}

				// ===== DOCUMENT RESOURCE =====
				if (resource === 'document') {
					if (operation === 'generate') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const templateId = this.getNodeParameter('templateId', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							contact_id: contactId,
							template_id: templateId,
							...parseAdditionalFields(additionalFields),
						};

						responseData = await setforthApiRequest.call(this, 'POST', '/documents/generate', body);
					}

					if (operation === 'delete') {
						const documentId = this.getNodeParameter('documentId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/documents/${documentId}`);
					}
				}

				// ===== DOCUMENT PACKAGE RESOURCE =====
				if (resource === 'documentPackage') {
					if (operation === 'generate') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const packageTemplateId = this.getNodeParameter('packageTemplateId', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							contact_id: contactId,
							package_template_id: packageTemplateId,
							...parseAdditionalFields(additionalFields),
						};

						responseData = await setforthApiRequest.call(this, 'POST', '/document-packages/generate', body);
					}

					if (operation === 'delete') {
						const packageId = this.getNodeParameter('packageId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/document-packages/${packageId}`);
					}
				}

				// ===== TASK RESOURCE =====
				if (resource === 'task') {
					if (operation === 'create') {
						const title = this.getNodeParameter('title', i) as string;
						const dueDate = this.getNodeParameter('dueDate', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							title,
							due_date: formatDate(dueDate),
							...parseAdditionalFields(additionalFields, {
								assignedUserId: 'assigned_user_id',
								contactId: 'contact_id',
							}),
						};

						responseData = await setforthApiRequest.call(this, 'POST', '/tasks', body);
					}

					if (operation === 'get') {
						const taskId = this.getNodeParameter('taskId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/tasks/${taskId}`);
					}

					if (operation === 'update') {
						const taskId = this.getNodeParameter('taskId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						if (updateFields.dueDate) {
							updateFields.dueDate = formatDate(updateFields.dueDate as string);
						}

						responseData = await setforthApiRequest.call(this, 'PATCH', `/tasks/${taskId}`, parseAdditionalFields(updateFields, {
							dueDate: 'due_date',
							assignedUserId: 'assigned_user_id',
						}));
					}

					if (operation === 'delete') {
						const taskId = this.getNodeParameter('taskId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/tasks/${taskId}`);
					}

					if (operation === 'complete') {
						const taskId = this.getNodeParameter('taskId', i) as string;
						responseData = await setforthApiRequest.call(this, 'POST', `/tasks/${taskId}/complete`);
					}
				}

				// ===== CALENDAR EVENT RESOURCE =====
				if (resource === 'calendarEvent') {
					if (operation === 'create') {
						const title = this.getNodeParameter('title', i) as string;
						const startTime = this.getNodeParameter('startTime', i) as string;
						const endTime = this.getNodeParameter('endTime', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							title,
							start_time: formatDate(startTime),
							end_time: formatDate(endTime),
							...parseAdditionalFields(additionalFields, {
								contactId: 'contact_id',
								allDay: 'all_day',
							}),
						};

						responseData = await setforthApiRequest.call(this, 'POST', '/calendar/events', body);
					}

					if (operation === 'get') {
						const eventId = this.getNodeParameter('eventId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/calendar/events/${eventId}`);
					}

					if (operation === 'update') {
						const eventId = this.getNodeParameter('eventId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						if (updateFields.startTime) {
							updateFields.startTime = formatDate(updateFields.startTime as string);
						}
						if (updateFields.endTime) {
							updateFields.endTime = formatDate(updateFields.endTime as string);
						}

						responseData = await setforthApiRequest.call(this, 'PATCH', `/calendar/events/${eventId}`, parseAdditionalFields(updateFields, {
							startTime: 'start_time',
							endTime: 'end_time',
							allDay: 'all_day',
						}));
					}

					if (operation === 'delete') {
						const eventId = this.getNodeParameter('eventId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/calendar/events/${eventId}`);
					}
				}

				// ===== USER RESOURCE =====
				if (resource === 'user') {
					if (operation === 'getCurrent') {
						responseData = await setforthApiRequest.call(this, 'GET', '/users/me');
					}

					if (operation === 'getTasks') {
						const userId = this.getNodeParameter('userId', i) as string;
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;

						if (returnAll) {
							responseData = await setforthApiRequestAllItems.call(this, 'GET', `/users/${userId}/tasks`, {}, {}, 'tasks');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							responseData = await setforthApiRequest.call(this, 'GET', `/users/${userId}/tasks`, {}, { limit });
							responseData = responseData.tasks || responseData;
						}
					}

					if (operation === 'getEvents') {
						const userId = this.getNodeParameter('userId', i) as string;
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;

						if (returnAll) {
							responseData = await setforthApiRequestAllItems.call(this, 'GET', `/users/${userId}/events`, {}, {}, 'events');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							responseData = await setforthApiRequest.call(this, 'GET', `/users/${userId}/events`, {}, { limit });
							responseData = responseData.events || responseData;
						}
					}
				}

				// ===== CAMPAIGN RESOURCE =====
				if (resource === 'campaign') {
					if (operation === 'create') {
						const name = this.getNodeParameter('name', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							name,
							...parseAdditionalFields(additionalFields),
						};

						responseData = await setforthApiRequest.call(this, 'POST', '/marketing/campaigns', body);
					}

					if (operation === 'get') {
						const campaignId = this.getNodeParameter('campaignId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/marketing/campaigns/${campaignId}`);
					}

					if (operation === 'update') {
						const campaignId = this.getNodeParameter('campaignId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/marketing/campaigns/${campaignId}`, parseAdditionalFields(updateFields));
					}

					if (operation === 'delete') {
						const campaignId = this.getNodeParameter('campaignId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/marketing/campaigns/${campaignId}`);
					}

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;

						if (returnAll) {
							responseData = await setforthApiRequestAllItems.call(this, 'GET', '/marketing/campaigns', {}, {}, 'campaigns');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							responseData = await setforthApiRequest.call(this, 'GET', '/marketing/campaigns', {}, { limit });
							responseData = responseData.campaigns || responseData;
						}
					}
				}

				// ===== EMAIL TEMPLATE RESOURCE =====
				if (resource === 'emailTemplate') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;

						if (returnAll) {
							responseData = await setforthApiRequestAllItems.call(this, 'GET', '/marketing/email-templates', {}, {}, 'templates');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							responseData = await setforthApiRequest.call(this, 'GET', '/marketing/email-templates', {}, { limit });
							responseData = responseData.templates || responseData;
						}
					}
				}

				// ===== TEAM RESOURCE =====
				if (resource === 'team') {
					if (operation === 'getAll') {
						responseData = await setforthApiRequest.call(this, 'GET', '/admin/teams');
					}

					if (operation === 'create') {
						const name = this.getNodeParameter('name', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							name,
							...parseAdditionalFields(additionalFields),
						};

						responseData = await setforthApiRequest.call(this, 'POST', '/admin/teams', body);
					}

					if (operation === 'get') {
						const teamId = this.getNodeParameter('teamId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/admin/teams/${teamId}`);
					}

					if (operation === 'update') {
						const teamId = this.getNodeParameter('teamId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/admin/teams/${teamId}`, parseAdditionalFields(updateFields));
					}

					if (operation === 'delete') {
						const teamId = this.getNodeParameter('teamId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/admin/teams/${teamId}`);
					}
				}

				// ===== ADMIN USER RESOURCE =====
				if (resource === 'adminUser') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;

						if (returnAll) {
							responseData = await setforthApiRequestAllItems.call(this, 'GET', '/admin/users', {}, {}, 'users');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							responseData = await setforthApiRequest.call(this, 'GET', '/admin/users', {}, { limit });
							responseData = responseData.users || responseData;
						}
					}

					if (operation === 'create') {
						const email = this.getNodeParameter('email', i) as string;
						const firstName = this.getNodeParameter('firstName', i) as string;
						const lastName = this.getNodeParameter('lastName', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							email,
							first_name: firstName,
							last_name: lastName,
							...parseAdditionalFields(additionalFields, { teamId: 'team_id' }),
						};

						responseData = await setforthApiRequest.call(this, 'POST', '/admin/users', body);
					}

					if (operation === 'get') {
						const userId = this.getNodeParameter('userId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/admin/users/${userId}`);
					}

					if (operation === 'update') {
						const userId = this.getNodeParameter('userId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/admin/users/${userId}`, parseAdditionalFields(updateFields, {
							firstName: 'first_name',
							lastName: 'last_name',
							teamId: 'team_id',
						}));
					}

					if (operation === 'delete') {
						const userId = this.getNodeParameter('userId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/admin/users/${userId}`);
					}

					if (operation === 'getSettings') {
						const userId = this.getNodeParameter('userId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/admin/users/${userId}/settings`);
					}

					if (operation === 'updateSettings') {
						const userId = this.getNodeParameter('userId', i) as string;
						const settings = this.getNodeParameter('settings', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/admin/users/${userId}/settings`, settings);
					}
				}

				// ===== PAYEE RESOURCE =====
				if (resource === 'payee') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;

						if (returnAll) {
							responseData = await setforthApiRequestAllItems.call(this, 'GET', '/companies/payees', {}, {}, 'payees');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							responseData = await setforthApiRequest.call(this, 'GET', '/companies/payees', {}, { limit });
							responseData = responseData.payees || responseData;
						}
					}

					if (operation === 'create') {
						const name = this.getNodeParameter('name', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							name,
							...parseAdditionalFields(additionalFields),
						};

						responseData = await setforthApiRequest.call(this, 'POST', '/companies/payees', body);
					}

					if (operation === 'update') {
						const payeeId = this.getNodeParameter('payeeId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/companies/payees/${payeeId}`, parseAdditionalFields(updateFields));
					}
				}

				// ===== CONTENT CONFIG RESOURCE =====
				if (resource === 'contentConfig') {
					if (operation === 'getAllContactFields') {
						responseData = await setforthApiRequest.call(this, 'GET', '/config/contact-fields');
					}

					if (operation === 'getNoteTypes') {
						responseData = await setforthApiRequest.call(this, 'GET', '/config/note-types');
					}

					if (operation === 'getDebtTypes') {
						responseData = await setforthApiRequest.call(this, 'GET', '/config/debt-types');
					}

					if (operation === 'getDebtStatuses') {
						responseData = await setforthApiRequest.call(this, 'GET', '/config/debt-statuses');
					}

					if (operation === 'updateDebtStatus') {
						const statusId = this.getNodeParameter('statusId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/config/debt-statuses/${statusId}`, parseAdditionalFields(updateFields));
					}
				}

				// ===== DOCUMENT TYPE RESOURCE =====
				if (resource === 'documentType') {
					if (operation === 'getAll') {
						responseData = await setforthApiRequest.call(this, 'GET', '/config/document-types');
					}

					if (operation === 'create') {
						const name = this.getNodeParameter('name', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							name,
							...parseAdditionalFields(additionalFields),
						};

						responseData = await setforthApiRequest.call(this, 'POST', '/config/document-types', body);
					}

					if (operation === 'update') {
						const typeId = this.getNodeParameter('typeId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/config/document-types/${typeId}`, parseAdditionalFields(updateFields));
					}

					if (operation === 'delete') {
						const typeId = this.getNodeParameter('typeId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/config/document-types/${typeId}`);
					}
				}

				// ===== DOCUMENT TEMPLATE RESOURCE =====
				if (resource === 'documentTemplate') {
					if (operation === 'getAll') {
						responseData = await setforthApiRequest.call(this, 'GET', '/documents/templates');
					}
				}

				// ===== DOCUMENT PACKAGE TEMPLATE RESOURCE =====
				if (resource === 'documentPackageTemplate') {
					if (operation === 'getAll') {
						responseData = await setforthApiRequest.call(this, 'GET', '/document-packages/templates');
					}
				}

				// ===== CREDITOR RESOURCE =====
				if (resource === 'creditor') {
					if (operation === 'get') {
						const creditorId = this.getNodeParameter('creditorId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/servicing/creditors/${creditorId}`);
					}

					if (operation === 'create') {
						const name = this.getNodeParameter('name', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							name,
							...parseAdditionalFields(additionalFields),
						};

						responseData = await setforthApiRequest.call(this, 'POST', '/servicing/creditors', body);
					}
				}

				// ===== ENROLLMENT RESOURCE =====
				if (resource === 'enrollment') {
					if (operation === 'createPlans') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const plans = this.getNodeParameter('plans', i) as IDataObject[];

						responseData = await setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/plans`, { plans });
					}

					if (operation === 'updatePlans') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const plans = this.getNodeParameter('plans', i) as IDataObject[];

						responseData = await setforthApiRequest.call(this, 'PATCH', `/servicing/enrollments/${contactId}/plans`, { plans });
					}

					if (operation === 'deletePlans') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const planIds = this.getNodeParameter('planIds', i) as string[];

						responseData = await setforthApiRequest.call(this, 'DELETE', `/servicing/enrollments/${contactId}/plans`, { plan_ids: planIds });
					}

					if (operation === 'returnPlans') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const planIds = this.getNodeParameter('planIds', i) as string[];

						responseData = await setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/plans/return`, { plan_ids: planIds });
					}

					if (operation === 'submit') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/submit`);
					}

					if (operation === 'approve') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/approve`);
					}

					if (operation === 'uploadGatewayAuth') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const binaryPropertyName = this.getNodeParameter('binaryPropertyName', i) as string;

						responseData = await setforthApiUploadFile.call(this, `/servicing/enrollments/${contactId}/gateway-auth`, binaryPropertyName, {}, i);
					}

					if (operation === 'getDetails') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/servicing/enrollments/${contactId}`);
					}

					if (operation === 'enrollContact') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/enroll`, parseAdditionalFields(additionalFields));
					}

					if (operation === 'unassignPlan') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const planId = this.getNodeParameter('planId', i) as string;

						responseData = await setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/plans/${planId}/unassign`);
					}

					if (operation === 'returnContact') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/return`, parseAdditionalFields(additionalFields));
					}

					if (operation === 'pause') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/pause`, parseAdditionalFields(additionalFields));
					}

					if (operation === 'resumePayments') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/resume`);
					}

					if (operation === 'addProgramSponsor') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const sponsorId = this.getNodeParameter('sponsorId', i) as string;

						responseData = await setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/sponsor`, { sponsor_id: sponsorId });
					}

					if (operation === 'getGatewayBalance') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/servicing/enrollments/${contactId}/gateway-balance`);
					}
				}

				// ===== SETTLEMENT OFFER RESOURCE =====
				if (resource === 'settlementOffer') {
					if (operation === 'create') {
						const debtId = this.getNodeParameter('debtId', i) as string;
						const settlementAmount = this.getNodeParameter('settlementAmount', i) as number;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							debt_id: debtId,
							settlement_amount: settlementAmount,
							...parseAdditionalFields(additionalFields, {
								settlementPercentage: 'settlement_percentage',
								expirationDate: 'expiration_date',
								paymentSchedule: 'payment_schedule',
							}),
						};

						responseData = await setforthApiRequest.call(this, 'POST', '/servicing/settlement-offers', body);
					}

					if (operation === 'get') {
						const offerId = this.getNodeParameter('offerId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/servicing/settlement-offers/${offerId}`);
					}

					if (operation === 'delete') {
						const offerId = this.getNodeParameter('offerId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/servicing/settlement-offers/${offerId}`);
					}

					if (operation === 'void') {
						const offerId = this.getNodeParameter('offerId', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'POST', `/servicing/settlement-offers/${offerId}/void`, parseAdditionalFields(additionalFields));
					}

					if (operation === 'getAllStatuses') {
						responseData = await setforthApiRequest.call(this, 'GET', '/servicing/settlement-offers/statuses');
					}

					if (operation === 'getOffersOnDebt') {
						const debtId = this.getNodeParameter('debtId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/servicing/debts/${debtId}/settlement-offers`);
					}

					if (operation === 'getStatusWorkflow') {
						responseData = await setforthApiRequest.call(this, 'GET', '/servicing/settlement-offers/status-workflow');
					}

					if (operation === 'getTransactionData') {
						const offerId = this.getNodeParameter('offerId', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/servicing/settlement-offers/${offerId}/transactions`);
					}
				}

				// ===== TRANSACTION RESOURCE =====
				if (resource === 'transaction') {
					if (operation === 'getContactTransactions') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;

						if (returnAll) {
							responseData = await setforthApiRequestAllItems.call(this, 'GET', `/servicing/contacts/${contactId}/transactions`, {}, {}, 'transactions');
						} else {
							const limit = this.getNodeParameter('limit', i) as number;
							responseData = await setforthApiRequest.call(this, 'GET', `/servicing/contacts/${contactId}/transactions`, {}, { limit });
							responseData = responseData.transactions || responseData;
						}
					}

					if (operation === 'getAllTypes') {
						responseData = await setforthApiRequest.call(this, 'GET', '/servicing/transactions/types');
					}

					if (operation === 'getAllSubtypes') {
						responseData = await setforthApiRequest.call(this, 'GET', '/servicing/transactions/subtypes');
					}
				}

				// ===== ACCOUNT STATEMENT RESOURCE =====
				if (resource === 'accountStatement') {
					if (operation === 'calculateQuote') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						responseData = await setforthApiRequest.call(this, 'POST', `/servicing/contacts/${contactId}/quote`, parseAdditionalFields(additionalFields));
					}

					if (operation === 'getMonthlyStatement') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const month = this.getNodeParameter('month', i) as string;
						const year = this.getNodeParameter('year', i) as number;

						responseData = await setforthApiRequest.call(this, 'GET', `/servicing/contacts/${contactId}/statements/${year}/${month}`);
					}
				}

				// ===== LENDER RESOURCE =====
				if (resource === 'lender') {
					if (operation === 'monevoGetLenders') {
						responseData = await setforthApiRequest.call(this, 'GET', '/servicing/lenders/monevo');
					}

					if (operation === 'monevoImportOffers') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const offers = this.getNodeParameter('offers', i) as IDataObject[];

						responseData = await setforthApiRequest.call(this, 'POST', `/servicing/contacts/${contactId}/monevo-offers`, { offers });
					}

					if (operation === 'lendingUsaGetStatuses') {
						responseData = await setforthApiRequest.call(this, 'GET', '/servicing/lenders/lending-usa/statuses');
					}

					if (operation === 'lendingUsaCreateStatus') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const status = this.getNodeParameter('status', i) as string;

						responseData = await setforthApiRequest.call(this, 'POST', `/servicing/contacts/${contactId}/lending-usa/status`, { status });
					}

					if (operation === 'lendingUsaUpdateStatus') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const status = this.getNodeParameter('status', i) as string;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/servicing/contacts/${contactId}/lending-usa/status`, { status });
					}

					if (operation === 'lendingUsaDeleteStatus') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/servicing/contacts/${contactId}/lending-usa/status`);
					}

					if (operation === 'lendingUsaUpdateOffers') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const offers = this.getNodeParameter('offers', i) as IDataObject[];

						responseData = await setforthApiRequest.call(this, 'PATCH', `/servicing/contacts/${contactId}/lending-usa/offers`, { offers });
					}

					if (operation === 'lendingUsaUpdateSubmission') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const submissionStatus = this.getNodeParameter('submissionStatus', i) as string;

						responseData = await setforthApiRequest.call(this, 'PATCH', `/servicing/contacts/${contactId}/lending-usa/submission`, { status: submissionStatus });
					}
				}

				// ===== CLIXSIGN RESOURCE =====
				if (resource === 'clixsign') {
					if (operation === 'createSigningRequest') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const documentIds = this.getNodeParameter('documentIds', i) as string[];
						const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

						const body: IDataObject = {
							contact_id: contactId,
							document_ids: documentIds,
							...parseAdditionalFields(additionalFields, {
								signerEmail: 'signer_email',
								signerName: 'signer_name',
								callbackUrl: 'callback_url',
								redirectUrl: 'redirect_url',
							}),
						};

						responseData = await setforthApiRequest.call(this, 'POST', '/clixsign/signing-requests', body);
					}
				}

				// ===== FORTH CREDIT RESOURCE =====
				if (resource === 'forthCredit') {
					if (operation === 'connectKba') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'POST', `/forth-credit/contacts/${contactId}/kba/connect`);
					}

					if (operation === 'verifyKba') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const answers = this.getNodeParameter('answers', i) as IDataObject[];

						responseData = await setforthApiRequest.call(this, 'POST', `/forth-credit/contacts/${contactId}/kba/verify`, { answers });
					}

					if (operation === 'connectSms') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'POST', `/forth-credit/contacts/${contactId}/sms/connect`);
					}

					if (operation === 'verifySms') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const code = this.getNodeParameter('code', i) as string;

						responseData = await setforthApiRequest.call(this, 'POST', `/forth-credit/contacts/${contactId}/sms/verify`, { code });
					}

					if (operation === 'deleteContact') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'DELETE', `/forth-credit/contacts/${contactId}`);
					}

					if (operation === 'orderEquifaxReport') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'POST', `/forth-credit/contacts/${contactId}/equifax/order`);
					}

					if (operation === 'refreshEquifaxReport') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						responseData = await setforthApiRequest.call(this, 'POST', `/forth-credit/contacts/${contactId}/equifax/refresh`);
					}
				}

				// ===== UTILITY RESOURCE =====
				if (resource === 'utility') {
					if (operation === 'getDataSources') {
						responseData = await setforthApiRequest.call(this, 'GET', '/utility/data-sources');
					}

					if (operation === 'searchByPhone') {
						const phoneNumber = this.getNodeParameter('phoneNumber', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', '/utility/search/phone', {}, { phone: formatPhoneNumber(phoneNumber) });
					}

					if (operation === 'validateRoutingNumber') {
						const routingNumber = this.getNodeParameter('routingNumber', i) as string;
						responseData = await setforthApiRequest.call(this, 'GET', `/utility/validate/routing/${routingNumber}`);
					}

					if (operation === 'linkSpinwheel') {
						const contactId = this.getNodeParameter('contactId', i) as string;
						const spinwheelId = this.getNodeParameter('spinwheelId', i) as string;

						responseData = await setforthApiRequest.call(this, 'POST', `/utility/contacts/${contactId}/spinwheel`, { spinwheel_id: spinwheelId });
					}
				}

				// ===== BULK OPERATIONS RESOURCE =====
				if (resource === 'bulk') {
					if (operation === 'updateContacts') {
						const contactIds = this.getNodeParameter('contactIds', i) as string[];
						const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

						const body: IDataObject = {
							contact_ids: contactIds,
							updates: parseAdditionalFields(updateFields, {
								firstName: 'first_name',
								lastName: 'last_name',
							}),
						};

						responseData = await setforthApiRequest.call(this, 'PATCH', '/bulk/contacts', body);
					}

					if (operation === 'applyCompensationTemplates') {
						const contactIds = this.getNodeParameter('contactIds', i) as string[];
						const templateId = this.getNodeParameter('templateId', i) as string;

						const body: IDataObject = {
							contact_ids: contactIds,
							template_id: templateId,
						};

						responseData = await setforthApiRequest.call(this, 'POST', '/bulk/contacts/compensation-templates', body);
					}
				}

				// Build return data
				if (responseData !== undefined) {
					if (Array.isArray(responseData)) {
						returnData.push(...responseData.map((item) => ({ json: item })));
					} else if (responseData.binary) {
						returnData.push({ json: {}, binary: responseData.binary });
					} else {
						returnData.push({ json: responseData });
					}
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: (error as Error).message } });
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
