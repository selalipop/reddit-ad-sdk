// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProductFeedsAPI from './product-feeds';
import {
  ProductFeedCreateParams,
  ProductFeedCreateResponse,
  ProductFeedListResponse,
  ProductFeeds,
} from './product-feeds';
import * as ProductSetsAPI from './product-sets';
import {
  ProductSetCreateParams,
  ProductSetCreateResponse,
  ProductSetListParams,
  ProductSetListResponse,
  ProductSets,
} from './product-sets';
import * as ProductsAPI from './products';
import {
  ProductBatchDeleteParams,
  ProductBatchDeleteResponse,
  ProductBatchUpsertParams,
  ProductBatchUpsertResponse,
  ProductListParams,
  ProductListResponse,
  Products,
} from './products';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ProductCatalogs extends APIResource {
  productFeeds: ProductFeedsAPI.ProductFeeds = new ProductFeedsAPI.ProductFeeds(this._client);
  productSets: ProductSetsAPI.ProductSets = new ProductSetsAPI.ProductSets(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);

  /**
   * Retrieve a specific catalog.<h2>Rate Limit</h2>
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
  retrieve(catalogID: string, options?: RequestOptions): APIPromise<ProductCatalogRetrieveResponse> {
    return this._client.get(path`/product_catalogs/${catalogID}`, options);
  }

  /**
   * Change a specific catalog's name or attached Pixel ID.<h2>Rate Limit</h2>
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
  update(
    catalogID: string,
    body: ProductCatalogUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProductCatalogUpdateResponse> {
    return this._client.patch(path`/product_catalogs/${catalogID}`, { body, ...options });
  }

  /**
   * Delete a catalog.
   *
   * > **Important:** This action can't be undone.
   *
   * <h2>Rate Limit</h2>
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
  delete(catalogID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/product_catalogs/${catalogID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve all imports for a catalog.<h2>Rate Limit</h2>
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
  listImports(
    catalogID: string,
    query: ProductCatalogListImportsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductCatalogListImportsResponse> {
    return this._client.get(path`/product_catalogs/${catalogID}/catalog_imports`, { query, ...options });
  }
}

export interface ProductCatalogRetrieveResponse {
  data: ProductCatalogRetrieveResponse.Data;
}

export namespace ProductCatalogRetrieveResponse {
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

export interface ProductCatalogUpdateResponse {
  data: ProductCatalogUpdateResponse.Data;
}

export namespace ProductCatalogUpdateResponse {
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

export interface ProductCatalogListImportsResponse {
  data: Array<ProductCatalogListImportsResponse.Data>;

  pagination: ProductCatalogListImportsResponse.Pagination;
}

export namespace ProductCatalogListImportsResponse {
  export interface Data {
    /**
     * The ID of the catalog import.
     */
    id?: string;

    /**
     * The ID of the product catalog that this import belongs to.
     */
    catalog_id?: string;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The ID of the product feed that this import belongs to.
     */
    feed_id?: string;

    /**
     * The name of the file used for this import.
     */
    filename?: string;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The current status of this catalog import.
     */
    status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'SKIPPED';

    /**
     * The summary of the catalog import.
     */
    summary?: Data.Summary | null;
  }

  export namespace Data {
    /**
     * The summary of the catalog import.
     */
    export interface Summary {
      /**
       * Describes how many products were added to the catalog.
       */
      added_products_count?: number | null;

      /**
       * Describes how many products were deleted from the catalog.
       */
      deleted_products_count?: number | null;

      /**
       * Mapping of severity levels to issue codes, along with the number of products
       * having this issue
       */
      issues?: Summary.Issues | null;

      /**
       * Describes how many products were modified.
       */
      modified_products_count?: number | null;
    }

    export namespace Summary {
      /**
       * Mapping of severity levels to issue codes, along with the number of products
       * having this issue
       */
      export interface Issues {
        /**
         * Mapping of critical issue codes to the number of products having this issue
         */
        critical?: { [key: string]: number } | null;

        /**
         * Mapping of warning issue codes to the number of products having this issue
         */
        warning?: { [key: string]: number } | null;
      }
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

export interface ProductCatalogUpdateParams {
  data: ProductCatalogUpdateParams.Data;
}

export namespace ProductCatalogUpdateParams {
  export interface Data {
    /**
     * The list of the attached Reddit Pixel IDs.
     */
    event_sources?: Array<string>;

    /**
     * The name of the product catalog.
     */
    name?: string;
  }
}

export interface ProductCatalogListImportsParams {
  /**
   * List of product feed IDs to filter by.
   */
  feed_ids?: Array<string>;

  page?: ProductCatalogListImportsParams.Page;

  /**
   * Catalog import statuses to filter by.
   */
  statuses?: Array<'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'SKIPPED'>;
}

export namespace ProductCatalogListImportsParams {
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

ProductCatalogs.ProductFeeds = ProductFeeds;
ProductCatalogs.ProductSets = ProductSets;
ProductCatalogs.Products = Products;

export declare namespace ProductCatalogs {
  export {
    type ProductCatalogRetrieveResponse as ProductCatalogRetrieveResponse,
    type ProductCatalogUpdateResponse as ProductCatalogUpdateResponse,
    type ProductCatalogListImportsResponse as ProductCatalogListImportsResponse,
    type ProductCatalogUpdateParams as ProductCatalogUpdateParams,
    type ProductCatalogListImportsParams as ProductCatalogListImportsParams,
  };

  export {
    ProductFeeds as ProductFeeds,
    type ProductFeedCreateResponse as ProductFeedCreateResponse,
    type ProductFeedListResponse as ProductFeedListResponse,
    type ProductFeedCreateParams as ProductFeedCreateParams,
  };

  export {
    ProductSets as ProductSets,
    type ProductSetCreateResponse as ProductSetCreateResponse,
    type ProductSetListResponse as ProductSetListResponse,
    type ProductSetCreateParams as ProductSetCreateParams,
    type ProductSetListParams as ProductSetListParams,
  };

  export {
    Products as Products,
    type ProductListResponse as ProductListResponse,
    type ProductBatchDeleteResponse as ProductBatchDeleteResponse,
    type ProductBatchUpsertResponse as ProductBatchUpsertResponse,
    type ProductListParams as ProductListParams,
    type ProductBatchDeleteParams as ProductBatchDeleteParams,
    type ProductBatchUpsertParams as ProductBatchUpsertParams,
  };
}
