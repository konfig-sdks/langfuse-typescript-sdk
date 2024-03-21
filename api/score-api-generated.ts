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
import { CreateScoreRequest } from '../models';
// @ts-ignore
import { Score } from '../models';
// @ts-ignore
import { Scores } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ScoreApi - axios parameter creator
 * @export
 */
export const ScoreApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a score
         * @param {CreateScoreRequest} createScoreRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (createScoreRequest: CreateScoreRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createScoreRequest' is not null or undefined
            assertParamExists('create', 'createScoreRequest', createScoreRequest)
            const localVarPath = `/api/public/scores`;
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
                requestBody: createScoreRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/public/scores',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createScoreRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a score
         * @param {string} scoreId The unique langfuse identifier of a score
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete: async (scoreId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scoreId' is not null or undefined
            assertParamExists('delete', 'scoreId', scoreId)
            const localVarPath = `/api/public/scores/{scoreId}`
                .replace(`{${"scoreId"}}`, encodeURIComponent(String(scoreId !== undefined ? scoreId : `-scoreId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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
                pathTemplate: '/api/public/scores/{scoreId}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of scores
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {string} [userId] 
         * @param {string} [name] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (page?: number, limit?: number, userId?: string, name?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/public/scores`;
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
            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/public/scores',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a score
         * @param {string} scoreId The unique langfuse identifier of a score
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (scoreId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scoreId' is not null or undefined
            assertParamExists('getById', 'scoreId', scoreId)
            const localVarPath = `/api/public/scores/{scoreId}`
                .replace(`{${"scoreId"}}`, encodeURIComponent(String(scoreId !== undefined ? scoreId : `-scoreId-`)));
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
                pathTemplate: '/api/public/scores/{scoreId}',
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
 * ScoreApi - functional programming interface
 * @export
 */
export const ScoreApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ScoreApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a score
         * @param {ScoreApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: ScoreApiCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Score>> {
            const createScoreRequest: CreateScoreRequest = {
                id: requestParameters.id,
                traceId: requestParameters.traceId,
                name: requestParameters.name,
                value: requestParameters.value,
                observationId: requestParameters.observationId,
                comment: requestParameters.comment
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(createScoreRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a score
         * @param {ScoreApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete(requestParameters: ScoreApiDeleteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete(requestParameters.scoreId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of scores
         * @param {ScoreApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: ScoreApiGetRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Scores>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.page, requestParameters.limit, requestParameters.userId, requestParameters.name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a score
         * @param {ScoreApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: ScoreApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Score>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.scoreId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ScoreApi - factory interface
 * @export
 */
export const ScoreApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ScoreApiFp(configuration)
    return {
        /**
         * Create a score
         * @param {ScoreApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: ScoreApiCreateRequest, options?: AxiosRequestConfig): AxiosPromise<Score> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a score
         * @param {ScoreApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete(requestParameters: ScoreApiDeleteRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.delete(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of scores
         * @param {ScoreApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: ScoreApiGetRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Scores> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a score
         * @param {ScoreApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: ScoreApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Score> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in ScoreApi.
 * @export
 * @interface ScoreApiCreateRequest
 */
export type ScoreApiCreateRequest = {
    
} & CreateScoreRequest

/**
 * Request parameters for delete operation in ScoreApi.
 * @export
 * @interface ScoreApiDeleteRequest
 */
export type ScoreApiDeleteRequest = {
    
    /**
    * The unique langfuse identifier of a score
    * @type {string}
    * @memberof ScoreApiDelete
    */
    readonly scoreId: string
    
}

/**
 * Request parameters for get operation in ScoreApi.
 * @export
 * @interface ScoreApiGetRequest
 */
export type ScoreApiGetRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof ScoreApiGet
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof ScoreApiGet
    */
    readonly limit?: number
    
    /**
    * 
    * @type {string}
    * @memberof ScoreApiGet
    */
    readonly userId?: string
    
    /**
    * 
    * @type {string}
    * @memberof ScoreApiGet
    */
    readonly name?: string
    
}

/**
 * Request parameters for getById operation in ScoreApi.
 * @export
 * @interface ScoreApiGetByIdRequest
 */
export type ScoreApiGetByIdRequest = {
    
    /**
    * The unique langfuse identifier of a score
    * @type {string}
    * @memberof ScoreApiGetById
    */
    readonly scoreId: string
    
}

/**
 * ScoreApiGenerated - object-oriented interface
 * @export
 * @class ScoreApiGenerated
 * @extends {BaseAPI}
 */
export class ScoreApiGenerated extends BaseAPI {
    /**
     * Create a score
     * @param {ScoreApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScoreApiGenerated
     */
    public create(requestParameters: ScoreApiCreateRequest, options?: AxiosRequestConfig) {
        return ScoreApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a score
     * @param {ScoreApiDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScoreApiGenerated
     */
    public delete(requestParameters: ScoreApiDeleteRequest, options?: AxiosRequestConfig) {
        return ScoreApiFp(this.configuration).delete(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of scores
     * @param {ScoreApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScoreApiGenerated
     */
    public get(requestParameters: ScoreApiGetRequest = {}, options?: AxiosRequestConfig) {
        return ScoreApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a score
     * @param {ScoreApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScoreApiGenerated
     */
    public getById(requestParameters: ScoreApiGetByIdRequest, options?: AxiosRequestConfig) {
        return ScoreApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
