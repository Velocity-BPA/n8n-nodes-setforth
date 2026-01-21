/*
 * Copyright (c) Velocity BPA, LLC
 * Licensed under the Business Source License 1.1
 * Commercial use requires a separate commercial license.
 * See LICENSE file for details.
 */

import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SetforthOAuth2Api implements ICredentialType {
	name = 'setforthOAuth2Api';

	displayName = 'Setforth OAuth2 API';

	documentationUrl = 'https://developer.setforth.com';

	extends = ['oAuth2Api'];

	properties: INodeProperties[] = [
		{
			displayName: 'Environment',
			name: 'environment',
			type: 'options',
			options: [
				{
					name: 'Production',
					value: 'production',
				},
				{
					name: 'Sandbox',
					value: 'sandbox',
				},
			],
			default: 'sandbox',
			description: 'Select the Setforth environment to connect to',
		},
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'clientCredentials',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default:
				'={{$self["environment"] === "production" ? "https://api.setforth.com/oauth/authorize" : "https://api.sandbox.setforth.com/oauth/authorize"}}',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default:
				'={{$self["environment"] === "production" ? "https://api.setforth.com/oauth/token" : "https://api.sandbox.setforth.com/oauth/token"}}',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'string',
			default: 'read write',
			description: 'OAuth2 scopes to request',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.oauthTokenData.access_token}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL:
				'={{$credentials.environment === "production" ? "https://api.setforth.com" : "https://api.sandbox.setforth.com"}}',
			url: '/v1/users/me',
		},
	};
}
