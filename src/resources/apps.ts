// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Apps extends APIResource {
  /**
   * Get the last time a mobile conversion event was fired for an app ID<h2>Rate
   * Limit</h2>
   *
   *   <div><a href="/ratelimits/Conversion Signals">See the rate limits for <strong>Conversion Signals</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-conversion-signals</span></div>
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
  retrieveLastFiredAtReport(
    appID: string,
    options?: RequestOptions,
  ): APIPromise<AppRetrieveLastFiredAtReportResponse> {
    return this._client.get(path`/apps/${appID}/last_fired_at_report`, options);
  }

  /**
   * Get SKAdNetwork IDs availability quota for an app.
   */
  retrieveSkanAvailability(
    appID: string,
    query: AppRetrieveSkanAvailabilityParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppRetrieveSkanAvailabilityResponse> {
    return this._client.get(path`/apps/${appID}/skan_availability`, { query, ...options });
  }
}

export interface AppRetrieveLastFiredAtReportResponse {
  data: AppRetrieveLastFiredAtReportResponse.Data;
}

export namespace AppRetrieveLastFiredAtReportResponse {
  export interface Data {
    /**
     * The last time the app had an Ad Click mobile conversion event fire.
     */
    mobile_conversion_ad_click?: string | null;

    /**
     * The last time the app had an Ad View mobile conversion event fire.
     */
    mobile_conversion_ad_view?: string | null;

    /**
     * The last time the app had an Add Payment Info mobile conversion event fire.
     */
    mobile_conversion_add_payment_info?: string | null;

    /**
     * The last time the app had an Add To Cart mobile conversion event fire.
     */
    mobile_conversion_add_to_cart?: string | null;

    /**
     * The last time the app had an Add To Wishlist mobile conversion event fire.
     */
    mobile_conversion_add_to_wishlist?: string | null;

    /**
     * The last time the app had an App Launch mobile conversion event fire.
     */
    mobile_conversion_app_launch?: string | null;

    /**
     * The last time the app had a Checkout mobile conversion event fire.
     */
    mobile_conversion_checkout?: string | null;

    /**
     * The last time the app had a Completed Tutorial mobile conversion event fire.
     */
    mobile_conversion_completed_tutorial?: string | null;

    /**
     * The last time the app had a First Time Purchase mobile conversion event fire.
     */
    mobile_conversion_first_time_purchase?: string | null;

    /**
     * The last time the app had an Install mobile conversion event fire.
     */
    mobile_conversion_install?: string | null;

    /**
     * The last time the app had a Level Achieved mobile conversion event fire.
     */
    mobile_conversion_level_achieved?: string | null;

    /**
     * The last time the app had a Login mobile conversion event fire.
     */
    mobile_conversion_login?: string | null;

    /**
     * The last time the app had an Onboard Completed mobile conversion event fire.
     */
    mobile_conversion_onboard_completed?: string | null;

    /**
     * The last time the app had an Onboard Started mobile conversion event fire.
     */
    mobile_conversion_onboard_started?: string | null;

    /**
     * The last time the app had a Purchase mobile conversion event fire.
     */
    mobile_conversion_purchase?: string | null;

    /**
     * The last time the app had a Rate mobile conversion event fire.
     */
    mobile_conversion_rate?: string | null;

    /**
     * The last time the app had a Reinstall mobile conversion event fire.
     */
    mobile_conversion_reinstall?: string | null;

    /**
     * The last time the app had a Search mobile conversion event fire.
     */
    mobile_conversion_search?: string | null;

    /**
     * The last time the app had a Sign Up mobile conversion event fire.
     */
    mobile_conversion_sign_up?: string | null;

    /**
     * The last time the app had a Spend Credits mobile conversion event fire.
     */
    mobile_conversion_spend_credits?: string | null;

    /**
     * The last time the app had a Start Trial mobile conversion event fire.
     */
    mobile_conversion_start_trial?: string | null;

    /**
     * The last time the app had a Subscribe mobile conversion event fire.
     */
    mobile_conversion_subscribe?: string | null;

    /**
     * The last time the app had an Unlock Achievement mobile conversion event fire.
     */
    mobile_conversion_unlock_achievement?: string | null;

    /**
     * The last time the app had a View Content mobile conversion event fire.
     */
    mobile_conversion_view_content?: string | null;
  }
}

export interface AppRetrieveSkanAvailabilityResponse {
  data: AppRetrieveSkanAvailabilityResponse.Data;
}

export namespace AppRetrieveSkanAvailabilityResponse {
  export interface Data {
    ad_group_quota?: Data.AdGroupQuota | null;

    ad_quota?: Data.AdQuota | null;

    campaign_quota?: Data.CampaignQuota | null;
  }

  export namespace Data {
    export interface AdGroupQuota {
      /**
       * The number of SKAdNetwork IDs available for use.
       */
      available?: number;

      /**
       * The number SKAdNetwork IDs in a cooldown period.
       */
      cooldown?: number;

      /**
       * The total number of SKAdNetwork IDs: sum of available, used, and cooldown.
       */
      total?: number;

      /**
       * The number of SKAdNetwork IDs used.
       */
      used?: number;
    }

    export interface AdQuota {
      /**
       * The number of SKAdNetwork IDs available for use.
       */
      available?: number;

      /**
       * The number SKAdNetwork IDs in a cooldown period.
       */
      cooldown?: number;

      /**
       * The total number of SKAdNetwork IDs: sum of available, used, and cooldown.
       */
      total?: number;

      /**
       * The number of SKAdNetwork IDs used.
       */
      used?: number;
    }

    export interface CampaignQuota {
      /**
       * The number of SKAdNetwork IDs available for use.
       */
      available?: number;

      /**
       * The number SKAdNetwork IDs in a cooldown period.
       */
      cooldown?: number;

      /**
       * The total number of SKAdNetwork IDs: sum of available, used, and cooldown.
       */
      total?: number;

      /**
       * The number of SKAdNetwork IDs used.
       */
      used?: number;
    }
  }
}

export interface AppRetrieveSkanAvailabilityParams {
  /**
   * The ad group ID. Required when querying SKAN `ad_quota` for a specific ad group
   * within the specified app ID.
   */
  ad_group_id?: string;

  /**
   * Campaign ID. Required querying SKAN `ad_group_quota` for a given campaign ID.
   */
  campaign_id?: string;
}

export declare namespace Apps {
  export {
    type AppRetrieveLastFiredAtReportResponse as AppRetrieveLastFiredAtReportResponse,
    type AppRetrieveSkanAvailabilityResponse as AppRetrieveSkanAvailabilityResponse,
    type AppRetrieveSkanAvailabilityParams as AppRetrieveSkanAvailabilityParams,
  };
}
