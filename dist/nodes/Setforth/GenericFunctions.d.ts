import type { IDataObject, IExecuteFunctions, IHookFunctions, IHttpRequestMethods, ILoadOptionsFunctions, IPollFunctions, IWebhookFunctions } from 'n8n-workflow';
export declare function getBaseUrl(credentials: IDataObject): string;
export declare function getAccessToken(this: IExecuteFunctions | IHookFunctions | ILoadOptionsFunctions | IPollFunctions | IWebhookFunctions): Promise<string>;
export declare function setforthApiRequest(this: IExecuteFunctions | IHookFunctions | ILoadOptionsFunctions | IPollFunctions | IWebhookFunctions, method: IHttpRequestMethods, endpoint: string, body?: IDataObject, qs?: IDataObject, uri?: string, option?: IDataObject): Promise<any>;
export declare function setforthApiRequestAllItems(this: IExecuteFunctions | IHookFunctions | ILoadOptionsFunctions, method: IHttpRequestMethods, endpoint: string, body?: IDataObject, qs?: IDataObject, propertyName?: string): Promise<any[]>;
export declare function setforthApiUploadFile(this: IExecuteFunctions, endpoint: string, binaryPropertyName: string, additionalFields?: IDataObject, itemIndex?: number): Promise<any>;
export declare function setforthApiDownloadFile(this: IExecuteFunctions, endpoint: string, qs?: IDataObject): Promise<Buffer>;
export declare function formatPhoneNumber(phone: string): string;
export declare function formatDate(date: string | Date): string;
export declare function parseAdditionalFields(additionalFields: IDataObject, mappings?: {
    [key: string]: string;
}): IDataObject;
export declare function buildFilters(filterFields: IDataObject): IDataObject;
