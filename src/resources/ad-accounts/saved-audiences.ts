// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SavedAudiences extends APIResource {
  /**
   * Create a saved audience for the provided ad account.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Campaign Management Write">See the rate limits for <strong>Campaign Management Write</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-campaign-management-write</span></div>
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
   *                                         <li>Quota: 200 requests</li>
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
    body: SavedAudienceCreateParams,
    options?: RequestOptions,
  ): APIPromise<SavedAudienceCreateResponse> {
    return this._client.post(path`/ad_accounts/${adAccountID}/saved_audiences`, { body, ...options });
  }

  /**
   * List saved audiences.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Campaign Management Read">See the rate limits for <strong>Campaign Management Read</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-campaign-management-read</span></div>
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
   *                                         <li>Quota: 400 requests</li>
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
    query: SavedAudienceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SavedAudienceListResponse> {
    return this._client.get(path`/ad_accounts/${adAccountID}/saved_audiences`, { query, ...options });
  }
}

export interface SavedAudienceCreateResponse {
  data?: SavedAudienceCreateResponse.Data;
}

export namespace SavedAudienceCreateResponse {
  export interface Data {
    /**
     * The unique identifier of the saved audience.
     */
    id?: string;

    /**
     * The number of active ad groups that use this saved audience.
     */
    active_ad_groups_count?: number;

    /**
     * The unique identifier of the account.
     */
    ad_account_id?: string;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The name of the saved audience.
     */
    name?: string;

    /**
     * The lower bound of the size range of the saved audience.
     */
    size_range_lower?: number | null;

    /**
     * The upper bound of the size range of the saved audience.
     */
    size_range_upper?: number | null;

    /**
     * The status of the saved audience.
     */
    status?:
      | 'DELETED'
      | 'INVALID'
      | 'INVALID_CHILD_AUDIENCE'
      | 'PROCESSING'
      | 'VALID'
      | 'INVALID_DATA_SOURCE';

    targeting?: Data.Targeting;

    /**
     * The type of the saved audience.
     */
    type?: 'CUSTOMER_LIST' | 'ENGAGEMENT_RETARGETING' | 'LOOKALIKE' | 'PIXEL_RETARGETING' | 'REDDIT_AUDIENCE';

    /**
     * The date and time the saved audience was last updated.
     */
    updated_at?: string;
  }

  export namespace Data {
    export interface Targeting {
      /**
       * Age targeting settings for the ad group.
       */
      age_targeting?: Targeting.AgeTargeting;

      /**
       * A list of carriers to target.
       */
      carriers?: Array<
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
        | 'US_CELLULAR'
      > | null;

      /**
       * A list of Reddit communities to target.
       */
      communities?: Array<string>;

      /**
       * A list of custom audiences to target.
       */
      custom_audience_ids?: Array<string>;

      /**
       * A list of devices to target.
       */
      devices?: Array<Targeting.Device>;

      /**
       * A list of Reddit communities to exclude from targeting.
       */
      excluded_communities?: Array<string>;

      /**
       * A list of custom audiences to exclude from targeting.
       */
      excluded_custom_audience_ids?: Array<string>;

      /**
       * A list of geolocations to exclude from targeting.
       */
      excluded_geolocations?: Array<string>;

      /**
       * @deprecated A list of interests to exclude from targeting.
       */
      excluded_interests?: Array<string> | null;

      /**
       * A list of keywords to exclude from targeting. There is a maximum limit of 1000
       * keywords.
       */
      excluded_keywords?: Array<string> | null;

      /**
       * Allow Reddit to expand your targeting options.
       */
      expand_targeting?: boolean | null;

      /**
       * The gender group to target.
       */
      gender?: 'FEMALE' | 'MALE' | null;

      /**
       * A list of geolocations to target.
       */
      geolocations?: Array<string>;

      /**
       * A list of interests to target.
       */
      interests?: Array<string>;

      /**
       * A list of keywords to target.
       */
      keywords?: Array<string> | null;

      /**
       * The client location to place the advertisement.
       */
      locations?: Array<
        | 'FEED'
        | 'LIGHTBOX_SIDEBAR'
        | 'MAIN_SIDEBAR'
        | 'SIDEBARS'
        | 'COMMENTS_PAGE'
        | 'TRENDING_DISCOVERY'
        | 'TRENDING_SEARCH_RESULT'
        | 'FULL_BLEED_VIDEO_FEED'
        | 'UNKNOWN'
        | 'AUTO'
      >;

      /**
       * The platforms to show the advertisement on.
       */
      platforms?: Array<
        'ALL' | 'DESKTOP' | 'DESKTOP_LEGACY' | 'MOBILE_NATIVE' | 'MOBILE_WEB' | 'MOBILE_WEB_3X' | 'SHREDTOP'
      > | null;

      /**
       * A list of suppression event types.
       */
      suppression_event_types?: Array<'ALL_FEATURES'>;

      /**
       * The layouts that an ad placement is allowed in.
       */
      view_modes?: Array<'ALL' | 'CARD' | 'CLASSIC' | 'COMPACT' | 'IMMERSIVE'>;
    }

    export namespace Targeting {
      /**
       * Age targeting settings for the ad group.
       */
      export interface AgeTargeting {
        /**
         * Maximum age to target (inclusive).
         */
        max_age?: number;

        /**
         * Minimum age to target (inclusive).
         */
        min_age?: number;
      }

      export interface Device {
        /**
         * The device models selected by label to target, organized by make.
         */
        label_map?: { [key: string]: Array<unknown> } | null;

        /**
         * The maximum major OS version to target.
         */
        max_version?: string | null;

        /**
         * The minimum major OS version to target.
         */
        min_version?: string | null;

        /**
         * The device OS to target.
         */
        os?: 'ANDROID' | 'IOS' | null;

        /**
         * The type of device to target.
         */
        type?: 'DESKTOP' | 'MOBILE';
      }
    }
  }
}

export interface SavedAudienceListResponse {
  data: Array<SavedAudienceListResponse.Data>;

  pagination: SavedAudienceListResponse.Pagination;
}

export namespace SavedAudienceListResponse {
  export interface Data {
    /**
     * The unique identifier of the saved audience.
     */
    id?: string;

    /**
     * The number of active ad groups that use this saved audience.
     */
    active_ad_groups_count?: number;

    /**
     * The unique identifier of the account.
     */
    ad_account_id?: string;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The name of the saved audience.
     */
    name?: string;

    /**
     * The lower bound of the size range of the saved audience.
     */
    size_range_lower?: number | null;

    /**
     * The upper bound of the size range of the saved audience.
     */
    size_range_upper?: number | null;

    /**
     * The status of the saved audience.
     */
    status?:
      | 'DELETED'
      | 'INVALID'
      | 'INVALID_CHILD_AUDIENCE'
      | 'PROCESSING'
      | 'VALID'
      | 'INVALID_DATA_SOURCE';

    targeting?: Data.Targeting;

    /**
     * The type of the saved audience.
     */
    type?: 'CUSTOMER_LIST' | 'ENGAGEMENT_RETARGETING' | 'LOOKALIKE' | 'PIXEL_RETARGETING' | 'REDDIT_AUDIENCE';

    /**
     * The date and time the saved audience was last updated.
     */
    updated_at?: string;
  }

  export namespace Data {
    export interface Targeting {
      /**
       * Age targeting settings for the ad group.
       */
      age_targeting?: Targeting.AgeTargeting;

      /**
       * A list of carriers to target.
       */
      carriers?: Array<
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
        | 'US_CELLULAR'
      > | null;

      /**
       * A list of Reddit communities to target.
       */
      communities?: Array<string>;

      /**
       * A list of custom audiences to target.
       */
      custom_audience_ids?: Array<string>;

      /**
       * A list of devices to target.
       */
      devices?: Array<Targeting.Device>;

      /**
       * A list of Reddit communities to exclude from targeting.
       */
      excluded_communities?: Array<string>;

      /**
       * A list of custom audiences to exclude from targeting.
       */
      excluded_custom_audience_ids?: Array<string>;

      /**
       * A list of geolocations to exclude from targeting.
       */
      excluded_geolocations?: Array<string>;

      /**
       * @deprecated A list of interests to exclude from targeting.
       */
      excluded_interests?: Array<string> | null;

      /**
       * A list of keywords to exclude from targeting. There is a maximum limit of 1000
       * keywords.
       */
      excluded_keywords?: Array<string> | null;

      /**
       * Allow Reddit to expand your targeting options.
       */
      expand_targeting?: boolean | null;

      /**
       * The gender group to target.
       */
      gender?: 'FEMALE' | 'MALE' | null;

      /**
       * A list of geolocations to target.
       */
      geolocations?: Array<string>;

      /**
       * A list of interests to target.
       */
      interests?: Array<string>;

      /**
       * A list of keywords to target.
       */
      keywords?: Array<string> | null;

      /**
       * The client location to place the advertisement.
       */
      locations?: Array<
        | 'FEED'
        | 'LIGHTBOX_SIDEBAR'
        | 'MAIN_SIDEBAR'
        | 'SIDEBARS'
        | 'COMMENTS_PAGE'
        | 'TRENDING_DISCOVERY'
        | 'TRENDING_SEARCH_RESULT'
        | 'FULL_BLEED_VIDEO_FEED'
        | 'UNKNOWN'
        | 'AUTO'
      >;

      /**
       * The platforms to show the advertisement on.
       */
      platforms?: Array<
        'ALL' | 'DESKTOP' | 'DESKTOP_LEGACY' | 'MOBILE_NATIVE' | 'MOBILE_WEB' | 'MOBILE_WEB_3X' | 'SHREDTOP'
      > | null;

      /**
       * A list of suppression event types.
       */
      suppression_event_types?: Array<'ALL_FEATURES'>;

      /**
       * The layouts that an ad placement is allowed in.
       */
      view_modes?: Array<'ALL' | 'CARD' | 'CLASSIC' | 'COMPACT' | 'IMMERSIVE'>;
    }

    export namespace Targeting {
      /**
       * Age targeting settings for the ad group.
       */
      export interface AgeTargeting {
        /**
         * Maximum age to target (inclusive).
         */
        max_age?: number;

        /**
         * Minimum age to target (inclusive).
         */
        min_age?: number;
      }

      export interface Device {
        /**
         * The device models selected by label to target, organized by make.
         */
        label_map?: { [key: string]: Array<unknown> } | null;

        /**
         * The maximum major OS version to target.
         */
        max_version?: string | null;

        /**
         * The minimum major OS version to target.
         */
        min_version?: string | null;

        /**
         * The device OS to target.
         */
        os?: 'ANDROID' | 'IOS' | null;

        /**
         * The type of device to target.
         */
        type?: 'DESKTOP' | 'MOBILE';
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

export interface SavedAudienceCreateParams {
  data: SavedAudienceCreateParams.Data;
}

export namespace SavedAudienceCreateParams {
  export interface Data {
    /**
     * The name of the saved audience.
     */
    name: string;

    targeting: Data.Targeting;

    /**
     * The type of the saved audience.
     */
    type: 'REDDIT_AUDIENCE';
  }

  export namespace Data {
    export interface Targeting {
      /**
       * Age targeting settings for the ad group.
       */
      age_targeting?: Targeting.AgeTargeting;

      /**
       * A list of carriers to target.
       */
      carriers?: Array<
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
        | 'US_CELLULAR'
      > | null;

      /**
       * A list of Reddit communities to target.
       */
      communities?: Array<string>;

      /**
       * A list of custom audiences to target.
       */
      custom_audience_ids?: Array<string>;

      /**
       * A list of devices to target.
       */
      devices?: Array<Targeting.Device>;

      /**
       * A list of Reddit communities to exclude from targeting.
       */
      excluded_communities?: Array<string>;

      /**
       * A list of custom audiences to exclude from targeting.
       */
      excluded_custom_audience_ids?: Array<string>;

      /**
       * A list of geolocations to exclude from targeting.
       */
      excluded_geolocations?: Array<string>;

      /**
       * @deprecated A list of interests to exclude from targeting.
       */
      excluded_interests?: Array<string> | null;

      /**
       * A list of keywords to exclude from targeting. There is a maximum limit of 1000
       * keywords.
       */
      excluded_keywords?: Array<string> | null;

      /**
       * Allow Reddit to expand your targeting options.
       */
      expand_targeting?: boolean | null;

      /**
       * The gender group to target.
       */
      gender?: 'FEMALE' | 'MALE' | null;

      /**
       * A list of geolocations to target.
       */
      geolocations?: Array<string>;

      /**
       * A list of interests to target.
       */
      interests?: Array<string>;

      /**
       * A list of keywords to target.
       */
      keywords?: Array<string> | null;

      /**
       * The client location to place the advertisement.
       */
      locations?: Array<
        | 'FEED'
        | 'LIGHTBOX_SIDEBAR'
        | 'MAIN_SIDEBAR'
        | 'SIDEBARS'
        | 'COMMENTS_PAGE'
        | 'TRENDING_DISCOVERY'
        | 'TRENDING_SEARCH_RESULT'
        | 'FULL_BLEED_VIDEO_FEED'
        | 'UNKNOWN'
        | 'AUTO'
      >;

      /**
       * The platforms to show the advertisement on.
       */
      platforms?: Array<
        'ALL' | 'DESKTOP' | 'DESKTOP_LEGACY' | 'MOBILE_NATIVE' | 'MOBILE_WEB' | 'MOBILE_WEB_3X' | 'SHREDTOP'
      > | null;

      /**
       * A list of suppression event types.
       */
      suppression_event_types?: Array<'ALL_FEATURES'>;

      /**
       * The layouts that an ad placement is allowed in.
       */
      view_modes?: Array<'ALL' | 'CARD' | 'CLASSIC' | 'COMPACT' | 'IMMERSIVE'>;
    }

    export namespace Targeting {
      /**
       * Age targeting settings for the ad group.
       */
      export interface AgeTargeting {
        /**
         * Maximum age to target (inclusive).
         */
        max_age?: number;

        /**
         * Minimum age to target (inclusive).
         */
        min_age?: number;
      }

      export interface Device {
        /**
         * The device models selected by label to target, organized by make.
         */
        label_map?: { [key: string]: Array<unknown> } | null;

        /**
         * The maximum major OS version to target.
         */
        max_version?: string | null;

        /**
         * The minimum major OS version to target.
         */
        min_version?: string | null;

        /**
         * The device OS to target.
         */
        os?: 'ANDROID' | 'IOS' | null;

        /**
         * The type of device to target.
         */
        type?: 'DESKTOP' | 'MOBILE';
      }
    }
  }
}

export interface SavedAudienceListParams {
  page?: SavedAudienceListParams.Page;
}

export namespace SavedAudienceListParams {
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

export declare namespace SavedAudiences {
  export {
    type SavedAudienceCreateResponse as SavedAudienceCreateResponse,
    type SavedAudienceListResponse as SavedAudienceListResponse,
    type SavedAudienceCreateParams as SavedAudienceCreateParams,
    type SavedAudienceListParams as SavedAudienceListParams,
  };
}
