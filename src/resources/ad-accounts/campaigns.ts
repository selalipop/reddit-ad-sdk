// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Campaigns extends APIResource {
  /**
   * Create a campaign for the provided ad account.
   *
   * ## App install limits
   *
   * Starting May 5th, the following limits will be enforced for iOS app install
   * campaigns:
   *
   * - Max 10 campaigns per app ID (_new limit_—shared across all ad accounts)
   * - Max 5 ad groups per campaign (_new limit_—previously was 10)
   * - Max 10 ads per ad group (_unchanged_) All app install campaigns may only
   *   target a single iOS or Android app ID.
   *   [Contact your Reddit Ads Expert](https://www.business.reddit.com/speak-with-a-reddit-ads-expert)
   *   for more details on app install changes.
   *   <h2>Rate Limit</h2>
   *     <div><a href="/ratelimits/Campaign Management Write">See the rate limits for <strong>Campaign Management Write</strong></a></div>
   *
   *           <details class="sl-panel sl-outline-none sl-w-full sl-rounded-lg sl-border">
   *               <summary
   *                   class="sl-panel__titlebar sl-flex sl-items-center sl-relative focus:sl-z-10 sl-text-base sl-leading-none sl-font-medium sl-pr-4 sl-pl-3 sl-border-input focus:sl-border-primary sl-cursor-pointer sl-select-none">
   *                   <div class="sl-flex sl-flex-1 sl-items-center sl-h-lg">
   *                       <div class="sl-flex sl-items-center sl-mr-1.5">
   *                           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
   *                               class="svg-inline--fa fa-chevron-down fa-fw fa-sm sl-icon" role="img"
   *                               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
   *                               <path fill="currentColor"
   *                                   d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z">
   *                               </path>
   *                           </svg>
   *                       </div>
   *                       <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-campaign-management-write</span></div>
   *                   </div>
   *               </summary>
   *               <div class="sl-panel__content-wrapper sl-border-t" role="region">
   *                   <div class="sl-panel__content sl-p-4">
   *                       <div class="sl--m-2">
   *                           <div>
   *                               <div class="sl-m-2 sl-p-2 sl-border">
   *                                   <div class="sl-prose sl-markdown-viewer" style="font-size: 12px;">
   *                                       <ul>
   *                                           <li>Window: 60 seconds</li>
   *                                           <li>Quota: 200 requests</li>
   *                                       </ul>
   *                                   </div>
   *                               </div>
   *                           </div>
   *                       </div>
   *                   </div>
   *               </div>
   *           </details>
   */
  create(
    adAccountID: string,
    body: CampaignCreateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignCreateResponse> {
    return this._client.post(path`/ad_accounts/${adAccountID}/campaigns`, { body, ...options });
  }

  /**
   * List campaigns by ad account.<h2>Rate Limit</h2>
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
    query: CampaignListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CampaignListResponse> {
    return this._client.get(path`/ad_accounts/${adAccountID}/campaigns`, { query, ...options });
  }
}

export interface CampaignCreateResponse {
  data?: CampaignCreateResponse.Data;
}

export namespace CampaignCreateResponse {
  export interface Data {
    /**
     * The ID of the campaign.
     */
    id?: string;

    /**
     * The ID of the ad account.
     */
    ad_account_id?: string;

    /**
     * Age restriction for the campaign.
     */
    age_restriction?: 'ABOVE_18' | 'ABOVE_21' | 'NO_AGE_RESTRICTION';

    /**
     * The app ID on either the Apple App Store or Google Play Store. For use with app
     * installs campaigns.
     */
    app_id?: string | null;

    /**
     * The status that the user has configured this entity to have. Can differ from
     * `effective_status` depending on context such as pending billing information.
     */
    configured_status?: 'ACTIVE' | 'ARCHIVED' | 'DELETED' | 'PAUSED';

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The calculated status determining the real status of this entity.
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
      | 'REJECTED';

    /**
     * Campaign level funding instrument ID.
     */
    funding_instrument_id?: string | null;

    /**
     * The campaign goal type. Only works when `is_campaign_budget_optimization` is
     * `true`.
     *
     * > **Important:** This cannot be changed after publishing the campaign.
     */
    goal_type?: 'LIFETIME_SPEND' | 'DAILY_SPEND' | null;

    /**
     * Campaign level goal value in micros. Only works when
     * `is_campaign_budget_optimization` is `true`.
     */
    goal_value?: number | null;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The campaign name. Must be at least 3 characters.
     */
    name?: string | null;

    /**
     * The objective type of a campaign.
     */
    objective?:
      | 'APP_INSTALLS'
      | 'CATALOG_SALES'
      | 'CLICKS'
      | 'CONVERSIONS'
      | 'IMPRESSIONS'
      | 'LEAD_GENERATION'
      | 'VIDEO_VIEWABLE_IMPRESSIONS';

    /**
     * Metadata about the SKAdNetwork source ID associated with the campaign.
     */
    skadnetwork_metadata?: Data.SkadnetworkMetadata | null;

    /**
     * List of
     * [special ad categories](https://business.reddithelp.com/s/article/about-campaigns#special-ad-category)
     * (advertising content that require compliance with regulations and policies)
     * related to the campaign.
     */
    special_ad_categories?: Array<'HOUSING_EMPLOYMENT_CREDIT' | 'NONE'> | null;

    /**
     * Campaign lifetime spend cap in microcurrency. This field works for both CBO
     * (campaign budget optimization) and non-CBO campaigns.
     */
    spend_cap?: number | null;
  }

  export namespace Data {
    /**
     * Metadata about the SKAdNetwork source ID associated with the campaign.
     */
    export interface SkadnetworkMetadata {
      /**
       * The status of the SKAdNetwork source ID.
       */
      status?: 'COOLDOWN' | 'DISABLED' | 'ENABLED';
    }
  }
}

export interface CampaignListResponse {
  data: Array<CampaignListResponse.Data>;

  pagination: CampaignListResponse.Pagination;
}

export namespace CampaignListResponse {
  export interface Data {
    /**
     * The ID of the campaign.
     */
    id?: string;

    /**
     * The ID of the ad account.
     */
    ad_account_id?: string;

    /**
     * Age restriction for the campaign.
     */
    age_restriction?: 'ABOVE_18' | 'ABOVE_21' | 'NO_AGE_RESTRICTION';

    /**
     * The app ID on either the Apple App Store or Google Play Store. For use with app
     * installs campaigns.
     */
    app_id?: string | null;

    /**
     * The status that the user has configured this entity to have. Can differ from
     * `effective_status` depending on context such as pending billing information.
     */
    configured_status?: 'ACTIVE' | 'ARCHIVED' | 'DELETED' | 'PAUSED';

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The calculated status determining the real status of this entity.
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
      | 'REJECTED';

    /**
     * Campaign level funding instrument ID.
     */
    funding_instrument_id?: string | null;

    /**
     * The campaign goal type. Only works when `is_campaign_budget_optimization` is
     * `true`.
     *
     * > **Important:** This cannot be changed after publishing the campaign.
     */
    goal_type?: 'LIFETIME_SPEND' | 'DAILY_SPEND' | null;

    /**
     * Campaign level goal value in micros. Only works when
     * `is_campaign_budget_optimization` is `true`.
     */
    goal_value?: number | null;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The campaign name. Must be at least 3 characters.
     */
    name?: string | null;

    /**
     * The objective type of a campaign.
     */
    objective?:
      | 'APP_INSTALLS'
      | 'CATALOG_SALES'
      | 'CLICKS'
      | 'CONVERSIONS'
      | 'IMPRESSIONS'
      | 'LEAD_GENERATION'
      | 'VIDEO_VIEWABLE_IMPRESSIONS';

    /**
     * Metadata about the SKAdNetwork source ID associated with the campaign.
     */
    skadnetwork_metadata?: Data.SkadnetworkMetadata | null;

    /**
     * List of
     * [special ad categories](https://business.reddithelp.com/s/article/about-campaigns#special-ad-category)
     * (advertising content that require compliance with regulations and policies)
     * related to the campaign.
     */
    special_ad_categories?: Array<'HOUSING_EMPLOYMENT_CREDIT' | 'NONE'> | null;

    /**
     * Campaign lifetime spend cap in microcurrency. This field works for both CBO
     * (campaign budget optimization) and non-CBO campaigns.
     */
    spend_cap?: number | null;
  }

  export namespace Data {
    /**
     * Metadata about the SKAdNetwork source ID associated with the campaign.
     */
    export interface SkadnetworkMetadata {
      /**
       * The status of the SKAdNetwork source ID.
       */
      status?: 'COOLDOWN' | 'DISABLED' | 'ENABLED';
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

export interface CampaignCreateParams {
  data: CampaignCreateParams.Data;
}

export namespace CampaignCreateParams {
  export interface Data {
    /**
     * The status that the user has configured this entity to have. Can differ from
     * `effective_status` depending on context such as pending billing information.
     */
    configured_status: 'ACTIVE' | 'ARCHIVED' | 'DELETED' | 'PAUSED';

    /**
     * The campaign name. Must be at least 3 characters.
     */
    name: string | null;

    /**
     * The objective type of a campaign.
     */
    objective:
      | 'APP_INSTALLS'
      | 'CATALOG_SALES'
      | 'CLICKS'
      | 'CONVERSIONS'
      | 'IMPRESSIONS'
      | 'LEAD_GENERATION'
      | 'VIDEO_VIEWABLE_IMPRESSIONS';

    /**
     * Age restriction for the campaign.
     */
    age_restriction?: 'ABOVE_18' | 'ABOVE_21' | 'NO_AGE_RESTRICTION';

    /**
     * The app ID on either the Apple App Store or Google Play Store. For use with app
     * installs campaigns.
     */
    app_id?: string | null;

    /**
     * Campaign level funding instrument ID.
     */
    funding_instrument_id?: string | null;

    /**
     * The campaign goal type. Only works when `is_campaign_budget_optimization` is
     * `true`.
     *
     * > **Important:** This cannot be changed after publishing the campaign.
     */
    goal_type?: 'LIFETIME_SPEND' | 'DAILY_SPEND' | null;

    /**
     * Campaign level goal value in micros. Only works when
     * `is_campaign_budget_optimization` is `true`.
     */
    goal_value?: number | null;

    /**
     * Campaign lifetime spend cap in microcurrency. This field works for both CBO
     * (campaign budget optimization) and non-CBO campaigns.
     */
    spend_cap?: number | null;
  }
}

export interface CampaignListParams {
  /**
   * The list of campaign IDs to filter by.
   */
  id?: Array<string>;

  page?: CampaignListParams.Page;
}

export namespace CampaignListParams {
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

export declare namespace Campaigns {
  export {
    type CampaignCreateResponse as CampaignCreateResponse,
    type CampaignListResponse as CampaignListResponse,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignListParams as CampaignListParams,
  };
}
