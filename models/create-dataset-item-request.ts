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
 * @interface CreateDatasetItemRequest
 */
export interface CreateDatasetItemRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateDatasetItemRequest
     */
    'datasetName': string;
    /**
     * 
     * @type {any}
     * @memberof CreateDatasetItemRequest
     */
    'input': any;
    /**
     * 
     * @type {any}
     * @memberof CreateDatasetItemRequest
     */
    'expectedOutput'?: any | null;
    /**
     * Dataset items are upserted on their id
     * @type {string}
     * @memberof CreateDatasetItemRequest
     */
    'id'?: string | null;
}

