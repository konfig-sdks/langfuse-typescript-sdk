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
 * @interface TraceBody
 */
export interface TraceBody {
    /**
     * 
     * @type {Array<string>}
     * @memberof TraceBody
     */
    'tags'?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof TraceBody
     */
    'version'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TraceBody
     */
    'id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TraceBody
     */
    'timestamp'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TraceBody
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TraceBody
     */
    'userId'?: string | null;
    /**
     * 
     * @type {any}
     * @memberof TraceBody
     */
    'input'?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TraceBody
     */
    'output'?: any | null;
    /**
     * 
     * @type {string}
     * @memberof TraceBody
     */
    'sessionId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TraceBody
     */
    'release'?: string | null;
    /**
     * 
     * @type {any}
     * @memberof TraceBody
     */
    'metadata'?: any | null;
    /**
     * Make trace publicly accessible via url
     * @type {boolean}
     * @memberof TraceBody
     */
    'public'?: boolean | null;
}

