// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CommunitiesAPI from './communities';
import {
  Communities,
  CommunityListCommunitiesParams,
  CommunityListCommunitiesResponse,
  CommunitySearchCommunitiesParams,
  CommunitySearchCommunitiesResponse,
  CommunitySuggestCommunitiesParams,
  CommunitySuggestCommunitiesResponse,
} from './communities';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Targeting extends APIResource {
  communities: CommunitiesAPI.Communities = new CommunitiesAPI.Communities(this._client);

  /**
   * List all carriers.<h2>Rate Limit</h2>
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
  listCarriers(
    query: TargetingListCarriersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TargetingListCarriersResponse> {
    return this._client.get('/targeting/carriers', { query, ...options });
  }

  /**
   * List all devices.<h2>Rate Limit</h2>
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
  listDevices(
    query: TargetingListDevicesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TargetingListDevicesResponse> {
    return this._client.get('/targeting/devices', { query, ...options });
  }

  /**
   * Fetch a list of geolocations. Postal code and City geolocations are excluded by
   * default unless either of the query parameters are utilized.<h2>Rate Limit</h2>
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
  listGeolocations(
    query: TargetingListGeolocationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TargetingListGeolocationsResponse> {
    return this._client.get('/targeting/geolocations', { query, ...options });
  }

  /**
   * Fetch a list of interests.<h2>Rate Limit</h2>
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
  listInterests(options?: RequestOptions): APIPromise<TargetingListInterestsResponse> {
    return this._client.get('/targeting/interests', options);
  }

  /**
   * List all 3rd Party Audiences.<h2>Rate Limit</h2>
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
  listThirdPartyAudiences(
    query: TargetingListThirdPartyAudiencesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TargetingListThirdPartyAudiencesResponse> {
    return this._client.get('/targeting/third_party_audiences', { query, ...options });
  }

  /**
   * Give a list of geolocations used for targeting and check their validation
   * state.<h2>Rate Limit</h2>
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
  validateGeolocations(
    body: TargetingValidateGeolocationsParams,
    options?: RequestOptions,
  ): APIPromise<TargetingValidateGeolocationsResponse> {
    return this._client.post('/targeting/geolocations_validations', { body, ...options });
  }

  /**
   * Give a list of keywords used for targeting and check their validation
   * state.<h2>Rate Limit</h2>
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
  validateKeywords(
    body: TargetingValidateKeywordsParams,
    options?: RequestOptions,
  ): APIPromise<TargetingValidateKeywordsResponse> {
    return this._client.post('/targeting/keyword_validations', { body, ...options });
  }
}

export interface TargetingListCarriersResponse {
  data: Array<TargetingListCarriersResponse.Data>;

  pagination: TargetingListCarriersResponse.Pagination;
}

export namespace TargetingListCarriersResponse {
  export interface Data {
    /**
     * The unique identifier for the carrier.
     */
    id?:
      | 'ATT_WIRELESS_US'
      | 'SPRINT_US'
      | 'TMOBILE_US'
      | 'VERIZON_US'
      | 'EE_UK'
      | 'VODAFONE_UK'
      | 'O2_UK'
      | 'THREE_UK'
      | 'SKY_MOBILE_UK'
      | 'BT_MOBILE_UK'
      | 'TALKTALK_UK'
      | 'VIRGIN_MEDIA_UK'
      | 'ROGERS_WIRELESS_CA'
      | 'BELL_MOBILITY_CA'
      | 'VIRGIN_MOBILE_CA'
      | 'BELL_MTS_CA'
      | 'TELUS_MOBILITY_CA'
      | 'SHAW_MOBILE_CA'
      | 'HI3G_ACCESS_AB_SE'
      | 'BOUYGUES_TELECOM'
      | 'FREE_MOBILE_SAS'
      | 'TELE2_SWEDEN'
      | 'SWISSCOM'
      | 'SOUTHERN_PHONE_COMPANY'
      | 'EXETEL'
      | 'TDC_DANMARK'
      | 'ODIDO_NETHERLANDS'
      | 'TELENOR_SVERIGE'
      | 'ICE_NORWAY'
      | 'OPTUS'
      | 'HI3G_ACCESS_AB_DK'
      | 'BELONG'
      | 'ORANGE_BELGIUM'
      | 'O2_DEUTSCHLAND'
      | 'BREDBAND2_AB'
      | 'SFR'
      | 'TELIA_NORGE_AS'
      | 'TELIA_FINLAND'
      | 'ELISA'
      | 'VODAFONE_AUSTRALIA'
      | 'ELISA_MOBILE'
      | 'TELENOR_AS'
      | 'PROXIMUS'
      | 'DNA_OYJ'
      | 'TELENOR_SVERIGE_AB'
      | 'EWETEL'
      | 'SPINTEL'
      | 'AUSSIE_BROADBAND'
      | 'ZIGGO'
      | 'VODAFONE_GERMANY'
      | 'IINET_LIMITED'
      | 'WILHELMTEL'
      | 'SUPERLOOP'
      | 'TELIA_SE'
      | 'TELSTRA_INTERNET'
      | 'ORANGE'
      | 'TELIA_DK'
      | 'TMOBILE_NETHERLANDS'
      | 'WIRELINE'
      | 'TPG_INTERNET'
      | 'SALT_MOBILE'
      | 'VOO'
      | 'TELIA_NORGE'
      | 'TELENOR_NORGE'
      | 'TELIA_MOBILE'
      | 'TELENET'
      | 'DEUTSCHE_TELEKOM_AG'
      | 'SUNRISE'
      | 'KPN'
      | 'BOOST_MOBILE'
      | 'COMCAST'
      | 'US_CELLULAR';

    /**
     * Two-letter ISO country code where the carrier operates.
     */
    country_code?: string;

    /**
     * Unique name of the mobile carrier.
     */
    name?: string;
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

export interface TargetingListDevicesResponse {
  data: Array<TargetingListDevicesResponse.Data>;

  pagination: TargetingListDevicesResponse.Pagination;
}

export namespace TargetingListDevicesResponse {
  export interface Data {
    /**
     * The name of the device make.
     */
    make?: string;

    /**
     * The model of the device.
     */
    model?: string;
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

export interface TargetingListGeolocationsResponse {
  data: Array<TargetingListGeolocationsResponse.Data>;
}

export namespace TargetingListGeolocationsResponse {
  export interface Data {
    /**
     * A unique ID for the geolocation.
     */
    id?: string;

    /**
     * The city associated with this location.
     */
    city?: string;

    /**
     * The two-letter country code associated with this location.
     */
    country?: string;

    /**
     * The Designated Market Area code associated with this location.
     */
    dma?: number;

    /**
     * The display name of the geolocation.
     */
    name?: string;

    /**
     * The postal code associated with this location.
     */
    postal_code?: string;

    /**
     * The region of the country in which the location resides. For US regions, this
     * represents the location's state.
     */
    region?: string;
  }
}

export interface TargetingListInterestsResponse {
  data: Array<TargetingListInterestsResponse.Data>;
}

export namespace TargetingListInterestsResponse {
  export interface Data {
    /**
     * A unique ID for the interest.
     */
    id?: string;

    /**
     * The category of the interest.
     */
    category?: string;

    /**
     * The display name of the interest.
     */
    name?: string;
  }
}

export interface TargetingListThirdPartyAudiencesResponse {
  data: Array<TargetingListThirdPartyAudiencesResponse.Data>;

  pagination: TargetingListThirdPartyAudiencesResponse.Pagination;
}

export namespace TargetingListThirdPartyAudiencesResponse {
  export interface Data {
    /**
     * The audience id.
     */
    id?: string;

    /**
     * Information about audience cost.
     */
    cost?: Data.Cost;

    /**
     * The full name of the audience, including any parent names.
     */
    full_name?: string;

    /**
     * The audience name.
     */
    name?: string;

    /**
     * The number of users in the audience.
     */
    size?: number;
  }

  export namespace Data {
    /**
     * Information about audience cost.
     */
    export interface Cost {
      /**
       * The ISO4217 currency symbol for the currency used.
       */
      currency?:
        | 'AED'
        | 'AFN'
        | 'ALL'
        | 'AMD'
        | 'ANG'
        | 'AOA'
        | 'ARS'
        | 'AUD'
        | 'AWG'
        | 'AZN'
        | 'BAM'
        | 'BBD'
        | 'BDT'
        | 'BGN'
        | 'BHD'
        | 'BIF'
        | 'BMD'
        | 'BND'
        | 'BOB'
        | 'BOV'
        | 'BRL'
        | 'BSD'
        | 'BTN'
        | 'BWP'
        | 'BYN'
        | 'BZD'
        | 'CAD'
        | 'CDF'
        | 'CHE'
        | 'CHF'
        | 'CHW'
        | 'CLF'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'COU'
        | 'CRC'
        | 'CUC'
        | 'CUP'
        | 'CVE'
        | 'CZK'
        | 'DJF'
        | 'DKK'
        | 'DOP'
        | 'DZD'
        | 'EGP'
        | 'ERN'
        | 'ETB'
        | 'EUR'
        | 'FJD'
        | 'FKP'
        | 'GBP'
        | 'GEL'
        | 'GHS'
        | 'GIP'
        | 'GMD'
        | 'GNF'
        | 'GTQ'
        | 'GYD'
        | 'HKD'
        | 'HNL'
        | 'HRK'
        | 'HTG'
        | 'HUF'
        | 'IDR'
        | 'ILS'
        | 'INR'
        | 'IQD'
        | 'IRR'
        | 'ISK'
        | 'JMD'
        | 'JOD'
        | 'JPY'
        | 'KES'
        | 'KGS'
        | 'KHR'
        | 'KMF'
        | 'KPW'
        | 'KRW'
        | 'KWD'
        | 'KYD'
        | 'KZT'
        | 'LAK'
        | 'LBP'
        | 'LKR'
        | 'LRD'
        | 'LSL'
        | 'LYD'
        | 'MAD'
        | 'MDL'
        | 'MGA'
        | 'MKD'
        | 'MMK'
        | 'MNT'
        | 'MOP'
        | 'MRU'
        | 'MUR'
        | 'MVR'
        | 'MWK'
        | 'MXN'
        | 'MXV'
        | 'MYR'
        | 'MZN'
        | 'NAD'
        | 'NGN'
        | 'NIO'
        | 'NOK'
        | 'NPR'
        | 'NZD'
        | 'OMR'
        | 'PAB'
        | 'PEN'
        | 'PGK'
        | 'PHP'
        | 'PKR'
        | 'PLN'
        | 'PYG'
        | 'QAR'
        | 'RON'
        | 'RSD'
        | 'RUB'
        | 'RWF'
        | 'SAR'
        | 'SBD'
        | 'SCR'
        | 'SDG'
        | 'SEK'
        | 'SGD'
        | 'SHP'
        | 'SLL'
        | 'SOS'
        | 'SRD'
        | 'SSP'
        | 'STN'
        | 'SVC'
        | 'SYP'
        | 'SZL'
        | 'THB'
        | 'TJS'
        | 'TMT'
        | 'TND'
        | 'TOP'
        | 'TRY'
        | 'TTD'
        | 'TWD'
        | 'TZS'
        | 'UAH'
        | 'UGX'
        | 'USD'
        | 'USN'
        | 'UYI'
        | 'UYU'
        | 'UYW'
        | 'UZS'
        | 'VES'
        | 'VND'
        | 'VUV'
        | 'WST'
        | 'XAF'
        | 'XAG'
        | 'XAU'
        | 'XBA'
        | 'XBB'
        | 'XBC'
        | 'XBD'
        | 'XCD'
        | 'XDR'
        | 'XOF'
        | 'XPD'
        | 'XPF'
        | 'XPT'
        | 'XSU'
        | 'XTS'
        | 'XUA'
        | 'XXX'
        | 'YER'
        | 'ZAR'
        | 'ZMW'
        | 'ZWL';

      /**
       * If this field is explicitly set, the cost shouldn't be passed to advertiser.
       */
      is_cost_exempted?: boolean;

      /**
       * The unique identifier for the third party partner.
       */
      partner?: 'LIVE_RAMP';

      /**
       * Data Partner Segment ID."
       */
      partner_segment_id?: string;

      /**
       * The third party audience price
       */
      price?: number;

      /**
       * The unique identifier for the rate type.
       */
      rate_type?: 'CPM';
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

export interface TargetingValidateGeolocationsResponse {
  data: Array<TargetingValidateGeolocationsResponse.Data>;
}

export namespace TargetingValidateGeolocationsResponse {
  export interface Data {
    /**
     * geolocation error, non-empty when geo is not supported
     */
    error_message?: string;

    /**
     * The geolocation of the user.
     */
    geolocation?: Data.Geolocation;
  }

  export namespace Data {
    /**
     * The geolocation of the user.
     */
    export interface Geolocation {
      /**
       * A unique ID for the geolocation.
       */
      id?: string;

      /**
       * The city associated with this location.
       */
      city?: string;

      /**
       * The two-letter country code associated with this location.
       */
      country?: string;

      /**
       * The Designated Market Area code associated with this location.
       */
      dma?: number;

      /**
       * The display name of the geolocation.
       */
      name?: string;

      /**
       * The postal code associated with this location.
       */
      postal_code?: string;

      /**
       * The region of the country in which the location resides. For US regions, this
       * represents the location's state.
       */
      region?: string;
    }
  }
}

export interface TargetingValidateKeywordsResponse {
  data: Array<TargetingValidateKeywordsResponse.Data>;

  /**
   * The unique identifier for the request.
   */
  request_id?: string;
}

export namespace TargetingValidateKeywordsResponse {
  export interface Data {
    /**
     * True if the input keyword is brand safe and can be used for keyword targeting
     */
    is_brand_safe?: boolean;

    /**
     * Input keyword that has validation results
     */
    keyword?: string;
  }
}

export interface TargetingListCarriersParams {
  page?: TargetingListCarriersParams.Page;
}

export namespace TargetingListCarriersParams {
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

export interface TargetingListDevicesParams {
  page?: TargetingListDevicesParams.Page;
}

export namespace TargetingListDevicesParams {
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

export interface TargetingListGeolocationsParams {
  /**
   * The filter for retrieving city geolocations by substring match.
   */
  cities_search?: string;

  /**
   * The filter for retrieving all geolocations by country.
   */
  country?: string;

  /**
   * The filter for retrieving postal code geolocations by substring match.
   */
  postal_code?: string;
}

export interface TargetingListThirdPartyAudiencesParams {
  page?: TargetingListThirdPartyAudiencesParams.Page;
}

export namespace TargetingListThirdPartyAudiencesParams {
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

export interface TargetingValidateGeolocationsParams {
  data: TargetingValidateGeolocationsParams.GeolocationIDs | TargetingValidateGeolocationsParams.Cities;
}

export namespace TargetingValidateGeolocationsParams {
  export interface GeolocationIDs {
    geolocation_ids: Array<string>;
  }

  export interface Cities {
    cities: Array<string>;
  }
}

export interface TargetingValidateKeywordsParams {
  data: TargetingValidateKeywordsParams.Data;
}

export namespace TargetingValidateKeywordsParams {
  export interface Data {
    keywords: Array<unknown>;
  }
}

Targeting.Communities = Communities;

export declare namespace Targeting {
  export {
    type TargetingListCarriersResponse as TargetingListCarriersResponse,
    type TargetingListDevicesResponse as TargetingListDevicesResponse,
    type TargetingListGeolocationsResponse as TargetingListGeolocationsResponse,
    type TargetingListInterestsResponse as TargetingListInterestsResponse,
    type TargetingListThirdPartyAudiencesResponse as TargetingListThirdPartyAudiencesResponse,
    type TargetingValidateGeolocationsResponse as TargetingValidateGeolocationsResponse,
    type TargetingValidateKeywordsResponse as TargetingValidateKeywordsResponse,
    type TargetingListCarriersParams as TargetingListCarriersParams,
    type TargetingListDevicesParams as TargetingListDevicesParams,
    type TargetingListGeolocationsParams as TargetingListGeolocationsParams,
    type TargetingListThirdPartyAudiencesParams as TargetingListThirdPartyAudiencesParams,
    type TargetingValidateGeolocationsParams as TargetingValidateGeolocationsParams,
    type TargetingValidateKeywordsParams as TargetingValidateKeywordsParams,
  };

  export {
    Communities as Communities,
    type CommunityListCommunitiesResponse as CommunityListCommunitiesResponse,
    type CommunitySearchCommunitiesResponse as CommunitySearchCommunitiesResponse,
    type CommunitySuggestCommunitiesResponse as CommunitySuggestCommunitiesResponse,
    type CommunityListCommunitiesParams as CommunityListCommunitiesParams,
    type CommunitySearchCommunitiesParams as CommunitySearchCommunitiesParams,
    type CommunitySuggestCommunitiesParams as CommunitySuggestCommunitiesParams,
  };
}
