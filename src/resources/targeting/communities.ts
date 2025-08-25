// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Communities extends APIResource {
  /**
   * List info of a targetable community matched by their names.<h2>Rate Limit</h2>
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
  listCommunities(
    query: CommunityListCommunitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CommunityListCommunitiesResponse> {
    return this._client.get('/targeting/communities', { query, ...options });
  }

  /**
   * Search for communities based on their name or topic using query (search)
   * parameter.<h2>Rate Limit</h2>
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
  searchCommunities(
    query: CommunitySearchCommunitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CommunitySearchCommunitiesResponse> {
    return this._client.get('/targeting/communities/search', { query, ...options });
  }

  /**
   * Fetch a list of suggested communities for given community names.<h2>Rate
   * Limit</h2>
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
  suggestCommunities(
    query: CommunitySuggestCommunitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CommunitySuggestCommunitiesResponse> {
    return this._client.get('/targeting/communities/suggestions', { query, ...options });
  }
}

export interface CommunityListCommunitiesResponse {
  data: Array<CommunityListCommunitiesResponse.Data>;

  pagination: CommunityListCommunitiesResponse.Pagination;
}

export namespace CommunityListCommunitiesResponse {
  export interface Data {
    /**
     * The unique identifier for the community.
     */
    id?: string;

    /**
     * A list of categories that the community is associated with.
     */
    categories?: Array<string>;

    /**
     * A short, ML-sourced description of the community.
     */
    description?: string | null;

    /**
     * URL of the community's icon.
     */
    icon_url?: string | null;

    /**
     * The name of the community.
     */
    name?: string;

    /**
     * The number of subscribers for the community.
     */
    subscriber_count?: number;
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

export interface CommunitySearchCommunitiesResponse {
  data: Array<CommunitySearchCommunitiesResponse.Data>;

  pagination: CommunitySearchCommunitiesResponse.Pagination;
}

export namespace CommunitySearchCommunitiesResponse {
  export interface Data {
    /**
     * The unique identifier for the community.
     */
    id?: string;

    /**
     * A list of categories that the community is associated with.
     */
    categories?: Array<string>;

    /**
     * A short, ML-sourced description of the community.
     */
    description?: string | null;

    /**
     * URL of the community's icon.
     */
    icon_url?: string | null;

    /**
     * The name of the community.
     */
    name?: string;

    /**
     * The number of subscribers for the community.
     */
    subscriber_count?: number;
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

export interface CommunitySuggestCommunitiesResponse {
  data: Array<CommunitySuggestCommunitiesResponse.Data>;

  pagination: CommunitySuggestCommunitiesResponse.Pagination;
}

export namespace CommunitySuggestCommunitiesResponse {
  export interface Data {
    /**
     * The unique identifier for the community.
     */
    id?: string;

    /**
     * A list of categories that the community is associated with.
     */
    categories?: Array<string>;

    /**
     * A short, ML-sourced description of the community.
     */
    description?: string | null;

    /**
     * URL of the community's icon.
     */
    icon_url?: string | null;

    /**
     * The name of the community.
     */
    name?: string;

    /**
     * The number of subscribers for the community.
     */
    subscriber_count?: number;
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

export interface CommunityListCommunitiesParams {
  /**
   * Comma-separated list of community names to get info for. Queried community won't
   * be in response if it is not targetable.
   */
  names?: string;

  page?: CommunityListCommunitiesParams.Page;
}

export namespace CommunityListCommunitiesParams {
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

export interface CommunitySearchCommunitiesParams {
  page?: CommunitySearchCommunitiesParams.Page;

  /**
   * A string that will be used to query (search) for communities by name or by
   * topics. If parameter is empty or not included, it will return all subreddits.
   */
  query?: string;
}

export namespace CommunitySearchCommunitiesParams {
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

export interface CommunitySuggestCommunitiesParams {
  /**
   * Comma-separated list of community names to get info for. If query is not
   * provided, it will return a set of default suggestions.
   */
  names?: string;

  page?: CommunitySuggestCommunitiesParams.Page;

  /**
   * The website that suggestions should relate to. If parameter is empty or not
   * included, it will use the user's business website.
   */
  website_url?: string;
}

export namespace CommunitySuggestCommunitiesParams {
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

export declare namespace Communities {
  export {
    type CommunityListCommunitiesResponse as CommunityListCommunitiesResponse,
    type CommunitySearchCommunitiesResponse as CommunitySearchCommunitiesResponse,
    type CommunitySuggestCommunitiesResponse as CommunitySuggestCommunitiesResponse,
    type CommunityListCommunitiesParams as CommunityListCommunitiesParams,
    type CommunitySearchCommunitiesParams as CommunitySearchCommunitiesParams,
    type CommunitySuggestCommunitiesParams as CommunitySuggestCommunitiesParams,
  };
}
