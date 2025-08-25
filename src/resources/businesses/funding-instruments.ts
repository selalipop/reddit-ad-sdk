// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class FundingInstruments extends APIResource {
  /**
   * Query funding instruments by business.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Billing">See the rate limits for <strong>Billing</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-funding-instruments</span></div>
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
   *                                         <li>Quota: 30 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
   */
  query(
    businessID: string,
    params: FundingInstrumentQueryParams,
    options?: RequestOptions,
  ): APIPromise<FundingInstrumentQueryResponse> {
    const { page, search, ...body } = params;
    return this._client.post(path`/businesses/${businessID}/funding_instruments/query`, {
      query: { page, search },
      body,
      ...options,
    });
  }
}

export interface FundingInstrumentQueryResponse {
  data: Array<FundingInstrumentQueryResponse.Data>;

  pagination: FundingInstrumentQueryResponse.Pagination;
}

export namespace FundingInstrumentQueryResponse {
  export interface Data {
    /**
     * The ID of the funding instrument
     */
    id?: string;

    /**
     * for CREDIT_CARD types this indicates the state of the credit card attachment.
     */
    authorize_status?: 'PENDING' | 'APPROVED' | 'DECLINE_RETRYABLE' | 'DECLINE_TERMINAL' | null;

    /**
     * The current amount of outstanding debt on this funding instrument, in local
     * micro-currency.
     */
    billable_amount?: number;

    /**
     * When the billable_amount exceeds this number, campaigns linked to this funding
     * instrument will not run.
     */
    credit_limit?: number;

    /**
     * An ISO4217 currency code indicating the currency used in this invoice
     */
    currency?: 'USD' | 'GBP' | 'CAD' | 'EUR' | 'AUD' | 'NZD' | 'SGD' | 'BRL';

    /**
     * When set, campaigns linked to this funding instrument will not deliver unless
     * the current time is before this ISO-8601 time.
     */
    end_time?: string | null;

    /**
     * Status indicating the eligibility or issues with the invoice group
     */
    invoice_group_status?:
      | 'ELIGIBLE'
      | 'NO_ACTIVE_CL_FOUND'
      | 'MULTI_BILL_ENTITY_FOUND'
      | 'MULTI_PO_FOUND'
      | 'MULTI_PAY_TERMS_FOUND'
      | 'MULTI_OPPORTUNITY_FOUND'
      | null;

    /**
     * When true, campaigns linked to this funding instrument are allowed to run.
     */
    is_servable?: boolean;

    /**
     * The name of the funding instrument, if any.
     */
    name?: string | null;

    /**
     * Contains a list of reasons why this funding instrument is not servable. When
     * this list is empty, it is servable.
     */
    reasons_not_servable?: Array<
      'DATES_OUT_OF_RANGE' | 'CREDIT_LINE_EXHAUSTED' | 'CREDIT_CARD_NOT_APPROVED' | 'NOT_ACTIVE'
    >;

    /**
     * When set, campaigns linked to this funding instrument will not deliver unless
     * the current time is beyond this ISO-8601 time.
     */
    start_time?: string | null;
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

export interface FundingInstrumentQueryParams {
  /**
   * Body param:
   */
  data: FundingInstrumentQueryParams.Data;

  /**
   * Query param:
   */
  page?: FundingInstrumentQueryParams.Page;

  /**
   * Query param: A search term to filter funding instruments by name, ID, or type.
   */
  search?: string;
}

export namespace FundingInstrumentQueryParams {
  export interface Data {
    /**
     * When a partner business ID is provided the endpoint returns funding that is
     * shared with the given partner only. When null the endpoint lists all funding
     * instruments owned by the business id in the path
     */
    partner_business_id?: string | null;
  }

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

export declare namespace FundingInstruments {
  export {
    type FundingInstrumentQueryResponse as FundingInstrumentQueryResponse,
    type FundingInstrumentQueryParams as FundingInstrumentQueryParams,
  };
}
