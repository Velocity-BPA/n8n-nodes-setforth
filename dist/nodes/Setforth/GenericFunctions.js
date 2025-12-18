"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseUrl = getBaseUrl;
exports.getAccessToken = getAccessToken;
exports.setforthApiRequest = setforthApiRequest;
exports.setforthApiRequestAllItems = setforthApiRequestAllItems;
exports.setforthApiUploadFile = setforthApiUploadFile;
exports.setforthApiDownloadFile = setforthApiDownloadFile;
exports.formatPhoneNumber = formatPhoneNumber;
exports.formatDate = formatDate;
exports.parseAdditionalFields = parseAdditionalFields;
exports.buildFilters = buildFilters;
const n8n_workflow_1 = require("n8n-workflow");
function getBaseUrl(credentials) {
    if (credentials.customApiUrl) {
        return credentials.customApiUrl;
    }
    return credentials.environment === 'production'
        ? 'https://api.setforth.com'
        : 'https://api.sandbox.setforth.com';
}
async function getAccessToken() {
    const credentials = await this.getCredentials('setforthOAuth2Api');
    const baseUrl = getBaseUrl(credentials);
    const tokenUrl = `${baseUrl}/oauth/token`;
    const options = {
        method: 'POST',
        url: tokenUrl,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: credentials.clientId,
            client_secret: credentials.clientSecret,
            scope: credentials.scopes || '',
        }).toString(),
        json: true,
    };
    try {
        const response = await this.helpers.httpRequest(options);
        return response.access_token;
    }
    catch (error) {
        throw new n8n_workflow_1.NodeApiError(this.getNode(), error, {
            message: 'Failed to obtain access token',
        });
    }
}
async function setforthApiRequest(method, endpoint, body = {}, qs = {}, uri, option = {}) {
    const credentials = await this.getCredentials('setforthOAuth2Api');
    const baseUrl = getBaseUrl(credentials);
    const accessToken = await getAccessToken.call(this);
    const options = {
        method,
        url: uri || `${baseUrl}/v1${endpoint}`,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        qs,
        json: true,
        ...option,
    };
    if (Object.keys(body).length !== 0) {
        options.body = body;
    }
    try {
        return await this.helpers.httpRequest(options);
    }
    catch (error) {
        if (error.statusCode === 429) {
            const retryAfter = error.response?.headers?.['retry-after'] || 60;
            throw new n8n_workflow_1.NodeApiError(this.getNode(), error, {
                message: `Rate limit exceeded. Please retry after ${retryAfter} seconds.`,
            });
        }
        const errorMessage = getSetforthErrorMessage(error);
        throw new n8n_workflow_1.NodeApiError(this.getNode(), error, {
            message: errorMessage,
        });
    }
}
async function setforthApiRequestAllItems(method, endpoint, body = {}, qs = {}, propertyName = 'data') {
    const returnData = [];
    let responseData;
    let nextCursor;
    do {
        if (nextCursor) {
            qs.cursor = nextCursor;
        }
        responseData = await setforthApiRequest.call(this, method, endpoint, body, qs);
        if (responseData[propertyName]) {
            returnData.push(...responseData[propertyName]);
        }
        else if (Array.isArray(responseData)) {
            returnData.push(...responseData);
        }
        nextCursor = responseData.next_cursor || responseData.nextCursor;
        if (!nextCursor && responseData.pagination) {
            const { page, total_pages } = responseData.pagination;
            if (page < total_pages) {
                qs.page = page + 1;
                nextCursor = 'continue';
            }
        }
    } while (nextCursor);
    return returnData;
}
async function setforthApiUploadFile(endpoint, binaryPropertyName, additionalFields = {}, itemIndex = 0) {
    const credentials = await this.getCredentials('setforthOAuth2Api');
    const baseUrl = getBaseUrl(credentials);
    const accessToken = await getAccessToken.call(this);
    const binaryData = this.helpers.assertBinaryData(itemIndex, binaryPropertyName);
    const dataBuffer = await this.helpers.getBinaryDataBuffer(itemIndex, binaryPropertyName);
    const formData = {
        file: {
            value: dataBuffer,
            options: {
                filename: binaryData.fileName,
                contentType: binaryData.mimeType,
            },
        },
        ...additionalFields,
    };
    const options = {
        method: 'POST',
        url: `${baseUrl}/v1${endpoint}`,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        body: formData,
        json: true,
    };
    try {
        return await this.helpers.httpRequest(options);
    }
    catch (error) {
        throw new n8n_workflow_1.NodeApiError(this.getNode(), error, {
            message: 'Failed to upload file',
        });
    }
}
async function setforthApiDownloadFile(endpoint, qs = {}) {
    const credentials = await this.getCredentials('setforthOAuth2Api');
    const baseUrl = getBaseUrl(credentials);
    const accessToken = await getAccessToken.call(this);
    const options = {
        method: 'GET',
        url: `${baseUrl}/v1${endpoint}`,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        qs,
        returnFullResponse: true,
        encoding: 'arraybuffer',
    };
    try {
        const response = await this.helpers.httpRequest(options);
        return Buffer.from(response.body);
    }
    catch (error) {
        throw new n8n_workflow_1.NodeApiError(this.getNode(), error, {
            message: 'Failed to download file',
        });
    }
}
function getSetforthErrorMessage(error) {
    const statusCode = error.statusCode || error.status;
    const errorBody = error.body || error.response?.body || {};
    const errorCodes = {
        'INVALID_CONTACT': 'The specified contact does not exist or is invalid.',
        'INVALID_DEBT': 'The specified debt does not exist or is invalid.',
        'ENROLLMENT_EXISTS': 'An enrollment already exists for this contact.',
        'SETTLEMENT_PENDING': 'A settlement offer is already pending for this debt.',
        'INSUFFICIENT_PERMISSIONS': 'You do not have permission to perform this action.',
        'DOCUMENT_NOT_FOUND': 'The requested document was not found.',
        'CREDIT_PULL_FAILED': 'Failed to pull credit report. Please verify contact information.',
        'KBA_VERIFICATION_FAILED': 'Knowledge-based authentication verification failed.',
        'INVALID_ROUTING_NUMBER': 'The provided routing number is invalid.',
        'CLIXSIGN_ERROR': 'E-signature request failed. Please try again.',
    };
    if (errorBody.error_code && errorCodes[errorBody.error_code]) {
        return errorCodes[errorBody.error_code];
    }
    if (errorBody.message) {
        return errorBody.message;
    }
    switch (statusCode) {
        case 400:
            return 'Bad request. Please check your input parameters.';
        case 401:
            return 'Authentication failed. Please check your credentials.';
        case 403:
            return 'Access forbidden. You do not have permission to access this resource.';
        case 404:
            return 'Resource not found.';
        case 409:
            return 'Conflict. The resource already exists or there is a conflicting operation.';
        case 422:
            return 'Validation failed. Please check your input data.';
        case 500:
            return 'Internal server error. Please try again later.';
        case 503:
            return 'Service temporarily unavailable. Please try again later.';
        default:
            return `API request failed with status ${statusCode}`;
    }
}
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return `+1${cleaned}`;
    }
    if (cleaned.length === 11 && cleaned.startsWith('1')) {
        return `+${cleaned}`;
    }
    return phone;
}
function formatDate(date) {
    if (date instanceof Date) {
        return date.toISOString();
    }
    return new Date(date).toISOString();
}
function parseAdditionalFields(additionalFields, mappings = {}) {
    const result = {};
    for (const [key, value] of Object.entries(additionalFields)) {
        if (value !== undefined && value !== null && value !== '') {
            const mappedKey = mappings[key] || key;
            result[mappedKey] = value;
        }
    }
    return result;
}
function buildFilters(filterFields) {
    const filters = {};
    if (filterFields.dateFrom) {
        filters.date_from = formatDate(filterFields.dateFrom);
    }
    if (filterFields.dateTo) {
        filters.date_to = formatDate(filterFields.dateTo);
    }
    if (filterFields.status) {
        filters.status = filterFields.status;
    }
    if (filterFields.type) {
        filters.type = filterFields.type;
    }
    return filters;
}
//# sourceMappingURL=GenericFunctions.js.map