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
import { CreateDatasetRunItemRequest } from '../models';
// @ts-ignore
import { DatasetRunItem } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * DatasetRunItemsApi - axios parameter creator
 * @export
 */
export const DatasetRunItemsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a dataset run item
         * @param {CreateDatasetRunItemRequest} createDatasetRunItemRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (createDatasetRunItemRequest: CreateDatasetRunItemRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createDatasetRunItemRequest' is not null or undefined
            assertParamExists('create', 'createDatasetRunItemRequest', createDatasetRunItemRequest)
            const localVarPath = `/api/public/dataset-run-items`;
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
                requestBody: createDatasetRunItemRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/public/dataset-run-items',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createDatasetRunItemRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DatasetRunItemsApi - functional programming interface
 * @export
 */
export const DatasetRunItemsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DatasetRunItemsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a dataset run item
         * @param {DatasetRunItemsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: DatasetRunItemsApiCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DatasetRunItem>> {
            const createDatasetRunItemRequest: CreateDatasetRunItemRequest = {
                runName: requestParameters.runName,
                datasetItemId: requestParameters.datasetItemId,
                observationId: requestParameters.observationId
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(createDatasetRunItemRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DatasetRunItemsApi - factory interface
 * @export
 */
export const DatasetRunItemsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DatasetRunItemsApiFp(configuration)
    return {
        /**
         * Create a dataset run item
         * @param {DatasetRunItemsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: DatasetRunItemsApiCreateRequest, options?: AxiosRequestConfig): AxiosPromise<DatasetRunItem> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in DatasetRunItemsApi.
 * @export
 * @interface DatasetRunItemsApiCreateRequest
 */
export type DatasetRunItemsApiCreateRequest = {
    
} & CreateDatasetRunItemRequest

/**
 * DatasetRunItemsApiGenerated - object-oriented interface
 * @export
 * @class DatasetRunItemsApiGenerated
 * @extends {BaseAPI}
 */
export class DatasetRunItemsApiGenerated extends BaseAPI {
    /**
     * Create a dataset run item
     * @param {DatasetRunItemsApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetRunItemsApiGenerated
     */
    public create(requestParameters: DatasetRunItemsApiCreateRequest, options?: AxiosRequestConfig) {
        return DatasetRunItemsApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
