// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Ads extends APIResource {
  /**
   * Get ad by id.<h2>Rate Limit</h2>
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
  retrieve(adID: string, options?: RequestOptions): APIPromise<AdRetrieveResponse> {
    return this._client.get(path`/ads/${adID}`, options);
  }

  /**
   * Update an Ad.<h2>Rate Limit</h2>
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
  update(adID: string, body: AdUpdateParams, options?: RequestOptions): APIPromise<AdUpdateResponse> {
    return this._client.patch(path`/ads/${adID}`, { body, ...options });
  }
}

export interface AdRetrieveResponse {
  data: AdRetrieveResponse.Data;
}

export namespace AdRetrieveResponse {
  export interface Data {
    /**
     * The ID of the ad.
     */
    id?: string;

    /**
     * The ID of the ad account that owns this ad.
     */
    ad_account_id?: string;

    /**
     * The ID of the ad group that this ad belongs to.
     */
    ad_group_id?: string;

    /**
     * The ID of the campaign that this ad belongs to.
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
     * The URL users are directed to when they click the ad.
     */
    click_url?: string | null;

    /**
     * Optional query parameters to be appended to the `click_url`.
     */
    click_url_query_parameters?: Array<Data.ClickURLQueryParameter> | null;

    /**
     * The status that you has configured for this ad.
     */
    configured_status?: 'ACTIVE' | 'ARCHIVED' | 'DELETED' | 'PAUSED';

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The effective status for the ad.
     */
    effective_status?:
      | 'ACTIVE'
      | 'AD_GROUP_PAUSED'
      | 'ARCHIVED'
      | 'CAMPAIGN_PAUSED'
      | 'COMPLETED'
      | 'DELETED'
      | 'MISSING_PERMISSIONS'
      | 'PAUSED'
      | 'PENDING_APPROVAL'
      | 'PENDING_BILLING_INFO'
      | 'PENDING_ID_VERIFICATION'
      | 'PROCESSING'
      | 'REJECTED'
      | null;

    /**
     * URLs to be called on certain events. Only URLs from Reddit's list of
     * [approved measurement providers](https://business.reddithelp.com/s/article/Set-up-third-party-measurement)
     * are allowed.
     */
    event_trackers?: Array<Data.EventTracker> | null;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The ad name to be labeled in the dashboard and reports.
     */
    name?: string;

    /**
     * The ID of the post that this ad belongs to.
     */
    post_id?: string | null;

    /**
     * The URL of the post that this ad belongs to.
     */
    post_url?: string | null;

    /**
     * An expiration time for the `preview_url` of this ad. This may be set to `null`
     * to disable the preview URL.
     */
    preview_expiry?: string | null;

    /**
     * A URL that may be used to preview the ad. This is only available when
     * `preview_expiry` is set.
     */
    preview_url?: string | null;

    /**
     * A list of products associated with an ad.
     */
    products?: Array<Data.Product> | null;

    /**
     * The ID of the ad post's author. This field is required for catalog sales
     * campaigns.
     */
    profile_id?: string | null;

    /**
     * The username of the ad post's author. Currently used only for catalog sales
     * campaigns.
     */
    profile_username?: string | null;

    /**
     * The reason why the ad was rejected.
     */
    rejection_reason?:
      | 'ADULT_GENERAL'
      | 'ALCOHOL'
      | 'ALCOHOL_ADDICTION_AND_TREATMENT_PROGRAMS'
      | 'ALCOHOL_AGE_TARGETING'
      | 'ALCOHOL_GEO_TARGETING'
      | 'ALCOHOL_GLORIFICATION'
      | 'ALCOHOL_LICENSING_AND_REGISTRATION_UK_ONLY'
      | 'ALCOHOL_MINORS'
      | 'BRIDGE_PAGE'
      | 'BROKEN_URL'
      | 'CAPITALIZATION'
      | 'CAPITALIZING_ON_TRAGEDIES_OR_CRISES'
      | 'CBD'
      | 'CONTENT'
      | 'COUNTERFEIT'
      | 'COUNTERFEIT_GOODS'
      | 'DATING'
      | 'DATING_DISCRIMINATORY'
      | 'DATING_FOCUS_ON_CASUAL_SEX_PROSTITUTION_FETISHES'
      | 'DATING_FOCUS_ON_INFIDELITY'
      | 'DATING_MAIL_ORDER_BRIDE_SERVICES'
      | 'DECEPTIVE'
      | 'DECEPTIVE_MISLEADING_IRRESPONSIBLE_OR_MISLEADING'
      | 'DECEPTIVE_MISLEADING_USE_OR_COLLECTION_OF_DATA'
      | 'DISCLOSURE_PROPER_ACCREDITATION'
      | 'DISPLAY_URL'
      | 'EMAIL_GATED'
      | 'EXCEEDING_CHARACTERS'
      | 'FACILIATE_ILLEGAL_FRAUDULENT_OR_MISLEADING_BEHAVIOR'
      | 'FINANCE_AND_CRYPTO_GEO_TARGETING'
      | 'FINANCE_AND_CRYPTO_LICENSING_AND_REGISTRATION'
      | 'FINANCE_CRYPTO_EXAGGERATED_CLAIMS'
      | 'FINANCE_CRYPTO_INDIVIDUAL_INVESTMENTS'
      | 'FINANCE_CRYPTO_PROHIBITED_PRODUCTS_AND_SERVICES'
      | 'FINANCIAL_CRYPTO_PRODUCTS_AND_SERVICES_GENERAL_REJECTION'
      | 'FINANCIAL_CRYPTO_PRODUCTS_AND_SERVICES_NEED_MANAGEMENT'
      | 'GAMBLING'
      | 'GAMBLING_ADDICTION_AND_TREATMENT_PROGRAMS'
      | 'GAMBLING_AGE_TARGETING'
      | 'GAMBLING_DRUGS_LICENSING_AND_REGISTRATION'
      | 'GAMBLING_GEO_TARGETING'
      | 'GAMBLING_UNREALISTIC_CLAIMS_AND_EXPECTATIONS'
      | 'GRAMMAR'
      | 'HAZARDOUS_PRODUCTS'
      | 'HEALTH_AND_WELLNESS_EXAGGERATED_CLAIMS'
      | 'HEALTH_AND_WELLNESS_GEO_TARGETING'
      | 'HEALTH_AND_WELLNESS_LICENSING_AND_REGISTRATION'
      | 'HEALTH_AND_WELLNESS_PHARMA'
      | 'HEALTH_AND_WELLNESS_PROHIBITED_PRODUCTS'
      | 'HEALTH_GENERAL'
      | 'ILLEGAL_FRAUD_MISLEADING'
      | 'IMAGERY_CONTENT_ALCOHOL_GAMBLING_CANNABIS_DRUGS'
      | 'IMPROPER_CERTIFICATION_PHARMA'
      | 'INABILITY_TO_INTERACT'
      | 'INAPPROPRIATE_TARGETING'
      | 'INTOLERANT_OR_OVERLY_CONTENTIOUS_CULTURAL_TOPICS'
      | 'LANDING_PAGE_LANGUAGE'
      | 'LIVE_ANIMALS'
      | 'LIVE_ANIMALS_AND_ANIMAL_PRODUCTS'
      | 'MATURE_RATED_VIDEO'
      | 'NSFW_18_PROFILE'
      | 'NSFW_HASHTAG'
      | 'NSFW_ONLY'
      | 'NUDITY'
      | 'OBSCENE_OFFENSIVE'
      | 'PAID_FANTASY_SPORTS'
      | 'PERSONAL_INFORMATION'
      | 'PHARMACEUTICAL_MEDICAL_PRODUCTS'
      | 'POLITICAL_ADVERTISEMENTS'
      | 'POLITICAL_ADVERTISEMENTS_NOT_MANAGED_REDDIT'
      | 'POLITICAL_ADVERTISEMENTS_OUTSIDE_US'
      | 'POLITICAL_ADVERTISEMENTS_STATE_LOCAL'
      | 'POLITICAL_VIDEO'
      | 'POLITICS_GEO_TARGETING'
      | 'PORN_VIDEO'
      | 'PROFANITIES'
      | 'PROFANITY'
      | 'PROHIBITED_ADVERTISEMENTS'
      | 'PROHIBITED_PRODUCTS_SERVICES'
      | 'PROHIBITED_TARGETING'
      | 'PUNCTUATION'
      | 'QUALITY'
      | 'QUALITY_SINGLE_ARTICLE'
      | 'RECREATIONAL_DRUGS_ADDICTION_AND_TREATMENT_PROGRAMS'
      | 'RECREATIONAL_DRUGS_AGE_TARGETING'
      | 'RECREATIONAL_DRUGS_DIRECT_SALE_OF_CANNABIS_CANADA_ONLY'
      | 'RECREATIONAL_DRUGS_DOESNT_MEET_REQUIREMENTS_US_ONLY'
      | 'RECREATIONAL_DRUGS_GEO_TARGETING'
      | 'RECREATIONAL_DRUGS_LICENSING_AND_REGISTRATION'
      | 'RECREATIONAL_DRUGS_PRICES_AND_OR_DISTRIBUTION_CANADA_ONLY'
      | 'RECREATIONAL_DRUGS_PROHIBITED_CLAIMS_CANADA_US_ONLY'
      | 'RECREATIONAL_DRUGS_PROHIBITED_PRODUCTS'
      | 'REDIRECT_URL'
      | 'REHAB_ADDICTION_CENTERS'
      | 'RESALE_OF_EVENT_TICKETS'
      | 'SEXUALLY_EXPLICIT_CONTENT'
      | 'SHORTEN_URL'
      | 'SPELLING'
      | 'STYLE_POLICIES_GENERAL'
      | 'SUPPLEMENTS'
      | 'SUSPENSION'
      | 'SYMBOLS_EMOJIS'
      | 'THIRD_PARTY_RIGHTS'
      | 'THIRD_PARTY_RIGHTS_MANAGED'
      | 'TOBACCO'
      | 'TOBACCO_GENERAL'
      | 'TRADE_POLICIES'
      | 'UNOFFICIAL_RESALE_OF_EVENT_TICKETS'
      | 'UNRELATED_LANDING_PAGE'
      | 'URL_GENERAL'
      | 'VERIFY_AUTHORIZED_RESELLER'
      | 'VERIFY_AUTHORIZED_TICKET_RESELLER'
      | 'VERIFY_ID'
      | 'VIDEO_ADS'
      | 'WEAPONS'
      | 'WEAPONS_AND_RELATED_PRODUCTS_GENERAL'
      | null;

    /**
     * A collection of attributes used to generate creatives for a particular ad.
     */
    shopping_creative?: Data.ShoppingCreative | null;

    /**
     * Metadata about the SKAdNetwork source ID associated with the ad.
     */
    skadnetwork_metadata?: Data.SkadnetworkMetadata | null;

    /**
     * The type of ad.
     */
    type?: 'UNSPECIFIED';

    [k: string]: unknown;
  }

  export namespace Data {
    export interface ClickURLQueryParameter {
      /**
       * The name of the query parameter.
       */
      name?: string;

      /**
       * The value of the query parameter
       * ([supports macros](https://business.reddithelp.com/s/article/Set-up-third-party-measurement#2-select-your-macros)).
       */
      value?: string;
    }

    export interface EventTracker {
      /**
       * The event type that calls the tracker URL.
       */
      type?: 'CLICK' | 'VIEW';

      /**
       * The URL to be called on event.
       */
      url?: string;
    }

    export interface Product {
      /**
       * Associate up to 6 products with your custom product ad.
       */
      product_id?: string;
    }

    /**
     * A collection of attributes used to generate creatives for a particular ad.
     */
    export interface ShoppingCreative {
      /**
       * Enable comments on the post, manageable in the
       * [Ads Manager](https://business.reddithelp.com/s/article/Managing-ads-with-comments-on).
       */
      allow_comments?: boolean;

      /**
       * The text to display on the main action button of the ad's post.
       */
      call_to_action?: string;

      /**
       * The page users go to after clicking the call to action. If empty, users will go
       * to the product's page.
       */
      destination_url?: string;

      /**
       * Applicable only for dynamic product ads. Determines how many products appear in
       * the ad.
       *
       * - `CAROUSEL-ONLY` — Always show multiple images for this ad.
       *   > **Important:** If a carousel cannot be generated, the ad will not be served.
       * - `CAROUSEL_DISABLED` — Show only one product.
       * - `AUTO` — Automatically choose between a carousel or single product based on
       *   products associated with the ad.
       */
      dpa_carousel_mode?: 'AUTO' | 'CAROUSEL_ONLY' | 'CAROUSEL_DISABLED' | null;

      /**
       * Headline to use at the top of the Reddit post this ad will be displayed with.
       */
      headline?: string;

      /**
       * The secondary line of text displayed in your ad. Automatically populates based
       * on product. Choose between `PRICE` or `DESCRIPTION`.
       */
      second_line_cta?: 'DESCRIPTION' | 'PRICE' | null;
    }

    /**
     * Metadata about the SKAdNetwork source ID associated with the ad.
     */
    export interface SkadnetworkMetadata {
      /**
       * The status of the SKAdNetwork source ID.
       */
      status?: 'COOLDOWN' | 'DISABLED' | 'ENABLED';
    }
  }
}

export interface AdUpdateResponse {
  data: AdUpdateResponse.Data;
}

export namespace AdUpdateResponse {
  export interface Data {
    /**
     * The ID of the ad.
     */
    id?: string;

    /**
     * The ID of the ad account that owns this ad.
     */
    ad_account_id?: string;

    /**
     * The ID of the ad group that this ad belongs to.
     */
    ad_group_id?: string;

    /**
     * The ID of the campaign that this ad belongs to.
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
     * The URL users are directed to when they click the ad.
     */
    click_url?: string | null;

    /**
     * Optional query parameters to be appended to the `click_url`.
     */
    click_url_query_parameters?: Array<Data.ClickURLQueryParameter> | null;

    /**
     * The status that you has configured for this ad.
     */
    configured_status?: 'ACTIVE' | 'ARCHIVED' | 'DELETED' | 'PAUSED';

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The effective status for the ad.
     */
    effective_status?:
      | 'ACTIVE'
      | 'AD_GROUP_PAUSED'
      | 'ARCHIVED'
      | 'CAMPAIGN_PAUSED'
      | 'COMPLETED'
      | 'DELETED'
      | 'MISSING_PERMISSIONS'
      | 'PAUSED'
      | 'PENDING_APPROVAL'
      | 'PENDING_BILLING_INFO'
      | 'PENDING_ID_VERIFICATION'
      | 'PROCESSING'
      | 'REJECTED'
      | null;

    /**
     * URLs to be called on certain events. Only URLs from Reddit's list of
     * [approved measurement providers](https://business.reddithelp.com/s/article/Set-up-third-party-measurement)
     * are allowed.
     */
    event_trackers?: Array<Data.EventTracker> | null;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The ad name to be labeled in the dashboard and reports.
     */
    name?: string;

    /**
     * The ID of the post that this ad belongs to.
     */
    post_id?: string | null;

    /**
     * The URL of the post that this ad belongs to.
     */
    post_url?: string | null;

    /**
     * An expiration time for the `preview_url` of this ad. This may be set to `null`
     * to disable the preview URL.
     */
    preview_expiry?: string | null;

    /**
     * A URL that may be used to preview the ad. This is only available when
     * `preview_expiry` is set.
     */
    preview_url?: string | null;

    /**
     * A list of products associated with an ad.
     */
    products?: Array<Data.Product> | null;

    /**
     * The ID of the ad post's author. This field is required for catalog sales
     * campaigns.
     */
    profile_id?: string | null;

    /**
     * The username of the ad post's author. Currently used only for catalog sales
     * campaigns.
     */
    profile_username?: string | null;

    /**
     * The reason why the ad was rejected.
     */
    rejection_reason?:
      | 'ADULT_GENERAL'
      | 'ALCOHOL'
      | 'ALCOHOL_ADDICTION_AND_TREATMENT_PROGRAMS'
      | 'ALCOHOL_AGE_TARGETING'
      | 'ALCOHOL_GEO_TARGETING'
      | 'ALCOHOL_GLORIFICATION'
      | 'ALCOHOL_LICENSING_AND_REGISTRATION_UK_ONLY'
      | 'ALCOHOL_MINORS'
      | 'BRIDGE_PAGE'
      | 'BROKEN_URL'
      | 'CAPITALIZATION'
      | 'CAPITALIZING_ON_TRAGEDIES_OR_CRISES'
      | 'CBD'
      | 'CONTENT'
      | 'COUNTERFEIT'
      | 'COUNTERFEIT_GOODS'
      | 'DATING'
      | 'DATING_DISCRIMINATORY'
      | 'DATING_FOCUS_ON_CASUAL_SEX_PROSTITUTION_FETISHES'
      | 'DATING_FOCUS_ON_INFIDELITY'
      | 'DATING_MAIL_ORDER_BRIDE_SERVICES'
      | 'DECEPTIVE'
      | 'DECEPTIVE_MISLEADING_IRRESPONSIBLE_OR_MISLEADING'
      | 'DECEPTIVE_MISLEADING_USE_OR_COLLECTION_OF_DATA'
      | 'DISCLOSURE_PROPER_ACCREDITATION'
      | 'DISPLAY_URL'
      | 'EMAIL_GATED'
      | 'EXCEEDING_CHARACTERS'
      | 'FACILIATE_ILLEGAL_FRAUDULENT_OR_MISLEADING_BEHAVIOR'
      | 'FINANCE_AND_CRYPTO_GEO_TARGETING'
      | 'FINANCE_AND_CRYPTO_LICENSING_AND_REGISTRATION'
      | 'FINANCE_CRYPTO_EXAGGERATED_CLAIMS'
      | 'FINANCE_CRYPTO_INDIVIDUAL_INVESTMENTS'
      | 'FINANCE_CRYPTO_PROHIBITED_PRODUCTS_AND_SERVICES'
      | 'FINANCIAL_CRYPTO_PRODUCTS_AND_SERVICES_GENERAL_REJECTION'
      | 'FINANCIAL_CRYPTO_PRODUCTS_AND_SERVICES_NEED_MANAGEMENT'
      | 'GAMBLING'
      | 'GAMBLING_ADDICTION_AND_TREATMENT_PROGRAMS'
      | 'GAMBLING_AGE_TARGETING'
      | 'GAMBLING_DRUGS_LICENSING_AND_REGISTRATION'
      | 'GAMBLING_GEO_TARGETING'
      | 'GAMBLING_UNREALISTIC_CLAIMS_AND_EXPECTATIONS'
      | 'GRAMMAR'
      | 'HAZARDOUS_PRODUCTS'
      | 'HEALTH_AND_WELLNESS_EXAGGERATED_CLAIMS'
      | 'HEALTH_AND_WELLNESS_GEO_TARGETING'
      | 'HEALTH_AND_WELLNESS_LICENSING_AND_REGISTRATION'
      | 'HEALTH_AND_WELLNESS_PHARMA'
      | 'HEALTH_AND_WELLNESS_PROHIBITED_PRODUCTS'
      | 'HEALTH_GENERAL'
      | 'ILLEGAL_FRAUD_MISLEADING'
      | 'IMAGERY_CONTENT_ALCOHOL_GAMBLING_CANNABIS_DRUGS'
      | 'IMPROPER_CERTIFICATION_PHARMA'
      | 'INABILITY_TO_INTERACT'
      | 'INAPPROPRIATE_TARGETING'
      | 'INTOLERANT_OR_OVERLY_CONTENTIOUS_CULTURAL_TOPICS'
      | 'LANDING_PAGE_LANGUAGE'
      | 'LIVE_ANIMALS'
      | 'LIVE_ANIMALS_AND_ANIMAL_PRODUCTS'
      | 'MATURE_RATED_VIDEO'
      | 'NSFW_18_PROFILE'
      | 'NSFW_HASHTAG'
      | 'NSFW_ONLY'
      | 'NUDITY'
      | 'OBSCENE_OFFENSIVE'
      | 'PAID_FANTASY_SPORTS'
      | 'PERSONAL_INFORMATION'
      | 'PHARMACEUTICAL_MEDICAL_PRODUCTS'
      | 'POLITICAL_ADVERTISEMENTS'
      | 'POLITICAL_ADVERTISEMENTS_NOT_MANAGED_REDDIT'
      | 'POLITICAL_ADVERTISEMENTS_OUTSIDE_US'
      | 'POLITICAL_ADVERTISEMENTS_STATE_LOCAL'
      | 'POLITICAL_VIDEO'
      | 'POLITICS_GEO_TARGETING'
      | 'PORN_VIDEO'
      | 'PROFANITIES'
      | 'PROFANITY'
      | 'PROHIBITED_ADVERTISEMENTS'
      | 'PROHIBITED_PRODUCTS_SERVICES'
      | 'PROHIBITED_TARGETING'
      | 'PUNCTUATION'
      | 'QUALITY'
      | 'QUALITY_SINGLE_ARTICLE'
      | 'RECREATIONAL_DRUGS_ADDICTION_AND_TREATMENT_PROGRAMS'
      | 'RECREATIONAL_DRUGS_AGE_TARGETING'
      | 'RECREATIONAL_DRUGS_DIRECT_SALE_OF_CANNABIS_CANADA_ONLY'
      | 'RECREATIONAL_DRUGS_DOESNT_MEET_REQUIREMENTS_US_ONLY'
      | 'RECREATIONAL_DRUGS_GEO_TARGETING'
      | 'RECREATIONAL_DRUGS_LICENSING_AND_REGISTRATION'
      | 'RECREATIONAL_DRUGS_PRICES_AND_OR_DISTRIBUTION_CANADA_ONLY'
      | 'RECREATIONAL_DRUGS_PROHIBITED_CLAIMS_CANADA_US_ONLY'
      | 'RECREATIONAL_DRUGS_PROHIBITED_PRODUCTS'
      | 'REDIRECT_URL'
      | 'REHAB_ADDICTION_CENTERS'
      | 'RESALE_OF_EVENT_TICKETS'
      | 'SEXUALLY_EXPLICIT_CONTENT'
      | 'SHORTEN_URL'
      | 'SPELLING'
      | 'STYLE_POLICIES_GENERAL'
      | 'SUPPLEMENTS'
      | 'SUSPENSION'
      | 'SYMBOLS_EMOJIS'
      | 'THIRD_PARTY_RIGHTS'
      | 'THIRD_PARTY_RIGHTS_MANAGED'
      | 'TOBACCO'
      | 'TOBACCO_GENERAL'
      | 'TRADE_POLICIES'
      | 'UNOFFICIAL_RESALE_OF_EVENT_TICKETS'
      | 'UNRELATED_LANDING_PAGE'
      | 'URL_GENERAL'
      | 'VERIFY_AUTHORIZED_RESELLER'
      | 'VERIFY_AUTHORIZED_TICKET_RESELLER'
      | 'VERIFY_ID'
      | 'VIDEO_ADS'
      | 'WEAPONS'
      | 'WEAPONS_AND_RELATED_PRODUCTS_GENERAL'
      | null;

    /**
     * A collection of attributes used to generate creatives for a particular ad.
     */
    shopping_creative?: Data.ShoppingCreative | null;

    /**
     * Metadata about the SKAdNetwork source ID associated with the ad.
     */
    skadnetwork_metadata?: Data.SkadnetworkMetadata | null;

    /**
     * The type of ad.
     */
    type?: 'UNSPECIFIED';

    [k: string]: unknown;
  }

  export namespace Data {
    export interface ClickURLQueryParameter {
      /**
       * The name of the query parameter.
       */
      name?: string;

      /**
       * The value of the query parameter
       * ([supports macros](https://business.reddithelp.com/s/article/Set-up-third-party-measurement#2-select-your-macros)).
       */
      value?: string;
    }

    export interface EventTracker {
      /**
       * The event type that calls the tracker URL.
       */
      type?: 'CLICK' | 'VIEW';

      /**
       * The URL to be called on event.
       */
      url?: string;
    }

    export interface Product {
      /**
       * Associate up to 6 products with your custom product ad.
       */
      product_id?: string;
    }

    /**
     * A collection of attributes used to generate creatives for a particular ad.
     */
    export interface ShoppingCreative {
      /**
       * Enable comments on the post, manageable in the
       * [Ads Manager](https://business.reddithelp.com/s/article/Managing-ads-with-comments-on).
       */
      allow_comments?: boolean;

      /**
       * The text to display on the main action button of the ad's post.
       */
      call_to_action?: string;

      /**
       * The page users go to after clicking the call to action. If empty, users will go
       * to the product's page.
       */
      destination_url?: string;

      /**
       * Applicable only for dynamic product ads. Determines how many products appear in
       * the ad.
       *
       * - `CAROUSEL-ONLY` — Always show multiple images for this ad.
       *   > **Important:** If a carousel cannot be generated, the ad will not be served.
       * - `CAROUSEL_DISABLED` — Show only one product.
       * - `AUTO` — Automatically choose between a carousel or single product based on
       *   products associated with the ad.
       */
      dpa_carousel_mode?: 'AUTO' | 'CAROUSEL_ONLY' | 'CAROUSEL_DISABLED' | null;

      /**
       * Headline to use at the top of the Reddit post this ad will be displayed with.
       */
      headline?: string;

      /**
       * The secondary line of text displayed in your ad. Automatically populates based
       * on product. Choose between `PRICE` or `DESCRIPTION`.
       */
      second_line_cta?: 'DESCRIPTION' | 'PRICE' | null;
    }

    /**
     * Metadata about the SKAdNetwork source ID associated with the ad.
     */
    export interface SkadnetworkMetadata {
      /**
       * The status of the SKAdNetwork source ID.
       */
      status?: 'COOLDOWN' | 'DISABLED' | 'ENABLED';
    }
  }
}

export interface AdUpdateParams {
  data: AdUpdateParams.Data;
}

export namespace AdUpdateParams {
  export interface Data {
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
     * The URL users are directed to when they click the ad.
     */
    click_url?: string | null;

    /**
     * Optional query parameters to be appended to the `click_url`.
     */
    click_url_query_parameters?: Array<Data.ClickURLQueryParameter> | null;

    /**
     * The status that you has configured for this ad.
     */
    configured_status?: 'ACTIVE' | 'ARCHIVED' | 'DELETED' | 'PAUSED';

    /**
     * URLs to be called on certain events. Only URLs from Reddit's list of
     * [approved measurement providers](https://business.reddithelp.com/s/article/Set-up-third-party-measurement)
     * are allowed.
     */
    event_trackers?: Array<Data.EventTracker> | null;

    /**
     * The ad name to be labeled in the dashboard and reports.
     */
    name?: string;

    /**
     * The ID of the post that this ad belongs to.
     */
    post_id?: string | null;

    /**
     * An expiration time for the `preview_url` of this ad. This may be set to `null`
     * to disable the preview URL.
     */
    preview_expiry?: string | null;

    /**
     * A list of products associated with an ad.
     */
    products?: Array<Data.Product> | null;

    /**
     * The ID of the ad post's author. This field is required for catalog sales
     * campaigns.
     */
    profile_id?: string | null;

    /**
     * The username of the ad post's author. Currently used only for catalog sales
     * campaigns.
     */
    profile_username?: string | null;

    /**
     * A collection of attributes used to generate creatives for a particular ad.
     */
    shopping_creative?: Data.ShoppingCreative | null;

    /**
     * The type of ad.
     */
    type?: 'UNSPECIFIED';

    [k: string]: unknown;
  }

  export namespace Data {
    export interface ClickURLQueryParameter {
      /**
       * The name of the query parameter.
       */
      name?: string;

      /**
       * The value of the query parameter
       * ([supports macros](https://business.reddithelp.com/s/article/Set-up-third-party-measurement#2-select-your-macros)).
       */
      value?: string;
    }

    export interface EventTracker {
      /**
       * The event type that calls the tracker URL.
       */
      type?: 'CLICK' | 'VIEW';

      /**
       * The URL to be called on event.
       */
      url?: string;
    }

    export interface Product {
      /**
       * Associate up to 6 products with your custom product ad.
       */
      product_id?: string;
    }

    /**
     * A collection of attributes used to generate creatives for a particular ad.
     */
    export interface ShoppingCreative {
      /**
       * Enable comments on the post, manageable in the
       * [Ads Manager](https://business.reddithelp.com/s/article/Managing-ads-with-comments-on).
       */
      allow_comments?: boolean;

      /**
       * The text to display on the main action button of the ad's post.
       */
      call_to_action?: string;

      /**
       * The page users go to after clicking the call to action. If empty, users will go
       * to the product's page.
       */
      destination_url?: string;

      /**
       * Applicable only for dynamic product ads. Determines how many products appear in
       * the ad.
       *
       * - `CAROUSEL-ONLY` — Always show multiple images for this ad.
       *   > **Important:** If a carousel cannot be generated, the ad will not be served.
       * - `CAROUSEL_DISABLED` — Show only one product.
       * - `AUTO` — Automatically choose between a carousel or single product based on
       *   products associated with the ad.
       */
      dpa_carousel_mode?: 'AUTO' | 'CAROUSEL_ONLY' | 'CAROUSEL_DISABLED' | null;

      /**
       * Headline to use at the top of the Reddit post this ad will be displayed with.
       */
      headline?: string;

      /**
       * The secondary line of text displayed in your ad. Automatically populates based
       * on product. Choose between `PRICE` or `DESCRIPTION`.
       */
      second_line_cta?: 'DESCRIPTION' | 'PRICE' | null;
    }
  }
}

export declare namespace Ads {
  export {
    type AdRetrieveResponse as AdRetrieveResponse,
    type AdUpdateResponse as AdUpdateResponse,
    type AdUpdateParams as AdUpdateParams,
  };
}
