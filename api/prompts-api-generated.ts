/* tslint:disable */
/* eslint-disable */
/*
langfuse

## Authentication

Authenticate with the API using Basic Auth, get API keys in the project settings:

- username: Langfuse Public Key
- password: Langfuse Secret Key

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreatePromptRequest } from '../models';
// @ts-ignore
import { Prompt } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PromptsApi - axios parameter creator
 * @export
 */
export const PromptsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a prompt
         * @param {CreatePromptRequest} createPromptRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (createPromptRequest: CreatePromptRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createPromptRequest' is not null or undefined
            assertParamExists('create', 'createPromptRequest', createPromptRequest)
            const localVarPath = `/api/public/prompts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: createPromptRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/public/prompts',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createPromptRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a prompt
         * @param {string} name 
         * @param {number} [version] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (name: string, version?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('get', 'name', name)
            const localVarPath = `/api/public/prompts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/public/prompts',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PromptsApi - functional programming interface
 * @export
 */
export const PromptsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PromptsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a prompt
         * @param {PromptsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: PromptsApiCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Prompt>> {
            const createPromptRequest: CreatePromptRequest = {
                name: requestParameters.name,
                isActive: requestParameters.isActive,
                prompt: requestParameters.prompt,
                config: requestParameters.config
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(createPromptRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a prompt
         * @param {PromptsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: PromptsApiGetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Prompt>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.name, requestParameters.version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PromptsApi - factory interface
 * @export
 */
export const PromptsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PromptsApiFp(configuration)
    return {
        /**
         * Create a prompt
         * @param {PromptsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: PromptsApiCreateRequest, options?: AxiosRequestConfig): AxiosPromise<Prompt> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a prompt
         * @param {PromptsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: PromptsApiGetRequest, options?: AxiosRequestConfig): AxiosPromise<Prompt> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in PromptsApi.
 * @export
 * @interface PromptsApiCreateRequest
 */
export type PromptsApiCreateRequest = {
    
} & CreatePromptRequest

/**
 * Request parameters for get operation in PromptsApi.
 * @export
 * @interface PromptsApiGetRequest
 */
export type PromptsApiGetRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof PromptsApiGet
    */
    readonly name: string
    
    /**
    * 
    * @type {number}
    * @memberof PromptsApiGet
    */
    readonly version?: number
    
}

/**
 * PromptsApiGenerated - object-oriented interface
 * @export
 * @class PromptsApiGenerated
 * @extends {BaseAPI}
 */
export class PromptsApiGenerated extends BaseAPI {
    /**
     * Create a prompt
     * @param {PromptsApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApiGenerated
     */
    public create(requestParameters: PromptsApiCreateRequest, options?: AxiosRequestConfig) {
        return PromptsApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a prompt
     * @param {PromptsApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromptsApiGenerated
     */
    public get(requestParameters: PromptsApiGetRequest, options?: AxiosRequestConfig) {
        return PromptsApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
