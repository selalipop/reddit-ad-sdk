// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CatalogImports extends APIResource {
  /**
   * List a catalog's import issues. See
   * [troubleshooting](https://business.reddithelp.com/s/article/troubleshoot-catalogs)
   * and
   * [catalog requirements](https://business.reddithelp.com/s/article/catalog-requirements)
   * for more details.<h2>Rate Limit</h2>
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
  listIssues(
    importID: string,
    query: CatalogImportListIssuesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CatalogImportListIssuesResponse> {
    return this._client.get(path`/catalog_imports/${importID}/issues`, { query, ...options });
  }

  /**
   * Retrieve metadata for a specific catalog import. Access the URL to download
   * details on product processing statuses and issues.<h2>Rate Limit</h2>
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
  retrieveReport(
    importID: string,
    options?: RequestOptions,
  ): APIPromise<CatalogImportRetrieveReportResponse> {
    return this._client.get(path`/catalog_imports/${importID}/report`, options);
  }
}

export interface CatalogImportListIssuesResponse {
  data: Array<CatalogImportListIssuesResponse.Data>;

  pagination: CatalogImportListIssuesResponse.Pagination;
}

export namespace CatalogImportListIssuesResponse {
  export interface Data {
    /**
     * The ID of the catalog import issue.
     */
    id?: string;

    /**
     * The issue code encountered in the catalog import.
     */
    code?:
      | 'INTERNAL_ERROR'
      | 'FETCH_ERROR'
      | 'FILE_NOT_FOUND'
      | 'INVALID_FEED_URL'
      | 'UNAUTHORIZED_ERROR'
      | 'INVALID_FILE_FORMAT'
      | 'INVALID_FILE_ENCODING'
      | 'INVALID_FILE_HEADER'
      | 'INVALID_LINE_FORMAT'
      | 'INVALID_DELIMITER'
      | 'INCORRECT_PRODUCTS_COUNT'
      | 'MISSING_PRODUCT_ID'
      | 'MISSING_TITLE'
      | 'MISSING_DESCRIPTION'
      | 'MISSING_LINK'
      | 'MISSING_IMAGE_LINK'
      | 'MISSING_PRICE'
      | 'INVALID_PRODUCT_ID'
      | 'INVALID_TITLE'
      | 'INVALID_DESCRIPTION'
      | 'INVALID_LINK'
      | 'INVALID_IMAGE_LINK'
      | 'INVALID_PRICE'
      | 'INVALID_ITEM_GROUP_ID'
      | 'INVALID_ADDITIONAL_IMAGE_LINKS'
      | 'INVALID_MOBILE_LINK'
      | 'INVALID_SALE_PRICE'
      | 'INVALID_PRODUCT_TYPE'
      | 'INVALID_COLOR'
      | 'INVALID_CUSTOM_LABEL_0'
      | 'INVALID_CUSTOM_LABEL_1'
      | 'INVALID_CUSTOM_LABEL_2'
      | 'INVALID_CUSTOM_LABEL_3'
      | 'INVALID_CUSTOM_LABEL_4'
      | 'INVALID_SALE_PRICE_EFFECTIVE_DATE'
      | 'INVALID_EXPIRATION_DATE'
      | 'INVALID_ADULT'
      | 'INVALID_AGE_GROUP'
      | 'INVALID_GENDER'
      | 'INVALID_MATERIAL'
      | 'INVALID_PATTERN'
      | 'INVALID_SIZE'
      | 'INVALID_SIZE_TYPE'
      | 'INVALID_BRAND'
      | 'INVALID_CONDITION'
      | 'INVALID_GTIN'
      | 'INVALID_MPN'
      | 'INVALID_AVAILABILITY'
      | 'INVALID_AVERAGE_REVIEW_RATING'
      | 'INVALID_COST_OF_GOODS_SOLD'
      | 'INVALID_CUSTOM_NUMBER_0'
      | 'INVALID_CUSTOM_NUMBER_1'
      | 'INVALID_CUSTOM_NUMBER_2'
      | 'INVALID_CUSTOM_NUMBER_3'
      | 'INVALID_CUSTOM_NUMBER_4'
      | 'INVALID_GOOGLE_PRODUCT_CATEGORY'
      | 'INVALID_IS_BUNDLE'
      | 'INVALID_LIFESTYLE_IMAGE_LINK'
      | 'INVALID_NUMBER_OF_RATINGS'
      | 'INVALID_PLATFORM_SPECIFIC_LINK'
      | 'INVALID_PRODUCT_DETAIL'
      | 'INVALID_PRODUCT_HIGHLIGHT';

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The name of field where issue occurred.
     */
    field?: string | null;

    /**
     * The ID of the catalog import that this issue belongs to.
     */
    import_id?: string;

    /**
     * The line number where issue occurred.
     */
    line?: number | null;

    /**
     * Human-readable message describing this issue.
     */
    message?: string;

    /**
     * The advertiser product ID this issue relates to.
     */
    product_id?: string | null;

    /**
     * The severity of the issue.
     */
    severity?: 'CRITICAL' | 'WARNING';
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

export interface CatalogImportRetrieveReportResponse {
  data: CatalogImportRetrieveReportResponse.Data;
}

export namespace CatalogImportRetrieveReportResponse {
  export interface Data {
    /**
     * The time when the report URL expires at.
     */
    expires_at?: string;

    /**
     * The URL where catalog import report is located.
     */
    url?: string;
  }
}

export interface CatalogImportListIssuesParams {
  /**
   * Catalog import issue code to filter by.
   */
  code?:
    | 'INTERNAL_ERROR'
    | 'FETCH_ERROR'
    | 'FILE_NOT_FOUND'
    | 'INVALID_FEED_URL'
    | 'UNAUTHORIZED_ERROR'
    | 'INVALID_FILE_FORMAT'
    | 'INVALID_FILE_ENCODING'
    | 'INVALID_FILE_HEADER'
    | 'INVALID_LINE_FORMAT'
    | 'INVALID_DELIMITER'
    | 'INCORRECT_PRODUCTS_COUNT'
    | 'MISSING_PRODUCT_ID'
    | 'MISSING_TITLE'
    | 'MISSING_DESCRIPTION'
    | 'MISSING_LINK'
    | 'MISSING_IMAGE_LINK'
    | 'MISSING_PRICE'
    | 'INVALID_PRODUCT_ID'
    | 'INVALID_TITLE'
    | 'INVALID_DESCRIPTION'
    | 'INVALID_LINK'
    | 'INVALID_IMAGE_LINK'
    | 'INVALID_PRICE'
    | 'INVALID_ITEM_GROUP_ID'
    | 'INVALID_ADDITIONAL_IMAGE_LINKS'
    | 'INVALID_MOBILE_LINK'
    | 'INVALID_SALE_PRICE'
    | 'INVALID_PRODUCT_TYPE'
    | 'INVALID_COLOR'
    | 'INVALID_CUSTOM_LABEL_0'
    | 'INVALID_CUSTOM_LABEL_1'
    | 'INVALID_CUSTOM_LABEL_2'
    | 'INVALID_CUSTOM_LABEL_3'
    | 'INVALID_CUSTOM_LABEL_4'
    | 'INVALID_SALE_PRICE_EFFECTIVE_DATE'
    | 'INVALID_EXPIRATION_DATE'
    | 'INVALID_ADULT'
    | 'INVALID_AGE_GROUP'
    | 'INVALID_GENDER'
    | 'INVALID_MATERIAL'
    | 'INVALID_PATTERN'
    | 'INVALID_SIZE'
    | 'INVALID_SIZE_TYPE'
    | 'INVALID_BRAND'
    | 'INVALID_CONDITION'
    | 'INVALID_GTIN'
    | 'INVALID_MPN'
    | 'INVALID_AVAILABILITY'
    | 'INVALID_AVERAGE_REVIEW_RATING'
    | 'INVALID_COST_OF_GOODS_SOLD'
    | 'INVALID_CUSTOM_NUMBER_0'
    | 'INVALID_CUSTOM_NUMBER_1'
    | 'INVALID_CUSTOM_NUMBER_2'
    | 'INVALID_CUSTOM_NUMBER_3'
    | 'INVALID_CUSTOM_NUMBER_4'
    | 'INVALID_GOOGLE_PRODUCT_CATEGORY'
    | 'INVALID_IS_BUNDLE'
    | 'INVALID_LIFESTYLE_IMAGE_LINK'
    | 'INVALID_NUMBER_OF_RATINGS'
    | 'INVALID_PLATFORM_SPECIFIC_LINK'
    | 'INVALID_PRODUCT_DETAIL'
    | 'INVALID_PRODUCT_HIGHLIGHT';

  page?: CatalogImportListIssuesParams.Page;
}

export namespace CatalogImportListIssuesParams {
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

export declare namespace CatalogImports {
  export {
    type CatalogImportListIssuesResponse as CatalogImportListIssuesResponse,
    type CatalogImportRetrieveReportResponse as CatalogImportRetrieveReportResponse,
    type CatalogImportListIssuesParams as CatalogImportListIssuesParams,
  };
}
