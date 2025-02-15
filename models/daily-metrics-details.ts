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

import { UsageByModel } from './usage-by-model';

/**
 * 
 * @export
 * @interface DailyMetricsDetails
 */
export interface DailyMetricsDetails {
    /**
     * 
     * @type {string}
     * @memberof DailyMetricsDetails
     */
    'date': string;
    /**
     * 
     * @type {number}
     * @memberof DailyMetricsDetails
     */
    'countTraces': number;
    /**
     * 
     * @type {number}
     * @memberof DailyMetricsDetails
     */
    'totalCost': number;
    /**
     * 
     * @type {Array<UsageByModel>}
     * @memberof DailyMetricsDetails
     */
    'usage': Array<UsageByModel>;
}

