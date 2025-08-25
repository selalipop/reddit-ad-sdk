// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Forecasting extends APIResource {
  /**
   * Suggest bids.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Forecasting">See the rate limits for <strong>Forecasting</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-forecasting</span></div>
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
  suggestBids(
    body: ForecastingSuggestBidsParams,
    options?: RequestOptions,
  ): APIPromise<ForecastingSuggestBidsResponse> {
    return this._client.post('/forecasting/bid_suggestions', { body, ...options });
  }
}

export interface ForecastingSuggestBidsResponse {
  data: ForecastingSuggestBidsResponse.Data;
}

export namespace ForecastingSuggestBidsResponse {
  export interface Data {
    /**
     * Maximum suggested bid value in microdollars.
     */
    bid_suggestion_max?: number;

    /**
     * Median suggested bid value in microdollars.
     */
    bid_suggestion_median?: number;

    /**
     * Minimum suggested bid value in microdollars.
     */
    bid_suggestion_min?: number;

    /**
     * Minimum possible bid value in microdollars.
     */
    min_bid_value?: number;
  }
}

export interface ForecastingSuggestBidsParams {
  data: ForecastingSuggestBidsParams.Data;
}

export namespace ForecastingSuggestBidsParams {
  export interface Data {
    /**
     * The ad account ID
     */
    ad_account_id?: string;

    /**
     * @deprecated The attribution type. Only valid for CPA bid types. Also configures
     * the attribution type to query when calculating ECPA fields.
     */
    attribution_type?: 'ALL_CONVERSION' | 'CLICK_THROUGH_CONVERSION' | 'VIEW_THROUGH_CONVERSION';

    /**
     * The bid strategy for the ad group.
     */
    bid_strategy?: 'BIDLESS' | 'MANUAL_BIDDING' | 'MAXIMIZE_VOLUME' | 'TARGET_CPX' | null;

    /**
     * The bid type
     */
    bid_type?: 'CPC' | 'CPM' | 'CPV' | 'CPV6';

    /**
     * The objective type of a campaign.
     */
    campaign_objective?:
      | 'APP_INSTALLS'
      | 'CATALOG_SALES'
      | 'CLICKS'
      | 'CONVERSIONS'
      | 'IMPRESSIONS'
      | 'LEAD_GENERATION'
      | 'VIDEO_VIEWABLE_IMPRESSIONS';

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

    duration?: Data.Duration;

    /**
     * @deprecated The end time in ISO 8601 timestamp
     */
    end_time?: string;

    /**
     * The goal objective of the ad group.
     */
    goal_type?:
      | 'DAILY_SPEND'
      | 'LIFETIME_SPEND'
      | 'CLICKS'
      | 'CONVERSIONS'
      | 'IMPRESSIONS'
      | 'PERCENTAGE'
      | 'VIDEO_VIEWABLE_IMPRESSIONS'
      | null;

    /**
     * The goal value in microdollars
     */
    goal_value?: number;

    /**
     * The event you want to measure. Required for conversion and
     * [app install](https://business.reddithelp.com/s/article/app-install-ads)
     * campaign objectives.
     *
     * > **Important:** This can't be changed later.
     */
    optimization_goal?: string | null;

    /**
     * @deprecated The start time in ISO 8601 timestamp
     */
    start_time?: string;

    targeting?: Data.Targeting;

    /**
     * The type of view-through conversion being measured. Clicks or views as well as
     * time frames.
     */
    view_through_conversion_type?: 'SEVEN_DAY_CLICKS' | 'SEVEN_DAY_CLICKS_ONE_DAY_VIEW' | null;
  }

  export namespace Data {
    export interface Duration {
      /**
       * The start time in ISO 8601 timestamp
       */
      start_time: string;

      /**
       * The end time in ISO 8601 timestamp
       */
      end_time?: string;
    }

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

export declare namespace Forecasting {
  export {
    type ForecastingSuggestBidsResponse as ForecastingSuggestBidsResponse,
    type ForecastingSuggestBidsParams as ForecastingSuggestBidsParams,
  };
}
