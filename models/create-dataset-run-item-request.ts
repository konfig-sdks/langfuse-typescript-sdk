/*
langfuse

## Authentication

Authenticate with the API using Basic Auth, get API keys in the project settings:

- username: Langfuse Public Key
- password: Langfuse Secret Key

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface CreateDatasetRunItemRequest
 */
export interface CreateDatasetRunItemRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateDatasetRunItemRequest
     */
    'runName': string;
    /**
     * 
     * @type {string}
     * @memberof CreateDatasetRunItemRequest
     */
    'datasetItemId': string;
    /**
     * 
     * @type {string}
     * @memberof CreateDatasetRunItemRequest
     */
    'observationId': string;
}

