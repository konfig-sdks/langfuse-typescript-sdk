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
 * @interface Trace
 */
export interface Trace {
    /**
     * 
     * @type {Array<string>}
     * @memberof Trace
     */
    'tags'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof Trace
     */
    'version'?: string | null;
    /**
     * The unique identifier of a trace
     * @type {string}
     * @memberof Trace
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Trace
     */
    'timestamp': string;
    /**
     * 
     * @type {string}
     * @memberof Trace
     */
    'name'?: string | null;
    /**
     * 
     * @type {any}
     * @memberof Trace
     */
    'input'?: any | null;
    /**
     * 
     * @type {any}
     * @memberof Trace
     */
    'output'?: any | null;
    /**
     * 
     * @type {string}
     * @memberof Trace
     */
    'sessionId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Trace
     */
    'release'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Trace
     */
    'userId'?: string | null;
    /**
     * 
     * @type {any}
     * @memberof Trace
     */
    'metadata'?: any | null;
    /**
     * Public traces are accessible via url without login
     * @type {boolean}
     * @memberof Trace
     */
    'public'?: boolean | null;
}

