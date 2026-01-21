/*
 * Copyright (c) Velocity BPA, LLC
 * Licensed under the Business Source License 1.1
 * Commercial use requires a separate commercial license.
 * See LICENSE file for details.
 */

import type {
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	IDataObject,
	JsonObject,
	IHttpRequestMethods,
	IRequestOptions,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

/**
 * Makes an authenticated request to the Setforth API.
 */
export async function setforthApiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
	uri?: string,
): Promise<IDataObject | IDataObject[]> {
	const credentials = await this.getCredentials('setforthOAuth2Api');
	const environment = credentials.environment as string;

	const baseUrl =
		environment === 'production'
			? 'https://api.setforth.com'
			: 'https://api.sandbox.setforth.com';

	const options: IRequestOptions = {
		method,
		body,
		qs,
		uri: uri || `${baseUrl}${endpoint}`,
		json: true,
	};

	if (Object.keys(body).length === 0) {
		delete options.body;
	}

	if (Object.keys(qs).length === 0) {
		delete options.qs;
	}

	try {
		const response = await this.helpers.requestOAuth2.call(
			this,
			'setforthOAuth2Api',
			options,
		);
		return response as IDataObject;
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

/**
 * Makes a paginated request to the Setforth API, returning all items.
 */
export async function setforthApiRequestAllItems(
	this: IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
): Promise<IDataObject[]> {
	const returnData: IDataObject[] = [];
	let responseData: IDataObject;
	let nextCursor: string | undefined;

	do {
		if (nextCursor) {
			qs.cursor = nextCursor;
		}

		responseData = (await setforthApiRequest.call(
			this,
			method,
			endpoint,
			body,
			qs,
		)) as IDataObject;

		if (responseData.data) {
			const items = responseData.data as IDataObject[];
			returnData.push(...items);
		}

		nextCursor = responseData.next_cursor as string | undefined;
	} while (nextCursor);

	return returnData;
}

/**
 * Handles API error responses with user-friendly messages.
 */
export function handleErrorResponse(statusCode: number, message?: string): string {
	const errorMessages: Record<number, string> = {
		400: 'Bad Request - The request was invalid or cannot be served.',
		401: 'Unauthorized - Authentication credentials are missing or invalid.',
		403: 'Forbidden - You do not have permission to access this resource.',
		404: 'Not Found - The requested resource could not be found.',
		409: 'Conflict - The request conflicts with the current state of the resource.',
		422: 'Unprocessable Entity - The request was well-formed but contains semantic errors.',
		429: 'Too Many Requests - Rate limit exceeded. Please wait and try again.',
		500: 'Internal Server Error - An unexpected error occurred on the server.',
		502: 'Bad Gateway - The server received an invalid response from an upstream server.',
		503: 'Service Unavailable - The server is temporarily unavailable.',
	};

	return errorMessages[statusCode] || message || `An unexpected error occurred (${statusCode})`;
}
