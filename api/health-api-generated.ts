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
import { HealthResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * HealthApi - axios parameter creator
 * @export
 */
export const HealthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Check health of API and database
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        health: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/public/health`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/public/health',
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
 * HealthApi - functional programming interface
 * @export
 */
export const HealthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HealthApiAxiosParamCreator(configuration)
    return {
        /**
         * Check health of API and database
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async health(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.health(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * HealthApi - factory interface
 * @export
 */
export const HealthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HealthApiFp(configuration)
    return {
        /**
         * Check health of API and database
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        health(options?: AxiosRequestConfig): AxiosPromise<HealthResponse> {
            return localVarFp.health(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HealthApiGenerated - object-oriented interface
 * @export
 * @class HealthApiGenerated
 * @extends {BaseAPI}
 */
export class HealthApiGenerated extends BaseAPI {
    /**
     * Check health of API and database
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiGenerated
     */
    public health(options?: AxiosRequestConfig) {
        return HealthApiFp(this.configuration).health(options).then((request) => request(this.axios, this.basePath));
    }
}
