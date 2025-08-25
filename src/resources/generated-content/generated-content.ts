// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InspirationCreativesAPI from './inspiration-creatives';
import {
  InspirationCreativeRetrieveSummaryResponse,
  InspirationCreativeSearchParams,
  InspirationCreativeSearchResponse,
  InspirationCreatives,
} from './inspiration-creatives';

export class GeneratedContent extends APIResource {
  inspirationCreatives: InspirationCreativesAPI.InspirationCreatives =
    new InspirationCreativesAPI.InspirationCreatives(this._client);
}

GeneratedContent.InspirationCreatives = InspirationCreatives;

export declare namespace GeneratedContent {
  export {
    InspirationCreatives as InspirationCreatives,
    type InspirationCreativeRetrieveSummaryResponse as InspirationCreativeRetrieveSummaryResponse,
    type InspirationCreativeSearchResponse as InspirationCreativeSearchResponse,
    type InspirationCreativeSearchParams as InspirationCreativeSearchParams,
  };
}
