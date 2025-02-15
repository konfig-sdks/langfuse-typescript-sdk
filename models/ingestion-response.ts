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

import { IngestionError } from './ingestion-error';
import { IngestionSuccess } from './ingestion-success';

/**
 * 
 * @export
 * @interface IngestionResponse
 */
export interface IngestionResponse {
    /**
     * 
     * @type {Array<IngestionSuccess>}
     * @memberof IngestionResponse
     */
    'successes': Array<IngestionSuccess>;
    /**
     * 
     * @type {Array<IngestionError>}
     * @memberof IngestionResponse
     */
    'errors': Array<IngestionError>;
}

