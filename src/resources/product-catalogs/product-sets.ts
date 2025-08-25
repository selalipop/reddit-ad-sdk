// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ProductSets extends APIResource {
  /**
   * Create a new product set in a catalog.<h2>Rate Limit</h2>
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
    catalogID: string,
    body: ProductSetCreateParams,
    options?: RequestOptions,
  ): APIPromise<ProductSetCreateResponse> {
    return this._client.post(path`/product_catalogs/${catalogID}/product_sets`, { body, ...options });
  }

  /**
   * Retrieve all product sets in a catalog.<h2>Rate Limit</h2>
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
  list(
    catalogID: string,
    query: ProductSetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductSetListResponse> {
    return this._client.get(path`/product_catalogs/${catalogID}/product_sets`, { query, ...options });
  }
}

export interface ProductSetCreateResponse {
  data: ProductSetCreateResponse.Data;
}

export namespace ProductSetCreateResponse {
  export interface Data {
    /**
     * The ID of the product set.
     */
    id?: string;

    /**
     * The ID of the product catalog that this product set belongs to.
     */
    catalog_id?: string;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The filter rule that defines the set of products in the catalog.
     * [Learn about filter rules](https://ads-api.reddit.com/docs/v3/#manage-product-catalogs).
     */
    filter?: string;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The name of the product set.
     */
    name?: string;

    /**
     * The summary of the product set.
     */
    summary?: Data.Summary;
  }

  export namespace Data {
    /**
     * The summary of the product set.
     */
    export interface Summary {
      /**
       * The number of approved products in the product set.
       */
      approved_products_count?: number | null;

      /**
       * A map of issues categorized by severity.
       */
      issues?: Summary.Issues | null;

      /**
       * The number of products in the product set.
       */
      products_count?: number;

      /**
       * The number of rejected products in the product set.
       */
      rejected_products_count?: number | null;
    }

    export namespace Summary {
      /**
       * A map of issues categorized by severity.
       */
      export interface Issues {
        /**
         * A map of critical issues with issue codes as keys and counts as values.
         */
        critical?: { [key: string]: number } | null;

        /**
         * A map of warnings with issue codes as keys and counts as values.
         */
        warning?: { [key: string]: number } | null;
      }
    }
  }
}

export interface ProductSetListResponse {
  data: Array<ProductSetListResponse.Data>;

  pagination: ProductSetListResponse.Pagination;
}

export namespace ProductSetListResponse {
  export interface Data {
    /**
     * The ID of the product set.
     */
    id?: string;

    /**
     * The ID of the product catalog that this product set belongs to.
     */
    catalog_id?: string;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The filter rule that defines the set of products in the catalog.
     * [Learn about filter rules](https://ads-api.reddit.com/docs/v3/#manage-product-catalogs).
     */
    filter?: string;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The name of the product set.
     */
    name?: string;

    /**
     * The summary of the product set.
     */
    summary?: Data.Summary;
  }

  export namespace Data {
    /**
     * The summary of the product set.
     */
    export interface Summary {
      /**
       * The number of approved products in the product set.
       */
      approved_products_count?: number | null;

      /**
       * A map of issues categorized by severity.
       */
      issues?: Summary.Issues | null;

      /**
       * The number of products in the product set.
       */
      products_count?: number;

      /**
       * The number of rejected products in the product set.
       */
      rejected_products_count?: number | null;
    }

    export namespace Summary {
      /**
       * A map of issues categorized by severity.
       */
      export interface Issues {
        /**
         * A map of critical issues with issue codes as keys and counts as values.
         */
        critical?: { [key: string]: number } | null;

        /**
         * A map of warnings with issue codes as keys and counts as values.
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

export interface ProductSetCreateParams {
  data: ProductSetCreateParams.Data;
}

export namespace ProductSetCreateParams {
  export interface Data {
    /**
     * The filter rule that defines the set of products in the catalog.
     * [Learn about filter rules](https://ads-api.reddit.com/docs/v3/#manage-product-catalogs).
     */
    filter: string;

    /**
     * The name of the product set.
     */
    name: string;
  }
}

export interface ProductSetListParams {
  page?: ProductSetListParams.Page;
}

export namespace ProductSetListParams {
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

export declare namespace ProductSets {
  export {
    type ProductSetCreateResponse as ProductSetCreateResponse,
    type ProductSetListResponse as ProductSetListResponse,
    type ProductSetCreateParams as ProductSetCreateParams,
    type ProductSetListParams as ProductSetListParams,
  };
}
