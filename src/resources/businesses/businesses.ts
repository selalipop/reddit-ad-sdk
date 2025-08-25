// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AdAccountsAPI from './ad-accounts';
import {
  AdAccountListParams,
  AdAccountListResponse,
  AdAccountQueryParams,
  AdAccountQueryResponse,
  AdAccounts,
} from './ad-accounts';
import * as FundingInstrumentsAPI from './funding-instruments';
import {
  FundingInstrumentQueryParams,
  FundingInstrumentQueryResponse,
  FundingInstruments,
} from './funding-instruments';
import * as ProductCatalogsAPI from './product-catalogs';
import {
  ProductCatalogCreateParams,
  ProductCatalogCreateResponse,
  ProductCatalogListResponse,
  ProductCatalogs,
} from './product-catalogs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Businesses extends APIResource {
  adAccounts: AdAccountsAPI.AdAccounts = new AdAccountsAPI.AdAccounts(this._client);
  fundingInstruments: FundingInstrumentsAPI.FundingInstruments = new FundingInstrumentsAPI.FundingInstruments(
    this._client,
  );
  productCatalogs: ProductCatalogsAPI.ProductCatalogs = new ProductCatalogsAPI.ProductCatalogs(this._client);

  /**
   * Get business by id. This endpoint requires the member to have memberships to the
   * business.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Business Manager">See the rate limits for <strong>Business Manager</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-business-manager</span></div>
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
   *                                         <li>Quota: 100 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
   */
  retrieve(businessID: string, options?: RequestOptions): APIPromise<BusinessRetrieveResponse> {
    return this._client.get(path`/businesses/${businessID}`, options);
  }

  /**
   * Update business by ID.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Business Manager">See the rate limits for <strong>Business Manager</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-business-manager</span></div>
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
   *                                         <li>Quota: 100 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
   */
  update(
    businessID: string,
    body: BusinessUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BusinessUpdateResponse> {
    return this._client.patch(path`/businesses/${businessID}`, { body, ...options });
  }

  /**
   * List pixels by business.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Conversion Signals">See the rate limits for <strong>Conversion Signals</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-conversion-signals</span></div>
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
  listPixels(
    businessID: string,
    query: BusinessListPixelsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BusinessListPixelsResponse> {
    return this._client.get(path`/businesses/${businessID}/pixels`, { query, ...options });
  }

  /**
   * List profiles by business.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Business Manager">See the rate limits for <strong>Business Manager</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-business-manager</span></div>
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
   *                                         <li>Quota: 100 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
   */
  listProfiles(
    businessID: string,
    query: BusinessListProfilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BusinessListProfilesResponse> {
    return this._client.get(path`/businesses/${businessID}/profiles`, { query, ...options });
  }
}

export interface BusinessRetrieveResponse {
  /**
   * A business is the parent entity that owns all other entities for the
   * organization.
   */
  data: BusinessRetrieveResponse.Data;
}

export namespace BusinessRetrieveResponse {
  /**
   * A business is the parent entity that owns all other entities for the
   * organization.
   */
  export interface Data {
    /**
     * The unique identifier of a business.
     */
    id?: string;

    /**
     * Whether the business is affiliated with an agency.
     */
    agency_affiliated?: boolean;

    /**
     * The ISO 3166-1 alpha-3 country code of the business.
     */
    country?: string | null;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The identifier for the member that created the business.
     */
    creator_id?: string | null;

    /**
     * The industry for the business.
     */
    industry?:
      | 'ADULT'
      | 'ADVERTISING'
      | 'ALCOHOL'
      | 'AUTO'
      | 'CLOTHING_AND_FASHION'
      | 'CONSULTING'
      | 'CONSUMER_PACKAGED_GOODS'
      | 'DATING'
      | 'EDUCATION'
      | 'EMPLOYMENT'
      | 'ENTERTAINMENT'
      | 'FINANCIAL_SERVICES'
      | 'GAMBLING_AND_FANTASY_SPORTS'
      | 'GAMING'
      | 'HEALTH_AND_BEAUTY'
      | 'OTHER'
      | 'POLITICS_AND_GOVERNMENT'
      | 'PUBLISHING'
      | 'REAL_ESTATE'
      | 'RESTAURANTS_AND_FOOD'
      | 'RETAIL_AND_ECOMMERCE'
      | 'SPORTS'
      | 'TECH_B2B'
      | 'TECH_B2C'
      | 'TECH_OTHER'
      | 'TRAVEL';

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The name of the business.
     */
    name?: string;

    /**
     * The phone number of the business.
     */
    phone?: string | null;

    /**
     * The member_id for the primary contact of the business
     */
    primary_contact_id?: string | null;

    /**
     * The website URL for the business.
     */
    website_url?: string | null;
  }
}

export interface BusinessUpdateResponse {
  /**
   * A business is the parent entity that owns all other entities for the
   * organization.
   */
  data?: BusinessUpdateResponse.Data;
}

export namespace BusinessUpdateResponse {
  /**
   * A business is the parent entity that owns all other entities for the
   * organization.
   */
  export interface Data {
    /**
     * The unique identifier of a business.
     */
    id?: string;

    /**
     * Whether the business is affiliated with an agency.
     */
    agency_affiliated?: boolean;

    /**
     * The ISO 3166-1 alpha-3 country code of the business.
     */
    country?: string | null;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The identifier for the member that created the business.
     */
    creator_id?: string | null;

    /**
     * The industry for the business.
     */
    industry?:
      | 'ADULT'
      | 'ADVERTISING'
      | 'ALCOHOL'
      | 'AUTO'
      | 'CLOTHING_AND_FASHION'
      | 'CONSULTING'
      | 'CONSUMER_PACKAGED_GOODS'
      | 'DATING'
      | 'EDUCATION'
      | 'EMPLOYMENT'
      | 'ENTERTAINMENT'
      | 'FINANCIAL_SERVICES'
      | 'GAMBLING_AND_FANTASY_SPORTS'
      | 'GAMING'
      | 'HEALTH_AND_BEAUTY'
      | 'OTHER'
      | 'POLITICS_AND_GOVERNMENT'
      | 'PUBLISHING'
      | 'REAL_ESTATE'
      | 'RESTAURANTS_AND_FOOD'
      | 'RETAIL_AND_ECOMMERCE'
      | 'SPORTS'
      | 'TECH_B2B'
      | 'TECH_B2C'
      | 'TECH_OTHER'
      | 'TRAVEL';

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The name of the business.
     */
    name?: string;

    /**
     * The phone number of the business.
     */
    phone?: string | null;

    /**
     * The member_id for the primary contact of the business
     */
    primary_contact_id?: string | null;

    /**
     * The website URL for the business.
     */
    website_url?: string | null;
  }
}

export interface BusinessListPixelsResponse {
  data: Array<BusinessListPixelsResponse.Data>;

  pagination: BusinessListPixelsResponse.Pagination;
}

export namespace BusinessListPixelsResponse {
  export interface Data {
    /**
     * The ID of the pixel.
     */
    id?: string;

    /**
     * The pixel's automatic advanced matching configuration.
     */
    automatic_matching_config?: Data.AutomaticMatchingConfig;

    /**
     * The unique identifier of a business.
     */
    business_id?: string;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The ID of the member who created the pixel.
     */
    created_by?: string;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The ID of the member who last modified the pixel.
     */
    modified_by?: string;

    /**
     * The human readable name of this pixel.
     */
    name?: string;
  }

  export namespace Data {
    /**
     * The pixel's automatic advanced matching configuration.
     */
    export interface AutomaticMatchingConfig {
      /**
       * The flag for collecting email addresses
       */
      collect_email?: boolean;
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

export interface BusinessListProfilesResponse {
  data: Array<BusinessListProfilesResponse.Data>;

  pagination: BusinessListProfilesResponse.Pagination;
}

export namespace BusinessListProfilesResponse {
  export interface Data {
    /**
     * The ID of the profile.
     */
    id?: string;

    /**
     * The ID of the business that owns this profile.
     */
    business_id?: string;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The Reddit username of the profile.
     */
    name?: string;

    /**
     * ID that maps to the Reddit user.
     */
    reddit_user_id?: string;
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

export interface BusinessUpdateParams {
  data: BusinessUpdateParams.Data;
}

export namespace BusinessUpdateParams {
  export interface Data {
    /**
     * Whether the business is affiliated with an agency.
     */
    agency_affiliated?: boolean;

    /**
     * The ISO 3166-1 alpha-3 country code of the business.
     */
    country?: string | null;

    /**
     * Enum representing the type for an industry.
     */
    industry?:
      | 'ADULT'
      | 'ADVERTISING'
      | 'ALCOHOL'
      | 'AUTO'
      | 'CLOTHING_AND_FASHION'
      | 'CONSULTING'
      | 'CONSUMER_PACKAGED_GOODS'
      | 'DATING'
      | 'EDUCATION'
      | 'EMPLOYMENT'
      | 'ENTERTAINMENT'
      | 'FINANCIAL_SERVICES'
      | 'GAMBLING_AND_FANTASY_SPORTS'
      | 'GAMING'
      | 'HEALTH_AND_BEAUTY'
      | 'OTHER'
      | 'POLITICS_AND_GOVERNMENT'
      | 'PUBLISHING'
      | 'REAL_ESTATE'
      | 'RESTAURANTS_AND_FOOD'
      | 'RETAIL_AND_ECOMMERCE'
      | 'SPORTS'
      | 'TECH_B2B'
      | 'TECH_B2C'
      | 'TECH_OTHER'
      | 'TRAVEL';

    /**
     * The name of the business.
     */
    name?: string;

    /**
     * The phone number of the business.
     */
    phone?: string | null;

    /**
     * The member_id for the primary contact of the business
     */
    primary_contact_id?: string | null;

    /**
     * The website URL for the business.
     */
    website_url?: string | null;
  }
}

export interface BusinessListPixelsParams {
  page?: BusinessListPixelsParams.Page;
}

export namespace BusinessListPixelsParams {
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

export interface BusinessListProfilesParams {
  page?: BusinessListProfilesParams.Page;
}

export namespace BusinessListProfilesParams {
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

Businesses.AdAccounts = AdAccounts;
Businesses.FundingInstruments = FundingInstruments;
Businesses.ProductCatalogs = ProductCatalogs;

export declare namespace Businesses {
  export {
    type BusinessRetrieveResponse as BusinessRetrieveResponse,
    type BusinessUpdateResponse as BusinessUpdateResponse,
    type BusinessListPixelsResponse as BusinessListPixelsResponse,
    type BusinessListProfilesResponse as BusinessListProfilesResponse,
    type BusinessUpdateParams as BusinessUpdateParams,
    type BusinessListPixelsParams as BusinessListPixelsParams,
    type BusinessListProfilesParams as BusinessListProfilesParams,
  };

  export {
    AdAccounts as AdAccounts,
    type AdAccountListResponse as AdAccountListResponse,
    type AdAccountQueryResponse as AdAccountQueryResponse,
    type AdAccountListParams as AdAccountListParams,
    type AdAccountQueryParams as AdAccountQueryParams,
  };

  export {
    FundingInstruments as FundingInstruments,
    type FundingInstrumentQueryResponse as FundingInstrumentQueryResponse,
    type FundingInstrumentQueryParams as FundingInstrumentQueryParams,
  };

  export {
    ProductCatalogs as ProductCatalogs,
    type ProductCatalogCreateResponse as ProductCatalogCreateResponse,
    type ProductCatalogListResponse as ProductCatalogListResponse,
    type ProductCatalogCreateParams as ProductCatalogCreateParams,
  };
}
