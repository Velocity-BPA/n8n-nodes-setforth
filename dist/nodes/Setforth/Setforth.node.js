"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Setforth = void 0;
const GenericFunctions_1 = require("./GenericFunctions");
const ContactDescription_1 = require("./descriptions/ContactDescription");
const DebtDescription_1 = require("./descriptions/DebtDescription");
const EnrollmentDescription_1 = require("./descriptions/EnrollmentDescription");
const SettlementOfferDescription_1 = require("./descriptions/SettlementOfferDescription");
const DocumentDescription_1 = require("./descriptions/DocumentDescription");
const ClixsignDescription_1 = require("./descriptions/ClixsignDescription");
const ForthCreditDescription_1 = require("./descriptions/ForthCreditDescription");
const CallDescription_1 = require("./descriptions/CallDescription");
const TaskDescription_1 = require("./descriptions/TaskDescription");
const CalendarEventDescription_1 = require("./descriptions/CalendarEventDescription");
const UserDescription_1 = require("./descriptions/UserDescription");
const MarketingDescription_1 = require("./descriptions/MarketingDescription");
const AdministrationDescription_1 = require("./descriptions/AdministrationDescription");
const CompanyDescription_1 = require("./descriptions/CompanyDescription");
const ConfigurationDescription_1 = require("./descriptions/ConfigurationDescription");
const CreditorDescription_1 = require("./descriptions/CreditorDescription");
const TransactionDescription_1 = require("./descriptions/TransactionDescription");
const AccountStatementDescription_1 = require("./descriptions/AccountStatementDescription");
const LenderDescription_1 = require("./descriptions/LenderDescription");
const UtilityDescription_1 = require("./descriptions/UtilityDescription");
const BulkDescription_1 = require("./descriptions/BulkDescription");
class Setforth {
    description = {
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
            ...ContactDescription_1.contactOperations,
            ...ContactDescription_1.contactFields,
            ...ContactDescription_1.contactListOperations,
            ...ContactDescription_1.contactListFields,
            ...ContactDescription_1.contactAlertOperations,
            ...ContactDescription_1.contactAlertFields,
            ...ContactDescription_1.contactNoteOperations,
            ...ContactDescription_1.contactNoteFields,
            ...ContactDescription_1.contactCommunicationOperations,
            ...ContactDescription_1.contactCommunicationFields,
            ...ContactDescription_1.contactCreditOperations,
            ...ContactDescription_1.contactCreditFields,
            ...ContactDescription_1.contactDocumentOperations,
            ...ContactDescription_1.contactDocumentFields,
            ...ContactDescription_1.contactDebtOperations,
            ...ContactDescription_1.contactDebtFields,
            ...ContactDescription_1.contactWorkflowOperations,
            ...ContactDescription_1.contactWorkflowFields,
            ...ContactDescription_1.contactBankingOperations,
            ...ContactDescription_1.contactBankingFields,
            ...DebtDescription_1.debtOperations,
            ...DebtDescription_1.debtFields,
            ...DebtDescription_1.debtTaskOperations,
            ...DebtDescription_1.debtTaskFields,
            ...DebtDescription_1.debtNoteOperations,
            ...DebtDescription_1.debtNoteFields,
            ...CallDescription_1.callOperations,
            ...CallDescription_1.callFields,
            ...DocumentDescription_1.documentOperations,
            ...DocumentDescription_1.documentFields,
            ...DocumentDescription_1.documentPackageOperations,
            ...DocumentDescription_1.documentPackageFields,
            ...TaskDescription_1.taskOperations,
            ...TaskDescription_1.taskFields,
            ...CalendarEventDescription_1.calendarEventOperations,
            ...CalendarEventDescription_1.calendarEventFields,
            ...UserDescription_1.userOperations,
            ...UserDescription_1.userFields,
            ...MarketingDescription_1.campaignOperations,
            ...MarketingDescription_1.campaignFields,
            ...MarketingDescription_1.emailTemplateOperations,
            ...MarketingDescription_1.emailTemplateFields,
            ...AdministrationDescription_1.teamOperations,
            ...AdministrationDescription_1.teamFields,
            ...AdministrationDescription_1.adminUserOperations,
            ...AdministrationDescription_1.adminUserFields,
            ...CompanyDescription_1.payeeOperations,
            ...CompanyDescription_1.payeeFields,
            ...ConfigurationDescription_1.contentConfigOperations,
            ...ConfigurationDescription_1.contentConfigFields,
            ...ConfigurationDescription_1.documentTypeOperations,
            ...ConfigurationDescription_1.documentTypeFields,
            ...ConfigurationDescription_1.documentTemplateOperations,
            ...ConfigurationDescription_1.documentTemplateFields,
            ...ConfigurationDescription_1.documentPackageTemplateOperations,
            ...ConfigurationDescription_1.documentPackageTemplateFields,
            ...CreditorDescription_1.creditorOperations,
            ...CreditorDescription_1.creditorFields,
            ...EnrollmentDescription_1.enrollmentOperations,
            ...EnrollmentDescription_1.enrollmentFields,
            ...SettlementOfferDescription_1.settlementOfferOperations,
            ...SettlementOfferDescription_1.settlementOfferFields,
            ...TransactionDescription_1.transactionOperations,
            ...TransactionDescription_1.transactionFields,
            ...AccountStatementDescription_1.accountStatementOperations,
            ...AccountStatementDescription_1.accountStatementFields,
            ...LenderDescription_1.lenderOperations,
            ...LenderDescription_1.lenderFields,
            ...ClixsignDescription_1.clixsignOperations,
            ...ClixsignDescription_1.clixsignFields,
            ...ForthCreditDescription_1.forthCreditOperations,
            ...ForthCreditDescription_1.forthCreditFields,
            ...UtilityDescription_1.utilityOperations,
            ...UtilityDescription_1.utilityFields,
            ...BulkDescription_1.bulkOperations,
            ...BulkDescription_1.bulkFields,
        ],
    };
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0);
        for (let i = 0; i < items.length; i++) {
            try {
                let responseData;
                if (resource === 'contact') {
                    if (operation === 'create') {
                        const firstName = this.getNodeParameter('firstName', i);
                        const lastName = this.getNodeParameter('lastName', i);
                        const email = this.getNodeParameter('email', i);
                        const phone = this.getNodeParameter('phone', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            first_name: firstName,
                            last_name: lastName,
                        };
                        if (email)
                            body.email = email;
                        if (phone)
                            body.phone = (0, GenericFunctions_1.formatPhoneNumber)(phone);
                        Object.assign(body, (0, GenericFunctions_1.parseAdditionalFields)(additionalFields, {
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
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/contacts', body);
                    }
                    if (operation === 'get') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/contacts/${contactId}`);
                    }
                    if (operation === 'search') {
                        const searchQuery = this.getNodeParameter('searchQuery', i);
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const filters = this.getNodeParameter('filters', i);
                        const qs = {};
                        if (searchQuery)
                            qs.q = searchQuery;
                        Object.assign(qs, (0, GenericFunctions_1.buildFilters)(filters));
                        if (returnAll) {
                            responseData = await GenericFunctions_1.setforthApiRequestAllItems.call(this, 'GET', '/contacts', {}, qs, 'contacts');
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            qs.limit = limit;
                            responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/contacts', {}, qs);
                            responseData = responseData.contacts || responseData;
                        }
                    }
                    if (operation === 'update') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        const body = (0, GenericFunctions_1.parseAdditionalFields)(updateFields, {
                            firstName: 'first_name',
                            lastName: 'last_name',
                            address1: 'address_line_1',
                            address2: 'address_line_2',
                            zipCode: 'zip_code',
                            dateOfBirth: 'date_of_birth',
                            externalId: 'external_id',
                            middleName: 'middle_name',
                        });
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/contacts/${contactId}`, body);
                    }
                    if (operation === 'delete') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/contacts/${contactId}`);
                    }
                    if (operation === 'delinkCoApplicant') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/delink-co-applicant`);
                    }
                    if (operation === 'getHistoryFeed') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/history`);
                    }
                }
                if (resource === 'contactList') {
                    if (operation === 'getAllFields') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/contact-lists/fields');
                    }
                    if (operation === 'getAllContacts') {
                        const listId = this.getNodeParameter('listId', i);
                        const returnAll = this.getNodeParameter('returnAll', i);
                        if (returnAll) {
                            responseData = await GenericFunctions_1.setforthApiRequestAllItems.call(this, 'GET', `/contact-lists/${listId}/contacts`, {}, {}, 'contacts');
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/contact-lists/${listId}/contacts`, {}, { limit });
                            responseData = responseData.contacts || responseData;
                        }
                    }
                    if (operation === 'download') {
                        const listId = this.getNodeParameter('listId', i);
                        const binaryData = await GenericFunctions_1.setforthApiDownloadFile.call(this, `/contact-lists/${listId}/download`);
                        const data = await this.helpers.prepareBinaryData(binaryData, `contact-list-${listId}.csv`);
                        responseData = { binary: { data } };
                    }
                    if (operation === 'publish') {
                        const listId = this.getNodeParameter('listId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/contact-lists/${listId}/publish`);
                    }
                }
                if (resource === 'contactAlert') {
                    const contactId = this.getNodeParameter('contactId', i);
                    if (operation === 'getAll') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/alerts`);
                    }
                    if (operation === 'create') {
                        const message = this.getNodeParameter('message', i);
                        const alertType = this.getNodeParameter('alertType', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            message,
                            type: alertType,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/alerts`, body);
                    }
                    if (operation === 'update') {
                        const alertId = this.getNodeParameter('alertId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/contacts/${contactId}/alerts/${alertId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields));
                    }
                    if (operation === 'delete') {
                        const alertId = this.getNodeParameter('alertId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/contacts/${contactId}/alerts/${alertId}`);
                    }
                }
                if (resource === 'contactNote') {
                    const contactId = this.getNodeParameter('contactId', i);
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        if (returnAll) {
                            responseData = await GenericFunctions_1.setforthApiRequestAllItems.call(this, 'GET', `/contacts/${contactId}/notes`, {}, {}, 'notes');
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/notes`, {}, { limit });
                            responseData = responseData.notes || responseData;
                        }
                    }
                    if (operation === 'create') {
                        const content = this.getNodeParameter('content', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            content,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields, { noteType: 'note_type' }),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/notes`, body);
                    }
                    if (operation === 'update') {
                        const noteId = this.getNodeParameter('noteId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/contacts/${contactId}/notes/${noteId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields));
                    }
                    if (operation === 'delete') {
                        const noteId = this.getNodeParameter('noteId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/contacts/${contactId}/notes/${noteId}`);
                    }
                }
                if (resource === 'contactCommunication') {
                    const contactId = this.getNodeParameter('contactId', i);
                    if (operation === 'sendEmail') {
                        const templateId = this.getNodeParameter('templateId', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            template_id: templateId,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/email`, body);
                    }
                    if (operation === 'sendSms') {
                        const message = this.getNodeParameter('message', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            message,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/sms`, body);
                    }
                    if (operation === 'getSmsRecords') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/sms`);
                    }
                    if (operation === 'createSmsLog') {
                        const message = this.getNodeParameter('message', i);
                        const direction = this.getNodeParameter('direction', i);
                        const body = {
                            message,
                            direction,
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/sms/log`, body);
                    }
                    if (operation === 'sendExternalFormRequest') {
                        const formId = this.getNodeParameter('formId', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            form_id: formId,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/external-form`, body);
                    }
                }
                if (resource === 'contactCredit') {
                    const contactId = this.getNodeParameter('contactId', i);
                    if (operation === 'pullCredit') {
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/credit/pull`, (0, GenericFunctions_1.parseAdditionalFields)(additionalFields));
                    }
                    if (operation === 'getLastReport') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/credit/last-report`);
                    }
                }
                if (resource === 'contactDocument') {
                    const contactId = this.getNodeParameter('contactId', i);
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        if (returnAll) {
                            responseData = await GenericFunctions_1.setforthApiRequestAllItems.call(this, 'GET', `/contacts/${contactId}/documents`, {}, {}, 'documents');
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/documents`, {}, { limit });
                            responseData = responseData.documents || responseData;
                        }
                    }
                    if (operation === 'upload') {
                        const binaryPropertyName = this.getNodeParameter('binaryPropertyName', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        responseData = await GenericFunctions_1.setforthApiUploadFile.call(this, `/contacts/${contactId}/documents`, binaryPropertyName, (0, GenericFunctions_1.parseAdditionalFields)(additionalFields, { documentType: 'document_type' }), i);
                    }
                    if (operation === 'get') {
                        const documentId = this.getNodeParameter('documentId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/documents/${documentId}`);
                    }
                    if (operation === 'update') {
                        const documentId = this.getNodeParameter('documentId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/contacts/${contactId}/documents/${documentId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields));
                    }
                    if (operation === 'delete') {
                        const documentId = this.getNodeParameter('documentId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/contacts/${contactId}/documents/${documentId}`);
                    }
                }
                if (resource === 'contactDebt') {
                    const contactId = this.getNodeParameter('contactId', i);
                    const returnAll = this.getNodeParameter('returnAll', i);
                    let endpoint = `/contacts/${contactId}/debts`;
                    if (operation === 'getEnrolled')
                        endpoint += '/enrolled';
                    if (operation === 'getUnenrolled')
                        endpoint += '/unenrolled';
                    if (operation === 'getSettled')
                        endpoint += '/settled';
                    if (operation === 'getUnsettled')
                        endpoint += '/unsettled';
                    if (returnAll) {
                        responseData = await GenericFunctions_1.setforthApiRequestAllItems.call(this, 'GET', endpoint, {}, {}, 'debts');
                    }
                    else {
                        const limit = this.getNodeParameter('limit', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', endpoint, {}, { limit });
                        responseData = responseData.debts || responseData;
                    }
                }
                if (resource === 'contactWorkflow') {
                    if (operation === 'getStatusHistory') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/workflow`);
                    }
                    if (operation === 'listStages') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/workflow/stages');
                    }
                    if (operation === 'listStatuses') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/workflow/statuses');
                    }
                    if (operation === 'updateStatus') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const statusId = this.getNodeParameter('statusId', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            status_id: statusId,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/contacts/${contactId}/workflow`, body);
                    }
                }
                if (resource === 'contactBanking') {
                    const contactId = this.getNodeParameter('contactId', i);
                    if (operation === 'getDetails') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/banking`);
                    }
                    if (operation === 'get') {
                        const accountId = this.getNodeParameter('accountId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/contacts/${contactId}/banking/${accountId}`);
                    }
                    if (operation === 'create') {
                        const accountNumber = this.getNodeParameter('accountNumber', i);
                        const routingNumber = this.getNodeParameter('routingNumber', i);
                        const accountType = this.getNodeParameter('accountType', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            account_number: accountNumber,
                            routing_number: routingNumber,
                            account_type: accountType,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields, { accountHolderName: 'account_holder_name', bankName: 'bank_name' }),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/contacts/${contactId}/banking`, body);
                    }
                    if (operation === 'update') {
                        const accountId = this.getNodeParameter('accountId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/contacts/${contactId}/banking/${accountId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields, {
                            accountNumber: 'account_number',
                            routingNumber: 'routing_number',
                            accountType: 'account_type',
                            accountHolderName: 'account_holder_name',
                            bankName: 'bank_name',
                        }));
                    }
                }
                if (resource === 'debt') {
                    if (operation === 'create') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const creditorName = this.getNodeParameter('creditorName', i);
                        const originalBalance = this.getNodeParameter('originalBalance', i);
                        const currentBalance = this.getNodeParameter('currentBalance', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            contact_id: contactId,
                            creditor_name: creditorName,
                            original_balance: originalBalance,
                            current_balance: currentBalance,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields, {
                                accountNumber: 'account_number',
                                debtType: 'debt_type',
                                interestRate: 'interest_rate',
                                lastPaymentAmount: 'last_payment_amount',
                                lastPaymentDate: 'last_payment_date',
                                minimumPayment: 'minimum_payment',
                            }),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/debts', body);
                    }
                    if (operation === 'get') {
                        const debtId = this.getNodeParameter('debtId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/debts/${debtId}`);
                    }
                    if (operation === 'update') {
                        const debtId = this.getNodeParameter('debtId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/debts/${debtId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields, {
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
                        const debtId = this.getNodeParameter('debtId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/debts/${debtId}`);
                    }
                    if (operation === 'updateType') {
                        const debtId = this.getNodeParameter('debtId', i);
                        const debtTypeId = this.getNodeParameter('debtTypeId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/debts/${debtId}/type`, { debt_type_id: debtTypeId });
                    }
                    if (operation === 'getDocuments') {
                        const debtId = this.getNodeParameter('debtId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/debts/${debtId}/documents`);
                    }
                }
                if (resource === 'debtTask') {
                    const debtId = this.getNodeParameter('debtId', i);
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        if (returnAll) {
                            responseData = await GenericFunctions_1.setforthApiRequestAllItems.call(this, 'GET', `/debts/${debtId}/tasks`, {}, {}, 'tasks');
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/debts/${debtId}/tasks`, {}, { limit });
                            responseData = responseData.tasks || responseData;
                        }
                    }
                    if (operation === 'create') {
                        const title = this.getNodeParameter('title', i);
                        const dueDate = this.getNodeParameter('dueDate', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            title,
                            due_date: (0, GenericFunctions_1.formatDate)(dueDate),
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields, { assignedUserId: 'assigned_user_id' }),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/debts/${debtId}/tasks`, body);
                    }
                    if (operation === 'update') {
                        const taskId = this.getNodeParameter('taskId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (updateFields.dueDate) {
                            updateFields.dueDate = (0, GenericFunctions_1.formatDate)(updateFields.dueDate);
                        }
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/debts/${debtId}/tasks/${taskId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields, {
                            dueDate: 'due_date',
                            assignedUserId: 'assigned_user_id',
                        }));
                    }
                    if (operation === 'delete') {
                        const taskId = this.getNodeParameter('taskId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/debts/${debtId}/tasks/${taskId}`);
                    }
                }
                if (resource === 'debtNote') {
                    const debtId = this.getNodeParameter('debtId', i);
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        if (returnAll) {
                            responseData = await GenericFunctions_1.setforthApiRequestAllItems.call(this, 'GET', `/debts/${debtId}/notes`, {}, {}, 'notes');
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/debts/${debtId}/notes`, {}, { limit });
                            responseData = responseData.notes || responseData;
                        }
                    }
                    if (operation === 'create') {
                        const content = this.getNodeParameter('content', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/debts/${debtId}/notes`, { content });
                    }
                    if (operation === 'update') {
                        const noteId = this.getNodeParameter('noteId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/debts/${debtId}/notes/${noteId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields));
                    }
                    if (operation === 'delete') {
                        const noteId = this.getNodeParameter('noteId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/debts/${debtId}/notes/${noteId}`);
                    }
                }
                if (resource === 'call') {
                    if (operation === 'create') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const direction = this.getNodeParameter('direction', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            contact_id: contactId,
                            direction,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields, {
                                dispositionId: 'disposition_id',
                                durationSeconds: 'duration_seconds',
                                phoneNumber: 'phone_number',
                                recordingUrl: 'recording_url',
                            }),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/calls', body);
                    }
                    if (operation === 'get') {
                        const callId = this.getNodeParameter('callId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/calls/${callId}`);
                    }
                    if (operation === 'update') {
                        const callId = this.getNodeParameter('callId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/calls/${callId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields, {
                            dispositionId: 'disposition_id',
                            durationSeconds: 'duration_seconds',
                        }));
                    }
                    if (operation === 'delete') {
                        const callId = this.getNodeParameter('callId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/calls/${callId}`);
                    }
                    if (operation === 'getDispositions') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/calls/dispositions');
                    }
                }
                if (resource === 'document') {
                    if (operation === 'generate') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const templateId = this.getNodeParameter('templateId', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            contact_id: contactId,
                            template_id: templateId,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/documents/generate', body);
                    }
                    if (operation === 'delete') {
                        const documentId = this.getNodeParameter('documentId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/documents/${documentId}`);
                    }
                }
                if (resource === 'documentPackage') {
                    if (operation === 'generate') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const packageTemplateId = this.getNodeParameter('packageTemplateId', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            contact_id: contactId,
                            package_template_id: packageTemplateId,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/document-packages/generate', body);
                    }
                    if (operation === 'delete') {
                        const packageId = this.getNodeParameter('packageId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/document-packages/${packageId}`);
                    }
                }
                if (resource === 'task') {
                    if (operation === 'create') {
                        const title = this.getNodeParameter('title', i);
                        const dueDate = this.getNodeParameter('dueDate', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            title,
                            due_date: (0, GenericFunctions_1.formatDate)(dueDate),
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields, {
                                assignedUserId: 'assigned_user_id',
                                contactId: 'contact_id',
                            }),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/tasks', body);
                    }
                    if (operation === 'get') {
                        const taskId = this.getNodeParameter('taskId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/tasks/${taskId}`);
                    }
                    if (operation === 'update') {
                        const taskId = this.getNodeParameter('taskId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (updateFields.dueDate) {
                            updateFields.dueDate = (0, GenericFunctions_1.formatDate)(updateFields.dueDate);
                        }
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/tasks/${taskId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields, {
                            dueDate: 'due_date',
                            assignedUserId: 'assigned_user_id',
                        }));
                    }
                    if (operation === 'delete') {
                        const taskId = this.getNodeParameter('taskId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/tasks/${taskId}`);
                    }
                    if (operation === 'complete') {
                        const taskId = this.getNodeParameter('taskId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/tasks/${taskId}/complete`);
                    }
                }
                if (resource === 'calendarEvent') {
                    if (operation === 'create') {
                        const title = this.getNodeParameter('title', i);
                        const startTime = this.getNodeParameter('startTime', i);
                        const endTime = this.getNodeParameter('endTime', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            title,
                            start_time: (0, GenericFunctions_1.formatDate)(startTime),
                            end_time: (0, GenericFunctions_1.formatDate)(endTime),
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields, {
                                contactId: 'contact_id',
                                allDay: 'all_day',
                            }),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/calendar/events', body);
                    }
                    if (operation === 'get') {
                        const eventId = this.getNodeParameter('eventId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/calendar/events/${eventId}`);
                    }
                    if (operation === 'update') {
                        const eventId = this.getNodeParameter('eventId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        if (updateFields.startTime) {
                            updateFields.startTime = (0, GenericFunctions_1.formatDate)(updateFields.startTime);
                        }
                        if (updateFields.endTime) {
                            updateFields.endTime = (0, GenericFunctions_1.formatDate)(updateFields.endTime);
                        }
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/calendar/events/${eventId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields, {
                            startTime: 'start_time',
                            endTime: 'end_time',
                            allDay: 'all_day',
                        }));
                    }
                    if (operation === 'delete') {
                        const eventId = this.getNodeParameter('eventId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/calendar/events/${eventId}`);
                    }
                }
                if (resource === 'user') {
                    if (operation === 'getCurrent') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/users/me');
                    }
                    if (operation === 'getTasks') {
                        const userId = this.getNodeParameter('userId', i);
                        const returnAll = this.getNodeParameter('returnAll', i);
                        if (returnAll) {
                            responseData = await GenericFunctions_1.setforthApiRequestAllItems.call(this, 'GET', `/users/${userId}/tasks`, {}, {}, 'tasks');
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/users/${userId}/tasks`, {}, { limit });
                            responseData = responseData.tasks || responseData;
                        }
                    }
                    if (operation === 'getEvents') {
                        const userId = this.getNodeParameter('userId', i);
                        const returnAll = this.getNodeParameter('returnAll', i);
                        if (returnAll) {
                            responseData = await GenericFunctions_1.setforthApiRequestAllItems.call(this, 'GET', `/users/${userId}/events`, {}, {}, 'events');
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/users/${userId}/events`, {}, { limit });
                            responseData = responseData.events || responseData;
                        }
                    }
                }
                if (resource === 'campaign') {
                    if (operation === 'create') {
                        const name = this.getNodeParameter('name', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            name,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/marketing/campaigns', body);
                    }
                    if (operation === 'get') {
                        const campaignId = this.getNodeParameter('campaignId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/marketing/campaigns/${campaignId}`);
                    }
                    if (operation === 'update') {
                        const campaignId = this.getNodeParameter('campaignId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/marketing/campaigns/${campaignId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields));
                    }
                    if (operation === 'delete') {
                        const campaignId = this.getNodeParameter('campaignId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/marketing/campaigns/${campaignId}`);
                    }
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        if (returnAll) {
                            responseData = await GenericFunctions_1.setforthApiRequestAllItems.call(this, 'GET', '/marketing/campaigns', {}, {}, 'campaigns');
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/marketing/campaigns', {}, { limit });
                            responseData = responseData.campaigns || responseData;
                        }
                    }
                }
                if (resource === 'emailTemplate') {
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        if (returnAll) {
                            responseData = await GenericFunctions_1.setforthApiRequestAllItems.call(this, 'GET', '/marketing/email-templates', {}, {}, 'templates');
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/marketing/email-templates', {}, { limit });
                            responseData = responseData.templates || responseData;
                        }
                    }
                }
                if (resource === 'team') {
                    if (operation === 'getAll') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/admin/teams');
                    }
                    if (operation === 'create') {
                        const name = this.getNodeParameter('name', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            name,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/admin/teams', body);
                    }
                    if (operation === 'get') {
                        const teamId = this.getNodeParameter('teamId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/admin/teams/${teamId}`);
                    }
                    if (operation === 'update') {
                        const teamId = this.getNodeParameter('teamId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/admin/teams/${teamId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields));
                    }
                    if (operation === 'delete') {
                        const teamId = this.getNodeParameter('teamId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/admin/teams/${teamId}`);
                    }
                }
                if (resource === 'adminUser') {
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        if (returnAll) {
                            responseData = await GenericFunctions_1.setforthApiRequestAllItems.call(this, 'GET', '/admin/users', {}, {}, 'users');
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/admin/users', {}, { limit });
                            responseData = responseData.users || responseData;
                        }
                    }
                    if (operation === 'create') {
                        const email = this.getNodeParameter('email', i);
                        const firstName = this.getNodeParameter('firstName', i);
                        const lastName = this.getNodeParameter('lastName', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            email,
                            first_name: firstName,
                            last_name: lastName,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields, { teamId: 'team_id' }),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/admin/users', body);
                    }
                    if (operation === 'get') {
                        const userId = this.getNodeParameter('userId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/admin/users/${userId}`);
                    }
                    if (operation === 'update') {
                        const userId = this.getNodeParameter('userId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/admin/users/${userId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields, {
                            firstName: 'first_name',
                            lastName: 'last_name',
                            teamId: 'team_id',
                        }));
                    }
                    if (operation === 'delete') {
                        const userId = this.getNodeParameter('userId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/admin/users/${userId}`);
                    }
                    if (operation === 'getSettings') {
                        const userId = this.getNodeParameter('userId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/admin/users/${userId}/settings`);
                    }
                    if (operation === 'updateSettings') {
                        const userId = this.getNodeParameter('userId', i);
                        const settings = this.getNodeParameter('settings', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/admin/users/${userId}/settings`, settings);
                    }
                }
                if (resource === 'payee') {
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        if (returnAll) {
                            responseData = await GenericFunctions_1.setforthApiRequestAllItems.call(this, 'GET', '/companies/payees', {}, {}, 'payees');
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/companies/payees', {}, { limit });
                            responseData = responseData.payees || responseData;
                        }
                    }
                    if (operation === 'create') {
                        const name = this.getNodeParameter('name', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            name,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/companies/payees', body);
                    }
                    if (operation === 'update') {
                        const payeeId = this.getNodeParameter('payeeId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/companies/payees/${payeeId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields));
                    }
                }
                if (resource === 'contentConfig') {
                    if (operation === 'getAllContactFields') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/config/contact-fields');
                    }
                    if (operation === 'getNoteTypes') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/config/note-types');
                    }
                    if (operation === 'getDebtTypes') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/config/debt-types');
                    }
                    if (operation === 'getDebtStatuses') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/config/debt-statuses');
                    }
                    if (operation === 'updateDebtStatus') {
                        const statusId = this.getNodeParameter('statusId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/config/debt-statuses/${statusId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields));
                    }
                }
                if (resource === 'documentType') {
                    if (operation === 'getAll') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/config/document-types');
                    }
                    if (operation === 'create') {
                        const name = this.getNodeParameter('name', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            name,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/config/document-types', body);
                    }
                    if (operation === 'update') {
                        const typeId = this.getNodeParameter('typeId', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/config/document-types/${typeId}`, (0, GenericFunctions_1.parseAdditionalFields)(updateFields));
                    }
                    if (operation === 'delete') {
                        const typeId = this.getNodeParameter('typeId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/config/document-types/${typeId}`);
                    }
                }
                if (resource === 'documentTemplate') {
                    if (operation === 'getAll') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/documents/templates');
                    }
                }
                if (resource === 'documentPackageTemplate') {
                    if (operation === 'getAll') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/document-packages/templates');
                    }
                }
                if (resource === 'creditor') {
                    if (operation === 'get') {
                        const creditorId = this.getNodeParameter('creditorId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/servicing/creditors/${creditorId}`);
                    }
                    if (operation === 'create') {
                        const name = this.getNodeParameter('name', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            name,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/servicing/creditors', body);
                    }
                }
                if (resource === 'enrollment') {
                    if (operation === 'createPlans') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const plans = this.getNodeParameter('plans', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/plans`, { plans });
                    }
                    if (operation === 'updatePlans') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const plans = this.getNodeParameter('plans', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/servicing/enrollments/${contactId}/plans`, { plans });
                    }
                    if (operation === 'deletePlans') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const planIds = this.getNodeParameter('planIds', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/servicing/enrollments/${contactId}/plans`, { plan_ids: planIds });
                    }
                    if (operation === 'returnPlans') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const planIds = this.getNodeParameter('planIds', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/plans/return`, { plan_ids: planIds });
                    }
                    if (operation === 'submit') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/submit`);
                    }
                    if (operation === 'approve') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/approve`);
                    }
                    if (operation === 'uploadGatewayAuth') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const binaryPropertyName = this.getNodeParameter('binaryPropertyName', i);
                        responseData = await GenericFunctions_1.setforthApiUploadFile.call(this, `/servicing/enrollments/${contactId}/gateway-auth`, binaryPropertyName, {}, i);
                    }
                    if (operation === 'getDetails') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/servicing/enrollments/${contactId}`);
                    }
                    if (operation === 'enrollContact') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/enroll`, (0, GenericFunctions_1.parseAdditionalFields)(additionalFields));
                    }
                    if (operation === 'unassignPlan') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const planId = this.getNodeParameter('planId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/plans/${planId}/unassign`);
                    }
                    if (operation === 'returnContact') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/return`, (0, GenericFunctions_1.parseAdditionalFields)(additionalFields));
                    }
                    if (operation === 'pause') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/pause`, (0, GenericFunctions_1.parseAdditionalFields)(additionalFields));
                    }
                    if (operation === 'resumePayments') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/resume`);
                    }
                    if (operation === 'addProgramSponsor') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const sponsorId = this.getNodeParameter('sponsorId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/servicing/enrollments/${contactId}/sponsor`, { sponsor_id: sponsorId });
                    }
                    if (operation === 'getGatewayBalance') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/servicing/enrollments/${contactId}/gateway-balance`);
                    }
                }
                if (resource === 'settlementOffer') {
                    if (operation === 'create') {
                        const debtId = this.getNodeParameter('debtId', i);
                        const settlementAmount = this.getNodeParameter('settlementAmount', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            debt_id: debtId,
                            settlement_amount: settlementAmount,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields, {
                                settlementPercentage: 'settlement_percentage',
                                expirationDate: 'expiration_date',
                                paymentSchedule: 'payment_schedule',
                            }),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/servicing/settlement-offers', body);
                    }
                    if (operation === 'get') {
                        const offerId = this.getNodeParameter('offerId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/servicing/settlement-offers/${offerId}`);
                    }
                    if (operation === 'delete') {
                        const offerId = this.getNodeParameter('offerId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/servicing/settlement-offers/${offerId}`);
                    }
                    if (operation === 'void') {
                        const offerId = this.getNodeParameter('offerId', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/servicing/settlement-offers/${offerId}/void`, (0, GenericFunctions_1.parseAdditionalFields)(additionalFields));
                    }
                    if (operation === 'getAllStatuses') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/servicing/settlement-offers/statuses');
                    }
                    if (operation === 'getOffersOnDebt') {
                        const debtId = this.getNodeParameter('debtId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/servicing/debts/${debtId}/settlement-offers`);
                    }
                    if (operation === 'getStatusWorkflow') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/servicing/settlement-offers/status-workflow');
                    }
                    if (operation === 'getTransactionData') {
                        const offerId = this.getNodeParameter('offerId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/servicing/settlement-offers/${offerId}/transactions`);
                    }
                }
                if (resource === 'transaction') {
                    if (operation === 'getContactTransactions') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const returnAll = this.getNodeParameter('returnAll', i);
                        if (returnAll) {
                            responseData = await GenericFunctions_1.setforthApiRequestAllItems.call(this, 'GET', `/servicing/contacts/${contactId}/transactions`, {}, {}, 'transactions');
                        }
                        else {
                            const limit = this.getNodeParameter('limit', i);
                            responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/servicing/contacts/${contactId}/transactions`, {}, { limit });
                            responseData = responseData.transactions || responseData;
                        }
                    }
                    if (operation === 'getAllTypes') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/servicing/transactions/types');
                    }
                    if (operation === 'getAllSubtypes') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/servicing/transactions/subtypes');
                    }
                }
                if (resource === 'accountStatement') {
                    if (operation === 'calculateQuote') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/servicing/contacts/${contactId}/quote`, (0, GenericFunctions_1.parseAdditionalFields)(additionalFields));
                    }
                    if (operation === 'getMonthlyStatement') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const month = this.getNodeParameter('month', i);
                        const year = this.getNodeParameter('year', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/servicing/contacts/${contactId}/statements/${year}/${month}`);
                    }
                }
                if (resource === 'lender') {
                    if (operation === 'monevoGetLenders') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/servicing/lenders/monevo');
                    }
                    if (operation === 'monevoImportOffers') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const offers = this.getNodeParameter('offers', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/servicing/contacts/${contactId}/monevo-offers`, { offers });
                    }
                    if (operation === 'lendingUsaGetStatuses') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/servicing/lenders/lending-usa/statuses');
                    }
                    if (operation === 'lendingUsaCreateStatus') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const status = this.getNodeParameter('status', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/servicing/contacts/${contactId}/lending-usa/status`, { status });
                    }
                    if (operation === 'lendingUsaUpdateStatus') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const status = this.getNodeParameter('status', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/servicing/contacts/${contactId}/lending-usa/status`, { status });
                    }
                    if (operation === 'lendingUsaDeleteStatus') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/servicing/contacts/${contactId}/lending-usa/status`);
                    }
                    if (operation === 'lendingUsaUpdateOffers') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const offers = this.getNodeParameter('offers', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/servicing/contacts/${contactId}/lending-usa/offers`, { offers });
                    }
                    if (operation === 'lendingUsaUpdateSubmission') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const submissionStatus = this.getNodeParameter('submissionStatus', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', `/servicing/contacts/${contactId}/lending-usa/submission`, { status: submissionStatus });
                    }
                }
                if (resource === 'clixsign') {
                    if (operation === 'createSigningRequest') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const documentIds = this.getNodeParameter('documentIds', i);
                        const additionalFields = this.getNodeParameter('additionalFields', i);
                        const body = {
                            contact_id: contactId,
                            document_ids: documentIds,
                            ...(0, GenericFunctions_1.parseAdditionalFields)(additionalFields, {
                                signerEmail: 'signer_email',
                                signerName: 'signer_name',
                                callbackUrl: 'callback_url',
                                redirectUrl: 'redirect_url',
                            }),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/clixsign/signing-requests', body);
                    }
                }
                if (resource === 'forthCredit') {
                    if (operation === 'connectKba') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/forth-credit/contacts/${contactId}/kba/connect`);
                    }
                    if (operation === 'verifyKba') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const answers = this.getNodeParameter('answers', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/forth-credit/contacts/${contactId}/kba/verify`, { answers });
                    }
                    if (operation === 'connectSms') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/forth-credit/contacts/${contactId}/sms/connect`);
                    }
                    if (operation === 'verifySms') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const code = this.getNodeParameter('code', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/forth-credit/contacts/${contactId}/sms/verify`, { code });
                    }
                    if (operation === 'deleteContact') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'DELETE', `/forth-credit/contacts/${contactId}`);
                    }
                    if (operation === 'orderEquifaxReport') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/forth-credit/contacts/${contactId}/equifax/order`);
                    }
                    if (operation === 'refreshEquifaxReport') {
                        const contactId = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/forth-credit/contacts/${contactId}/equifax/refresh`);
                    }
                }
                if (resource === 'utility') {
                    if (operation === 'getDataSources') {
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/utility/data-sources');
                    }
                    if (operation === 'searchByPhone') {
                        const phoneNumber = this.getNodeParameter('phoneNumber', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', '/utility/search/phone', {}, { phone: (0, GenericFunctions_1.formatPhoneNumber)(phoneNumber) });
                    }
                    if (operation === 'validateRoutingNumber') {
                        const routingNumber = this.getNodeParameter('routingNumber', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'GET', `/utility/validate/routing/${routingNumber}`);
                    }
                    if (operation === 'linkSpinwheel') {
                        const contactId = this.getNodeParameter('contactId', i);
                        const spinwheelId = this.getNodeParameter('spinwheelId', i);
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', `/utility/contacts/${contactId}/spinwheel`, { spinwheel_id: spinwheelId });
                    }
                }
                if (resource === 'bulk') {
                    if (operation === 'updateContacts') {
                        const contactIds = this.getNodeParameter('contactIds', i);
                        const updateFields = this.getNodeParameter('updateFields', i);
                        const body = {
                            contact_ids: contactIds,
                            updates: (0, GenericFunctions_1.parseAdditionalFields)(updateFields, {
                                firstName: 'first_name',
                                lastName: 'last_name',
                            }),
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'PATCH', '/bulk/contacts', body);
                    }
                    if (operation === 'applyCompensationTemplates') {
                        const contactIds = this.getNodeParameter('contactIds', i);
                        const templateId = this.getNodeParameter('templateId', i);
                        const body = {
                            contact_ids: contactIds,
                            template_id: templateId,
                        };
                        responseData = await GenericFunctions_1.setforthApiRequest.call(this, 'POST', '/bulk/contacts/compensation-templates', body);
                    }
                }
                if (responseData !== undefined) {
                    if (Array.isArray(responseData)) {
                        returnData.push(...responseData.map((item) => ({ json: item })));
                    }
                    else if (responseData.binary) {
                        returnData.push({ json: {}, binary: responseData.binary });
                    }
                    else {
                        returnData.push({ json: responseData });
                    }
                }
            }
            catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({ json: { error: error.message } });
                    continue;
                }
                throw error;
            }
        }
        return [returnData];
    }
}
exports.Setforth = Setforth;
//# sourceMappingURL=Setforth.node.js.map