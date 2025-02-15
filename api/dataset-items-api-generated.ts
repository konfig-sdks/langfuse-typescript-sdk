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
import { CreateDatasetItemRequest } from '../models';
// @ts-ignore
import { DatasetItem } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * DatasetItemsApi - axios parameter creator
 * @export
 */
export const DatasetItemsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a dataset item
         * @param {CreateDatasetItemRequest} createDatasetItemRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (createDatasetItemRequest: CreateDatasetItemRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createDatasetItemRequest' is not null or undefined
            assertParamExists('create', 'createDatasetItemRequest', createDatasetItemRequest)
            const localVarPath = `/api/public/dataset-items`;
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
                requestBody: createDatasetItemRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/public/dataset-items',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createDatasetItemRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a dataset item
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('get', 'id', id)
            const localVarPath = `/api/public/dataset-items/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/public/dataset-items/{id}',
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
 * DatasetItemsApi - functional programming interface
 * @export
 */
export const DatasetItemsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DatasetItemsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a dataset item
         * @param {DatasetItemsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: DatasetItemsApiCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DatasetItem>> {
            const createDatasetItemRequest: CreateDatasetItemRequest = {
                datasetName: requestParameters.datasetName,
                input: requestParameters.input,
                expectedOutput: requestParameters.expectedOutput,
                id: requestParameters.id
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(createDatasetItemRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a dataset item
         * @param {DatasetItemsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: DatasetItemsApiGetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DatasetItem>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DatasetItemsApi - factory interface
 * @export
 */
export const DatasetItemsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DatasetItemsApiFp(configuration)
    return {
        /**
         * Create a dataset item
         * @param {DatasetItemsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: DatasetItemsApiCreateRequest, options?: AxiosRequestConfig): AxiosPromise<DatasetItem> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a dataset item
         * @param {DatasetItemsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: DatasetItemsApiGetRequest, options?: AxiosRequestConfig): AxiosPromise<DatasetItem> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in DatasetItemsApi.
 * @export
 * @interface DatasetItemsApiCreateRequest
 */
export type DatasetItemsApiCreateRequest = {
    
} & CreateDatasetItemRequest

/**
 * Request parameters for get operation in DatasetItemsApi.
 * @export
 * @interface DatasetItemsApiGetRequest
 */
export type DatasetItemsApiGetRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof DatasetItemsApiGet
    */
    readonly id: string
    
}

/**
 * DatasetItemsApiGenerated - object-oriented interface
 * @export
 * @class DatasetItemsApiGenerated
 * @extends {BaseAPI}
 */
export class DatasetItemsApiGenerated extends BaseAPI {
    /**
     * Create a dataset item
     * @param {DatasetItemsApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetItemsApiGenerated
     */
    public create(requestParameters: DatasetItemsApiCreateRequest, options?: AxiosRequestConfig) {
        return DatasetItemsApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a dataset item
     * @param {DatasetItemsApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetItemsApiGenerated
     */
    public get(requestParameters: DatasetItemsApiGetRequest, options?: AxiosRequestConfig) {
        return DatasetItemsApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
