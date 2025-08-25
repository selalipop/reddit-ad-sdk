// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AdGroups extends APIResource {
  /**
   * Get an ad group by its ID.<h2>Rate Limit</h2>
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
  retrieve(adGroupID: string, options?: RequestOptions): APIPromise<AdGroupRetrieveResponse> {
    return this._client.get(path`/ad_groups/${adGroupID}`, options);
  }

  /**
   * Update an ad group.<h2>Rate Limit</h2>
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
  update(
    adGroupID: string,
    body: AdGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AdGroupUpdateResponse> {
    return this._client.patch(path`/ad_groups/${adGroupID}`, { body, ...options });
  }
}

export interface AdGroupRetrieveResponse {
  data: AdGroupRetrieveResponse.Data;
}

export namespace AdGroupRetrieveResponse {
  export interface Data {
    /**
     * The ID of the ad group.
     */
    id?: string;

    /**
     * The ID of the ad account.
     */
    ad_account_id?: string;

    /**
     * The app ID on either the Apple App Store or Google Play Store. For use with app
     * installs campaigns.
     */
    app_id?: string | null;

    /**
     * The bid strategy for the ad group.
     */
    bid_strategy?: 'BIDLESS' | 'MANUAL_BIDDING' | 'MAXIMIZE_VOLUME' | 'TARGET_CPX' | null;

    /**
     * The bidding strategy for the ad group. This can be null for CBO campaigns.
     */
    bid_type?: 'CPC' | 'CPM' | 'CPV' | 'CPV6' | null;

    /**
     * The amount to pay in microcurrency per bidding event.
     */
    bid_value?: number | null;

    /**
     * The ID of the campaign the ad group belongs to.
     */
    campaign_id?: string;

    /**
     * The objective type of a campaign.
     */
    campaign_objective_type?:
      | 'APP_INSTALLS'
      | 'CATALOG_SALES'
      | 'CLICKS'
      | 'CONVERSIONS'
      | 'IMPRESSIONS'
      | 'LEAD_GENERATION'
      | 'VIDEO_VIEWABLE_IMPRESSIONS'
      | null;

    /**
     * The status of the ad group configured by the account owner.
     */
    configured_status?: 'ACTIVE' | 'ARCHIVED' | 'DELETED' | 'PAUSED' | null;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The effective status of the ad group in the system.
     */
    effective_status?:
      | 'ACTIVE'
      | 'AD_GROUP_PAUSED'
      | 'ARCHIVED'
      | 'CAMPAIGN_PAUSED'
      | 'COMPLETED'
      | 'DELETED'
      | 'PAUSED'
      | 'PENDING_APPROVAL'
      | 'PENDING_BILLING_INFO'
      | 'PENDING_ID_VERIFICATION'
      | 'REJECTED'
      | null;

    /**
     * ISO 8601 timestamp when the ad group will stop delivering. If unspecified, the
     * ad group will run continuously.
     */
    end_time?: string | null;

    /**
     * The type of goal for the ad group.
     */
    goal_type?: 'DAILY_SPEND' | 'LIFETIME_SPEND' | null;

    /**
     * The value used to determine the goal has been met. This is measured in
     * microcurrency for monetary goals types. Note that the value is based on the
     * `goal_type`, so a percentage goal type would be a value between 0 and 100.
     */
    goal_value?: number | null;

    /**
     * A boolean value to determine if the ad group belongs to a CBO (campaign budget
     * optimization) campaign. This is a read-only field and cannot be modified by the
     * API clients.
     */
    is_campaign_budget_optimization?: boolean | null;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The name of the ad group.
     */
    name?: string;

    /**
     * The event you want to measure. Required for conversion and
     * [app install](https://business.reddithelp.com/s/article/app-install-ads)
     * campaign objectives.
     *
     * > **Important:** This can't be changed later.
     */
    optimization_goal?: string | null;

    /**
     * @deprecated Deprecated - The type of optimization strategy.
     */
    optimization_strategy_type?: 'DOWNSTREAM_CONVERSIONS' | 'APP_INSTALLS';

    /**
     * The product set to associate with the ad group for your dynamic product ads.
     */
    product_set_id?: string | null;

    /**
     * A list of times to run the ad group.
     */
    schedule?: Array<Data.Schedule> | null;

    /**
     * A container for shopping ad tracking related fields. Only populated on ad groups
     * for dynamic product ads.
     */
    shopping_targeting?: Data.ShoppingTargeting | null;

    /**
     * The type of ads an ad group should contain for shopping ads.
     */
    shopping_type?: 'DYNAMIC' | 'STATIC' | null;

    /**
     * The metadata of the SKAdNetwork source ID.
     */
    skadnetwork_metadata?: Data.SkadnetworkMetadata | null;

    /**
     * ISO 8601 timestamp when the ad group will begin to deliver. Required if
     * `end_time` is provided. If unspecified, the ad group will run continuously
     * starting today.
     */
    start_time?: string | null;

    /**
     * Targeting information for the ad group.
     */
    targeting?: Data.Targeting | null;

    /**
     * The type of view-through conversion being measured. Clicks or views as well as
     * time frames.
     */
    view_through_conversion_type?: 'SEVEN_DAY_CLICKS' | 'SEVEN_DAY_CLICKS_ONE_DAY_VIEW' | null;
  }

  export namespace Data {
    export interface Schedule {
      /**
       * The day of the week to end this time block.
       */
      end_day?: number;

      /**
       * The hour of the end day to end this time block.
       */
      end_hour?: number;

      /**
       * The day of the week to start this time block.
       */
      start_day?: number;

      /**
       * The hour of the end day to start this time block.
       */
      start_hour?: number;
    }

    /**
     * A container for shopping ad tracking related fields. Only populated on ad groups
     * for dynamic product ads.
     */
    export interface ShoppingTargeting {
      /**
       * A list of conversion event types to track for targeting. Only applicable when
       * `targeting_type` is `RETARGETING`.
       */
      conversion_event_types?: Array<
        'ADD_TO_CART' | 'ADD_TO_WISHLIST' | 'PURCHASE' | 'SEARCH' | 'VIEW_CONTENT'
      >;

      /**
       * A list of conversion event types to exclude from targeting.
       */
      excluded_conversion_event_types?: Array<
        'ADD_TO_CART' | 'ADD_TO_WISHLIST' | 'PURCHASE' | 'SEARCH' | 'VIEW_CONTENT'
      > | null;

      /**
       * The number of days to keep track of users' activity for ad targeting.
       */
      lookback_window_days?: number;

      /**
       * The type of targeting for the shopping ad.
       */
      targeting_type?: 'PROSPECTING' | 'RETARGETING';
    }

    /**
     * The metadata of the SKAdNetwork source ID.
     */
    export interface SkadnetworkMetadata {
      /**
       * The status of the SKAdNetwork source ID.
       */
      status?: 'COOLDOWN' | 'DISABLED' | 'ENABLED';
    }

    /**
     * Targeting information for the ad group.
     */
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

export interface AdGroupUpdateResponse {
  data: AdGroupUpdateResponse.Data;
}

export namespace AdGroupUpdateResponse {
  export interface Data {
    /**
     * The ID of the ad group.
     */
    id?: string;

    /**
     * The ID of the ad account.
     */
    ad_account_id?: string;

    /**
     * The app ID on either the Apple App Store or Google Play Store. For use with app
     * installs campaigns.
     */
    app_id?: string | null;

    /**
     * The bid strategy for the ad group.
     */
    bid_strategy?: 'BIDLESS' | 'MANUAL_BIDDING' | 'MAXIMIZE_VOLUME' | 'TARGET_CPX' | null;

    /**
     * The bidding strategy for the ad group. This can be null for CBO campaigns.
     */
    bid_type?: 'CPC' | 'CPM' | 'CPV' | 'CPV6' | null;

    /**
     * The amount to pay in microcurrency per bidding event.
     */
    bid_value?: number | null;

    /**
     * The ID of the campaign the ad group belongs to.
     */
    campaign_id?: string;

    /**
     * The objective type of a campaign.
     */
    campaign_objective_type?:
      | 'APP_INSTALLS'
      | 'CATALOG_SALES'
      | 'CLICKS'
      | 'CONVERSIONS'
      | 'IMPRESSIONS'
      | 'LEAD_GENERATION'
      | 'VIDEO_VIEWABLE_IMPRESSIONS'
      | null;

    /**
     * The status of the ad group configured by the account owner.
     */
    configured_status?: 'ACTIVE' | 'ARCHIVED' | 'DELETED' | 'PAUSED' | null;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The effective status of the ad group in the system.
     */
    effective_status?:
      | 'ACTIVE'
      | 'AD_GROUP_PAUSED'
      | 'ARCHIVED'
      | 'CAMPAIGN_PAUSED'
      | 'COMPLETED'
      | 'DELETED'
      | 'PAUSED'
      | 'PENDING_APPROVAL'
      | 'PENDING_BILLING_INFO'
      | 'PENDING_ID_VERIFICATION'
      | 'REJECTED'
      | null;

    /**
     * ISO 8601 timestamp when the ad group will stop delivering. If unspecified, the
     * ad group will run continuously.
     */
    end_time?: string | null;

    /**
     * The type of goal for the ad group.
     */
    goal_type?: 'DAILY_SPEND' | 'LIFETIME_SPEND' | null;

    /**
     * The value used to determine the goal has been met. This is measured in
     * microcurrency for monetary goals types. Note that the value is based on the
     * `goal_type`, so a percentage goal type would be a value between 0 and 100.
     */
    goal_value?: number | null;

    /**
     * A boolean value to determine if the ad group belongs to a CBO (campaign budget
     * optimization) campaign. This is a read-only field and cannot be modified by the
     * API clients.
     */
    is_campaign_budget_optimization?: boolean | null;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The name of the ad group.
     */
    name?: string;

    /**
     * The event you want to measure. Required for conversion and
     * [app install](https://business.reddithelp.com/s/article/app-install-ads)
     * campaign objectives.
     *
     * > **Important:** This can't be changed later.
     */
    optimization_goal?: string | null;

    /**
     * @deprecated Deprecated - The type of optimization strategy.
     */
    optimization_strategy_type?: 'DOWNSTREAM_CONVERSIONS' | 'APP_INSTALLS';

    /**
     * The product set to associate with the ad group for your dynamic product ads.
     */
    product_set_id?: string | null;

    /**
     * A list of times to run the ad group.
     */
    schedule?: Array<Data.Schedule> | null;

    /**
     * A container for shopping ad tracking related fields. Only populated on ad groups
     * for dynamic product ads.
     */
    shopping_targeting?: Data.ShoppingTargeting | null;

    /**
     * The type of ads an ad group should contain for shopping ads.
     */
    shopping_type?: 'DYNAMIC' | 'STATIC' | null;

    /**
     * The metadata of the SKAdNetwork source ID.
     */
    skadnetwork_metadata?: Data.SkadnetworkMetadata | null;

    /**
     * ISO 8601 timestamp when the ad group will begin to deliver. Required if
     * `end_time` is provided. If unspecified, the ad group will run continuously
     * starting today.
     */
    start_time?: string | null;

    /**
     * Targeting information for the ad group.
     */
    targeting?: Data.Targeting | null;

    /**
     * The type of view-through conversion being measured. Clicks or views as well as
     * time frames.
     */
    view_through_conversion_type?: 'SEVEN_DAY_CLICKS' | 'SEVEN_DAY_CLICKS_ONE_DAY_VIEW' | null;
  }

  export namespace Data {
    export interface Schedule {
      /**
       * The day of the week to end this time block.
       */
      end_day?: number;

      /**
       * The hour of the end day to end this time block.
       */
      end_hour?: number;

      /**
       * The day of the week to start this time block.
       */
      start_day?: number;

      /**
       * The hour of the end day to start this time block.
       */
      start_hour?: number;
    }

    /**
     * A container for shopping ad tracking related fields. Only populated on ad groups
     * for dynamic product ads.
     */
    export interface ShoppingTargeting {
      /**
       * A list of conversion event types to track for targeting. Only applicable when
       * `targeting_type` is `RETARGETING`.
       */
      conversion_event_types?: Array<
        'ADD_TO_CART' | 'ADD_TO_WISHLIST' | 'PURCHASE' | 'SEARCH' | 'VIEW_CONTENT'
      >;

      /**
       * A list of conversion event types to exclude from targeting.
       */
      excluded_conversion_event_types?: Array<
        'ADD_TO_CART' | 'ADD_TO_WISHLIST' | 'PURCHASE' | 'SEARCH' | 'VIEW_CONTENT'
      > | null;

      /**
       * The number of days to keep track of users' activity for ad targeting.
       */
      lookback_window_days?: number;

      /**
       * The type of targeting for the shopping ad.
       */
      targeting_type?: 'PROSPECTING' | 'RETARGETING';
    }

    /**
     * The metadata of the SKAdNetwork source ID.
     */
    export interface SkadnetworkMetadata {
      /**
       * The status of the SKAdNetwork source ID.
       */
      status?: 'COOLDOWN' | 'DISABLED' | 'ENABLED';
    }

    /**
     * Targeting information for the ad group.
     */
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

export interface AdGroupUpdateParams {
  data: AdGroupUpdateParams.Data;
}

export namespace AdGroupUpdateParams {
  export interface Data {
    /**
     * The app ID on either the Apple App Store or Google Play Store. For use with app
     * installs campaigns.
     */
    app_id?: string | null;

    /**
     * The bid strategy for the ad group.
     */
    bid_strategy?: 'BIDLESS' | 'MANUAL_BIDDING' | 'MAXIMIZE_VOLUME' | 'TARGET_CPX' | null;

    /**
     * The bidding strategy for the ad group. This can be null for CBO campaigns.
     */
    bid_type?: 'CPC' | 'CPM' | 'CPV' | 'CPV6' | null;

    /**
     * The amount to pay in microcurrency per bidding event.
     */
    bid_value?: number | null;

    /**
     * The ID of the campaign the ad group belongs to.
     */
    campaign_id?: string;

    /**
     * The status of the ad group configured by the account owner.
     */
    configured_status?: 'ACTIVE' | 'ARCHIVED' | 'DELETED' | 'PAUSED' | null;

    /**
     * The effective status of the ad group in the system.
     */
    effective_status?:
      | 'ACTIVE'
      | 'AD_GROUP_PAUSED'
      | 'ARCHIVED'
      | 'CAMPAIGN_PAUSED'
      | 'COMPLETED'
      | 'DELETED'
      | 'PAUSED'
      | 'PENDING_APPROVAL'
      | 'PENDING_BILLING_INFO'
      | 'PENDING_ID_VERIFICATION'
      | 'REJECTED'
      | null;

    /**
     * ISO 8601 timestamp when the ad group will stop delivering. If unspecified, the
     * ad group will run continuously.
     */
    end_time?: string | null;

    /**
     * The type of goal for the ad group.
     */
    goal_type?: 'DAILY_SPEND' | 'LIFETIME_SPEND' | null;

    /**
     * The value used to determine the goal has been met. This is measured in
     * microcurrency for monetary goals types. Note that the value is based on the
     * `goal_type`, so a percentage goal type would be a value between 0 and 100.
     */
    goal_value?: number | null;

    /**
     * The name of the ad group.
     */
    name?: string;

    /**
     * The event you want to measure. Required for conversion and
     * [app install](https://business.reddithelp.com/s/article/app-install-ads)
     * campaign objectives.
     *
     * > **Important:** This can't be changed later.
     */
    optimization_goal?: string | null;

    /**
     * @deprecated Deprecated - The type of optimization strategy.
     */
    optimization_strategy_type?: 'DOWNSTREAM_CONVERSIONS' | 'APP_INSTALLS';

    /**
     * The product set to associate with the ad group for your dynamic product ads.
     */
    product_set_id?: string | null;

    /**
     * A list of times to run the ad group.
     */
    schedule?: Array<Data.Schedule> | null;

    /**
     * A container for shopping ad tracking related fields. Only populated on ad groups
     * for dynamic product ads.
     */
    shopping_targeting?: Data.ShoppingTargeting | null;

    /**
     * The type of ads an ad group should contain for shopping ads.
     */
    shopping_type?: 'DYNAMIC' | 'STATIC' | null;

    /**
     * The metadata of the SKAdNetwork source ID.
     */
    skadnetwork_metadata?: Data.SkadnetworkMetadata | null;

    /**
     * ISO 8601 timestamp when the ad group will begin to deliver. Required if
     * `end_time` is provided. If unspecified, the ad group will run continuously
     * starting today.
     */
    start_time?: string | null;

    /**
     * Targeting information for the ad group.
     */
    targeting?: Data.Targeting | null;

    /**
     * The type of view-through conversion being measured. Clicks or views as well as
     * time frames.
     */
    view_through_conversion_type?: 'SEVEN_DAY_CLICKS' | 'SEVEN_DAY_CLICKS_ONE_DAY_VIEW' | null;
  }

  export namespace Data {
    export interface Schedule {
      /**
       * The day of the week to end this time block.
       */
      end_day?: number;

      /**
       * The hour of the end day to end this time block.
       */
      end_hour?: number;

      /**
       * The day of the week to start this time block.
       */
      start_day?: number;

      /**
       * The hour of the end day to start this time block.
       */
      start_hour?: number;
    }

    /**
     * A container for shopping ad tracking related fields. Only populated on ad groups
     * for dynamic product ads.
     */
    export interface ShoppingTargeting {
      /**
       * A list of conversion event types to track for targeting. Only applicable when
       * `targeting_type` is `RETARGETING`.
       */
      conversion_event_types?: Array<
        'ADD_TO_CART' | 'ADD_TO_WISHLIST' | 'PURCHASE' | 'SEARCH' | 'VIEW_CONTENT'
      >;

      /**
       * A list of conversion event types to exclude from targeting.
       */
      excluded_conversion_event_types?: Array<
        'ADD_TO_CART' | 'ADD_TO_WISHLIST' | 'PURCHASE' | 'SEARCH' | 'VIEW_CONTENT'
      > | null;

      /**
       * The number of days to keep track of users' activity for ad targeting.
       */
      lookback_window_days?: number;

      /**
       * The type of targeting for the shopping ad.
       */
      targeting_type?: 'PROSPECTING' | 'RETARGETING';
    }

    /**
     * The metadata of the SKAdNetwork source ID.
     */
    export interface SkadnetworkMetadata {
      /**
       * The status of the SKAdNetwork source ID.
       */
      status?: 'COOLDOWN' | 'DISABLED' | 'ENABLED';
    }

    /**
     * Targeting information for the ad group.
     */
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

export declare namespace AdGroups {
  export {
    type AdGroupRetrieveResponse as AdGroupRetrieveResponse,
    type AdGroupUpdateResponse as AdGroupUpdateResponse,
    type AdGroupUpdateParams as AdGroupUpdateParams,
  };
}
