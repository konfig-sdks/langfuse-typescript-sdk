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

import { ModelUsageUnit } from './model-usage-unit';

/**
 * Standard interface for usage and cost
 * @export
 * @interface Usage
 */
export interface Usage {
    /**
     * Number of input units (e.g. tokens)
     * @type {number}
     * @memberof Usage
     */
    'input'?: number | null;
    /**
     * Number of output units (e.g. tokens)
     * @type {number}
     * @memberof Usage
     */
    'output'?: number | null;
    /**
     * Defaults to input+output if not set
     * @type {number}
     * @memberof Usage
     */
    'total'?: number | null;
    /**
     * Unit of usage in Langfuse
     * @type {ModelUsageUnit}
     * @memberof Usage
     */
    'unit'?: ModelUsageUnit;
    /**
     * USD input cost
     * @type {number}
     * @memberof Usage
     */
    'inputCost'?: number | null;
    /**
     * USD output cost
     * @type {number}
     * @memberof Usage
     */
    'outputCost'?: number | null;
    /**
     * USD total cost, defaults to input+output
     * @type {number}
     * @memberof Usage
     */
    'totalCost'?: number | null;
}

