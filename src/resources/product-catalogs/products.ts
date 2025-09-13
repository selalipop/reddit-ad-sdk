// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Products extends APIResource {
  /**
   * Retrieve all products in a catalog.<h2>Rate Limit</h2>
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
    query: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductListResponse> {
    return this._client.get(path`/product_catalogs/${catalogID}/products`, { query, ...options });
  }

  /**
   * > **Note:** If using a schedule feed, update your feed to ensure your catalog is
   * > up to date. Delete multiple products in a catalog. **Important:** This action
   * > can't be undone.
   *
   * <h2>Rate Limit</h2>
   *   <div><a href="/ratelimits/Product Catalog Batch">See the rate limits for <strong>Product Catalog Batch</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-product-catalog-batch</span></div>
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
   *                                         <li>Quota: 150 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
   */
  batchDelete(
    catalogID: string,
    body: ProductBatchDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ProductBatchDeleteResponse> {
    return this._client.post(path`/product_catalogs/${catalogID}/products/batch_delete`, {
      body,
      ...options,
    });
  }

  /**
   * > **Note:** If using a schedule feed, update your feed to ensure your catalog is
   * > up to date. Create multiple products in a catalog. View our
   * > [catalog requirements](https://business.reddithelp.com/s/article/catalog-requirements).
   *
   * <h2>Rate Limit</h2>
   *   <div><a href="/ratelimits/Product Catalog Batch">See the rate limits for <strong>Product Catalog Batch</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-product-catalog-batch</span></div>
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
   *                                         <li>Quota: 150 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
   */
  batchUpsert(
    catalogID: string,
    body: ProductBatchUpsertParams,
    options?: RequestOptions,
  ): APIPromise<ProductBatchUpsertResponse> {
    return this._client.post(path`/product_catalogs/${catalogID}/products/batch_upsert`, {
      body,
      ...options,
    });
  }
}

export interface ProductListResponse {
  data: Array<ProductListResponse.Data>;

  pagination: ProductListResponse.Pagination;
}

export namespace ProductListResponse {
  export interface Data {
    /**
     * The ID of the product.
     */
    id?: string;

    /**
     * The additional image URLs of the product.
     */
    additional_image_links?: Array<string> | null;

    /**
     * Indicates if the product is intended for adults.
     */
    adult?: boolean | null;

    /**
     * Target age group.
     */
    age_group?: string | null;

    /**
     * The availability of the product.
     */
    availability?: 'BACKORDER' | 'IN_STOCK' | 'OUT_OF_STOCK' | 'PREORDER' | null;

    /**
     * Average rating of customer reviews.
     */
    average_review_rating?: string | null;

    /**
     * The brand of manufacturer.
     */
    brand?: string | null;

    /**
     * The color of the product.
     */
    color?: string | null;

    /**
     * The condition of the product.
     */
    condition?: string | null;

    /**
     * Merchants product cost, including currency in ISO 4217 format.
     */
    cost_of_goods_sold?: string | null;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * Custom text assigned to a product. Enables filtering and selection of products.
     */
    custom_label_0?: string | null;

    /**
     * Custom text assigned to a product. Enables filtering and selection of products.
     */
    custom_label_1?: string | null;

    /**
     * Custom text assigned to a product. Enables filtering and selection of products.
     */
    custom_label_2?: string | null;

    /**
     * Custom text assigned to a product. Enables filtering and selection of products.
     */
    custom_label_3?: string | null;

    /**
     * Custom text assigned to a product. Enables filtering and selection of products.
     */
    custom_label_4?: string | null;

    /**
     * Custom integer assigned to a product. Enables filtering and selection of
     * products.
     */
    custom_number_0?: number | null;

    /**
     * Custom integer assigned to a product. Enables filtering and selection of
     * products.
     */
    custom_number_1?: number | null;

    /**
     * Custom integer assigned to a product. Enables filtering and selection of
     * products.
     */
    custom_number_2?: number | null;

    /**
     * Custom integer assigned to a product. Enables filtering and selection of
     * products.
     */
    custom_number_3?: number | null;

    /**
     * Custom integer assigned to a product. Enables filtering and selection of
     * products.
     */
    custom_number_4?: number | null;

    /**
     * The description of the product.
     */
    description?: string;

    /**
     * The expiration date of the product.
     */
    expiration_date?: string | null;

    /**
     * The gender for which the product is intended.
     */
    gender?: string | null;

    /**
     * The Google product category of the product.
     * [See the full list of categories](https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt).
     */
    google_product_category?: string | null;

    /**
     * The Global Trade Item Number (GTIN) of the product.
     */
    gtin?: string | null;

    /**
     * The image URL of the product.
     */
    image_link?: string;

    /**
     * Indicates if the product is a part of a bundle.
     */
    is_bundle?: boolean | null;

    /**
     * The item group ID of the product.
     */
    item_group_id?: string | null;

    /**
     * The image URL of the product.
     */
    lifestyle_image_link?: string | null;

    /**
     * The URL of the product.
     */
    link?: string;

    /**
     * Dominant material this product is made of.
     */
    material?: string | null;

    /**
     * URL of mobile version of product landing page.
     */
    mobile_link?: string | null;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The Manufacturer Part Number (MPN) of the product.
     */
    mpn?: string | null;

    /**
     * Number of customer reviews.
     */
    number_of_ratings?: number | null;

    /**
     * Visible pattern of this product.
     */
    pattern?: string | null;

    /**
     * Map of platform to platform-specific URL.
     */
    platform_specific_link?: Data.PlatformSpecificLink | null;

    /**
     * Price of a product, including currency in ISO 4217 format.
     */
    price?: string;

    /**
     * The detail of the product.
     */
    product_detail?: string | null;

    /**
     * The highlight of the product.
     */
    product_highlight?: string | null;

    /**
     * Merchant-defined category of the product.
     */
    product_type?: string | null;

    reddit?: Data.Reddit;

    /**
     * The sale price of the product.
     */
    sale_price?: string | null;

    /**
     * The date range when `sale_price` is effective, formatted in ISO 8601 format.
     * Provide 2 datetime values with time zone, separated by a forward slash (`/`).
     */
    sale_price_effective_date?: string | null;

    /**
     * Size of the product.
     */
    size?: string | null;

    /**
     * Measurement system used to provide size.
     */
    size_type?: string | null;

    /**
     * The title of the product.
     */
    title?: string;
  }

  export namespace Data {
    /**
     * Map of platform to platform-specific URL.
     */
    export interface PlatformSpecificLink {
      /**
       * The URL of the product for Android.
       */
      android?: string | null;

      /**
       * The URL of the product for iOS.
       */
      ios?: string | null;
    }

    export interface Reddit {
      /**
       * The Reddit ID of the product.
       */
      id?: string;

      /**
       * The Reddit approval decision of the product.
       */
      approval_decision?: 'PENDING' | 'APPROVED' | 'REJECTED';

      /**
       * The ID of the product catalog that this product belongs to.
       */
      catalog_id?: string;

      /**
       * The Reddit-hosted image URL of the product.
       */
      image_link?: string | null;

      /**
       * The list of product issues.
       */
      issues?: Array<Reddit.Issue> | null;
    }

    export namespace Reddit {
      export interface Issue {
        /**
         * The code of the issue.
         */
        code?:
          | 'INVALID_ADDITIONAL_IMAGE_LINKS'
          | 'INVALID_SALE_PRICE'
          | 'INVALID_SALE_PRICE_EFFECTIVE_DATE'
          | 'INVALID_EXPIRATION_DATE'
          | 'IMAGE_PROCESSING_ERROR'
          | 'IMAGE_REJECTED'
          | 'LOW_IMAGE_QUALITY'
          | 'INVALID_CUSTOM_LABEL_0'
          | 'INVALID_CUSTOM_LABEL_1'
          | 'INVALID_CUSTOM_LABEL_2'
          | 'INVALID_CUSTOM_LABEL_3'
          | 'INVALID_CUSTOM_LABEL_4'
          | 'INVALID_GOOGLE_PRODUCT_CATEGORY'
          | 'INVALID_PRODUCT_TYPE'
          | 'INVALID_BRAND'
          | 'INVALID_GTIN'
          | 'INVALID_MPN'
          | 'INVALID_ITEM_GROUP_ID'
          | 'INVALID_COST_OF_GOODS_SOLD'
          | 'INVALID_AVAILABILITY'
          | 'INVALID_MOBILE_LINK'
          | 'INVALID_PLATFORM_SPECIFIC_LINK'
          | 'INVALID_AVERAGE_REVIEW_RATING'
          | 'INVALID_NUMBER_OF_RATINGS'
          | 'INVALID_CONDITION'
          | 'INVALID_AGE_GROUP'
          | 'INVALID_GENDER'
          | 'INVALID_COLOR'
          | 'INVALID_SIZE'
          | 'INVALID_SIZE_TYPE'
          | 'INVALID_MATERIAL'
          | 'INVALID_PATTERN'
          | 'INVALID_CUSTOM_NUMBER_0'
          | 'INVALID_CUSTOM_NUMBER_1'
          | 'INVALID_CUSTOM_NUMBER_2'
          | 'INVALID_CUSTOM_NUMBER_3'
          | 'INVALID_CUSTOM_NUMBER_4'
          | 'INVALID_PRODUCT_DETAIL'
          | 'INVALID_PRODUCT_HIGHLIGHT'
          | 'INVALID_LIFESTYLE_IMAGE_LINK'
          | 'INVALID_IS_BUNDLE';

        /**
         * The name of the product field where the issue occurred.
         */
        field?: string;

        /**
         * Human-readable message describing this issue.
         */
        message?: string;

        /**
         * The severity of the issue.
         */
        severity?: 'WARNING' | 'CRITICAL';
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

export interface ProductBatchDeleteResponse {
  data: { [key: string]: 'DELETED' | 'NOT_FOUND' };
}

export interface ProductBatchUpsertResponse {
  data: Array<ProductBatchUpsertResponse.UnionMember0 | ProductBatchUpsertResponse.UnionMember1>;
}

export namespace ProductBatchUpsertResponse {
  export interface UnionMember0 {
    product?: UnionMember0.Product | null;

    /**
     * The status of the product creation.
     */
    status?: 'CREATED' | 'UPDATED' | 'INVALID' | 'UNCHANGED';
  }

  export namespace UnionMember0 {
    export interface Product {
      /**
       * The ID of the product.
       */
      id?: string;

      /**
       * The additional image URLs of the product.
       */
      additional_image_links?: Array<string> | null;

      /**
       * Indicates if the product is intended for adults.
       */
      adult?: boolean | null;

      /**
       * Target age group.
       */
      age_group?: string | null;

      /**
       * The availability of the product.
       */
      availability?: 'BACKORDER' | 'IN_STOCK' | 'OUT_OF_STOCK' | 'PREORDER' | null;

      /**
       * Average rating of customer reviews.
       */
      average_review_rating?: string | null;

      /**
       * The brand of manufacturer.
       */
      brand?: string | null;

      /**
       * The color of the product.
       */
      color?: string | null;

      /**
       * The condition of the product.
       */
      condition?: string | null;

      /**
       * Merchants product cost, including currency in ISO 4217 format.
       */
      cost_of_goods_sold?: string | null;

      /**
       * The time that this entity was created represented in ISO 8601.
       */
      created_at?: string;

      /**
       * Custom text assigned to a product. Enables filtering and selection of products.
       */
      custom_label_0?: string | null;

      /**
       * Custom text assigned to a product. Enables filtering and selection of products.
       */
      custom_label_1?: string | null;

      /**
       * Custom text assigned to a product. Enables filtering and selection of products.
       */
      custom_label_2?: string | null;

      /**
       * Custom text assigned to a product. Enables filtering and selection of products.
       */
      custom_label_3?: string | null;

      /**
       * Custom text assigned to a product. Enables filtering and selection of products.
       */
      custom_label_4?: string | null;

      /**
       * Custom integer assigned to a product. Enables filtering and selection of
       * products.
       */
      custom_number_0?: number | null;

      /**
       * Custom integer assigned to a product. Enables filtering and selection of
       * products.
       */
      custom_number_1?: number | null;

      /**
       * Custom integer assigned to a product. Enables filtering and selection of
       * products.
       */
      custom_number_2?: number | null;

      /**
       * Custom integer assigned to a product. Enables filtering and selection of
       * products.
       */
      custom_number_3?: number | null;

      /**
       * Custom integer assigned to a product. Enables filtering and selection of
       * products.
       */
      custom_number_4?: number | null;

      /**
       * The description of the product.
       */
      description?: string;

      /**
       * The expiration date of the product.
       */
      expiration_date?: string | null;

      /**
       * The gender for which the product is intended.
       */
      gender?: string | null;

      /**
       * The Google product category of the product.
       * [See the full list of categories](https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt).
       */
      google_product_category?: string | null;

      /**
       * The Global Trade Item Number (GTIN) of the product.
       */
      gtin?: string | null;

      /**
       * The image URL of the product.
       */
      image_link?: string;

      /**
       * Indicates if the product is a part of a bundle.
       */
      is_bundle?: boolean | null;

      /**
       * The item group ID of the product.
       */
      item_group_id?: string | null;

      /**
       * The image URL of the product.
       */
      lifestyle_image_link?: string | null;

      /**
       * The URL of the product.
       */
      link?: string;

      /**
       * Dominant material this product is made of.
       */
      material?: string | null;

      /**
       * URL of mobile version of product landing page.
       */
      mobile_link?: string | null;

      /**
       * The last time that this entity was modified represented in ISO 8601.
       */
      modified_at?: string;

      /**
       * The Manufacturer Part Number (MPN) of the product.
       */
      mpn?: string | null;

      /**
       * Number of customer reviews.
       */
      number_of_ratings?: number | null;

      /**
       * Visible pattern of this product.
       */
      pattern?: string | null;

      /**
       * Map of platform to platform-specific URL.
       */
      platform_specific_link?: Product.PlatformSpecificLink | null;

      /**
       * Price of a product, including currency in ISO 4217 format.
       */
      price?: string;

      /**
       * The detail of the product.
       */
      product_detail?: string | null;

      /**
       * The highlight of the product.
       */
      product_highlight?: string | null;

      /**
       * Merchant-defined category of the product.
       */
      product_type?: string | null;

      reddit?: Product.Reddit;

      /**
       * The sale price of the product.
       */
      sale_price?: string | null;

      /**
       * The date range when `sale_price` is effective, formatted in ISO 8601 format.
       * Provide 2 datetime values with time zone, separated by a forward slash (`/`).
       */
      sale_price_effective_date?: string | null;

      /**
       * Size of the product.
       */
      size?: string | null;

      /**
       * Measurement system used to provide size.
       */
      size_type?: string | null;

      /**
       * The title of the product.
       */
      title?: string;
    }

    export namespace Product {
      /**
       * Map of platform to platform-specific URL.
       */
      export interface PlatformSpecificLink {
        /**
         * The URL of the product for Android.
         */
        android?: string | null;

        /**
         * The URL of the product for iOS.
         */
        ios?: string | null;
      }

      export interface Reddit {
        /**
         * The Reddit ID of the product.
         */
        id?: string;

        /**
         * The Reddit approval decision of the product.
         */
        approval_decision?: 'PENDING' | 'APPROVED' | 'REJECTED';

        /**
         * The ID of the product catalog that this product belongs to.
         */
        catalog_id?: string;

        /**
         * The Reddit-hosted image URL of the product.
         */
        image_link?: string | null;

        /**
         * The list of product issues.
         */
        issues?: Array<Reddit.Issue> | null;
      }

      export namespace Reddit {
        export interface Issue {
          /**
           * The code of the issue.
           */
          code?:
            | 'INVALID_ADDITIONAL_IMAGE_LINKS'
            | 'INVALID_SALE_PRICE'
            | 'INVALID_SALE_PRICE_EFFECTIVE_DATE'
            | 'INVALID_EXPIRATION_DATE'
            | 'IMAGE_PROCESSING_ERROR'
            | 'IMAGE_REJECTED'
            | 'LOW_IMAGE_QUALITY'
            | 'INVALID_CUSTOM_LABEL_0'
            | 'INVALID_CUSTOM_LABEL_1'
            | 'INVALID_CUSTOM_LABEL_2'
            | 'INVALID_CUSTOM_LABEL_3'
            | 'INVALID_CUSTOM_LABEL_4'
            | 'INVALID_GOOGLE_PRODUCT_CATEGORY'
            | 'INVALID_PRODUCT_TYPE'
            | 'INVALID_BRAND'
            | 'INVALID_GTIN'
            | 'INVALID_MPN'
            | 'INVALID_ITEM_GROUP_ID'
            | 'INVALID_COST_OF_GOODS_SOLD'
            | 'INVALID_AVAILABILITY'
            | 'INVALID_MOBILE_LINK'
            | 'INVALID_PLATFORM_SPECIFIC_LINK'
            | 'INVALID_AVERAGE_REVIEW_RATING'
            | 'INVALID_NUMBER_OF_RATINGS'
            | 'INVALID_CONDITION'
            | 'INVALID_AGE_GROUP'
            | 'INVALID_GENDER'
            | 'INVALID_COLOR'
            | 'INVALID_SIZE'
            | 'INVALID_SIZE_TYPE'
            | 'INVALID_MATERIAL'
            | 'INVALID_PATTERN'
            | 'INVALID_CUSTOM_NUMBER_0'
            | 'INVALID_CUSTOM_NUMBER_1'
            | 'INVALID_CUSTOM_NUMBER_2'
            | 'INVALID_CUSTOM_NUMBER_3'
            | 'INVALID_CUSTOM_NUMBER_4'
            | 'INVALID_PRODUCT_DETAIL'
            | 'INVALID_PRODUCT_HIGHLIGHT'
            | 'INVALID_LIFESTYLE_IMAGE_LINK'
            | 'INVALID_IS_BUNDLE';

          /**
           * The name of the product field where the issue occurred.
           */
          field?: string;

          /**
           * Human-readable message describing this issue.
           */
          message?: string;

          /**
           * The severity of the issue.
           */
          severity?: 'WARNING' | 'CRITICAL';
        }
      }
    }
  }

  export interface UnionMember1 {
    /**
     * The list of product validation issues.
     */
    issues?: Array<UnionMember1.Issue> | null;

    /**
     * The status of the product creation.
     */
    status?: 'CREATED' | 'UPDATED' | 'INVALID' | 'UNCHANGED';
  }

  export namespace UnionMember1 {
    export interface Issue {
      /**
       * The code of the validation error.
       */
      code?:
        | 'INVALID_PRODUCT_ID'
        | 'INVALID_TITLE'
        | 'INVALID_DESCRIPTION'
        | 'INVALID_LINK'
        | 'INVALID_IMAGE_LINK'
        | 'INVALID_PRICE'
        | 'INVALID_ADDITIONAL_IMAGE_LINKS'
        | 'INVALID_SALE_PRICE'
        | 'INVALID_SALE_PRICE_EFFECTIVE_DATE'
        | 'INVALID_EXPIRATION_DATE'
        | 'INVALID_ADULT';

      /**
       * The name of the product field where validation error occurred.
       */
      field?: string | null;

      /**
       * Human-readable message describing this validation error.
       */
      message?: string;

      /**
       * The severity of the warning.
       */
      severity?: 'WARNING' | 'CRITICAL';
    }
  }
}

export interface ProductListParams {
  /**
   * Approval decision to filter by.
   */
  approval_decision?: 'PENDING' | 'APPROVED' | 'REJECTED';

  /**
   * Product IDs to filter by.
   */
  ids?: Array<string>;

  page?: ProductListParams.Page;

  /**
   * Search query
   */
  search?: string;
}

export namespace ProductListParams {
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

export interface ProductBatchDeleteParams {
  data: Array<string>;
}

export interface ProductBatchUpsertParams {
  data: Array<ProductBatchUpsertParams.Data>;
}

export namespace ProductBatchUpsertParams {
  export interface Data {
    /**
     * The ID of the product.
     */
    id?: string;

    /**
     * The additional image URLs of the product.
     */
    additional_image_links?: Array<string> | null;

    /**
     * Indicates if the product is intended for adults.
     */
    adult?: boolean | null;

    /**
     * Target age group.
     */
    age_group?: string | null;

    /**
     * The availability of the product.
     */
    availability?: 'BACKORDER' | 'IN_STOCK' | 'OUT_OF_STOCK' | 'PREORDER' | null;

    /**
     * Average rating of customer reviews.
     */
    average_review_rating?: string | null;

    /**
     * The brand of manufacturer.
     */
    brand?: string | null;

    /**
     * The color of the product.
     */
    color?: string | null;

    /**
     * The condition of the product.
     */
    condition?: string | null;

    /**
     * Merchants product cost, including currency in ISO 4217 format.
     */
    cost_of_goods_sold?: string | null;

    /**
     * Custom text assigned to a product. Enables filtering and selection of products.
     */
    custom_label_0?: string | null;

    /**
     * Custom text assigned to a product. Enables filtering and selection of products.
     */
    custom_label_1?: string | null;

    /**
     * Custom text assigned to a product. Enables filtering and selection of products.
     */
    custom_label_2?: string | null;

    /**
     * Custom text assigned to a product. Enables filtering and selection of products.
     */
    custom_label_3?: string | null;

    /**
     * Custom text assigned to a product. Enables filtering and selection of products.
     */
    custom_label_4?: string | null;

    /**
     * Custom number assigned to a product. Enables filtering and selection of
     * products.
     */
    custom_number_0?: number | null;

    /**
     * Custom number assigned to a product. Enables filtering and selection of
     * products.
     */
    custom_number_1?: number | null;

    /**
     * Custom number assigned to a product. Enables filtering and selection of
     * products.
     */
    custom_number_2?: number | null;

    /**
     * Custom number assigned to a product. Enables filtering and selection of
     * products.
     */
    custom_number_3?: number | null;

    /**
     * Custom number assigned to a product. Enables filtering and selection of
     * products.
     */
    custom_number_4?: number | null;

    /**
     * The description of the product.
     */
    description?: string | null;

    /**
     * The expiration date of the product in ISO 8601 format.
     */
    expiration_date?: string | null;

    /**
     * The gender for which the product is intended.
     */
    gender?: string | null;

    /**
     * The Google product category of the product.
     * [See the full list of categories](https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt).
     */
    google_product_category?: string | null;

    /**
     * The Global Trade Item Number (GTIN) of the product.
     */
    gtin?: string | null;

    /**
     * The image URL of the product.
     */
    image_link?: string | null;

    /**
     * Indicates if the product is a part of a bundle.
     */
    is_bundle?: boolean | null;

    /**
     * The item group ID of the product.
     */
    item_group_id?: string | null;

    /**
     * The image URL of the product.
     */
    lifestyle_image_link?: string | null;

    /**
     * The URL of the product.
     */
    link?: string | null;

    /**
     * Dominant material this product is made of.
     */
    material?: string | null;

    /**
     * URL of mobile version of product landing page.
     */
    mobile_link?: string | null;

    /**
     * The Manufacturer Part Number (MPN) of the product.
     */
    mpn?: string | null;

    /**
     * Number of customer reviews.
     */
    number_of_ratings?: number | null;

    /**
     * Visible pattern of this product.
     */
    pattern?: string | null;

    /**
     * Map of platform to platform-specific URL.
     */
    platform_specific_link?: Data.PlatformSpecificLink | null;

    /**
     * Price of a product, including currency in ISO 4217 format.
     */
    price?: string | null;

    /**
     * The detail of the product.
     */
    product_detail?: string | null;

    /**
     * The highlight of the product.
     */
    product_highlight?: string | null;

    /**
     * Merchant-defined category of the product.
     */
    product_type?: string | null;

    /**
     * The sale price of the product.
     */
    sale_price?: string | null;

    /**
     * The date range when `sale_price` is effective, formatted in ISO 8601 format.
     * Provide 2 datetime values with time zone, separated by a forward slash (`/`).
     */
    sale_price_effective_date?: string | null;

    /**
     * Size of the product.
     */
    size?: string | null;

    /**
     * Measurement system used to provide size.
     */
    size_type?: string | null;

    /**
     * The title of the product.
     */
    title?: string | null;
  }

  export namespace Data {
    /**
     * Map of platform to platform-specific URL.
     */
    export interface PlatformSpecificLink {
      /**
       * The URL of the product for Android.
       */
      android?: string | null;

      /**
       * The URL of the product for iOS.
       */
      ios?: string | null;
    }
  }
}

export declare namespace Products {
  export {
    type ProductListResponse as ProductListResponse,
    type ProductBatchDeleteResponse as ProductBatchDeleteResponse,
    type ProductBatchUpsertResponse as ProductBatchUpsertResponse,
    type ProductListParams as ProductListParams,
    type ProductBatchDeleteParams as ProductBatchDeleteParams,
    type ProductBatchUpsertParams as ProductBatchUpsertParams,
  };
}
