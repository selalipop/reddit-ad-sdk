// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CustomAudiences extends APIResource {
  /**
   * Create a new Custom Audience.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Custom Audiences Ingestion">See the rate limits for <strong>Custom Audiences Ingestion</strong></a></div>
   *
   *         <details class="sl-panel sl-outline-none sl-w-full sl-rounded-lg sl-border">
   *             <summary
   *                 class="sl-panel__titlebar sl-flex sl-items-center sl-relative focus:sl-z-10 sl-text-base sl-leading-none sl-font-medium sl-pr-4 sl-pl-3 sl-border-input focus:sl-border-primary sl-cursor-pointer sl-select-none">
   *                 <div class="sl-flex sl-flex-1 sl-items-center sl-h-lg">
   *                     <div class="sl-flex sl-items-center sl-mr-1.5">
   *                         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
   *                             class="svg-inline--fa fa-chevron-down fa-fw fa-sm sl-icon" role="img"
   *                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
   *                             <path fill="currentColor"
   *                                 d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z">
   *                             </path>
   *                         </svg>
   *                     </div>
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-custom-audience-ingestion</span></div>
   *                 </div>
   *             </summary>
   *             <div class="sl-panel__content-wrapper sl-border-t" role="region">
   *                 <div class="sl-panel__content sl-p-4">
   *                     <div class="sl--m-2">
   *                         <div>
   *                             <div class="sl-m-2 sl-p-2 sl-border">
   *                                 <div class="sl-prose sl-markdown-viewer" style="font-size: 12px;">
   *                                     <ul>
   *                                         <li>Window: 900 seconds</li>
   *                                         <li>Quota: 3000 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
   *
   *         <details class="sl-panel sl-outline-none sl-w-full sl-rounded-lg sl-border">
   *             <summary
   *                 class="sl-panel__titlebar sl-flex sl-items-center sl-relative focus:sl-z-10 sl-text-base sl-leading-none sl-font-medium sl-pr-4 sl-pl-3 sl-border-input focus:sl-border-primary sl-cursor-pointer sl-select-none">
   *                 <div class="sl-flex sl-flex-1 sl-items-center sl-h-lg">
   *                     <div class="sl-flex sl-items-center sl-mr-1.5">
   *                         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
   *                             class="svg-inline--fa fa-chevron-down fa-fw fa-sm sl-icon" role="img"
   *                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
   *                             <path fill="currentColor"
   *                                 d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z">
   *                             </path>
   *                         </svg>
   *                     </div>
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-custom-audience-ingestion-burst</span></div>
   *                 </div>
   *             </summary>
   *             <div class="sl-panel__content-wrapper sl-border-t" role="region">
   *                 <div class="sl-panel__content sl-p-4">
   *                     <div class="sl--m-2">
   *                         <div>
   *                             <div class="sl-m-2 sl-p-2 sl-border">
   *                                 <div class="sl-prose sl-markdown-viewer" style="font-size: 12px;">
   *                                     <ul>
   *                                         <li>Window: 60 seconds</li>
   *                                         <li>Quota: 500 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
   */
  create(
    adAccountID: string,
    body: CustomAudienceCreateParams,
    options?: RequestOptions,
  ): APIPromise<CustomAudienceCreateResponse> {
    return this._client.post(path`/ad_accounts/${adAccountID}/custom_audiences`, { body, ...options });
  }

  /**
   * Lists all Custom Audiences under ad account ID<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Targeting Taxonomy">See the rate limits for <strong>Targeting Taxonomy</strong></a></div>
   *
   *         <details class="sl-panel sl-outline-none sl-w-full sl-rounded-lg sl-border">
   *             <summary
   *                 class="sl-panel__titlebar sl-flex sl-items-center sl-relative focus:sl-z-10 sl-text-base sl-leading-none sl-font-medium sl-pr-4 sl-pl-3 sl-border-input focus:sl-border-primary sl-cursor-pointer sl-select-none">
   *                 <div class="sl-flex sl-flex-1 sl-items-center sl-h-lg">
   *                     <div class="sl-flex sl-items-center sl-mr-1.5">
   *                         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
   *                             class="svg-inline--fa fa-chevron-down fa-fw fa-sm sl-icon" role="img"
   *                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
   *                             <path fill="currentColor"
   *                                 d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z">
   *                             </path>
   *                         </svg>
   *                     </div>
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-targeting-taxonomy</span></div>
   *                 </div>
   *             </summary>
   *             <div class="sl-panel__content-wrapper sl-border-t" role="region">
   *                 <div class="sl-panel__content sl-p-4">
   *                     <div class="sl--m-2">
   *                         <div>
   *                             <div class="sl-m-2 sl-p-2 sl-border">
   *                                 <div class="sl-prose sl-markdown-viewer" style="font-size: 12px;">
   *                                     <ul>
   *                                         <li>Window: 60 seconds</li>
   *                                         <li>Quota: 500 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
   */
  list(
    adAccountID: string,
    query: CustomAudienceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomAudienceListResponse> {
    return this._client.get(path`/ad_accounts/${adAccountID}/custom_audiences`, { query, ...options });
  }
}

export interface CustomAudienceCreateResponse {
  data?: CustomAudienceCreateResponse.Data;
}

export namespace CustomAudienceCreateResponse {
  export interface Data {
    /**
     * The name of the custom audience
     */
    name: string;

    /**
     * The type of the Custom Audience
     */
    type: 'CUSTOMER_LIST';

    /**
     * The ID of the custom audience
     */
    id?: string;

    /**
     * The ID of the ad account that owns this custom audience
     */
    ad_account_id?: string;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * Low estimate of matched users in the audience.
     */
    size_range_lower?: number;

    /**
     * High estimate of number of matched users in the audience.
     */
    size_range_upper?: number;

    /**
     * The processing status of the custom audience. A custom audience is only VALID if
     * size_range_upper is at or above 1,000 users, otherwise it will be in the
     * NOT_ENOUGH_MATCHES_ERROR state.
     */
    status?:
      | 'VALID'
      | 'SUCCESSFUL'
      | 'PENDING'
      | 'EXPIRED'
      | 'USER_ERROR'
      | 'SERVER_ERROR'
      | 'DELETED'
      | 'NOT_ENOUGH_MATCHES_ERROR'
      | 'INVALID_DATA_SOURCE';
  }
}

export interface CustomAudienceListResponse {
  data: Array<CustomAudienceListResponse.Data>;

  pagination: CustomAudienceListResponse.Pagination;
}

export namespace CustomAudienceListResponse {
  export interface Data {
    /**
     * The name of the custom audience
     */
    name: string;

    /**
     * The type of the Custom Audience
     */
    type: 'CUSTOMER_LIST';

    /**
     * The ID of the custom audience
     */
    id?: string;

    /**
     * The ID of the ad account that owns this custom audience
     */
    ad_account_id?: string;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * Low estimate of matched users in the audience.
     */
    size_range_lower?: number;

    /**
     * High estimate of number of matched users in the audience.
     */
    size_range_upper?: number;

    /**
     * The processing status of the custom audience. A custom audience is only VALID if
     * size_range_upper is at or above 1,000 users, otherwise it will be in the
     * NOT_ENOUGH_MATCHES_ERROR state.
     */
    status?:
      | 'VALID'
      | 'SUCCESSFUL'
      | 'PENDING'
      | 'EXPIRED'
      | 'USER_ERROR'
      | 'SERVER_ERROR'
      | 'DELETED'
      | 'NOT_ENOUGH_MATCHES_ERROR'
      | 'INVALID_DATA_SOURCE';
  }

  export interface Pagination {
    /**
     * The full URL for the next page. If not available, the current page is the final
     * page.
     *
     * > **Important:** The URL should be followed directly. Don't assume pagination
     * > based on the query parameters in the provided URLs.
     */
    next_url?: string | null;

    /**
     * The full URL for the previous page. If not available, the current page is the
     * first page.
     *
     * > **Important:** The URL should be followed directly. Don't assume pagination
     * > based on the query parameters in the provided URLs.
     */
    previous_url?: string | null;
  }
}

export interface CustomAudienceCreateParams {
  data: CustomAudienceCreateParams.Data;
}

export namespace CustomAudienceCreateParams {
  export interface Data {
    /**
     * The name of the custom audience
     */
    name: string;

    /**
     * The type of the Custom Audience
     */
    type: 'CUSTOMER_LIST';
  }
}

export interface CustomAudienceListParams {
  /**
   * Optional field used for filtering by a specific name
   */
  name?: string;

  page?: CustomAudienceListParams.Page;
}

export namespace CustomAudienceListParams {
  export interface Page {
    /**
     * The token for the page to retrieve.
     */
    token?: string;

    /**
     * The number of items to be returned by page.
     */
    size?: number;
  }
}

export declare namespace CustomAudiences {
  export {
    type CustomAudienceCreateResponse as CustomAudienceCreateResponse,
    type CustomAudienceListResponse as CustomAudienceListResponse,
    type CustomAudienceCreateParams as CustomAudienceCreateParams,
    type CustomAudienceListParams as CustomAudienceListParams,
  };
}
