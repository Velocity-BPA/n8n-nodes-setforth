import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SetforthApi implements ICredentialType {
	name = 'setforthApi';
	displayName = 'Setforth API';
	documentationUrl = 'https://docs.setforth.com';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
		{
			displayName: 'API Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://api.setforth.com/v1',
			required: true,
		},
	];
}