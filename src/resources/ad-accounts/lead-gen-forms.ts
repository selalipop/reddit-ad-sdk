// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class LeadGenForms extends APIResource {
  /**
   * Create a lead gen form.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Leads">See the rate limits for <strong>Leads</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-leads</span></div>
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
   *                                         <li>Quota: 20 requests</li>
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
    body: LeadGenFormCreateParams,
    options?: RequestOptions,
  ): APIPromise<LeadGenFormCreateResponse> {
    return this._client.post(path`/ad_accounts/${adAccountID}/lead_gen_forms`, { body, ...options });
  }

  /**
   * List Lead Gen Forms by an ad account.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Leads">See the rate limits for <strong>Leads</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-leads</span></div>
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
   *                                         <li>Quota: 20 requests</li>
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
    query: LeadGenFormListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeadGenFormListResponse> {
    return this._client.get(path`/ad_accounts/${adAccountID}/lead_gen_forms`, { query, ...options });
  }
}

export interface LeadGenFormCreateResponse {
  data: LeadGenFormCreateResponse.Data;
}

export namespace LeadGenFormCreateResponse {
  export interface Data {
    /**
     * The ID of the form.
     */
    id?: string;

    /**
     * The ID of the ad account that the form belongs to.
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
     * The name of the form.
     */
    name?: string;

    /**
     * The URL of the privacy policy for the form.
     */
    privacy_link?: string;

    /**
     * The prompt that is displayed to the user when they are filling out the form.
     */
    prompt?: string;

    /**
     * A list of questions that are presented to the user to fill out.
     */
    questions?: Array<Data.Question>;
  }

  export namespace Data {
    export interface Question {
      /**
       * Indicates if all lead submissions must have this question filled out.
       */
      required?: boolean;

      /**
       * The type of question that could be on a lead gen form.
       */
      type?:
        | 'EMAIL'
        | 'FIRST_NAME'
        | 'LAST_NAME'
        | 'PHONE_NUMBER'
        | 'POSTAL_CODE'
        | 'JOB_TITLE'
        | 'COMPANY'
        | 'COMPANY_EMAIL';
    }
  }
}

export interface LeadGenFormListResponse {
  data: Array<LeadGenFormListResponse.Data>;

  pagination: LeadGenFormListResponse.Pagination;
}

export namespace LeadGenFormListResponse {
  export interface Data {
    /**
     * The ID of the form.
     */
    id?: string;

    /**
     * The ID of the ad account that the form belongs to.
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
     * The name of the form.
     */
    name?: string;

    /**
     * The URL of the privacy policy for the form.
     */
    privacy_link?: string;

    /**
     * The prompt that is displayed to the user when they are filling out the form.
     */
    prompt?: string;

    /**
     * A list of questions that are presented to the user to fill out.
     */
    questions?: Array<Data.Question>;
  }

  export namespace Data {
    export interface Question {
      /**
       * Indicates if all lead submissions must have this question filled out.
       */
      required?: boolean;

      /**
       * The type of question that could be on a lead gen form.
       */
      type?:
        | 'EMAIL'
        | 'FIRST_NAME'
        | 'LAST_NAME'
        | 'PHONE_NUMBER'
        | 'POSTAL_CODE'
        | 'JOB_TITLE'
        | 'COMPANY'
        | 'COMPANY_EMAIL';
    }
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

export interface LeadGenFormCreateParams {
  data: LeadGenFormCreateParams.Data;
}

export namespace LeadGenFormCreateParams {
  export interface Data {
    /**
     * The name of the form.
     */
    name?: string;

    /**
     * The URL of the privacy policy for the form.
     */
    privacy_link?: string;

    /**
     * The prompt that is displayed to the user when they are filling out the form.
     */
    prompt?: string;

    /**
     * A list of questions that are presented to the user to fill out.
     */
    questions?: Array<Data.Question>;
  }

  export namespace Data {
    export interface Question {
      /**
       * Indicates if all lead submissions must have this question filled out.
       */
      required?: boolean;

      /**
       * The type of question that could be on a lead gen form.
       */
      type?:
        | 'EMAIL'
        | 'FIRST_NAME'
        | 'LAST_NAME'
        | 'PHONE_NUMBER'
        | 'POSTAL_CODE'
        | 'JOB_TITLE'
        | 'COMPANY'
        | 'COMPANY_EMAIL';
    }
  }
}

export interface LeadGenFormListParams {
  page?: LeadGenFormListParams.Page;
}

export namespace LeadGenFormListParams {
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

export declare namespace LeadGenForms {
  export {
    type LeadGenFormCreateResponse as LeadGenFormCreateResponse,
    type LeadGenFormListResponse as LeadGenFormListResponse,
    type LeadGenFormCreateParams as LeadGenFormCreateParams,
    type LeadGenFormListParams as LeadGenFormListParams,
  };
}
