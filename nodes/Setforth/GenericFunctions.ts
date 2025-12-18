import type {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	ILoadOptionsFunctions,
	IPollFunctions,
	IWebhookFunctions,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

/**
 * Get the base URL for the Setforth API based on credentials
 */
export function getBaseUrl(credentials: IDataObject): string {
	if (credentials.customApiUrl) {
		return credentials.customApiUrl as string;
	}
	return credentials.environment === 'production'
		? 'https://api.setforth.com'
		: 'https://api.sandbox.setforth.com';
}

/**
 * Get OAuth2 access token using client credentials flow
 */
export async function getAccessToken(
	this: IExecuteFunctions | IHookFunctions | ILoadOptionsFunctions | IPollFunctions | IWebhookFunctions,
): Promise<string> {
	const credentials = await this.getCredentials('setforthOAuth2Api');
	const baseUrl = getBaseUrl(credentials);
	const tokenUrl = `${baseUrl}/oauth/token`;

	const options: IHttpRequestOptions = {
		method: 'POST',
		url: tokenUrl,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			grant_type: 'client_credentials',
			client_id: credentials.clientId as string,
			client_secret: credentials.clientSecret as string,
			scope: (credentials.scopes as string) || '',
		}).toString(),
		json: true,
	};

	try {
		const response = await this.helpers.httpRequest(options);
		return response.access_token;
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject, {
			message: 'Failed to obtain access token',
		});
	}
}

/**
 * Make an authenticated API request to Setforth
 */
export async function setforthApiRequest(
	this: IExecuteFunctions | IHookFunctions | ILoadOptionsFunctions | IPollFunctions | IWebhookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
	uri?: string,
	option: IDataObject = {},
): Promise<any> {
	const credentials = await this.getCredentials('setforthOAuth2Api');
	const baseUrl = getBaseUrl(credentials);
	const accessToken = await getAccessToken.call(this);

	const options: IHttpRequestOptions = {
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
	} catch (error: any) {
		// Handle rate limiting with exponential backoff
		if (error.statusCode === 429) {
			const retryAfter = error.response?.headers?.['retry-after'] || 60;
			throw new NodeApiError(this.getNode(), error as JsonObject, {
				message: `Rate limit exceeded. Please retry after ${retryAfter} seconds.`,
			});
		}

		// Handle specific Setforth error codes
		const errorMessage = getSetforthErrorMessage(error);
		throw new NodeApiError(this.getNode(), error as JsonObject, {
			message: errorMessage,
		});
	}
}

/**
 * Make an API request with pagination support
 */
export async function setforthApiRequestAllItems(
	this: IExecuteFunctions | IHookFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
	propertyName: string = 'data',
): Promise<any[]> {
	const returnData: any[] = [];
	let responseData: any;
	let nextCursor: string | undefined;

	do {
		if (nextCursor) {
			qs.cursor = nextCursor;
		}

		responseData = await setforthApiRequest.call(this, method, endpoint, body, qs);

		if (responseData[propertyName]) {
			returnData.push(...responseData[propertyName]);
		} else if (Array.isArray(responseData)) {
			returnData.push(...responseData);
		}

		// Handle cursor-based pagination
		nextCursor = responseData.next_cursor || responseData.nextCursor;

		// Handle offset-based pagination
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

/**
 * Upload a file to Setforth
 */
export async function setforthApiUploadFile(
	this: IExecuteFunctions,
	endpoint: string,
	binaryPropertyName: string,
	additionalFields: IDataObject = {},
	itemIndex: number = 0,
): Promise<any> {
	const credentials = await this.getCredentials('setforthOAuth2Api');
	const baseUrl = getBaseUrl(credentials);
	const accessToken = await getAccessToken.call(this);

	const binaryData = this.helpers.assertBinaryData(itemIndex, binaryPropertyName);
	const dataBuffer = await this.helpers.getBinaryDataBuffer(itemIndex, binaryPropertyName);

	const formData: IDataObject = {
		file: {
			value: dataBuffer,
			options: {
				filename: binaryData.fileName,
				contentType: binaryData.mimeType,
			},
		},
		...additionalFields,
	};

	const options: IHttpRequestOptions = {
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
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject, {
			message: 'Failed to upload file',
		});
	}
}

/**
 * Download a file from Setforth
 */
export async function setforthApiDownloadFile(
	this: IExecuteFunctions,
	endpoint: string,
	qs: IDataObject = {},
): Promise<Buffer> {
	const credentials = await this.getCredentials('setforthOAuth2Api');
	const baseUrl = getBaseUrl(credentials);
	const accessToken = await getAccessToken.call(this);

	const options: IHttpRequestOptions = {
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
		return Buffer.from(response.body as ArrayBuffer);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject, {
			message: 'Failed to download file',
		});
	}
}

/**
 * Get user-friendly error message from Setforth API error
 */
function getSetforthErrorMessage(error: any): string {
	const statusCode = error.statusCode || error.status;
	const errorBody = error.body || error.response?.body || {};

	// Setforth specific error codes
	const errorCodes: IDataObject = {
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
		return errorCodes[errorBody.error_code] as string;
	}

	if (errorBody.message) {
		return errorBody.message;
	}

	// Default messages based on status code
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

/**
 * Validate and format phone number
 */
export function formatPhoneNumber(phone: string): string {
	// Remove all non-numeric characters
	const cleaned = phone.replace(/\D/g, '');
	
	// Add country code if not present
	if (cleaned.length === 10) {
		return `+1${cleaned}`;
	}
	
	if (cleaned.length === 11 && cleaned.startsWith('1')) {
		return `+${cleaned}`;
	}
	
	return phone;
}

/**
 * Format date for API requests
 */
export function formatDate(date: string | Date): string {
	if (date instanceof Date) {
		return date.toISOString();
	}
	return new Date(date).toISOString();
}

/**
 * Parse additional fields from node parameters
 */
export function parseAdditionalFields(
	additionalFields: IDataObject,
	mappings: { [key: string]: string } = {},
): IDataObject {
	const result: IDataObject = {};

	for (const [key, value] of Object.entries(additionalFields)) {
		if (value !== undefined && value !== null && value !== '') {
			const mappedKey = mappings[key] || key;
			result[mappedKey] = value;
		}
	}

	return result;
}

/**
 * Build filters for list operations
 */
export function buildFilters(
	filterFields: IDataObject,
): IDataObject {
	const filters: IDataObject = {};

	if (filterFields.dateFrom) {
		filters.date_from = formatDate(filterFields.dateFrom as string);
	}

	if (filterFields.dateTo) {
		filters.date_to = formatDate(filterFields.dateTo as string);
	}

	if (filterFields.status) {
		filters.status = filterFields.status;
	}

	if (filterFields.type) {
		filters.type = filterFields.type;
	}

	return filters;
}
