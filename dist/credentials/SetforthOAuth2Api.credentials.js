"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetforthOAuth2Api = void 0;
class SetforthOAuth2Api {
    name = 'setforthOAuth2Api';
    displayName = 'Setforth OAuth2 API';
    documentationUrl = 'https://docs.setforth.com/api';
    icon = {
        light: 'file:../nodes/Setforth/setforth.svg',
        dark: 'file:../nodes/Setforth/setforth.svg',
    };
    properties = [
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
            description: 'Select the API environment to use',
        },
        {
            displayName: 'Client ID',
            name: 'clientId',
            type: 'string',
            default: '',
            required: true,
            description: 'The OAuth2 Client ID provided by Setforth',
        },
        {
            displayName: 'Client Secret',
            name: 'clientSecret',
            type: 'string',
            typeOptions: {
                password: true,
            },
            default: '',
            required: true,
            description: 'The OAuth2 Client Secret provided by Setforth',
        },
        {
            displayName: 'Scopes',
            name: 'scopes',
            type: 'string',
            default: 'contacts debts enrollments settlements documents users teams',
            description: 'Space-separated list of scopes to request access for',
        },
        {
            displayName: 'Custom API URL',
            name: 'customApiUrl',
            type: 'string',
            default: '',
            placeholder: 'https://api.setforth.com',
            description: 'Optional custom API URL (leave empty to use default based on environment)',
        },
    ];
    authenticate = {
        type: 'generic',
        properties: {
            headers: {
                Authorization: '={{"Bearer " + $credentials.accessToken}}',
            },
        },
    };
    test = {
        request: {
            baseURL: '={{$credentials.customApiUrl || ($credentials.environment === "production" ? "https://api.setforth.com" : "https://api.sandbox.setforth.com")}}',
            url: '/v1/users/me',
        },
    };
}
exports.SetforthOAuth2Api = SetforthOAuth2Api;
//# sourceMappingURL=SetforthOAuth2Api.credentials.js.map