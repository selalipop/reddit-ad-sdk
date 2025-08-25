// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ProductCatalogs extends APIResource {
  /**
   * Create a new product catalog. Finish set up by
   * [manually creating products](https://ads-api.reddit.com/docs/v3/operations/Batch%20Create%20Products)
   * or
   * [linking a product feed](https://ads-api.reddit.com/docs/v3/operations/Create%20Product%20Feed).<h2>Rate
   * Limit</h2>
   *
   *   <div><a href="/ratelimits/Product Catalog">See the rate limits for <strong>Product Catalog</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-product-catalog</span></div>
   *                 </div>
   *             </summary>
   *             <div class="sl-panel__content-wrapper sl-border-t" role="region">
   *                 <div class="sl-panel__content sl-p-4">
   *                     <div class="sl--m-2">
   *                         <div>
   *                             <div class="sl-m-2 sl-p-2 sl-border">
   *                                 <div class="sl-prose sl-markdown-viewer" style="font-size: 12px;">
   *                                     <ul>
   *                                         <li>Window: 300 seconds</li>
   *                                         <li>Quota: 7000 requests</li>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-product-catalog-burst</span></div>
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
   *                                         <li>Quota: 3000 requests</li>
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
    businessID: string,
    body: ProductCatalogCreateParams,
    options?: RequestOptions,
  ): APIPromise<ProductCatalogCreateResponse> {
    return this._client.post(path`/businesses/${businessID}/product_catalogs`, { body, ...options });
  }

  /**
   * Retrieve details for all catalogs for your business.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Product Catalog">See the rate limits for <strong>Product Catalog</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-product-catalog</span></div>
   *                 </div>
   *             </summary>
   *             <div class="sl-panel__content-wrapper sl-border-t" role="region">
   *                 <div class="sl-panel__content sl-p-4">
   *                     <div class="sl--m-2">
   *                         <div>
   *                             <div class="sl-m-2 sl-p-2 sl-border">
   *                                 <div class="sl-prose sl-markdown-viewer" style="font-size: 12px;">
   *                                     <ul>
   *                                         <li>Window: 300 seconds</li>
   *                                         <li>Quota: 7000 requests</li>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-product-catalog-burst</span></div>
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
   *                                         <li>Quota: 3000 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
   */
  list(businessID: string, options?: RequestOptions): APIPromise<ProductCatalogListResponse> {
    return this._client.get(path`/businesses/${businessID}/product_catalogs`, options);
  }
}

export interface ProductCatalogCreateResponse {
  data: ProductCatalogCreateResponse.Data;
}

export namespace ProductCatalogCreateResponse {
  export interface Data {
    /**
     * The ID of the product catalog.
     */
    id?: string;

    /**
     * The unique identifier of a business.
     */
    business_id?: Data.BusinessID;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The list of catalog data sources.
     */
    data_sources?: Array<'BULK_IMPORT' | 'FEED_SYNC' | 'MANUAL'>;

    /**
     * The default currency of the catalog.
     */
    default_currency?: 'USD' | 'GBP' | 'CAD' | 'EUR' | 'AUD' | 'JPY' | 'CHF' | 'NZD' | 'SEK' | 'NOK';

    /**
     * The default language of the catalog.
     */
    default_language?: 'en' | 'de' | 'es' | 'fr' | 'it' | 'pt';

    /**
     * The list of the attached Reddit Pixel IDs.
     */
    event_sources?: Array<string>;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The name of the product catalog.
     */
    name?: string;

    /**
     * A summary of the product catalog.
     */
    summary?: Data.Summary;
  }

  export namespace Data {
    /**
     * The unique identifier of a business.
     */
    export interface BusinessID {}

    /**
     * A summary of the product catalog.
     */
    export interface Summary {
      /**
       * The number of approved products in the catalog.
       */
      approved_products_count?: number;

      /**
       * The number of products in the catalog.
       */
      products_count?: number;

      /**
       * The number of rejected products in the catalog.
       */
      rejected_products_count?: number;
    }
  }
}

export interface ProductCatalogListResponse {
  data: Array<ProductCatalogListResponse.Data>;
}

export namespace ProductCatalogListResponse {
  export interface Data {
    /**
     * The ID of the product catalog.
     */
    id?: string;

    /**
     * The unique identifier of a business.
     */
    business_id?: Data.BusinessID;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The list of catalog data sources.
     */
    data_sources?: Array<'BULK_IMPORT' | 'FEED_SYNC' | 'MANUAL'>;

    /**
     * The default currency of the catalog.
     */
    default_currency?: 'USD' | 'GBP' | 'CAD' | 'EUR' | 'AUD' | 'JPY' | 'CHF' | 'NZD' | 'SEK' | 'NOK';

    /**
     * The default language of the catalog.
     */
    default_language?: 'en' | 'de' | 'es' | 'fr' | 'it' | 'pt';

    /**
     * The list of the attached Reddit Pixel IDs.
     */
    event_sources?: Array<string>;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The name of the product catalog.
     */
    name?: string;

    /**
     * A summary of the product catalog.
     */
    summary?: Data.Summary;
  }

  export namespace Data {
    /**
     * The unique identifier of a business.
     */
    export interface BusinessID {}

    /**
     * A summary of the product catalog.
     */
    export interface Summary {
      /**
       * The number of approved products in the catalog.
       */
      approved_products_count?: number;

      /**
       * The number of products in the catalog.
       */
      products_count?: number;

      /**
       * The number of rejected products in the catalog.
       */
      rejected_products_count?: number;
    }
  }
}

export interface ProductCatalogCreateParams {
  data: ProductCatalogCreateParams.Data;
}

export namespace ProductCatalogCreateParams {
  export interface Data {
    /**
     * The default currency of the catalog.
     */
    default_currency: 'USD' | 'GBP' | 'CAD' | 'EUR' | 'AUD' | 'JPY' | 'CHF' | 'NZD' | 'SEK' | 'NOK';

    /**
     * The default language of the catalog.
     */
    default_language: 'en' | 'de' | 'es' | 'fr' | 'it' | 'pt';

    /**
     * The name of the product catalog.
     */
    name: string;

    /**
     * The list of the attached Reddit Pixel IDs.
     */
    event_sources?: Array<string>;
  }
}

export declare namespace ProductCatalogs {
  export {
    type ProductCatalogCreateResponse as ProductCatalogCreateResponse,
    type ProductCatalogListResponse as ProductCatalogListResponse,
    type ProductCatalogCreateParams as ProductCatalogCreateParams,
  };
}
