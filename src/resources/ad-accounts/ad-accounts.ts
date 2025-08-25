// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AdGroupsAPI from './ad-groups';
import {
  AdGroupCreateParams,
  AdGroupCreateResponse,
  AdGroupListParams,
  AdGroupListResponse,
  AdGroups,
} from './ad-groups';
import * as AdsAPI from './ads';
import { AdCreateParams, AdCreateResponse, AdListParams, AdListResponse, Ads } from './ads';
import * as CampaignsAPI from './campaigns';
import {
  CampaignCreateParams,
  CampaignCreateResponse,
  CampaignListParams,
  CampaignListResponse,
  Campaigns,
} from './campaigns';
import * as CustomAudiencesAPI from './custom-audiences';
import {
  CustomAudienceCreateParams,
  CustomAudienceCreateResponse,
  CustomAudienceListParams,
  CustomAudienceListResponse,
  CustomAudiences,
} from './custom-audiences';
import * as LeadGenFormsAPI from './lead-gen-forms';
import {
  LeadGenFormCreateParams,
  LeadGenFormCreateResponse,
  LeadGenFormListParams,
  LeadGenFormListResponse,
  LeadGenForms,
} from './lead-gen-forms';
import * as SavedAudiencesAPI from './saved-audiences';
import {
  SavedAudienceCreateParams,
  SavedAudienceCreateResponse,
  SavedAudienceListParams,
  SavedAudienceListResponse,
  SavedAudiences,
} from './saved-audiences';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AdAccounts extends APIResource {
  adGroups: AdGroupsAPI.AdGroups = new AdGroupsAPI.AdGroups(this._client);
  ads: AdsAPI.Ads = new AdsAPI.Ads(this._client);
  campaigns: CampaignsAPI.Campaigns = new CampaignsAPI.Campaigns(this._client);
  customAudiences: CustomAudiencesAPI.CustomAudiences = new CustomAudiencesAPI.CustomAudiences(this._client);
  leadGenForms: LeadGenFormsAPI.LeadGenForms = new LeadGenFormsAPI.LeadGenForms(this._client);
  savedAudiences: SavedAudiencesAPI.SavedAudiences = new SavedAudiencesAPI.SavedAudiences(this._client);

  /**
   * Get ad account by id.<h2>Rate Limit</h2>
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
  retrieve(adAccountID: string, options?: RequestOptions): APIPromise<AdAccountRetrieveResponse> {
    return this._client.get(path`/ad_accounts/${adAccountID}`, options);
  }

  /**
   * Update an ad account.<h2>Rate Limit</h2>
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
    adAccountID: string,
    body: AdAccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AdAccountUpdateResponse> {
    return this._client.patch(path`/ad_accounts/${adAccountID}`, { body, ...options });
  }

  /**
   * Generate a metrics report for up to three `breakdowns` based on the `fields` you
   * provide. Reports provide detailed insights and analytics on ad performance,
   * audience engagement, and other relevant metrics.
   *
   * ## Things to know
   *
   * - **Breakdowns —** Up to 3 breakdowns (4 with `country` and `region`). We
   *   recommend including `ad_id` in and using joins to
   *   [`GET Ad`](https://ads-api.reddit.com/docs/v3/operations/Get%20Ad) to retrieve
   *   ad group and campaign IDs.
   *
   * - **Monetary value conversions —** Some values are converted. To return the
   *   value:
   *
   *   > **Note:** The asterisk (`*`) is used to represent any characters. For
   *   > example, `CONVERSION*TOTAL_VALUE` matches any parameters that start with
   *   > `CONVERSION` and end with `TOTAL_VALUE`.
   *
   * - **Divide by 100 —** `CONVERSION*TOTAL_VALUE`
   *
   * - **Divide by 1 million
   *   —**` SPEND, CPC, CPV, ECPM, APP_INSTALL*ECPA, APP_INSTALL_SKAN*, APP_INSTALL*REVENUE, CONVERSION*ECPA`
   *
   * * **Time zones —** The API defaults to Coordinated Universal Time (UTC). Change
   *   the time zone by
   *   [adding adaptive time zone parameters](https://ads-api.reddit.com/docs/v3/#add-adaptive-time-zone-parameters).
   *
   * * **Conversion data —** Based on your ad account's
   *   [attribution window](https://business.reddithelp.com/s/article/Web-Attribution-Overview).
   *   Update your window with
   *   [`FETCH Update Ad Account`](https://ads-api.reddit.com/docs/v3/operations/Update%20Ad%20Account)
   *   or in the
   *   [Ads Manager](https://ads.reddit.com/events-manager/attribution-settings).
   *
   * * **Asset names —** Retrieve the name using its ID:
   *
   *   - [`Get Campaign`](https://ads-api.reddit.com/docs/v3/operations/Get%20Campaign)
   *
   *   - [`Get Ad Group`](https://ads-api.reddit.com/docs/v3/operations/Get%20Ad%20Group)
   *
   *   - [`Get Ad`](https://ads-api.reddit.com/docs/v3/operations/Get%20Ad)
   *
   * * **Data stability —** Metrics may take up to 6 hours to stabilize. Conversion
   *   data continues updating as events occur.
   *
   * * **Data availability —** Delivery data goes back by 24 months. Reach and
   *   frequency data start June 2024.
   *
   * Refer to our parameter descriptions or
   * [event metadata reporting metrics](https://business.reddithelp.com/s/article/about-event-metadata#event-metadata-reporting-metricsa-idevent-metadata-reporting-metricsa)
   * for more details.
   *
   * <h2>Rate Limit</h2>
   *   <div><a href="/ratelimits/Reporting">See the rate limits for <strong>Reporting</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-reporting</span></div>
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
   *                                         <li>Quota: 60 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
   */
  generateReport(
    adAccountID: string,
    params: AdAccountGenerateReportParams,
    options?: RequestOptions,
  ): APIPromise<AdAccountGenerateReportResponse> {
    const { page, ...body } = params;
    return this._client.post(path`/ad_accounts/${adAccountID}/reports`, {
      query: { page },
      body,
      ...options,
    });
  }

  /**
   * Gets a changelog history for an ad account.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Business Manager">See the rate limits for <strong>Business Manager</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-business-manager</span></div>
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
   *                                         <li>Quota: 100 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
   */
  getHistory(
    adAccountID: string,
    params: AdAccountGetHistoryParams,
    options?: RequestOptions,
  ): APIPromise<AdAccountGetHistoryResponse> {
    const { page, ...body } = params;
    return this._client.post(path`/ad_accounts/${adAccountID}/history`, {
      query: { page },
      body,
      ...options,
    });
  }

  /**
   * List funding instruments by ad account.
   *
   * <h2>Rate Limit</h2>
   *   <div><a href="/ratelimits/Billing">See the rate limits for <strong>Billing</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-funding-instruments</span></div>
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
  listFundingInstruments(
    adAccountID: string,
    query: AdAccountListFundingInstrumentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdAccountListFundingInstrumentsResponse> {
    return this._client.get(path`/ad_accounts/${adAccountID}/funding_instruments`, { query, ...options });
  }

  /**
   * List pixels by ad account.<h2>Rate Limit</h2>
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
  listPixels(
    adAccountID: string,
    query: AdAccountListPixelsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdAccountListPixelsResponse> {
    return this._client.get(path`/ad_accounts/${adAccountID}/pixels`, { query, ...options });
  }

  /**
   * List profiles by ad account.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Business Manager">See the rate limits for <strong>Business Manager</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-business-manager</span></div>
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
   *                                         <li>Quota: 100 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
   */
  listProfiles(
    adAccountID: string,
    query: AdAccountListProfilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdAccountListProfilesResponse> {
    return this._client.get(path`/ad_accounts/${adAccountID}/profiles`, { query, ...options });
  }
}

export interface AdAccountRetrieveResponse {
  data: AdAccountRetrieveResponse.Data;
}

export namespace AdAccountRetrieveResponse {
  export interface Data {
    /**
     * The ID of the ad account.
     */
    id?: string;

    /**
     * Describes an employee set state for the account.
     */
    admin_approval?:
      | 'ADMIN'
      | 'BANNED'
      | 'NEEDS_ID_VERIFICATION'
      | 'PENDING'
      | 'SUSPENDED'
      | 'SUSPICIOUS'
      | 'TRUSTED'
      | 'VALID';

    /**
     * The attribution type. Only valid for CPA bid types. Also configures the
     * attribution type to query when calculating ECPA fields.
     */
    attribution_type?: 'ALL_CONVERSION' | 'CLICK_THROUGH_CONVERSION' | 'VIEW_THROUGH_CONVERSION';

    /**
     * The unique identifier of a business.
     */
    business_id?: Data.BusinessID;

    /**
     * Configures the window to use when querying reporting for click attributions.
     */
    click_attribution_window?: 'DAY' | 'MONTH' | 'WEEK';

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

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
     * Account level excluded communities.
     */
    excluded_communities?: Array<string> | null;

    /**
     * Account level excluded keywords.
     */
    excluded_keywords?: Array<string> | null;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The ad account name.
     */
    name?: string;

    /**
     * A list of pixel partners allowed by the advertiser.
     */
    pixel_partner_preferences?: Array<'DV' | 'IAS' | 'MODE'> | null;

    /**
     * The ID of the primary contact member.
     */
    primary_contact_member_id?: string;

    /**
     * The type of spend cap applied to the ad account.
     */
    spend_cap_type?: 'LIFETIME' | null;

    /**
     * The reason why this ad account was suspended.
     */
    suspension_reason?: 'ADVERTISING_POLICY' | 'BEHAVIOR' | 'FRAUD' | 'OTHER' | 'KYC_CHECK_FAILED' | null;

    time_zone_id?:
      | 'Africa/Abidjan'
      | 'Africa/Accra'
      | 'Africa/Addis_Ababa'
      | 'Africa/Algiers'
      | 'Africa/Asmara'
      | 'Africa/Asmera'
      | 'Africa/Bamako'
      | 'Africa/Bangui'
      | 'Africa/Banjul'
      | 'Africa/Bissau'
      | 'Africa/Blantyre'
      | 'Africa/Brazzaville'
      | 'Africa/Bujumbura'
      | 'Africa/Cairo'
      | 'Africa/Casablanca'
      | 'Africa/Ceuta'
      | 'Africa/Conakry'
      | 'Africa/Dakar'
      | 'Africa/Dar_es_Salaam'
      | 'Africa/Djibouti'
      | 'Africa/Douala'
      | 'Africa/El_Aaiun'
      | 'Africa/Freetown'
      | 'Africa/Gaborone'
      | 'Africa/Harare'
      | 'Africa/Johannesburg'
      | 'Africa/Juba'
      | 'Africa/Kampala'
      | 'Africa/Khartoum'
      | 'Africa/Kigali'
      | 'Africa/Kinshasa'
      | 'Africa/Lagos'
      | 'Africa/Libreville'
      | 'Africa/Lome'
      | 'Africa/Luanda'
      | 'Africa/Lubumbashi'
      | 'Africa/Lusaka'
      | 'Africa/Malabo'
      | 'Africa/Maputo'
      | 'Africa/Maseru'
      | 'Africa/Mbabane'
      | 'Africa/Mogadishu'
      | 'Africa/Monrovia'
      | 'Africa/Nairobi'
      | 'Africa/Ndjamena'
      | 'Africa/Niamey'
      | 'Africa/Nouakchott'
      | 'Africa/Ouagadougou'
      | 'Africa/Porto-Novo'
      | 'Africa/Sao_Tome'
      | 'Africa/Timbuktu'
      | 'Africa/Tripoli'
      | 'Africa/Tunis'
      | 'Africa/Windhoek'
      | 'America/Adak'
      | 'America/Anchorage'
      | 'America/Anguilla'
      | 'America/Antigua'
      | 'America/Araguaina'
      | 'America/Argentina/Buenos_Aires'
      | 'America/Argentina/Catamarca'
      | 'America/Argentina/ComodRivadavia'
      | 'America/Argentina/Cordoba'
      | 'America/Argentina/Jujuy'
      | 'America/Argentina/La_Rioja'
      | 'America/Argentina/Mendoza'
      | 'America/Argentina/Rio_Gallegos'
      | 'America/Argentina/Salta'
      | 'America/Argentina/San_Juan'
      | 'America/Argentina/San_Luis'
      | 'America/Argentina/Tucuman'
      | 'America/Argentina/Ushuaia'
      | 'America/Aruba'
      | 'America/Asuncion'
      | 'America/Atikokan'
      | 'America/Atka'
      | 'America/Bahia'
      | 'America/Bahia_Banderas'
      | 'America/Barbados'
      | 'America/Belem'
      | 'America/Belize'
      | 'America/Blanc-Sablon'
      | 'America/Boa_Vista'
      | 'America/Bogota'
      | 'America/Boise'
      | 'America/Buenos_Aires'
      | 'America/Cambridge_Bay'
      | 'America/Campo_Grande'
      | 'America/Cancun'
      | 'America/Caracas'
      | 'America/Catamarca'
      | 'America/Cayenne'
      | 'America/Cayman'
      | 'America/Chicago'
      | 'America/Chihuahua'
      | 'America/Ciudad_Juarez'
      | 'America/Coral_Harbour'
      | 'America/Cordoba'
      | 'America/Costa_Rica'
      | 'America/Creston'
      | 'America/Cuiaba'
      | 'America/Curacao'
      | 'America/Danmarkshavn'
      | 'America/Dawson'
      | 'America/Dawson_Creek'
      | 'America/Denver'
      | 'America/Detroit'
      | 'America/Dominica'
      | 'America/Edmonton'
      | 'America/Eirunepe'
      | 'America/El_Salvador'
      | 'America/Ensenada'
      | 'America/Fort_Nelson'
      | 'America/Fort_Wayne'
      | 'America/Fortaleza'
      | 'America/Glace_Bay'
      | 'America/Godthab'
      | 'America/Goose_Bay'
      | 'America/Grand_Turk'
      | 'America/Grenada'
      | 'America/Guadeloupe'
      | 'America/Guatemala'
      | 'America/Guayaquil'
      | 'America/Guyana'
      | 'America/Halifax'
      | 'America/Havana'
      | 'America/Hermosillo'
      | 'America/Indiana/Indianapolis'
      | 'America/Indiana/Knox'
      | 'America/Indiana/Marengo'
      | 'America/Indiana/Petersburg'
      | 'America/Indiana/Tell_City'
      | 'America/Indiana/Vevay'
      | 'America/Indiana/Vincennes'
      | 'America/Indiana/Winamac'
      | 'America/Indianapolis'
      | 'America/Inuvik'
      | 'America/Iqaluit'
      | 'America/Jamaica'
      | 'America/Jujuy'
      | 'America/Juneau'
      | 'America/Kentucky/Louisville'
      | 'America/Kentucky/Monticello'
      | 'America/Knox_IN'
      | 'America/Kralendijk'
      | 'America/La_Paz'
      | 'America/Lima'
      | 'America/Los_Angeles'
      | 'America/Louisville'
      | 'America/Lower_Princes'
      | 'America/Maceio'
      | 'America/Managua'
      | 'America/Manaus'
      | 'America/Marigot'
      | 'America/Martinique'
      | 'America/Matamoros'
      | 'America/Mazatlan'
      | 'America/Mendoza'
      | 'America/Menominee'
      | 'America/Merida'
      | 'America/Metlakatla'
      | 'America/Mexico_City'
      | 'America/Miquelon'
      | 'America/Moncton'
      | 'America/Monterrey'
      | 'America/Montevideo'
      | 'America/Montreal'
      | 'America/Montserrat'
      | 'America/Nassau'
      | 'America/New_York'
      | 'America/Nipigon'
      | 'America/Nome'
      | 'America/Noronha'
      | 'America/North_Dakota/Beulah'
      | 'America/North_Dakota/Center'
      | 'America/North_Dakota/New_Salem'
      | 'America/Nuuk'
      | 'America/Ojinaga'
      | 'America/Panama'
      | 'America/Pangnirtung'
      | 'America/Paramaribo'
      | 'America/Phoenix'
      | 'America/Port-au-Prince'
      | 'America/Port_of_Spain'
      | 'America/Porto_Acre'
      | 'America/Porto_Velho'
      | 'America/Puerto_Rico'
      | 'America/Punta_Arenas'
      | 'America/Rainy_River'
      | 'America/Rankin_Inlet'
      | 'America/Recife'
      | 'America/Regina'
      | 'America/Resolute'
      | 'America/Rio_Branco'
      | 'America/Rosario'
      | 'America/Santa_Isabel'
      | 'America/Santarem'
      | 'America/Santiago'
      | 'America/Santo_Domingo'
      | 'America/Sao_Paulo'
      | 'America/Scoresbysund'
      | 'America/Shiprock'
      | 'America/Sitka'
      | 'America/St_Barthelemy'
      | 'America/St_Johns'
      | 'America/St_Kitts'
      | 'America/St_Lucia'
      | 'America/St_Thomas'
      | 'America/St_Vincent'
      | 'America/Swift_Current'
      | 'America/Tegucigalpa'
      | 'America/Thule'
      | 'America/Thunder_Bay'
      | 'America/Tijuana'
      | 'America/Toronto'
      | 'America/Tortola'
      | 'America/Vancouver'
      | 'America/Virgin'
      | 'America/Whitehorse'
      | 'America/Winnipeg'
      | 'America/Yakutat'
      | 'America/Yellowknife'
      | 'Antarctica/Casey'
      | 'Antarctica/Davis'
      | 'Antarctica/DumontDUrville'
      | 'Antarctica/Macquarie'
      | 'Antarctica/Mawson'
      | 'Antarctica/McMurdo'
      | 'Antarctica/Palmer'
      | 'Antarctica/Rothera'
      | 'Antarctica/South_Pole'
      | 'Antarctica/Syowa'
      | 'Antarctica/Troll'
      | 'Antarctica/Vostok'
      | 'Arctic/Longyearbyen'
      | 'Asia/Aden'
      | 'Asia/Almaty'
      | 'Asia/Amman'
      | 'Asia/Anadyr'
      | 'Asia/Aqtau'
      | 'Asia/Aqtobe'
      | 'Asia/Ashgabat'
      | 'Asia/Ashkhabad'
      | 'Asia/Atyrau'
      | 'Asia/Baghdad'
      | 'Asia/Bahrain'
      | 'Asia/Baku'
      | 'Asia/Bangkok'
      | 'Asia/Barnaul'
      | 'Asia/Beirut'
      | 'Asia/Bishkek'
      | 'Asia/Brunei'
      | 'Asia/Calcutta'
      | 'Asia/Chita'
      | 'Asia/Choibalsan'
      | 'Asia/Chongqing'
      | 'Asia/Chungking'
      | 'Asia/Colombo'
      | 'Asia/Dacca'
      | 'Asia/Damascus'
      | 'Asia/Dhaka'
      | 'Asia/Dili'
      | 'Asia/Dubai'
      | 'Asia/Dushanbe'
      | 'Asia/Famagusta'
      | 'Asia/Gaza'
      | 'Asia/Harbin'
      | 'Asia/Hebron'
      | 'Asia/Ho_Chi_Minh'
      | 'Asia/Hong_Kong'
      | 'Asia/Hovd'
      | 'Asia/Irkutsk'
      | 'Asia/Istanbul'
      | 'Asia/Jakarta'
      | 'Asia/Jayapura'
      | 'Asia/Jerusalem'
      | 'Asia/Kabul'
      | 'Asia/Kamchatka'
      | 'Asia/Karachi'
      | 'Asia/Kashgar'
      | 'Asia/Kathmandu'
      | 'Asia/Katmandu'
      | 'Asia/Khandyga'
      | 'Asia/Kolkata'
      | 'Asia/Krasnoyarsk'
      | 'Asia/Kuala_Lumpur'
      | 'Asia/Kuching'
      | 'Asia/Kuwait'
      | 'Asia/Macao'
      | 'Asia/Macau'
      | 'Asia/Magadan'
      | 'Asia/Makassar'
      | 'Asia/Manila'
      | 'Asia/Muscat'
      | 'Asia/Nicosia'
      | 'Asia/Novokuznetsk'
      | 'Asia/Novosibirsk'
      | 'Asia/Omsk'
      | 'Asia/Oral'
      | 'Asia/Phnom_Penh'
      | 'Asia/Pontianak'
      | 'Asia/Pyongyang'
      | 'Asia/Qatar'
      | 'Asia/Qostanay'
      | 'Asia/Qyzylorda'
      | 'Asia/Rangoon'
      | 'Asia/Riyadh'
      | 'Asia/Saigon'
      | 'Asia/Sakhalin'
      | 'Asia/Samarkand'
      | 'Asia/Seoul'
      | 'Asia/Shanghai'
      | 'Asia/Singapore'
      | 'Asia/Srednekolymsk'
      | 'Asia/Taipei'
      | 'Asia/Tashkent'
      | 'Asia/Tbilisi'
      | 'Asia/Tehran'
      | 'Asia/Tel_Aviv'
      | 'Asia/Thimbu'
      | 'Asia/Thimphu'
      | 'Asia/Tokyo'
      | 'Asia/Tomsk'
      | 'Asia/Ujung_Pandang'
      | 'Asia/Ulaanbaatar'
      | 'Asia/Ulan_Bator'
      | 'Asia/Urumqi'
      | 'Asia/Ust-Nera'
      | 'Asia/Vientiane'
      | 'Asia/Vladivostok'
      | 'Asia/Yakutsk'
      | 'Asia/Yangon'
      | 'Asia/Yekaterinburg'
      | 'Asia/Yerevan'
      | 'Atlantic/Azores'
      | 'Atlantic/Bermuda'
      | 'Atlantic/Canary'
      | 'Atlantic/Cape_Verde'
      | 'Atlantic/Faeroe'
      | 'Atlantic/Faroe'
      | 'Atlantic/Jan_Mayen'
      | 'Atlantic/Madeira'
      | 'Atlantic/Reykjavik'
      | 'Atlantic/South_Georgia'
      | 'Atlantic/St_Helena'
      | 'Atlantic/Stanley'
      | 'Australia/ACT'
      | 'Australia/Adelaide'
      | 'Australia/Brisbane'
      | 'Australia/Broken_Hill'
      | 'Australia/Canberra'
      | 'Australia/Currie'
      | 'Australia/Darwin'
      | 'Australia/Eucla'
      | 'Australia/Hobart'
      | 'Australia/LHI'
      | 'Australia/Lindeman'
      | 'Australia/Lord_Howe'
      | 'Australia/Melbourne'
      | 'Australia/NSW'
      | 'Australia/North'
      | 'Australia/Perth'
      | 'Australia/Queensland'
      | 'Australia/South'
      | 'Australia/Sydney'
      | 'Australia/Tasmania'
      | 'Australia/Victoria'
      | 'Australia/West'
      | 'Australia/Yancowinna'
      | 'Brazil/Acre'
      | 'Brazil/DeNoronha'
      | 'Brazil/East'
      | 'Brazil/West'
      | 'CET'
      | 'CST6CDT'
      | 'Canada/Atlantic'
      | 'Canada/Central'
      | 'Canada/Eastern'
      | 'Canada/Mountain'
      | 'Canada/Newfoundland'
      | 'Canada/Pacific'
      | 'Canada/Saskatchewan'
      | 'Canada/Yukon'
      | 'Chile/Continental'
      | 'Chile/EasterIsland'
      | 'Cuba'
      | 'EET'
      | 'EST'
      | 'EST5EDT'
      | 'Egypt'
      | 'Eire'
      | 'Etc/GMT'
      | 'Etc/GMT+0'
      | 'Etc/GMT+1'
      | 'Etc/GMT+10'
      | 'Etc/GMT+11'
      | 'Etc/GMT+12'
      | 'Etc/GMT+2'
      | 'Etc/GMT+3'
      | 'Etc/GMT+4'
      | 'Etc/GMT+5'
      | 'Etc/GMT+6'
      | 'Etc/GMT+7'
      | 'Etc/GMT+8'
      | 'Etc/GMT+9'
      | 'Etc/GMT-0'
      | 'Etc/GMT-1'
      | 'Etc/GMT-10'
      | 'Etc/GMT-11'
      | 'Etc/GMT-12'
      | 'Etc/GMT-13'
      | 'Etc/GMT-14'
      | 'Etc/GMT-2'
      | 'Etc/GMT-3'
      | 'Etc/GMT-4'
      | 'Etc/GMT-5'
      | 'Etc/GMT-6'
      | 'Etc/GMT-7'
      | 'Etc/GMT-8'
      | 'Etc/GMT-9'
      | 'Etc/GMT0'
      | 'Etc/Greenwich'
      | 'Etc/UCT'
      | 'Etc/UTC'
      | 'Etc/Universal'
      | 'Etc/Zulu'
      | 'Europe/Amsterdam'
      | 'Europe/Andorra'
      | 'Europe/Astrakhan'
      | 'Europe/Athens'
      | 'Europe/Belfast'
      | 'Europe/Belgrade'
      | 'Europe/Berlin'
      | 'Europe/Bratislava'
      | 'Europe/Brussels'
      | 'Europe/Bucharest'
      | 'Europe/Budapest'
      | 'Europe/Busingen'
      | 'Europe/Chisinau'
      | 'Europe/Copenhagen'
      | 'Europe/Dublin'
      | 'Europe/Gibraltar'
      | 'Europe/Guernsey'
      | 'Europe/Helsinki'
      | 'Europe/Isle_of_Man'
      | 'Europe/Istanbul'
      | 'Europe/Jersey'
      | 'Europe/Kaliningrad'
      | 'Europe/Kiev'
      | 'Europe/Kirov'
      | 'Europe/Kyiv'
      | 'Europe/Lisbon'
      | 'Europe/Ljubljana'
      | 'Europe/London'
      | 'Europe/Luxembourg'
      | 'Europe/Madrid'
      | 'Europe/Malta'
      | 'Europe/Mariehamn'
      | 'Europe/Minsk'
      | 'Europe/Monaco'
      | 'Europe/Moscow'
      | 'Europe/Nicosia'
      | 'Europe/Oslo'
      | 'Europe/Paris'
      | 'Europe/Podgorica'
      | 'Europe/Prague'
      | 'Europe/Riga'
      | 'Europe/Rome'
      | 'Europe/Samara'
      | 'Europe/San_Marino'
      | 'Europe/Sarajevo'
      | 'Europe/Saratov'
      | 'Europe/Simferopol'
      | 'Europe/Skopje'
      | 'Europe/Sofia'
      | 'Europe/Stockholm'
      | 'Europe/Tallinn'
      | 'Europe/Tirane'
      | 'Europe/Tiraspol'
      | 'Europe/Ulyanovsk'
      | 'Europe/Uzhgorod'
      | 'Europe/Vaduz'
      | 'Europe/Vatican'
      | 'Europe/Vienna'
      | 'Europe/Vilnius'
      | 'Europe/Volgograd'
      | 'Europe/Warsaw'
      | 'Europe/Zagreb'
      | 'Europe/Zaporozhye'
      | 'Europe/Zurich'
      | 'GB'
      | 'GB-Eire'
      | 'GMT'
      | 'GMT+0'
      | 'GMT-0'
      | 'GMT0'
      | 'Greenwich'
      | 'HST'
      | 'Hongkong'
      | 'Iceland'
      | 'Indian/Antananarivo'
      | 'Indian/Chagos'
      | 'Indian/Christmas'
      | 'Indian/Cocos'
      | 'Indian/Comoro'
      | 'Indian/Kerguelen'
      | 'Indian/Mahe'
      | 'Indian/Maldives'
      | 'Indian/Mauritius'
      | 'Indian/Mayotte'
      | 'Indian/Reunion'
      | 'Iran'
      | 'Israel'
      | 'Jamaica'
      | 'Japan'
      | 'Kwajalein'
      | 'Libya'
      | 'MET'
      | 'MST'
      | 'MST7MDT'
      | 'Mexico/BajaNorte'
      | 'Mexico/BajaSur'
      | 'Mexico/General'
      | 'NZ'
      | 'NZ-CHAT'
      | 'Navajo'
      | 'PRC'
      | 'PST8PDT'
      | 'Pacific/Apia'
      | 'Pacific/Auckland'
      | 'Pacific/Bougainville'
      | 'Pacific/Chatham'
      | 'Pacific/Chuuk'
      | 'Pacific/Easter'
      | 'Pacific/Efate'
      | 'Pacific/Enderbury'
      | 'Pacific/Fakaofo'
      | 'Pacific/Fiji'
      | 'Pacific/Funafuti'
      | 'Pacific/Galapagos'
      | 'Pacific/Gambier'
      | 'Pacific/Guadalcanal'
      | 'Pacific/Guam'
      | 'Pacific/Honolulu'
      | 'Pacific/Johnston'
      | 'Pacific/Kanton'
      | 'Pacific/Kiritimati'
      | 'Pacific/Kosrae'
      | 'Pacific/Kwajalein'
      | 'Pacific/Majuro'
      | 'Pacific/Marquesas'
      | 'Pacific/Midway'
      | 'Pacific/Nauru'
      | 'Pacific/Niue'
      | 'Pacific/Norfolk'
      | 'Pacific/Noumea'
      | 'Pacific/Pago_Pago'
      | 'Pacific/Palau'
      | 'Pacific/Pitcairn'
      | 'Pacific/Pohnpei'
      | 'Pacific/Ponape'
      | 'Pacific/Port_Moresby'
      | 'Pacific/Rarotonga'
      | 'Pacific/Saipan'
      | 'Pacific/Samoa'
      | 'Pacific/Tahiti'
      | 'Pacific/Tarawa'
      | 'Pacific/Tongatapu'
      | 'Pacific/Truk'
      | 'Pacific/Wake'
      | 'Pacific/Wallis'
      | 'Pacific/Yap'
      | 'Poland'
      | 'Portugal'
      | 'ROC'
      | 'ROK'
      | 'Singapore'
      | 'Turkey'
      | 'UCT'
      | 'US/Alaska'
      | 'US/Aleutian'
      | 'US/Arizona'
      | 'US/Central'
      | 'US/East-Indiana'
      | 'US/Eastern'
      | 'US/Hawaii'
      | 'US/Indiana-Starke'
      | 'US/Michigan'
      | 'US/Mountain'
      | 'US/Pacific'
      | 'US/Samoa'
      | 'UTC'
      | 'Universal'
      | 'W-SU'
      | 'WET'
      | 'Zulu'
      | null;

    /**
     * The type of the ad account.
     */
    type?: 'MANAGED' | 'SELF_SERVE';

    /**
     * Configures the window to use when querying reporting for view attributions.
     */
    view_attribution_window?: 'DAY' | 'MONTH' | 'WEEK';
  }

  export namespace Data {
    /**
     * The unique identifier of a business.
     */
    export interface BusinessID {}
  }
}

export interface AdAccountUpdateResponse {
  data: AdAccountUpdateResponse.Data;
}

export namespace AdAccountUpdateResponse {
  export interface Data {
    /**
     * The ID of the ad account.
     */
    id?: string;

    /**
     * Describes an employee set state for the account.
     */
    admin_approval?:
      | 'ADMIN'
      | 'BANNED'
      | 'NEEDS_ID_VERIFICATION'
      | 'PENDING'
      | 'SUSPENDED'
      | 'SUSPICIOUS'
      | 'TRUSTED'
      | 'VALID';

    /**
     * The attribution type. Only valid for CPA bid types. Also configures the
     * attribution type to query when calculating ECPA fields.
     */
    attribution_type?: 'ALL_CONVERSION' | 'CLICK_THROUGH_CONVERSION' | 'VIEW_THROUGH_CONVERSION';

    /**
     * The unique identifier of a business.
     */
    business_id?: Data.BusinessID;

    /**
     * Configures the window to use when querying reporting for click attributions.
     */
    click_attribution_window?: 'DAY' | 'MONTH' | 'WEEK';

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

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
     * Account level excluded communities.
     */
    excluded_communities?: Array<string> | null;

    /**
     * Account level excluded keywords.
     */
    excluded_keywords?: Array<string> | null;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The ad account name.
     */
    name?: string;

    /**
     * A list of pixel partners allowed by the advertiser.
     */
    pixel_partner_preferences?: Array<'DV' | 'IAS' | 'MODE'> | null;

    /**
     * The ID of the primary contact member.
     */
    primary_contact_member_id?: string;

    /**
     * The type of spend cap applied to the ad account.
     */
    spend_cap_type?: 'LIFETIME' | null;

    /**
     * The reason why this ad account was suspended.
     */
    suspension_reason?: 'ADVERTISING_POLICY' | 'BEHAVIOR' | 'FRAUD' | 'OTHER' | 'KYC_CHECK_FAILED' | null;

    time_zone_id?:
      | 'Africa/Abidjan'
      | 'Africa/Accra'
      | 'Africa/Addis_Ababa'
      | 'Africa/Algiers'
      | 'Africa/Asmara'
      | 'Africa/Asmera'
      | 'Africa/Bamako'
      | 'Africa/Bangui'
      | 'Africa/Banjul'
      | 'Africa/Bissau'
      | 'Africa/Blantyre'
      | 'Africa/Brazzaville'
      | 'Africa/Bujumbura'
      | 'Africa/Cairo'
      | 'Africa/Casablanca'
      | 'Africa/Ceuta'
      | 'Africa/Conakry'
      | 'Africa/Dakar'
      | 'Africa/Dar_es_Salaam'
      | 'Africa/Djibouti'
      | 'Africa/Douala'
      | 'Africa/El_Aaiun'
      | 'Africa/Freetown'
      | 'Africa/Gaborone'
      | 'Africa/Harare'
      | 'Africa/Johannesburg'
      | 'Africa/Juba'
      | 'Africa/Kampala'
      | 'Africa/Khartoum'
      | 'Africa/Kigali'
      | 'Africa/Kinshasa'
      | 'Africa/Lagos'
      | 'Africa/Libreville'
      | 'Africa/Lome'
      | 'Africa/Luanda'
      | 'Africa/Lubumbashi'
      | 'Africa/Lusaka'
      | 'Africa/Malabo'
      | 'Africa/Maputo'
      | 'Africa/Maseru'
      | 'Africa/Mbabane'
      | 'Africa/Mogadishu'
      | 'Africa/Monrovia'
      | 'Africa/Nairobi'
      | 'Africa/Ndjamena'
      | 'Africa/Niamey'
      | 'Africa/Nouakchott'
      | 'Africa/Ouagadougou'
      | 'Africa/Porto-Novo'
      | 'Africa/Sao_Tome'
      | 'Africa/Timbuktu'
      | 'Africa/Tripoli'
      | 'Africa/Tunis'
      | 'Africa/Windhoek'
      | 'America/Adak'
      | 'America/Anchorage'
      | 'America/Anguilla'
      | 'America/Antigua'
      | 'America/Araguaina'
      | 'America/Argentina/Buenos_Aires'
      | 'America/Argentina/Catamarca'
      | 'America/Argentina/ComodRivadavia'
      | 'America/Argentina/Cordoba'
      | 'America/Argentina/Jujuy'
      | 'America/Argentina/La_Rioja'
      | 'America/Argentina/Mendoza'
      | 'America/Argentina/Rio_Gallegos'
      | 'America/Argentina/Salta'
      | 'America/Argentina/San_Juan'
      | 'America/Argentina/San_Luis'
      | 'America/Argentina/Tucuman'
      | 'America/Argentina/Ushuaia'
      | 'America/Aruba'
      | 'America/Asuncion'
      | 'America/Atikokan'
      | 'America/Atka'
      | 'America/Bahia'
      | 'America/Bahia_Banderas'
      | 'America/Barbados'
      | 'America/Belem'
      | 'America/Belize'
      | 'America/Blanc-Sablon'
      | 'America/Boa_Vista'
      | 'America/Bogota'
      | 'America/Boise'
      | 'America/Buenos_Aires'
      | 'America/Cambridge_Bay'
      | 'America/Campo_Grande'
      | 'America/Cancun'
      | 'America/Caracas'
      | 'America/Catamarca'
      | 'America/Cayenne'
      | 'America/Cayman'
      | 'America/Chicago'
      | 'America/Chihuahua'
      | 'America/Ciudad_Juarez'
      | 'America/Coral_Harbour'
      | 'America/Cordoba'
      | 'America/Costa_Rica'
      | 'America/Creston'
      | 'America/Cuiaba'
      | 'America/Curacao'
      | 'America/Danmarkshavn'
      | 'America/Dawson'
      | 'America/Dawson_Creek'
      | 'America/Denver'
      | 'America/Detroit'
      | 'America/Dominica'
      | 'America/Edmonton'
      | 'America/Eirunepe'
      | 'America/El_Salvador'
      | 'America/Ensenada'
      | 'America/Fort_Nelson'
      | 'America/Fort_Wayne'
      | 'America/Fortaleza'
      | 'America/Glace_Bay'
      | 'America/Godthab'
      | 'America/Goose_Bay'
      | 'America/Grand_Turk'
      | 'America/Grenada'
      | 'America/Guadeloupe'
      | 'America/Guatemala'
      | 'America/Guayaquil'
      | 'America/Guyana'
      | 'America/Halifax'
      | 'America/Havana'
      | 'America/Hermosillo'
      | 'America/Indiana/Indianapolis'
      | 'America/Indiana/Knox'
      | 'America/Indiana/Marengo'
      | 'America/Indiana/Petersburg'
      | 'America/Indiana/Tell_City'
      | 'America/Indiana/Vevay'
      | 'America/Indiana/Vincennes'
      | 'America/Indiana/Winamac'
      | 'America/Indianapolis'
      | 'America/Inuvik'
      | 'America/Iqaluit'
      | 'America/Jamaica'
      | 'America/Jujuy'
      | 'America/Juneau'
      | 'America/Kentucky/Louisville'
      | 'America/Kentucky/Monticello'
      | 'America/Knox_IN'
      | 'America/Kralendijk'
      | 'America/La_Paz'
      | 'America/Lima'
      | 'America/Los_Angeles'
      | 'America/Louisville'
      | 'America/Lower_Princes'
      | 'America/Maceio'
      | 'America/Managua'
      | 'America/Manaus'
      | 'America/Marigot'
      | 'America/Martinique'
      | 'America/Matamoros'
      | 'America/Mazatlan'
      | 'America/Mendoza'
      | 'America/Menominee'
      | 'America/Merida'
      | 'America/Metlakatla'
      | 'America/Mexico_City'
      | 'America/Miquelon'
      | 'America/Moncton'
      | 'America/Monterrey'
      | 'America/Montevideo'
      | 'America/Montreal'
      | 'America/Montserrat'
      | 'America/Nassau'
      | 'America/New_York'
      | 'America/Nipigon'
      | 'America/Nome'
      | 'America/Noronha'
      | 'America/North_Dakota/Beulah'
      | 'America/North_Dakota/Center'
      | 'America/North_Dakota/New_Salem'
      | 'America/Nuuk'
      | 'America/Ojinaga'
      | 'America/Panama'
      | 'America/Pangnirtung'
      | 'America/Paramaribo'
      | 'America/Phoenix'
      | 'America/Port-au-Prince'
      | 'America/Port_of_Spain'
      | 'America/Porto_Acre'
      | 'America/Porto_Velho'
      | 'America/Puerto_Rico'
      | 'America/Punta_Arenas'
      | 'America/Rainy_River'
      | 'America/Rankin_Inlet'
      | 'America/Recife'
      | 'America/Regina'
      | 'America/Resolute'
      | 'America/Rio_Branco'
      | 'America/Rosario'
      | 'America/Santa_Isabel'
      | 'America/Santarem'
      | 'America/Santiago'
      | 'America/Santo_Domingo'
      | 'America/Sao_Paulo'
      | 'America/Scoresbysund'
      | 'America/Shiprock'
      | 'America/Sitka'
      | 'America/St_Barthelemy'
      | 'America/St_Johns'
      | 'America/St_Kitts'
      | 'America/St_Lucia'
      | 'America/St_Thomas'
      | 'America/St_Vincent'
      | 'America/Swift_Current'
      | 'America/Tegucigalpa'
      | 'America/Thule'
      | 'America/Thunder_Bay'
      | 'America/Tijuana'
      | 'America/Toronto'
      | 'America/Tortola'
      | 'America/Vancouver'
      | 'America/Virgin'
      | 'America/Whitehorse'
      | 'America/Winnipeg'
      | 'America/Yakutat'
      | 'America/Yellowknife'
      | 'Antarctica/Casey'
      | 'Antarctica/Davis'
      | 'Antarctica/DumontDUrville'
      | 'Antarctica/Macquarie'
      | 'Antarctica/Mawson'
      | 'Antarctica/McMurdo'
      | 'Antarctica/Palmer'
      | 'Antarctica/Rothera'
      | 'Antarctica/South_Pole'
      | 'Antarctica/Syowa'
      | 'Antarctica/Troll'
      | 'Antarctica/Vostok'
      | 'Arctic/Longyearbyen'
      | 'Asia/Aden'
      | 'Asia/Almaty'
      | 'Asia/Amman'
      | 'Asia/Anadyr'
      | 'Asia/Aqtau'
      | 'Asia/Aqtobe'
      | 'Asia/Ashgabat'
      | 'Asia/Ashkhabad'
      | 'Asia/Atyrau'
      | 'Asia/Baghdad'
      | 'Asia/Bahrain'
      | 'Asia/Baku'
      | 'Asia/Bangkok'
      | 'Asia/Barnaul'
      | 'Asia/Beirut'
      | 'Asia/Bishkek'
      | 'Asia/Brunei'
      | 'Asia/Calcutta'
      | 'Asia/Chita'
      | 'Asia/Choibalsan'
      | 'Asia/Chongqing'
      | 'Asia/Chungking'
      | 'Asia/Colombo'
      | 'Asia/Dacca'
      | 'Asia/Damascus'
      | 'Asia/Dhaka'
      | 'Asia/Dili'
      | 'Asia/Dubai'
      | 'Asia/Dushanbe'
      | 'Asia/Famagusta'
      | 'Asia/Gaza'
      | 'Asia/Harbin'
      | 'Asia/Hebron'
      | 'Asia/Ho_Chi_Minh'
      | 'Asia/Hong_Kong'
      | 'Asia/Hovd'
      | 'Asia/Irkutsk'
      | 'Asia/Istanbul'
      | 'Asia/Jakarta'
      | 'Asia/Jayapura'
      | 'Asia/Jerusalem'
      | 'Asia/Kabul'
      | 'Asia/Kamchatka'
      | 'Asia/Karachi'
      | 'Asia/Kashgar'
      | 'Asia/Kathmandu'
      | 'Asia/Katmandu'
      | 'Asia/Khandyga'
      | 'Asia/Kolkata'
      | 'Asia/Krasnoyarsk'
      | 'Asia/Kuala_Lumpur'
      | 'Asia/Kuching'
      | 'Asia/Kuwait'
      | 'Asia/Macao'
      | 'Asia/Macau'
      | 'Asia/Magadan'
      | 'Asia/Makassar'
      | 'Asia/Manila'
      | 'Asia/Muscat'
      | 'Asia/Nicosia'
      | 'Asia/Novokuznetsk'
      | 'Asia/Novosibirsk'
      | 'Asia/Omsk'
      | 'Asia/Oral'
      | 'Asia/Phnom_Penh'
      | 'Asia/Pontianak'
      | 'Asia/Pyongyang'
      | 'Asia/Qatar'
      | 'Asia/Qostanay'
      | 'Asia/Qyzylorda'
      | 'Asia/Rangoon'
      | 'Asia/Riyadh'
      | 'Asia/Saigon'
      | 'Asia/Sakhalin'
      | 'Asia/Samarkand'
      | 'Asia/Seoul'
      | 'Asia/Shanghai'
      | 'Asia/Singapore'
      | 'Asia/Srednekolymsk'
      | 'Asia/Taipei'
      | 'Asia/Tashkent'
      | 'Asia/Tbilisi'
      | 'Asia/Tehran'
      | 'Asia/Tel_Aviv'
      | 'Asia/Thimbu'
      | 'Asia/Thimphu'
      | 'Asia/Tokyo'
      | 'Asia/Tomsk'
      | 'Asia/Ujung_Pandang'
      | 'Asia/Ulaanbaatar'
      | 'Asia/Ulan_Bator'
      | 'Asia/Urumqi'
      | 'Asia/Ust-Nera'
      | 'Asia/Vientiane'
      | 'Asia/Vladivostok'
      | 'Asia/Yakutsk'
      | 'Asia/Yangon'
      | 'Asia/Yekaterinburg'
      | 'Asia/Yerevan'
      | 'Atlantic/Azores'
      | 'Atlantic/Bermuda'
      | 'Atlantic/Canary'
      | 'Atlantic/Cape_Verde'
      | 'Atlantic/Faeroe'
      | 'Atlantic/Faroe'
      | 'Atlantic/Jan_Mayen'
      | 'Atlantic/Madeira'
      | 'Atlantic/Reykjavik'
      | 'Atlantic/South_Georgia'
      | 'Atlantic/St_Helena'
      | 'Atlantic/Stanley'
      | 'Australia/ACT'
      | 'Australia/Adelaide'
      | 'Australia/Brisbane'
      | 'Australia/Broken_Hill'
      | 'Australia/Canberra'
      | 'Australia/Currie'
      | 'Australia/Darwin'
      | 'Australia/Eucla'
      | 'Australia/Hobart'
      | 'Australia/LHI'
      | 'Australia/Lindeman'
      | 'Australia/Lord_Howe'
      | 'Australia/Melbourne'
      | 'Australia/NSW'
      | 'Australia/North'
      | 'Australia/Perth'
      | 'Australia/Queensland'
      | 'Australia/South'
      | 'Australia/Sydney'
      | 'Australia/Tasmania'
      | 'Australia/Victoria'
      | 'Australia/West'
      | 'Australia/Yancowinna'
      | 'Brazil/Acre'
      | 'Brazil/DeNoronha'
      | 'Brazil/East'
      | 'Brazil/West'
      | 'CET'
      | 'CST6CDT'
      | 'Canada/Atlantic'
      | 'Canada/Central'
      | 'Canada/Eastern'
      | 'Canada/Mountain'
      | 'Canada/Newfoundland'
      | 'Canada/Pacific'
      | 'Canada/Saskatchewan'
      | 'Canada/Yukon'
      | 'Chile/Continental'
      | 'Chile/EasterIsland'
      | 'Cuba'
      | 'EET'
      | 'EST'
      | 'EST5EDT'
      | 'Egypt'
      | 'Eire'
      | 'Etc/GMT'
      | 'Etc/GMT+0'
      | 'Etc/GMT+1'
      | 'Etc/GMT+10'
      | 'Etc/GMT+11'
      | 'Etc/GMT+12'
      | 'Etc/GMT+2'
      | 'Etc/GMT+3'
      | 'Etc/GMT+4'
      | 'Etc/GMT+5'
      | 'Etc/GMT+6'
      | 'Etc/GMT+7'
      | 'Etc/GMT+8'
      | 'Etc/GMT+9'
      | 'Etc/GMT-0'
      | 'Etc/GMT-1'
      | 'Etc/GMT-10'
      | 'Etc/GMT-11'
      | 'Etc/GMT-12'
      | 'Etc/GMT-13'
      | 'Etc/GMT-14'
      | 'Etc/GMT-2'
      | 'Etc/GMT-3'
      | 'Etc/GMT-4'
      | 'Etc/GMT-5'
      | 'Etc/GMT-6'
      | 'Etc/GMT-7'
      | 'Etc/GMT-8'
      | 'Etc/GMT-9'
      | 'Etc/GMT0'
      | 'Etc/Greenwich'
      | 'Etc/UCT'
      | 'Etc/UTC'
      | 'Etc/Universal'
      | 'Etc/Zulu'
      | 'Europe/Amsterdam'
      | 'Europe/Andorra'
      | 'Europe/Astrakhan'
      | 'Europe/Athens'
      | 'Europe/Belfast'
      | 'Europe/Belgrade'
      | 'Europe/Berlin'
      | 'Europe/Bratislava'
      | 'Europe/Brussels'
      | 'Europe/Bucharest'
      | 'Europe/Budapest'
      | 'Europe/Busingen'
      | 'Europe/Chisinau'
      | 'Europe/Copenhagen'
      | 'Europe/Dublin'
      | 'Europe/Gibraltar'
      | 'Europe/Guernsey'
      | 'Europe/Helsinki'
      | 'Europe/Isle_of_Man'
      | 'Europe/Istanbul'
      | 'Europe/Jersey'
      | 'Europe/Kaliningrad'
      | 'Europe/Kiev'
      | 'Europe/Kirov'
      | 'Europe/Kyiv'
      | 'Europe/Lisbon'
      | 'Europe/Ljubljana'
      | 'Europe/London'
      | 'Europe/Luxembourg'
      | 'Europe/Madrid'
      | 'Europe/Malta'
      | 'Europe/Mariehamn'
      | 'Europe/Minsk'
      | 'Europe/Monaco'
      | 'Europe/Moscow'
      | 'Europe/Nicosia'
      | 'Europe/Oslo'
      | 'Europe/Paris'
      | 'Europe/Podgorica'
      | 'Europe/Prague'
      | 'Europe/Riga'
      | 'Europe/Rome'
      | 'Europe/Samara'
      | 'Europe/San_Marino'
      | 'Europe/Sarajevo'
      | 'Europe/Saratov'
      | 'Europe/Simferopol'
      | 'Europe/Skopje'
      | 'Europe/Sofia'
      | 'Europe/Stockholm'
      | 'Europe/Tallinn'
      | 'Europe/Tirane'
      | 'Europe/Tiraspol'
      | 'Europe/Ulyanovsk'
      | 'Europe/Uzhgorod'
      | 'Europe/Vaduz'
      | 'Europe/Vatican'
      | 'Europe/Vienna'
      | 'Europe/Vilnius'
      | 'Europe/Volgograd'
      | 'Europe/Warsaw'
      | 'Europe/Zagreb'
      | 'Europe/Zaporozhye'
      | 'Europe/Zurich'
      | 'GB'
      | 'GB-Eire'
      | 'GMT'
      | 'GMT+0'
      | 'GMT-0'
      | 'GMT0'
      | 'Greenwich'
      | 'HST'
      | 'Hongkong'
      | 'Iceland'
      | 'Indian/Antananarivo'
      | 'Indian/Chagos'
      | 'Indian/Christmas'
      | 'Indian/Cocos'
      | 'Indian/Comoro'
      | 'Indian/Kerguelen'
      | 'Indian/Mahe'
      | 'Indian/Maldives'
      | 'Indian/Mauritius'
      | 'Indian/Mayotte'
      | 'Indian/Reunion'
      | 'Iran'
      | 'Israel'
      | 'Jamaica'
      | 'Japan'
      | 'Kwajalein'
      | 'Libya'
      | 'MET'
      | 'MST'
      | 'MST7MDT'
      | 'Mexico/BajaNorte'
      | 'Mexico/BajaSur'
      | 'Mexico/General'
      | 'NZ'
      | 'NZ-CHAT'
      | 'Navajo'
      | 'PRC'
      | 'PST8PDT'
      | 'Pacific/Apia'
      | 'Pacific/Auckland'
      | 'Pacific/Bougainville'
      | 'Pacific/Chatham'
      | 'Pacific/Chuuk'
      | 'Pacific/Easter'
      | 'Pacific/Efate'
      | 'Pacific/Enderbury'
      | 'Pacific/Fakaofo'
      | 'Pacific/Fiji'
      | 'Pacific/Funafuti'
      | 'Pacific/Galapagos'
      | 'Pacific/Gambier'
      | 'Pacific/Guadalcanal'
      | 'Pacific/Guam'
      | 'Pacific/Honolulu'
      | 'Pacific/Johnston'
      | 'Pacific/Kanton'
      | 'Pacific/Kiritimati'
      | 'Pacific/Kosrae'
      | 'Pacific/Kwajalein'
      | 'Pacific/Majuro'
      | 'Pacific/Marquesas'
      | 'Pacific/Midway'
      | 'Pacific/Nauru'
      | 'Pacific/Niue'
      | 'Pacific/Norfolk'
      | 'Pacific/Noumea'
      | 'Pacific/Pago_Pago'
      | 'Pacific/Palau'
      | 'Pacific/Pitcairn'
      | 'Pacific/Pohnpei'
      | 'Pacific/Ponape'
      | 'Pacific/Port_Moresby'
      | 'Pacific/Rarotonga'
      | 'Pacific/Saipan'
      | 'Pacific/Samoa'
      | 'Pacific/Tahiti'
      | 'Pacific/Tarawa'
      | 'Pacific/Tongatapu'
      | 'Pacific/Truk'
      | 'Pacific/Wake'
      | 'Pacific/Wallis'
      | 'Pacific/Yap'
      | 'Poland'
      | 'Portugal'
      | 'ROC'
      | 'ROK'
      | 'Singapore'
      | 'Turkey'
      | 'UCT'
      | 'US/Alaska'
      | 'US/Aleutian'
      | 'US/Arizona'
      | 'US/Central'
      | 'US/East-Indiana'
      | 'US/Eastern'
      | 'US/Hawaii'
      | 'US/Indiana-Starke'
      | 'US/Michigan'
      | 'US/Mountain'
      | 'US/Pacific'
      | 'US/Samoa'
      | 'UTC'
      | 'Universal'
      | 'W-SU'
      | 'WET'
      | 'Zulu'
      | null;

    /**
     * The type of the ad account.
     */
    type?: 'MANAGED' | 'SELF_SERVE';

    /**
     * Configures the window to use when querying reporting for view attributions.
     */
    view_attribution_window?: 'DAY' | 'MONTH' | 'WEEK';
  }

  export namespace Data {
    /**
     * The unique identifier of a business.
     */
    export interface BusinessID {}
  }
}

export interface AdAccountGenerateReportResponse {
  data: AdAccountGenerateReportResponse.Data;

  pagination: AdAccountGenerateReportResponse.Pagination;
}

export namespace AdAccountGenerateReportResponse {
  export interface Data {
    /**
     * The report result.
     */
    metrics?: Array<Data.Metric>;

    /**
     * An ISO 8601 timestamp indicating when these metrics were last updated.
     */
    metrics_updated_at?: string;
  }

  export namespace Data {
    export interface Metric {
      /**
       * The ID of the account.
       */
      account_id?: string | null;

      /**
       * The ID of the ad group.
       */
      ad_group_id?: string;

      /**
       * The ID of the ad.
       */
      ad_id?: string;

      /**
       * App add payment info count.
       */
      app_install_add_payment_info_count?: number | null;

      /**
       * App add payment info conversion rate.
       */
      app_install_add_payment_info_cvr?: number | null;

      /**
       * App add payment info effective cost per action.
       */
      app_install_add_payment_info_ecpa?: number | null;

      /**
       * App add to cart count.
       */
      app_install_add_to_cart_count?: number | null;

      /**
       * App add to cart conversion rate.
       */
      app_install_add_to_cart_cvr?: number | null;

      /**
       * App add to cart effective cost per action.
       */
      app_install_add_to_cart_ecpa?: number | null;

      /**
       * App launch count.
       */
      app_install_app_launch_count?: number | null;

      /**
       * App launch conversion rate.
       */
      app_install_app_launch_cvr?: number | null;

      /**
       * App launch effective cost per action.
       */
      app_install_app_launch_ecpa?: number | null;

      /**
       * App completed tutorial count.
       */
      app_install_completed_tutorial_count?: number | null;

      /**
       * App completed tutorial conversion rate.
       */
      app_install_completed_tutorial_cvr?: number | null;

      /**
       * App completed tutorial effective cost per action.
       */
      app_install_completed_tutorial_ecpa?: number | null;

      /**
       * App install count.
       */
      app_install_install_count?: number | null;

      /**
       * App install conversion rate.
       */
      app_install_install_cvr?: number | null;

      /**
       * App install effective cost per action.
       */
      app_install_install_ecpa?: number | null;

      /**
       * App level achieved count.
       */
      app_install_level_achieved_count?: number | null;

      /**
       * App level achieved conversion rate.
       */
      app_install_level_achieved_cvr?: number | null;

      /**
       * App level achieved effective cost per action.
       */
      app_install_level_achieved_ecpa?: number | null;

      /**
       * App install mobile ad click count.
       */
      app_install_mmp_ad_click_count?: number | null;

      /**
       * App install mobile ad click conversion rate.
       */
      app_install_mmp_ad_click_cvr?: number | null;

      /**
       * App install mobile ad click effective cost per action.
       */
      app_install_mmp_ad_click_ecpa?: number | null;

      /**
       * App install mobile ad view count.
       */
      app_install_mmp_ad_view_count?: number | null;

      /**
       * App install mobile ad view conversion rate.
       */
      app_install_mmp_ad_view_cvr?: number | null;

      /**
       * App install mobile ad view effective cost per action.
       */
      app_install_mmp_ad_view_ecpa?: number | null;

      /**
       * App MMP add payment info count.
       */
      app_install_mmp_add_payment_info_count?: number | null;

      /**
       * App MMP add payment info conversion rate.
       */
      app_install_mmp_add_payment_info_cvr?: number | null;

      /**
       * App MMP add payment info effective cost per action.
       */
      app_install_mmp_add_payment_info_ecpa?: number | null;

      /**
       * App MMP add to cart count.
       */
      app_install_mmp_add_to_cart_count?: number | null;

      /**
       * App MMP add to cart conversion rate.
       */
      app_install_mmp_add_to_cart_cvr?: number | null;

      /**
       * App MMP add to cart effective cost per action.
       */
      app_install_mmp_add_to_cart_ecpa?: number | null;

      /**
       * App install mobile add to wishlist count.
       */
      app_install_mmp_add_to_wishlist_count?: number | null;

      /**
       * App install mobile add to wishlist conversion rate.
       */
      app_install_mmp_add_to_wishlist_cvr?: number | null;

      /**
       * App install mobile add to wishlist effective cost per action.
       */
      app_install_mmp_add_to_wishlist_ecpa?: number | null;

      /**
       * App MMP launch count.
       */
      app_install_mmp_app_launch_count?: number | null;

      /**
       * App MMP launch conversion rate.
       */
      app_install_mmp_app_launch_cvr?: number | null;

      /**
       * App MMP launch effective cost per action.
       */
      app_install_mmp_app_launch_ecpa?: number | null;

      /**
       * App install mobile checkout count.
       */
      app_install_mmp_checkout_count?: number | null;

      /**
       * App install mobile checkout conversion rate.
       */
      app_install_mmp_checkout_cvr?: number | null;

      /**
       * App install mobile checkout effective cost per action.
       */
      app_install_mmp_checkout_ecpa?: number | null;

      /**
       * App MMP completed tutorial count.
       */
      app_install_mmp_completed_tutorial_count?: number | null;

      /**
       * App MMP completed tutorial conversion rate.
       */
      app_install_mmp_completed_tutorial_cvr?: number | null;

      /**
       * App MMP completed tutorial effective cost per action.
       */
      app_install_mmp_completed_tutorial_ecpa?: number | null;

      /**
       * App install mobile first time purchase count.
       */
      app_install_mmp_first_time_purchase_count?: number | null;

      /**
       * App install mobile first time purchase conversion rate.
       */
      app_install_mmp_first_time_purchase_cvr?: number | null;

      /**
       * App install mobile first time purchase effective cost per action.
       */
      app_install_mmp_first_time_purchase_ecpa?: number | null;

      /**
       * App MMP install count.
       */
      app_install_mmp_install_count?: number | null;

      /**
       * App MMP install conversion rate.
       */
      app_install_mmp_install_cvr?: number | null;

      /**
       * App MMP install effective cost per action.
       */
      app_install_mmp_install_ecpa?: number | null;

      /**
       * App MMP level achieved count.
       */
      app_install_mmp_level_achieved_count?: number | null;

      /**
       * App MMP level achieved conversion rate.
       */
      app_install_mmp_level_achieved_cvr?: number | null;

      /**
       * App MMP level achieved effective cost per action.
       */
      app_install_mmp_level_achieved_ecpa?: number | null;

      /**
       * App install mobile login count.
       */
      app_install_mmp_login_count?: number | null;

      /**
       * App install mobile login conversion rate.
       */
      app_install_mmp_login_cvr?: number | null;

      /**
       * App install mobile login effective cost per action.
       */
      app_install_mmp_login_ecpa?: number | null;

      /**
       * App install mobile onboard completed count.
       */
      app_install_mmp_onboard_completed_count?: number | null;

      /**
       * App install mobile onboard completed conversion rate.
       */
      app_install_mmp_onboard_completed_cvr?: number | null;

      /**
       * App install mobile onboard completed effective cost per action.
       */
      app_install_mmp_onboard_completed_ecpa?: number | null;

      /**
       * App install mobile onboard started count.
       */
      app_install_mmp_onboard_started_count?: number | null;

      /**
       * App install mobile onboard started conversion rate.
       */
      app_install_mmp_onboard_started_cvr?: number | null;

      /**
       * App install mobile onboard started effective cost per action.
       */
      app_install_mmp_onboard_started_ecpa?: number | null;

      /**
       * App MMP purchase count.
       */
      app_install_mmp_purchase_count?: number | null;

      /**
       * App MMP purchase conversion rate.
       */
      app_install_mmp_purchase_cvr?: number | null;

      /**
       * App MMP purchase effective cost per action.
       */
      app_install_mmp_purchase_ecpa?: number | null;

      /**
       * App install mobile ad rate count.
       */
      app_install_mmp_rate_count?: number | null;

      /**
       * App install mobile ad rate conversion rate.
       */
      app_install_mmp_rate_cvr?: number | null;

      /**
       * App install mobile ad rate effective cost per action.
       */
      app_install_mmp_rate_ecpa?: number | null;

      /**
       * App MMP reinstall count.
       */
      app_install_mmp_reinstall_count?: number | null;

      /**
       * App MMP reinstall conversion rate.
       */
      app_install_mmp_reinstall_cvr?: number | null;

      /**
       * App MMP reinstall effective cost per action.
       */
      app_install_mmp_reinstall_ecpa?: number | null;

      /**
       * App MMP revenue.
       */
      app_install_mmp_revenue?: number | null;

      /**
       * App MMP return on ad spend.
       */
      app_install_mmp_roas?: number | null;

      /**
       * App MMP search count.
       */
      app_install_mmp_search_count?: number | null;

      /**
       * App MMP search conversion rate.
       */
      app_install_mmp_search_cvr?: number | null;

      /**
       * App MMP search effective cost per action.
       */
      app_install_mmp_search_ecpa?: number | null;

      /**
       * App MMP sign up count.
       */
      app_install_mmp_sign_up_count?: number | null;

      /**
       * App MMP sign up conversion rate.
       */
      app_install_mmp_sign_up_cvr?: number | null;

      /**
       * App MMP sign up effective cost per action.
       */
      app_install_mmp_sign_up_ecpa?: number | null;

      /**
       * App MMP spend credits count.
       */
      app_install_mmp_spend_credits_count?: number | null;

      /**
       * App MMP spend credits conversion rate.
       */
      app_install_mmp_spend_credits_cvr?: number | null;

      /**
       * App MMP spend credits effective cost per action.
       */
      app_install_mmp_spend_credits_ecpa?: number | null;

      /**
       * App install mobile start trial count.
       */
      app_install_mmp_start_trial_count?: number | null;

      /**
       * App install mobile start trial conversion rate.
       */
      app_install_mmp_start_trial_cvr?: number | null;

      /**
       * App install mobile start trial effective cost per action.
       */
      app_install_mmp_start_trial_ecpa?: number | null;

      /**
       * App install mobile subscribe count.
       */
      app_install_mmp_subscribe_count?: number | null;

      /**
       * App install mobile subscribe conversion rate.
       */
      app_install_mmp_subscribe_cvr?: number | null;

      /**
       * App install mobile subscribe effective cost per action.
       */
      app_install_mmp_subscribe_ecpa?: number | null;

      /**
       * The number of total mobile conversions.
       */
      app_install_mmp_total_conversions?: number | null;

      /**
       * App MMP total install count.
       */
      app_install_mmp_total_install_count?: number | null;

      /**
       * App MMP total install conversion rate.
       */
      app_install_mmp_total_install_cvr?: number | null;

      /**
       * App MMP total install effective cost per action.
       */
      app_install_mmp_total_install_ecpa?: number | null;

      /**
       * App install mobile achievement unlocked count.
       */
      app_install_mmp_unlock_achievement_count?: number | null;

      /**
       * App install mobile achievement unlocked conversion rate.
       */
      app_install_mmp_unlock_achievement_cvr?: number | null;

      /**
       * App install mobile achievement unlocked effective cost per action.
       */
      app_install_mmp_unlock_achievement_ecpa?: number | null;

      /**
       * App MMP view content count.
       */
      app_install_mmp_view_content_count?: number | null;

      /**
       * App MMP view content conversion rate.
       */
      app_install_mmp_view_content_cvr?: number | null;

      /**
       * App MMP view content effective cost per action.
       */
      app_install_mmp_view_content_ecpa?: number | null;

      /**
       * App purchase count.
       */
      app_install_purchase_count?: number | null;

      /**
       * App purchase conversion rate.
       */
      app_install_purchase_cvr?: number | null;

      /**
       * App purchase effective cost per action.
       */
      app_install_purchase_ecpa?: number | null;

      /**
       * App revenue.
       */
      app_install_revenue?: number | null;

      /**
       * App return on ad spend.
       */
      app_install_roas_double?: number | null;

      /**
       * App search count.
       */
      app_install_search_count?: number | null;

      /**
       * App search conversion rate.
       */
      app_install_search_cvr?: number | null;

      /**
       * App search effective cost per action.
       */
      app_install_search_ecpa?: number | null;

      /**
       * App sign up count.
       */
      app_install_sign_up_count?: number | null;

      /**
       * App sign up conversion rate.
       */
      app_install_sign_up_cvr?: number | null;

      /**
       * App sign up effective cost per action.
       */
      app_install_sign_up_ecpa?: number | null;

      /**
       * App install SKAN ad click count.
       */
      app_install_skan_ad_click_count?: number | null;

      /**
       * App install SKAN ad click conversion rate.
       */
      app_install_skan_ad_click_cvr?: number | null;

      /**
       * App install SKAN ad click effective cost per action.
       */
      app_install_skan_ad_click_ecpa?: number | null;

      /**
       * App install SKAN ad view count.
       */
      app_install_skan_ad_view_count?: number | null;

      /**
       * App install SKAN ad view conversion rate.
       */
      app_install_skan_ad_view_cvr?: number | null;

      /**
       * App install SKAN ad view effective cost per action.
       */
      app_install_skan_ad_view_ecpa?: number | null;

      /**
       * App install SKAN add payment info count.
       */
      app_install_skan_add_payment_info_count?: number | null;

      /**
       * App SKAN add payment info conversion rate.
       */
      app_install_skan_add_payment_info_cvr?: number | null;

      /**
       * App install SKAN add payment info effective cost per action.
       */
      app_install_skan_add_payment_info_ecpa?: number | null;

      /**
       * App install SKAN add to cart count.
       */
      app_install_skan_add_to_cart_count?: number | null;

      /**
       * App SKAN add to cart conversion rate.
       */
      app_install_skan_add_to_cart_cvr?: number | null;

      /**
       * App install SKAN add to cart effective cost per action.
       */
      app_install_skan_add_to_cart_ecpa?: number | null;

      /**
       * App install SKAN add to wishlist count.
       */
      app_install_skan_add_to_wishlist_count?: number | null;

      /**
       * App install SKAN add to wishlist conversion rate.
       */
      app_install_skan_add_to_wishlist_cvr?: number | null;

      /**
       * App install SKAN add to wishlist effective cost per action.
       */
      app_install_skan_add_to_wishlist_ecpa?: number | null;

      /**
       * App install SKAN app launch count.
       */
      app_install_skan_app_launch_count?: number | null;

      /**
       * App SKAN app launch conversion rate.
       */
      app_install_skan_app_launch_cvr?: number | null;

      /**
       * App install SKAN app launch effective cost per action.
       */
      app_install_skan_app_launch_ecpa?: number | null;

      /**
       * App install SKAN checkout count.
       */
      app_install_skan_checkout_count?: number | null;

      /**
       * App install SKAN checkout conversion rate.
       */
      app_install_skan_checkout_cvr?: number | null;

      /**
       * App install SKAN checkout effective cost per action.
       */
      app_install_skan_checkout_ecpa?: number | null;

      /**
       * App install SKAN completed tutorial count.
       */
      app_install_skan_completed_tutorial_count?: number | null;

      /**
       * App SKAN completed tutorial conversion rate.
       */
      app_install_skan_completed_tutorial_cvr?: number | null;

      /**
       * App install SKAN completed tutorial effective cost per action.
       */
      app_install_skan_completed_tutorial_ecpa?: number | null;

      /**
       * App install SKAN first time purchase count.
       */
      app_install_skan_first_time_purchase_count?: number | null;

      /**
       * App install SKAN first time purchase conversion rate.
       */
      app_install_skan_first_time_purchase_cvr?: number | null;

      /**
       * App install SKAN first time purchase effective cost per action.
       */
      app_install_skan_first_time_purchase_ecpa?: number | null;

      /**
       * App SKAN install count.
       */
      app_install_skan_install_count?: number | null;

      /**
       * App SKAN install conversion rate.
       */
      app_install_skan_install_cvr?: number | null;

      /**
       * App SKAN install effective cost per action.
       */
      app_install_skan_install_ecpa?: number | null;

      /**
       * App install SKAN level achieved count.
       */
      app_install_skan_level_achieved_count?: number | null;

      /**
       * App SKAN level achieved conversion rate.
       */
      app_install_skan_level_achieved_cvr?: number | null;

      /**
       * App install SKAN level achieved effective cost per action.
       */
      app_install_skan_level_achieved_ecpa?: number | null;

      /**
       * App install SKAN login count.
       */
      app_install_skan_login_count?: number | null;

      /**
       * App install SKAN login conversion rate.
       */
      app_install_skan_login_cvr?: number | null;

      /**
       * App install SKAN login effective cost per action.
       */
      app_install_skan_login_ecpa?: number | null;

      /**
       * App install SKAN onboard completed count.
       */
      app_install_skan_onboard_completed_count?: number | null;

      /**
       * App install SKAN onboard completed conversion rate.
       */
      app_install_skan_onboard_completed_cvr?: number | null;

      /**
       * App install SKAN onboard completed effective cost per action.
       */
      app_install_skan_onboard_completed_ecpa?: number | null;

      /**
       * App install SKAN onboard started count.
       */
      app_install_skan_onboard_started_count?: number | null;

      /**
       * App install SKAN onboard started conversion rate.
       */
      app_install_skan_onboard_started_cvr?: number | null;

      /**
       * App install SKAN onboard started effective cost per action.
       */
      app_install_skan_onboard_started_ecpa?: number | null;

      /**
       * App install SKAN purchase count.
       */
      app_install_skan_purchase_count?: number | null;

      /**
       * App SKAN purchase conversion rate.
       */
      app_install_skan_purchase_cvr?: number | null;

      /**
       * App install SKAN purchase effective cost per action.
       */
      app_install_skan_purchase_ecpa?: number | null;

      /**
       * App install SKAN rate count.
       */
      app_install_skan_rate_count?: number | null;

      /**
       * App install SKAN rate conversion rate.
       */
      app_install_skan_rate_cvr?: number | null;

      /**
       * App install SKAN rate effective cost per action.
       */
      app_install_skan_rate_ecpa?: number | null;

      /**
       * App SKAN reinstall count.
       */
      app_install_skan_reinstall_count?: number | null;

      /**
       * App SKAN reinstall conversion rate.
       */
      app_install_skan_reinstall_cvr?: number | null;

      /**
       * App SKAN reinstall effective cost per action.
       */
      app_install_skan_reinstall_ecpa?: number | null;

      /**
       * App install SKAN revenue.
       */
      app_install_skan_revenue?: number | null;

      /**
       * App SKAN return on ad spend.
       */
      app_install_skan_roas?: number | null;

      /**
       * App install SKAN search count.
       */
      app_install_skan_search_count?: number | null;

      /**
       * App SKAN search conversion rate.
       */
      app_install_skan_search_cvr?: number | null;

      /**
       * App install SKAN search effective cost per action.
       */
      app_install_skan_search_ecpa?: number | null;

      /**
       * App install SKAN sign up count.
       */
      app_install_skan_sign_up_count?: number | null;

      /**
       * App SKAN sign up conversion rate.
       */
      app_install_skan_sign_up_cvr?: number | null;

      /**
       * App install SKAN sign up effective cost per action.
       */
      app_install_skan_sign_up_ecpa?: number | null;

      /**
       * App install SKAN spend credits count.
       */
      app_install_skan_spend_credits_count?: number | null;

      /**
       * App SKAN spend credits conversion rate.
       */
      app_install_skan_spend_credits_cvr?: number | null;

      /**
       * App install SKAN spend credits effective cost per action.
       */
      app_install_skan_spend_credits_ecpa?: number | null;

      /**
       * App install SKAN start trial count.
       */
      app_install_skan_start_trial_count?: number | null;

      /**
       * App install SKAN start trial conversion rate.
       */
      app_install_skan_start_trial_cvr?: number | null;

      /**
       * App install SKAN start trial effective cost per action.
       */
      app_install_skan_start_trial_ecpa?: number | null;

      /**
       * App install SKAN subscribe count.
       */
      app_install_skan_subscribe_count?: number | null;

      /**
       * App install SKAN subscribe conversion rate.
       */
      app_install_skan_subscribe_cvr?: number | null;

      /**
       * App install SKAN subscribe effective cost per action.
       */
      app_install_skan_subscribe_ecpa?: number | null;

      /**
       * App install SKAN total conversions.
       */
      app_install_skan_total_conversions?: number | null;

      /**
       * App SKAN total install count.
       */
      app_install_skan_total_install_count?: number | null;

      /**
       * App SKAN total install conversion rate.
       */
      app_install_skan_total_install_cvr?: number | null;

      /**
       * App SKAN total install effective cost per action.
       */
      app_install_skan_total_install_ecpa?: number | null;

      /**
       * App install SKAN unknown count.
       */
      app_install_skan_unknown_count?: number | null;

      /**
       * App install SKAN achievement unlocked count.
       */
      app_install_skan_unlock_achievement_count?: number | null;

      /**
       * App install SKAN achievement unlocked conversion rate.
       */
      app_install_skan_unlock_achievement_cvr?: number | null;

      /**
       * App install SKAN achievement unlocked effective cost per action.
       */
      app_install_skan_unlock_achievement_ecpa?: number | null;

      /**
       * App install SKAN view content count.
       */
      app_install_skan_view_content_count?: number | null;

      /**
       * App SKAN view content conversion rate.
       */
      app_install_skan_view_content_cvr?: number | null;

      /**
       * App install SKAN view content effective cost per action.
       */
      app_install_skan_view_content_ecpa?: number | null;

      /**
       * App spend credits count.
       */
      app_install_spend_credits_count?: number | null;

      /**
       * App spend credits conversion rate.
       */
      app_install_spend_credits_cvr?: number | null;

      /**
       * App spend credits effective cost per action.
       */
      app_install_spend_credits_ecpa?: number | null;

      /**
       * App total conversions.
       */
      app_install_total_conversions?: number | null;

      /**
       * App view content count.
       */
      app_install_view_content_count?: number | null;

      /**
       * App view content conversion rate.
       */
      app_install_view_content_cvr?: number | null;

      /**
       * App view content effective cost per action.
       */
      app_install_view_content_ecpa?: number | null;

      /**
       * The ID of the campaign.
       */
      campaign_id?: string;

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
       * The number of clicks detected for this report period.
       */
      clicks?: number | null;

      /**
       * The number comment downvotes on the ad.
       */
      comment_downvotes?: number | null;

      /**
       * The number of page views for the ad.
       */
      comment_page_views?: number | null;

      /**
       * The number of comment submissions on the ad.
       */
      comment_submissions?: number | null;

      /**
       * The number of comment upvotes on the ad.
       */
      comment_upvotes?: number | null;

      /**
       * The community/subreddit being targeted.
       */
      community?: string | null;

      /**
       * Average value of the shopping cart.
       */
      conversion_add_to_cart_avg_value?: number | null;

      /**
       * The click through conversions count.
       */
      conversion_add_to_cart_clicks?: number | null;

      /**
       * The cost per add to cart conversion.
       */
      conversion_add_to_cart_ecpa?: number | null;

      /**
       * Total size of the shopping cart.
       */
      conversion_add_to_cart_total_items?: number | null;

      /**
       * Total value of the shopping cart.
       */
      conversion_add_to_cart_total_value?: number | null;

      /**
       * The view through conversions count.
       */
      conversion_add_to_cart_views?: number | null;

      /**
       * Average value of the wish list.
       */
      conversion_add_to_wishlist_avg_value?: number | null;

      /**
       * The click through conversions count.
       */
      conversion_add_to_wishlist_clicks?: number | null;

      /**
       * The cost per add to wishlist conversion.
       */
      conversion_add_to_wishlist_ecpa?: number | null;

      /**
       * Total size of the wish list.
       */
      conversion_add_to_wishlist_total_items?: number | null;

      /**
       * Total value of the wish list.
       */
      conversion_add_to_wishlist_total_value?: number | null;

      /**
       * The view through conversions count.
       */
      conversion_add_to_wishlist_views?: number | null;

      /**
       * The average value for this custom conversion event.
       */
      conversion_custom_avg_value?: number | null;

      /**
       * The number of clicks for this custom conversion event.
       */
      conversion_custom_clicks?: number | null;

      /**
       * The effective cost per action for this custom conversion event.
       */
      conversion_custom_ecpa?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_1_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_1_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_1_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_1_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_1_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_1_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_1_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_10_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_10_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_10_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_10_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_10_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_10_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_10_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_11_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_11_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_11_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_11_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_11_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_11_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_11_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_12_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_12_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_12_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_12_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_12_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_12_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_12_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_13_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_13_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_13_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_13_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_13_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_13_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_13_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_14_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_14_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_14_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_14_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_14_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_14_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_14_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_15_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_15_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_15_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_15_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_15_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_15_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_15_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_16_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_16_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_16_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_16_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_16_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_16_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_16_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_17_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_17_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_17_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_17_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_17_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_17_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_17_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_18_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_18_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_18_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_18_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_18_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_18_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_18_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_19_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_19_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_19_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_19_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_19_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_19_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_19_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_2_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_2_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_2_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_2_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_2_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_2_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_2_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_20_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_20_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_20_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_20_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_20_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_20_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_20_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_3_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_3_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_3_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_3_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_3_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_3_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_3_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_4_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_4_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_4_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_4_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_4_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_4_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_4_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_5_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_5_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_5_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_5_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_5_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_5_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_5_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_6_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_6_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_6_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_6_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_6_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_6_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_6_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_7_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_7_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_7_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_7_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_7_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_7_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_7_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_8_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_8_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_8_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_8_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_8_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_8_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_8_views?: number | null;

      /**
       * Average value of an item for this custom event.
       */
      conversion_custom_event_9_avg_value?: number | null;

      /**
       * The number of clicks detected for this custom event.
       */
      conversion_custom_event_9_clicks?: number | null;

      /**
       * Effective cost per action for this custom event.
       */
      conversion_custom_event_9_ecpa?: number | null;

      /**
       * Return on ad spend for purchases for this custom event.
       */
      conversion_custom_event_9_roas?: number | null;

      /**
       * Total items in this custom event.
       */
      conversion_custom_event_9_total_items?: number | null;

      /**
       * Total value of the custom event.
       */
      conversion_custom_event_9_total_value?: number | null;

      /**
       * The number of viewable impressions for this custom event.
       */
      conversion_custom_event_9_views?: number | null;

      /**
       * The total items for this custom conversion event.
       */
      conversion_custom_total_items?: number | null;

      /**
       * The total value for this custom conversion event.
       */
      conversion_custom_total_value?: number | null;

      /**
       * The number of views for this custom conversion event.
       */
      conversion_custom_views?: number | null;

      /**
       * Avg value of lead.
       */
      conversion_lead_avg_value?: number | null;

      /**
       * The click through conversions count.
       */
      conversion_lead_clicks?: number | null;

      /**
       * The cost per lead conversion.
       */
      conversion_lead_ecpa?: number | null;

      /**
       * Total value of leads.
       */
      conversion_lead_total_value?: number | null;

      /**
       * The view through conversions count.
       */
      conversion_lead_views?: number | null;

      /**
       * The click through conversions count.
       */
      conversion_page_visit_clicks?: number | null;

      /**
       * The cost per page visit conversion.
       */
      conversion_page_visit_ecpa?: number | null;

      /**
       * The view through conversions count.
       */
      conversion_page_visit_views?: number | null;

      /**
       * Average value of purchase.
       */
      conversion_purchase_avg_value?: number | null;

      /**
       * The click through conversions count.
       */
      conversion_purchase_clicks?: number | null;

      /**
       * The cost per purchase conversion.
       */
      conversion_purchase_ecpa?: number | null;

      /**
       * Total size of the purchase.
       */
      conversion_purchase_total_items?: number | null;

      /**
       * Total value of the purchase.
       */
      conversion_purchase_total_value?: number | null;

      /**
       * The view through conversions count.
       */
      conversion_purchase_views?: number | null;

      /**
       * Return on ad spend for purchases for this period.
       */
      conversion_roas?: number | null;

      /**
       * The click through conversions count.
       */
      conversion_search_clicks?: number | null;

      /**
       * The cost per search conversion.
       */
      conversion_search_ecpa?: number | null;

      /**
       * The view through conversions count.
       */
      conversion_search_views?: number | null;

      /**
       * The click through conversions count.
       */
      conversion_sign_up_clicks?: number | null;

      /**
       * The cost per sign up conversion.
       */
      conversion_sign_up_ecpa?: number | null;

      /**
       * The view through conversions count.
       */
      conversion_sign_up_views?: number | null;

      /**
       * Avg value of signup.
       */
      conversion_signup_avg_value?: number | null;

      /**
       * Total value of signups.
       */
      conversion_signup_total_value?: number | null;

      /**
       * The click through conversions count.
       */
      conversion_view_content_clicks?: number | null;

      /**
       * The cost per view content conversion.
       */
      conversion_view_content_ecpa?: number | null;

      /**
       * The view through conversions count.
       */
      conversion_view_content_views?: number | null;

      /**
       * The country targeted for the report.
       */
      country?: string | null;

      /**
       * The cost-per-click for this period.
       */
      cpc?: number | null;

      /**
       * The cost-per-view for this period.
       */
      cpv?: number | null;

      /**
       * The click-through-rate for this period.
       */
      ctr?: number | null;

      /**
       * The currency of the account.
       */
      currency?: string | null;

      /**
       * The custom columns and their values for this period.
       */
      custom_columns?: unknown | null;

      /**
       * The name of the custom event.
       */
      custom_event_name?: string | null;

      /**
       * The date for this metric.
       */
      date?: string | null;

      /**
       * The Designated Market Area (DMA) targeted for the reports.
       */
      dma?: string | null;

      /**
       * The number of downvotes on the ad.
       */
      downvotes?: number | null;

      /**
       * The effective CPM for this period.
       */
      ecpm?: number | null;

      /**
       * The number of engaged engaged clicks such as RSVPs.
       */
      engaged_click?: number | null;

      /**
       * The average number of times each user saw the ad.
       */
      frequency?: number | null;

      /**
       * The ID of the gallery item.
       */
      gallery_item_id?: string | null;

      /**
       * The gender of the user.
       */
      gender?: string | null;

      /**
       * The hour for this metric in ISO-8601.
       */
      hour?: string | null;

      /**
       * The number of impressions served for this report period.
       */
      impressions?: number | null;

      /**
       * The interests of the users being targeted.
       */
      interest?: string | null;

      /**
       * Key conversion clicks.
       */
      key_conversion_clicks?: number | null;

      /**
       * Key conversion effective cost per action.
       */
      key_conversion_ecpa?: number | null;

      /**
       * Key conversion rate.
       */
      key_conversion_rate?: number | null;

      /**
       * Key conversion total count.
       */
      key_conversion_total_count?: number | null;

      /**
       * Key conversion views.
       */
      key_conversion_views?: number | null;

      /**
       * The keyword for the ad.
       */
      keyword?: string | null;

      /**
       * The device operating system type
       */
      os_type?: 'ANDROID' | 'IOS' | 'MACOS' | 'WINDOWS' | null;

      /**
       * The pacing for this period.
       */
      pacing?: number | null;

      /**
       * Enum representing the placement of a creative.
       */
      placement?:
        | 'FEED'
        | 'LIGHTBOX_SIDEBAR'
        | 'MAIN_SIDEBAR'
        | 'SIDEBARS'
        | 'COMMENTS_PAGE'
        | 'TRENDING_DISCOVERY'
        | 'TRENDING_SEARCH_RESULT'
        | 'FULL_BLEED_VIDEO_FEED'
        | 'UNKNOWN'
        | 'AUTO';

      /**
       * The unique identifier of the post.
       */
      post_id?: string;

      /**
       * The CM priority.
       */
      priority?: string | null;

      /**
       * The ID of the product.
       */
      product_id?: string;

      /**
       * The ID of the profile.
       */
      profile_id?: string;

      /**
       * The number of unique users who saw the ad.
       */
      reach?: number | null;

      /**
       * Reddit lead count.
       */
      reddit_leads?: number | null;

      /**
       * The region (US state or UK country) targeted for the reports.
       */
      region?: string | null;

      /**
       * The amount (in microcurrency) spent for this report period in Ad Accounts
       * currency.
       */
      spend?: number | null;

      /**
       * The number of upvotes on the ad.
       */
      upvotes?: number | null;

      /**
       * The percentage of the video that was played.
       */
      video_completion_rate?: number | null;

      /**
       * The number of video fully viewable impressions for the ad.
       */
      video_fully_viewable_impressions?: number | null;

      /**
       * The number of times the video was played while expanded.
       */
      video_plays_expanded?: number | null;

      /**
       * The number of times the video was played with sound.
       */
      video_plays_with_sound?: number | null;

      /**
       * The number of times the ad was served and the video began playing.
       */
      video_started?: number | null;

      /**
       * The percentage of the video that was played.
       */
      video_view_rate?: number | null;

      /**
       * Total number of 15 second video views divided by the total number of
       * impressions.
       */
      video_view_rate_15_seconds?: number | null;

      /**
       * Total number of 6 second video views divided by the total number of impressions.
       */
      video_view_rate_6_seconds?: number | null;

      /**
       * The number of video viewable impressions for the ad.
       */
      video_viewable_impressions?: number | null;

      /**
       * The number of times the ad was served and at least 10 seconds of the video has
       * played.
       */
      video_watched_10_seconds?: number | null;

      /**
       * The number of times the ad was served and a user watched the entire video.
       */
      video_watched_100_percent?: number | null;

      /**
       * The number of times the ad was served and at least 25% of the video has played.
       */
      video_watched_25_percent?: number | null;

      /**
       * The number of times the ad was served and at least 3 seconds of the video has
       * played.
       */
      video_watched_3_seconds?: number | null;

      /**
       * The number of times the ad was served and at least 5 seconds of the video has
       * played.
       */
      video_watched_5_seconds?: number | null;

      /**
       * The number of times the ad was served and at least 50% of the video has played.
       */
      video_watched_50_percent?: number | null;

      /**
       * The number of times the ad was served and at least 75% of the video has played.
       */
      video_watched_75_percent?: number | null;

      /**
       * The number of times the ad was served and at least 95% of the video has played.
       */
      video_watched_95_percent?: number | null;

      /**
       * The number of viewable impressions for this period.
       */
      viewable_impressions?: number | null;
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
     * The index of the current page.
     */
    page_index?: number | null;

    /**
     * The full URL for the previous page. If not available, the current page is the
     * first page.
     *
     * > **Important:** The URL should be followed directly. Don't assume pagination
     * > based on the query parameters in the provided URLs.
     */
    previous_url?: string | null;

    /**
     * The total number of items across all pages.
     */
    total_count?: number | null;
  }
}

export interface AdAccountGetHistoryResponse {
  data: Array<AdAccountGetHistoryResponse.Data>;

  pagination: AdAccountGetHistoryResponse.Pagination;
}

export namespace AdAccountGetHistoryResponse {
  export interface Data {
    /**
     * Information about who made the change.
     */
    cause?: Data.Cause;

    /**
     * Information about the change.
     */
    change?: Data.Change;
  }

  export namespace Data {
    /**
     * Information about who made the change.
     */
    export interface Cause {
      /**
       * The time the change was made.
       */
      changed_at?: string;

      /**
       * Email address of member who made the change.
       */
      email?: string | null;

      /**
       * The full name of the member who made the change.
       */
      fullname?: string | null;

      /**
       * ID that maps to the Reddit user who made the change.
       */
      member_id?: string | null;

      /**
       * The Reddit username of member who made the change.
       */
      reddit_username?: string | null;
    }

    /**
     * Information about the change.
     */
    export interface Change {
      /**
       * The value after the change.
       */
      after_value?: string | null;

      /**
       * The value before the change.
       */
      before_value?: string | null;

      /**
       * The entity id that was changed.
       */
      entity_id?: string;

      /**
       * The name of the entity that was changed.
       */
      entity_name?: string | null;

      /**
       * The type of entity that was changed.
       */
      entity_type?: 'AD_ACCOUNT' | 'AD' | 'AD_GROUP' | 'AUDIENCE' | 'CAMPAIGN';

      /**
       * The name of the field that was changed.
       */
      field_name?: string;
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
     * The index of the current page.
     */
    page_index?: number | null;

    /**
     * The full URL for the previous page. If not available, the current page is the
     * first page.
     *
     * > **Important:** The URL should be followed directly. Don't assume pagination
     * > based on the query parameters in the provided URLs.
     */
    previous_url?: string | null;

    /**
     * The total number of items across all pages.
     */
    total_count?: number | null;
  }
}

export interface AdAccountListFundingInstrumentsResponse {
  data: Array<AdAccountListFundingInstrumentsResponse.Data>;

  pagination: AdAccountListFundingInstrumentsResponse.Pagination;
}

export namespace AdAccountListFundingInstrumentsResponse {
  export interface Data {
    /**
     * The ID of the funding instrument
     */
    id?: string;

    /**
     * for CREDIT_CARD types this indicates the state of the credit card attachment.
     */
    authorize_status?: 'PENDING' | 'APPROVED' | 'DECLINE_RETRYABLE' | 'DECLINE_TERMINAL' | null;

    /**
     * The current amount of outstanding debt on this funding instrument, in local
     * micro-currency.
     */
    billable_amount?: number;

    /**
     * When the billable_amount exceeds this number, campaigns linked to this funding
     * instrument will not run.
     */
    credit_limit?: number;

    /**
     * An ISO4217 currency code indicating the currency used in this invoice
     */
    currency?: 'USD' | 'GBP' | 'CAD' | 'EUR' | 'AUD' | 'NZD' | 'SGD' | 'BRL';

    /**
     * When set, campaigns linked to this funding instrument will not deliver unless
     * the current time is before this ISO-8601 time.
     */
    end_time?: string | null;

    /**
     * Status indicating the eligibility or issues with the invoice group
     */
    invoice_group_status?:
      | 'ELIGIBLE'
      | 'NO_ACTIVE_CL_FOUND'
      | 'MULTI_BILL_ENTITY_FOUND'
      | 'MULTI_PO_FOUND'
      | 'MULTI_PAY_TERMS_FOUND'
      | 'MULTI_OPPORTUNITY_FOUND'
      | null;

    /**
     * When true, campaigns linked to this funding instrument are allowed to run.
     */
    is_servable?: boolean;

    /**
     * The name of the funding instrument, if any.
     */
    name?: string | null;

    /**
     * Contains a list of reasons why this funding instrument is not servable. When
     * this list is empty, it is servable.
     */
    reasons_not_servable?: Array<
      'DATES_OUT_OF_RANGE' | 'CREDIT_LINE_EXHAUSTED' | 'CREDIT_CARD_NOT_APPROVED' | 'NOT_ACTIVE'
    >;

    /**
     * When set, campaigns linked to this funding instrument will not deliver unless
     * the current time is beyond this ISO-8601 time.
     */
    start_time?: string | null;
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

export interface AdAccountListPixelsResponse {
  data: Array<AdAccountListPixelsResponse.Data>;

  pagination: AdAccountListPixelsResponse.Pagination;
}

export namespace AdAccountListPixelsResponse {
  export interface Data {
    /**
     * The ID of the pixel.
     */
    id?: string;

    /**
     * The pixel's automatic advanced matching configuration.
     */
    automatic_matching_config?: Data.AutomaticMatchingConfig;

    /**
     * The unique identifier of a business.
     */
    business_id?: string;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The ID of the member who created the pixel.
     */
    created_by?: string;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The ID of the member who last modified the pixel.
     */
    modified_by?: string;

    /**
     * The human readable name of this pixel.
     */
    name?: string;
  }

  export namespace Data {
    /**
     * The pixel's automatic advanced matching configuration.
     */
    export interface AutomaticMatchingConfig {
      /**
       * The flag for collecting email addresses
       */
      collect_email?: boolean;
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

export interface AdAccountListProfilesResponse {
  data: Array<AdAccountListProfilesResponse.Data>;

  pagination: AdAccountListProfilesResponse.Pagination;
}

export namespace AdAccountListProfilesResponse {
  export interface Data {
    /**
     * The ID of the profile.
     */
    id?: string;

    /**
     * The ID of the business that owns this profile.
     */
    business_id?: string;

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The Reddit username of the profile.
     */
    name?: string;

    /**
     * ID that maps to the Reddit user.
     */
    reddit_user_id?: string;
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

export interface AdAccountUpdateParams {
  data: AdAccountUpdateParams.Data;
}

export namespace AdAccountUpdateParams {
  export interface Data {
    /**
     * Describes an employee set state for the account.
     */
    admin_approval?:
      | 'ADMIN'
      | 'BANNED'
      | 'NEEDS_ID_VERIFICATION'
      | 'PENDING'
      | 'SUSPENDED'
      | 'SUSPICIOUS'
      | 'TRUSTED'
      | 'VALID';

    /**
     * The attribution type. Only valid for CPA bid types. Also configures the
     * attribution type to query when calculating ECPA fields.
     */
    attribution_type?: 'ALL_CONVERSION' | 'CLICK_THROUGH_CONVERSION' | 'VIEW_THROUGH_CONVERSION';

    /**
     * The unique identifier of a business.
     */
    business_id?: Data.BusinessID;

    /**
     * Configures the window to use when querying reporting for click attributions.
     */
    click_attribution_window?: 'DAY' | 'MONTH' | 'WEEK';

    /**
     * Account level excluded communities.
     */
    excluded_communities?: Array<string> | null;

    /**
     * Account level excluded keywords.
     */
    excluded_keywords?: Array<string> | null;

    /**
     * The ad account name.
     */
    name?: string;

    /**
     * The ID of the primary contact member.
     */
    primary_contact_member_id?: string;

    /**
     * The type of spend cap applied to the ad account.
     */
    spend_cap_type?: 'LIFETIME' | null;

    /**
     * The type of the ad account.
     */
    type?: 'MANAGED' | 'SELF_SERVE';

    /**
     * Configures the window to use when querying reporting for view attributions.
     */
    view_attribution_window?: 'DAY' | 'MONTH' | 'WEEK';
  }

  export namespace Data {
    /**
     * The unique identifier of a business.
     */
    export interface BusinessID {}
  }
}

export interface AdAccountGenerateReportParams {
  /**
   * Body param:
   */
  data: AdAccountGenerateReportParams.Data;

  /**
   * Query param:
   */
  page?: AdAccountGenerateReportParams.Page;
}

export namespace AdAccountGenerateReportParams {
  export interface Data {
    /**
     * An ISO 8601 timestamp indicating the end of the window to fetch reporting
     * metrics for. **This field only supports UTC**, adjust the date and time to
     * account for different timezones. For example, to set the end time for midnight
     * on March 31, 2024 in EDT, provide the timestamp `2024-03-30T20:00:00Z`.
     */
    ends_at: string;

    /**
     * A list of fields that you want returned in your metrics. Note that the following
     * fields are deprecated, and will not return data. `CLICK_ATTRIBUTION_WINDOW`,
     * `VIEW_ATTRIBUTION_WINDOW`, and `GALLERY_ITEM_CAPTION`.
     */
    fields: Array<
      | 'ACCOUNT_ID'
      | 'AD_CREATE_TIME'
      | 'AD_EFFECTIVE_STATUS'
      | 'AD_GROUP_ID'
      | 'AD_ID'
      | 'AD_UPDATE_TIME'
      | 'ADGROUP_CREATE_TIME'
      | 'ADGROUP_UPDATE_TIME'
      | 'APP_INSTALL_ADD_PAYMENT_INFO_COUNT'
      | 'APP_INSTALL_ADD_PAYMENT_INFO_CVR'
      | 'APP_INSTALL_ADD_PAYMENT_INFO_ECPA'
      | 'APP_INSTALL_ADD_TO_CART_COUNT'
      | 'APP_INSTALL_ADD_TO_CART_CVR'
      | 'APP_INSTALL_ADD_TO_CART_ECPA'
      | 'APP_INSTALL_APP_LAUNCH_COUNT'
      | 'APP_INSTALL_APP_LAUNCH_CVR'
      | 'APP_INSTALL_APP_LAUNCH_ECPA'
      | 'APP_INSTALL_COMPLETED_TUTORIAL_COUNT'
      | 'APP_INSTALL_COMPLETED_TUTORIAL_CVR'
      | 'APP_INSTALL_COMPLETED_TUTORIAL_ECPA'
      | 'APP_INSTALL_INSTALL_COUNT'
      | 'APP_INSTALL_INSTALL_CVR'
      | 'APP_INSTALL_INSTALL_ECPA'
      | 'APP_INSTALL_LEVEL_ACHIEVED_COUNT'
      | 'APP_INSTALL_LEVEL_ACHIEVED_CVR'
      | 'APP_INSTALL_LEVEL_ACHIEVED_ECPA'
      | 'APP_INSTALL_MMP_AD_CLICK_COUNT'
      | 'APP_INSTALL_MMP_AD_CLICK_CVR'
      | 'APP_INSTALL_MMP_AD_CLICK_ECPA'
      | 'APP_INSTALL_MMP_AD_VIEW_COUNT'
      | 'APP_INSTALL_MMP_AD_VIEW_CVR'
      | 'APP_INSTALL_MMP_AD_VIEW_ECPA'
      | 'APP_INSTALL_MMP_ADD_PAYMENT_INFO_COUNT'
      | 'APP_INSTALL_MMP_ADD_PAYMENT_INFO_CVR'
      | 'APP_INSTALL_MMP_ADD_PAYMENT_INFO_ECPA'
      | 'APP_INSTALL_MMP_ADD_TO_CART_COUNT'
      | 'APP_INSTALL_MMP_ADD_TO_CART_CVR'
      | 'APP_INSTALL_MMP_ADD_TO_CART_ECPA'
      | 'APP_INSTALL_MMP_ADD_TO_WISHLIST_COUNT'
      | 'APP_INSTALL_MMP_ADD_TO_WISHLIST_CVR'
      | 'APP_INSTALL_MMP_ADD_TO_WISHLIST_ECPA'
      | 'APP_INSTALL_MMP_APP_LAUNCH_COUNT'
      | 'APP_INSTALL_MMP_APP_LAUNCH_CVR'
      | 'APP_INSTALL_MMP_APP_LAUNCH_ECPA'
      | 'APP_INSTALL_MMP_CHECKOUT_COUNT'
      | 'APP_INSTALL_MMP_CHECKOUT_CVR'
      | 'APP_INSTALL_MMP_CHECKOUT_ECPA'
      | 'APP_INSTALL_MMP_COMPLETED_TUTORIAL_COUNT'
      | 'APP_INSTALL_MMP_COMPLETED_TUTORIAL_CVR'
      | 'APP_INSTALL_MMP_COMPLETED_TUTORIAL_ECPA'
      | 'APP_INSTALL_MMP_FIRST_TIME_PURCHASE_COUNT'
      | 'APP_INSTALL_MMP_FIRST_TIME_PURCHASE_CVR'
      | 'APP_INSTALL_MMP_FIRST_TIME_PURCHASE_ECPA'
      | 'APP_INSTALL_MMP_INSTALL_COUNT'
      | 'APP_INSTALL_MMP_INSTALL_CVR'
      | 'APP_INSTALL_MMP_INSTALL_ECPA'
      | 'APP_INSTALL_MMP_LEVEL_ACHIEVED_COUNT'
      | 'APP_INSTALL_MMP_LEVEL_ACHIEVED_CVR'
      | 'APP_INSTALL_MMP_LEVEL_ACHIEVED_ECPA'
      | 'APP_INSTALL_MMP_LOGIN_COUNT'
      | 'APP_INSTALL_MMP_LOGIN_CVR'
      | 'APP_INSTALL_MMP_LOGIN_ECPA'
      | 'APP_INSTALL_MMP_ONBOARD_COMPLETED_COUNT'
      | 'APP_INSTALL_MMP_ONBOARD_COMPLETED_CVR'
      | 'APP_INSTALL_MMP_ONBOARD_COMPLETED_ECPA'
      | 'APP_INSTALL_MMP_ONBOARD_STARTED_COUNT'
      | 'APP_INSTALL_MMP_ONBOARD_STARTED_CVR'
      | 'APP_INSTALL_MMP_ONBOARD_STARTED_ECPA'
      | 'APP_INSTALL_MMP_PURCHASE_COUNT'
      | 'APP_INSTALL_MMP_PURCHASE_CVR'
      | 'APP_INSTALL_MMP_PURCHASE_ECPA'
      | 'APP_INSTALL_MMP_RATE_COUNT'
      | 'APP_INSTALL_MMP_RATE_CVR'
      | 'APP_INSTALL_MMP_RATE_ECPA'
      | 'APP_INSTALL_MMP_REINSTALL_COUNT'
      | 'APP_INSTALL_MMP_REINSTALL_CVR'
      | 'APP_INSTALL_MMP_REINSTALL_ECPA'
      | 'APP_INSTALL_MMP_REVENUE'
      | 'APP_INSTALL_MMP_ROAS'
      | 'APP_INSTALL_MMP_SEARCH_COUNT'
      | 'APP_INSTALL_MMP_SEARCH_CVR'
      | 'APP_INSTALL_MMP_SEARCH_ECPA'
      | 'APP_INSTALL_MMP_SIGN_UP_COUNT'
      | 'APP_INSTALL_MMP_SIGN_UP_CVR'
      | 'APP_INSTALL_MMP_SIGN_UP_ECPA'
      | 'APP_INSTALL_MMP_SPEND_CREDITS_COUNT'
      | 'APP_INSTALL_MMP_SPEND_CREDITS_CVR'
      | 'APP_INSTALL_MMP_SPEND_CREDITS_ECPA'
      | 'APP_INSTALL_MMP_START_TRIAL_COUNT'
      | 'APP_INSTALL_MMP_START_TRIAL_CVR'
      | 'APP_INSTALL_MMP_START_TRIAL_ECPA'
      | 'APP_INSTALL_MMP_SUBSCRIBE_COUNT'
      | 'APP_INSTALL_MMP_SUBSCRIBE_CVR'
      | 'APP_INSTALL_MMP_SUBSCRIBE_ECPA'
      | 'APP_INSTALL_MMP_TOTAL_CONVERSIONS'
      | 'APP_INSTALL_MMP_TOTAL_INSTALL_COUNT'
      | 'APP_INSTALL_MMP_TOTAL_INSTALL_CVR'
      | 'APP_INSTALL_MMP_TOTAL_INSTALL_ECPA'
      | 'APP_INSTALL_MMP_UNLOCK_ACHIEVEMENT_COUNT'
      | 'APP_INSTALL_MMP_UNLOCK_ACHIEVEMENT_CVR'
      | 'APP_INSTALL_MMP_UNLOCK_ACHIEVEMENT_ECPA'
      | 'APP_INSTALL_MMP_VIEW_CONTENT_COUNT'
      | 'APP_INSTALL_MMP_VIEW_CONTENT_CVR'
      | 'APP_INSTALL_MMP_VIEW_CONTENT_ECPA'
      | 'APP_INSTALL_PURCHASE_COUNT'
      | 'APP_INSTALL_PURCHASE_CVR'
      | 'APP_INSTALL_PURCHASE_ECPA'
      | 'APP_INSTALL_REVENUE'
      | 'APP_INSTALL_ROAS_DOUBLE'
      | 'APP_INSTALL_SEARCH_COUNT'
      | 'APP_INSTALL_SEARCH_CVR'
      | 'APP_INSTALL_SEARCH_ECPA'
      | 'APP_INSTALL_SIGN_UP_COUNT'
      | 'APP_INSTALL_SIGN_UP_CVR'
      | 'APP_INSTALL_SIGN_UP_ECPA'
      | 'APP_INSTALL_SKAN_AD_CLICK_COUNT'
      | 'APP_INSTALL_SKAN_AD_CLICK_CVR'
      | 'APP_INSTALL_SKAN_AD_CLICK_ECPA'
      | 'APP_INSTALL_SKAN_AD_VIEW_COUNT'
      | 'APP_INSTALL_SKAN_AD_VIEW_CVR'
      | 'APP_INSTALL_SKAN_AD_VIEW_ECPA'
      | 'APP_INSTALL_SKAN_ADD_PAYMENT_INFO_COUNT'
      | 'APP_INSTALL_SKAN_ADD_PAYMENT_INFO_CVR'
      | 'APP_INSTALL_SKAN_ADD_PAYMENT_INFO_ECPA'
      | 'APP_INSTALL_SKAN_ADD_TO_CART_COUNT'
      | 'APP_INSTALL_SKAN_ADD_TO_CART_CVR'
      | 'APP_INSTALL_SKAN_ADD_TO_CART_ECPA'
      | 'APP_INSTALL_SKAN_ADD_TO_WISHLIST_COUNT'
      | 'APP_INSTALL_SKAN_ADD_TO_WISHLIST_CVR'
      | 'APP_INSTALL_SKAN_ADD_TO_WISHLIST_ECPA'
      | 'APP_INSTALL_SKAN_APP_LAUNCH_COUNT'
      | 'APP_INSTALL_SKAN_APP_LAUNCH_CVR'
      | 'APP_INSTALL_SKAN_APP_LAUNCH_ECPA'
      | 'APP_INSTALL_SKAN_CHECKOUT_COUNT'
      | 'APP_INSTALL_SKAN_CHECKOUT_CVR'
      | 'APP_INSTALL_SKAN_CHECKOUT_ECPA'
      | 'APP_INSTALL_SKAN_COMPLETED_TUTORIAL_COUNT'
      | 'APP_INSTALL_SKAN_COMPLETED_TUTORIAL_CVR'
      | 'APP_INSTALL_SKAN_COMPLETED_TUTORIAL_ECPA'
      | 'APP_INSTALL_SKAN_FIRST_TIME_PURCHASE_COUNT'
      | 'APP_INSTALL_SKAN_FIRST_TIME_PURCHASE_CVR'
      | 'APP_INSTALL_SKAN_FIRST_TIME_PURCHASE_ECPA'
      | 'APP_INSTALL_SKAN_INSTALL_COUNT'
      | 'APP_INSTALL_SKAN_INSTALL_CVR'
      | 'APP_INSTALL_SKAN_INSTALL_ECPA'
      | 'APP_INSTALL_SKAN_LEVEL_ACHIEVED_COUNT'
      | 'APP_INSTALL_SKAN_LEVEL_ACHIEVED_CVR'
      | 'APP_INSTALL_SKAN_LEVEL_ACHIEVED_ECPA'
      | 'APP_INSTALL_SKAN_LOGIN_COUNT'
      | 'APP_INSTALL_SKAN_LOGIN_CVR'
      | 'APP_INSTALL_SKAN_LOGIN_ECPA'
      | 'APP_INSTALL_SKAN_ONBOARD_COMPLETED_COUNT'
      | 'APP_INSTALL_SKAN_ONBOARD_COMPLETED_CVR'
      | 'APP_INSTALL_SKAN_ONBOARD_COMPLETED_ECPA'
      | 'APP_INSTALL_SKAN_ONBOARD_STARTED_COUNT'
      | 'APP_INSTALL_SKAN_ONBOARD_STARTED_CVR'
      | 'APP_INSTALL_SKAN_ONBOARD_STARTED_ECPA'
      | 'APP_INSTALL_SKAN_PURCHASE_COUNT'
      | 'APP_INSTALL_SKAN_PURCHASE_CVR'
      | 'APP_INSTALL_SKAN_PURCHASE_ECPA'
      | 'APP_INSTALL_SKAN_RATE_COUNT'
      | 'APP_INSTALL_SKAN_RATE_CVR'
      | 'APP_INSTALL_SKAN_RATE_ECPA'
      | 'APP_INSTALL_SKAN_REINSTALL_COUNT'
      | 'APP_INSTALL_SKAN_REINSTALL_CVR'
      | 'APP_INSTALL_SKAN_REINSTALL_ECPA'
      | 'APP_INSTALL_SKAN_REVENUE'
      | 'APP_INSTALL_SKAN_ROAS'
      | 'APP_INSTALL_SKAN_SEARCH_COUNT'
      | 'APP_INSTALL_SKAN_SEARCH_CVR'
      | 'APP_INSTALL_SKAN_SEARCH_ECPA'
      | 'APP_INSTALL_SKAN_SIGN_UP_COUNT'
      | 'APP_INSTALL_SKAN_SIGN_UP_CVR'
      | 'APP_INSTALL_SKAN_SIGN_UP_ECPA'
      | 'APP_INSTALL_SKAN_SPEND_CREDITS_COUNT'
      | 'APP_INSTALL_SKAN_SPEND_CREDITS_CVR'
      | 'APP_INSTALL_SKAN_SPEND_CREDITS_ECPA'
      | 'APP_INSTALL_SKAN_START_TRIAL_COUNT'
      | 'APP_INSTALL_SKAN_START_TRIAL_CVR'
      | 'APP_INSTALL_SKAN_START_TRIAL_ECPA'
      | 'APP_INSTALL_SKAN_SUBSCRIBE_COUNT'
      | 'APP_INSTALL_SKAN_SUBSCRIBE_CVR'
      | 'APP_INSTALL_SKAN_SUBSCRIBE_ECPA'
      | 'APP_INSTALL_SKAN_TOTAL_CONVERSIONS'
      | 'APP_INSTALL_SKAN_TOTAL_INSTALL_COUNT'
      | 'APP_INSTALL_SKAN_TOTAL_INSTALL_CVR'
      | 'APP_INSTALL_SKAN_TOTAL_INSTALL_ECPA'
      | 'APP_INSTALL_SKAN_UNKNOWN_COUNT'
      | 'APP_INSTALL_SKAN_UNLOCK_ACHIEVEMENT_COUNT'
      | 'APP_INSTALL_SKAN_UNLOCK_ACHIEVEMENT_CVR'
      | 'APP_INSTALL_SKAN_UNLOCK_ACHIEVEMENT_ECPA'
      | 'APP_INSTALL_SKAN_VIEW_CONTENT_COUNT'
      | 'APP_INSTALL_SKAN_VIEW_CONTENT_CVR'
      | 'APP_INSTALL_SKAN_VIEW_CONTENT_ECPA'
      | 'APP_INSTALL_SPEND_CREDITS_COUNT'
      | 'APP_INSTALL_SPEND_CREDITS_CVR'
      | 'APP_INSTALL_SPEND_CREDITS_ECPA'
      | 'APP_INSTALL_TOTAL_CONVERSIONS'
      | 'APP_INSTALL_VIEW_CONTENT_COUNT'
      | 'APP_INSTALL_VIEW_CONTENT_CVR'
      | 'APP_INSTALL_VIEW_CONTENT_ECPA'
      | 'BID_STRATEGY'
      | 'CAMPAIGN_CREATE_TIME'
      | 'CAMPAIGN_ID'
      | 'CAMPAIGN_UPDATE_TIME'
      | 'CLICKS'
      | 'COMMUNITY'
      | 'CONVERSION_ADD_TO_CART_AVG_VALUE'
      | 'CONVERSION_ADD_TO_CART_CLICKS'
      | 'CONVERSION_ADD_TO_CART_ECPA'
      | 'CONVERSION_ADD_TO_CART_TOTAL_ITEMS'
      | 'CONVERSION_ADD_TO_CART_TOTAL_VALUE'
      | 'CONVERSION_ADD_TO_CART_VIEWS'
      | 'CONVERSION_ADD_TO_WISHLIST_AVG_VALUE'
      | 'CONVERSION_ADD_TO_WISHLIST_CLICKS'
      | 'CONVERSION_ADD_TO_WISHLIST_ECPA'
      | 'CONVERSION_ADD_TO_WISHLIST_TOTAL_ITEMS'
      | 'CONVERSION_ADD_TO_WISHLIST_TOTAL_VALUE'
      | 'CONVERSION_ADD_TO_WISHLIST_VIEWS'
      | 'CONVERSION_CUSTOM_AVG_VALUE'
      | 'CONVERSION_CUSTOM_CLICKS'
      | 'CONVERSION_CUSTOM_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_10_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_10_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_10_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_10_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_10_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_10_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_10_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_11_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_11_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_11_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_11_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_11_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_11_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_11_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_12_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_12_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_12_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_12_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_12_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_12_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_12_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_13_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_13_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_13_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_13_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_13_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_13_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_13_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_14_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_14_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_14_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_14_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_14_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_14_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_14_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_15_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_15_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_15_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_15_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_15_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_15_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_15_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_16_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_16_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_16_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_16_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_16_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_16_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_16_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_17_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_17_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_17_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_17_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_17_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_17_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_17_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_18_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_18_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_18_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_18_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_18_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_18_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_18_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_19_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_19_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_19_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_19_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_19_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_19_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_19_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_1_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_1_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_1_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_1_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_1_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_1_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_1_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_20_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_20_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_20_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_20_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_20_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_20_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_20_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_2_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_2_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_2_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_2_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_2_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_2_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_2_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_3_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_3_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_3_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_3_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_3_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_3_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_3_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_4_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_4_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_4_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_4_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_4_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_4_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_4_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_5_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_5_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_5_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_5_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_5_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_5_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_5_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_6_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_6_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_6_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_6_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_6_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_6_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_6_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_7_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_7_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_7_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_7_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_7_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_7_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_7_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_8_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_8_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_8_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_8_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_8_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_8_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_8_VIEWS'
      | 'CONVERSION_CUSTOM_EVENT_9_AVG_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_9_CLICKS'
      | 'CONVERSION_CUSTOM_EVENT_9_ECPA'
      | 'CONVERSION_CUSTOM_EVENT_9_ROAS'
      | 'CONVERSION_CUSTOM_EVENT_9_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_EVENT_9_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_EVENT_9_VIEWS'
      | 'CONVERSION_CUSTOM_TOTAL_ITEMS'
      | 'CONVERSION_CUSTOM_TOTAL_VALUE'
      | 'CONVERSION_CUSTOM_VIEWS'
      | 'CONVERSION_LEAD_AVG_VALUE'
      | 'CONVERSION_LEAD_CLICKS'
      | 'CONVERSION_LEAD_ECPA'
      | 'CONVERSION_LEAD_TOTAL_VALUE'
      | 'CONVERSION_LEAD_VIEWS'
      | 'CONVERSION_PAGE_VISIT_CLICKS'
      | 'CONVERSION_PAGE_VISIT_ECPA'
      | 'CONVERSION_PAGE_VISIT_VIEWS'
      | 'CONVERSION_PURCHASE_AVG_VALUE'
      | 'CONVERSION_PURCHASE_CLICKS'
      | 'CONVERSION_PURCHASE_ECPA'
      | 'CONVERSION_PURCHASE_TOTAL_ITEMS'
      | 'CONVERSION_PURCHASE_TOTAL_VALUE'
      | 'CONVERSION_PURCHASE_VIEWS'
      | 'CONVERSION_ROAS'
      | 'CONVERSION_SEARCH_CLICKS'
      | 'CONVERSION_SEARCH_ECPA'
      | 'CONVERSION_SEARCH_VIEWS'
      | 'CONVERSION_SIGN_UP_CLICKS'
      | 'CONVERSION_SIGN_UP_ECPA'
      | 'CONVERSION_SIGN_UP_VIEWS'
      | 'CONVERSION_SIGNUP_AVG_VALUE'
      | 'CONVERSION_SIGNUP_TOTAL_VALUE'
      | 'CONVERSION_VIEW_CONTENT_CLICKS'
      | 'CONVERSION_VIEW_CONTENT_ECPA'
      | 'CONVERSION_VIEW_CONTENT_VIEWS'
      | 'COUNTRY'
      | 'CPC'
      | 'CPV'
      | 'CTR'
      | 'CURRENCY'
      | 'DATE'
      | 'DATETIME'
      | 'DMA'
      | 'ECPM'
      | 'FREQUENCY'
      | 'GALLERY_ITEM_CAPTION'
      | 'GALLERY_ITEM_ID'
      | 'GENDER'
      | 'HOUR'
      | 'IMPRESSIONS'
      | 'INTEREST'
      | 'KEY_CONVERSION_CLICKS'
      | 'KEY_CONVERSION_ECPA'
      | 'KEY_CONVERSION_RATE'
      | 'KEY_CONVERSION_TOTAL_COUNT'
      | 'KEY_CONVERSION_VIEWS'
      | 'KEYWORD'
      | 'PLACEMENT'
      | 'POST_ID'
      | 'PRIORITY'
      | 'REACH'
      | 'REDDIT_LEADS'
      | 'REGION'
      | 'SPEND'
      | 'VIDEO_COMPLETION_RATE'
      | 'VIDEO_FULLY_VIEWABLE_IMPRESSIONS'
      | 'VIDEO_PLAYS_EXPANDED'
      | 'VIDEO_PLAYS_WITH_SOUND'
      | 'VIDEO_STARTED'
      | 'VIDEO_VIEW_RATE'
      | 'VIDEO_VIEW_RATE_6_SECONDS'
      | 'VIDEO_VIEW_RATE_15_SECONDS'
      | 'VIDEO_VIEWABLE_IMPRESSIONS'
      | 'VIDEO_WATCHED_100_PERCENT'
      | 'VIDEO_WATCHED_10_SECONDS'
      | 'VIDEO_WATCHED_25_PERCENT'
      | 'VIDEO_WATCHED_3_SECONDS'
      | 'VIDEO_WATCHED_50_PERCENT'
      | 'VIDEO_WATCHED_5_SECONDS'
      | 'VIDEO_WATCHED_75_PERCENT'
      | 'VIDEO_WATCHED_95_PERCENT'
      | 'ENGAGED_CLICK'
      | 'VIDEO_VIEWABLE_WATCHED_6_SECONDS'
      | 'VIDEO_VIEWABLE_WATCHED_15_SECONDS'
      | 'COST_PER_3_SECOND_VIEW'
      | 'COST_PER_6_SECOND_VIEW'
      | 'COST_PER_15_SECOND_VIEW'
      | 'COST_PER_COMPLETED_VIEW'
      | 'CLICK_ATTRIBUTION_WINDOW'
      | 'VIEW_ATTRIBUTION_WINDOW'
    >;

    /**
     * An ISO 8601 timestamp indicating the start of the window to fetch reporting
     * metrics for. **This field only supports UTC**, adjust the date and time to
     * account for different timezones. For example, to set the start time for midnight
     * on March 31, 2024 in EDT, provide the timestamp `2024-03-30T20:00:00Z`.
     */
    starts_at: string;

    /**
     * Breakdowns are aggregations that summarize your data as metrics (based on
     * specific operators) or statistics, computed on field values. <= 3 items. Note: A
     * limit of four items is supported only when the `COUNTRY` and `REGION` breakdowns
     * combination is present.
     */
    breakdowns?: Array<
      | 'AD_ACCOUNT_ID'
      | 'AD_GROUP_ID'
      | 'AD_ID'
      | 'CAMPAIGN_ID'
      | 'COUNTRY'
      | 'DATE'
      | 'HOUR'
      | 'DMA'
      | 'METRO'
      | 'CAROUSEL_CARD'
      | 'GALLERY_ITEM_ID'
      | 'GENDER'
      | 'INTEREST'
      | 'KEYWORD'
      | 'PLACEMENT'
      | 'OS_TYPE'
      | 'REGION'
      | 'COMMUNITY'
      | 'ACCOUNT_ID'
      | 'SUBREDDIT'
      | 'ADGROUP_ID'
    >;

    /**
     * A list of custom column IDs that you want returned in your metrics.
     */
    custom_column_ids?: Array<string>;

    /**
     * A string to restrict results by limiting field to specific values or ranges.
     *
     * Each filter has the following format:
     *
     * `<entity name> : <field name> <operation> <value>`.
     *
     * Entity Names:
     *
     * - campaign
     * - ad_group
     * - ad
     *
     * Field Names:
     *
     * - id
     * - effective_status
     *   - `PENDING_BILLING_INFO`
     *   - `PENDING_REVIEW`
     *   - `PENDING_ID_VERIFICATION`
     *   - `ACTIVE`
     *   - `REJECTED`
     *   - `PAUSED`
     *   - `CAMPAIGN_PAUSED`
     *   - `AD_GROUP_PAUSED`
     *   - `COMPLETED`
     *   - `ARCHIVED`
     *   - `DELETED`
     * - name
     *
     * Operations:
     *
     * - `==` - exact match
     * - `=@` - substring match
     */
    filter?: string;

    /**
     * The time zone you want for your metrics. This field will only take effect if the
     * date breakdown is present in your breakdowns list. If the date breakdown is not
     * present and you want to consider your time zone, please apply your time zone
     * offset directly into the `starts_at` and `ends_at` fields. To help you
     * dynamically adjust the time offset for daylight saving time, instead of
     * hardcoding a static number of hours, you can use the
     * [`List Time Zones`](/operations/List%20Time%20Zones) endpoint.
     */
    time_zone_id?:
      | 'Africa/Abidjan'
      | 'Africa/Accra'
      | 'Africa/Addis_Ababa'
      | 'Africa/Algiers'
      | 'Africa/Asmara'
      | 'Africa/Asmera'
      | 'Africa/Bamako'
      | 'Africa/Bangui'
      | 'Africa/Banjul'
      | 'Africa/Bissau'
      | 'Africa/Blantyre'
      | 'Africa/Brazzaville'
      | 'Africa/Bujumbura'
      | 'Africa/Cairo'
      | 'Africa/Casablanca'
      | 'Africa/Ceuta'
      | 'Africa/Conakry'
      | 'Africa/Dakar'
      | 'Africa/Dar_es_Salaam'
      | 'Africa/Djibouti'
      | 'Africa/Douala'
      | 'Africa/El_Aaiun'
      | 'Africa/Freetown'
      | 'Africa/Gaborone'
      | 'Africa/Harare'
      | 'Africa/Johannesburg'
      | 'Africa/Juba'
      | 'Africa/Kampala'
      | 'Africa/Khartoum'
      | 'Africa/Kigali'
      | 'Africa/Kinshasa'
      | 'Africa/Lagos'
      | 'Africa/Libreville'
      | 'Africa/Lome'
      | 'Africa/Luanda'
      | 'Africa/Lubumbashi'
      | 'Africa/Lusaka'
      | 'Africa/Malabo'
      | 'Africa/Maputo'
      | 'Africa/Maseru'
      | 'Africa/Mbabane'
      | 'Africa/Mogadishu'
      | 'Africa/Monrovia'
      | 'Africa/Nairobi'
      | 'Africa/Ndjamena'
      | 'Africa/Niamey'
      | 'Africa/Nouakchott'
      | 'Africa/Ouagadougou'
      | 'Africa/Porto-Novo'
      | 'Africa/Sao_Tome'
      | 'Africa/Timbuktu'
      | 'Africa/Tripoli'
      | 'Africa/Tunis'
      | 'Africa/Windhoek'
      | 'America/Adak'
      | 'America/Anchorage'
      | 'America/Anguilla'
      | 'America/Antigua'
      | 'America/Araguaina'
      | 'America/Argentina/Buenos_Aires'
      | 'America/Argentina/Catamarca'
      | 'America/Argentina/ComodRivadavia'
      | 'America/Argentina/Cordoba'
      | 'America/Argentina/Jujuy'
      | 'America/Argentina/La_Rioja'
      | 'America/Argentina/Mendoza'
      | 'America/Argentina/Rio_Gallegos'
      | 'America/Argentina/Salta'
      | 'America/Argentina/San_Juan'
      | 'America/Argentina/San_Luis'
      | 'America/Argentina/Tucuman'
      | 'America/Argentina/Ushuaia'
      | 'America/Aruba'
      | 'America/Asuncion'
      | 'America/Atikokan'
      | 'America/Atka'
      | 'America/Bahia'
      | 'America/Bahia_Banderas'
      | 'America/Barbados'
      | 'America/Belem'
      | 'America/Belize'
      | 'America/Blanc-Sablon'
      | 'America/Boa_Vista'
      | 'America/Bogota'
      | 'America/Boise'
      | 'America/Buenos_Aires'
      | 'America/Cambridge_Bay'
      | 'America/Campo_Grande'
      | 'America/Cancun'
      | 'America/Caracas'
      | 'America/Catamarca'
      | 'America/Cayenne'
      | 'America/Cayman'
      | 'America/Chicago'
      | 'America/Chihuahua'
      | 'America/Ciudad_Juarez'
      | 'America/Coral_Harbour'
      | 'America/Cordoba'
      | 'America/Costa_Rica'
      | 'America/Creston'
      | 'America/Cuiaba'
      | 'America/Curacao'
      | 'America/Danmarkshavn'
      | 'America/Dawson'
      | 'America/Dawson_Creek'
      | 'America/Denver'
      | 'America/Detroit'
      | 'America/Dominica'
      | 'America/Edmonton'
      | 'America/Eirunepe'
      | 'America/El_Salvador'
      | 'America/Ensenada'
      | 'America/Fort_Nelson'
      | 'America/Fort_Wayne'
      | 'America/Fortaleza'
      | 'America/Glace_Bay'
      | 'America/Godthab'
      | 'America/Goose_Bay'
      | 'America/Grand_Turk'
      | 'America/Grenada'
      | 'America/Guadeloupe'
      | 'America/Guatemala'
      | 'America/Guayaquil'
      | 'America/Guyana'
      | 'America/Halifax'
      | 'America/Havana'
      | 'America/Hermosillo'
      | 'America/Indiana/Indianapolis'
      | 'America/Indiana/Knox'
      | 'America/Indiana/Marengo'
      | 'America/Indiana/Petersburg'
      | 'America/Indiana/Tell_City'
      | 'America/Indiana/Vevay'
      | 'America/Indiana/Vincennes'
      | 'America/Indiana/Winamac'
      | 'America/Indianapolis'
      | 'America/Inuvik'
      | 'America/Iqaluit'
      | 'America/Jamaica'
      | 'America/Jujuy'
      | 'America/Juneau'
      | 'America/Kentucky/Louisville'
      | 'America/Kentucky/Monticello'
      | 'America/Knox_IN'
      | 'America/Kralendijk'
      | 'America/La_Paz'
      | 'America/Lima'
      | 'America/Los_Angeles'
      | 'America/Louisville'
      | 'America/Lower_Princes'
      | 'America/Maceio'
      | 'America/Managua'
      | 'America/Manaus'
      | 'America/Marigot'
      | 'America/Martinique'
      | 'America/Matamoros'
      | 'America/Mazatlan'
      | 'America/Mendoza'
      | 'America/Menominee'
      | 'America/Merida'
      | 'America/Metlakatla'
      | 'America/Mexico_City'
      | 'America/Miquelon'
      | 'America/Moncton'
      | 'America/Monterrey'
      | 'America/Montevideo'
      | 'America/Montreal'
      | 'America/Montserrat'
      | 'America/Nassau'
      | 'America/New_York'
      | 'America/Nipigon'
      | 'America/Nome'
      | 'America/Noronha'
      | 'America/North_Dakota/Beulah'
      | 'America/North_Dakota/Center'
      | 'America/North_Dakota/New_Salem'
      | 'America/Nuuk'
      | 'America/Ojinaga'
      | 'America/Panama'
      | 'America/Pangnirtung'
      | 'America/Paramaribo'
      | 'America/Phoenix'
      | 'America/Port-au-Prince'
      | 'America/Port_of_Spain'
      | 'America/Porto_Acre'
      | 'America/Porto_Velho'
      | 'America/Puerto_Rico'
      | 'America/Punta_Arenas'
      | 'America/Rainy_River'
      | 'America/Rankin_Inlet'
      | 'America/Recife'
      | 'America/Regina'
      | 'America/Resolute'
      | 'America/Rio_Branco'
      | 'America/Rosario'
      | 'America/Santa_Isabel'
      | 'America/Santarem'
      | 'America/Santiago'
      | 'America/Santo_Domingo'
      | 'America/Sao_Paulo'
      | 'America/Scoresbysund'
      | 'America/Shiprock'
      | 'America/Sitka'
      | 'America/St_Barthelemy'
      | 'America/St_Johns'
      | 'America/St_Kitts'
      | 'America/St_Lucia'
      | 'America/St_Thomas'
      | 'America/St_Vincent'
      | 'America/Swift_Current'
      | 'America/Tegucigalpa'
      | 'America/Thule'
      | 'America/Thunder_Bay'
      | 'America/Tijuana'
      | 'America/Toronto'
      | 'America/Tortola'
      | 'America/Vancouver'
      | 'America/Virgin'
      | 'America/Whitehorse'
      | 'America/Winnipeg'
      | 'America/Yakutat'
      | 'America/Yellowknife'
      | 'Antarctica/Casey'
      | 'Antarctica/Davis'
      | 'Antarctica/DumontDUrville'
      | 'Antarctica/Macquarie'
      | 'Antarctica/Mawson'
      | 'Antarctica/McMurdo'
      | 'Antarctica/Palmer'
      | 'Antarctica/Rothera'
      | 'Antarctica/South_Pole'
      | 'Antarctica/Syowa'
      | 'Antarctica/Troll'
      | 'Antarctica/Vostok'
      | 'Arctic/Longyearbyen'
      | 'Asia/Aden'
      | 'Asia/Almaty'
      | 'Asia/Amman'
      | 'Asia/Anadyr'
      | 'Asia/Aqtau'
      | 'Asia/Aqtobe'
      | 'Asia/Ashgabat'
      | 'Asia/Ashkhabad'
      | 'Asia/Atyrau'
      | 'Asia/Baghdad'
      | 'Asia/Bahrain'
      | 'Asia/Baku'
      | 'Asia/Bangkok'
      | 'Asia/Barnaul'
      | 'Asia/Beirut'
      | 'Asia/Bishkek'
      | 'Asia/Brunei'
      | 'Asia/Calcutta'
      | 'Asia/Chita'
      | 'Asia/Choibalsan'
      | 'Asia/Chongqing'
      | 'Asia/Chungking'
      | 'Asia/Colombo'
      | 'Asia/Dacca'
      | 'Asia/Damascus'
      | 'Asia/Dhaka'
      | 'Asia/Dili'
      | 'Asia/Dubai'
      | 'Asia/Dushanbe'
      | 'Asia/Famagusta'
      | 'Asia/Gaza'
      | 'Asia/Harbin'
      | 'Asia/Hebron'
      | 'Asia/Ho_Chi_Minh'
      | 'Asia/Hong_Kong'
      | 'Asia/Hovd'
      | 'Asia/Irkutsk'
      | 'Asia/Istanbul'
      | 'Asia/Jakarta'
      | 'Asia/Jayapura'
      | 'Asia/Jerusalem'
      | 'Asia/Kabul'
      | 'Asia/Kamchatka'
      | 'Asia/Karachi'
      | 'Asia/Kashgar'
      | 'Asia/Kathmandu'
      | 'Asia/Katmandu'
      | 'Asia/Khandyga'
      | 'Asia/Kolkata'
      | 'Asia/Krasnoyarsk'
      | 'Asia/Kuala_Lumpur'
      | 'Asia/Kuching'
      | 'Asia/Kuwait'
      | 'Asia/Macao'
      | 'Asia/Macau'
      | 'Asia/Magadan'
      | 'Asia/Makassar'
      | 'Asia/Manila'
      | 'Asia/Muscat'
      | 'Asia/Nicosia'
      | 'Asia/Novokuznetsk'
      | 'Asia/Novosibirsk'
      | 'Asia/Omsk'
      | 'Asia/Oral'
      | 'Asia/Phnom_Penh'
      | 'Asia/Pontianak'
      | 'Asia/Pyongyang'
      | 'Asia/Qatar'
      | 'Asia/Qostanay'
      | 'Asia/Qyzylorda'
      | 'Asia/Rangoon'
      | 'Asia/Riyadh'
      | 'Asia/Saigon'
      | 'Asia/Sakhalin'
      | 'Asia/Samarkand'
      | 'Asia/Seoul'
      | 'Asia/Shanghai'
      | 'Asia/Singapore'
      | 'Asia/Srednekolymsk'
      | 'Asia/Taipei'
      | 'Asia/Tashkent'
      | 'Asia/Tbilisi'
      | 'Asia/Tehran'
      | 'Asia/Tel_Aviv'
      | 'Asia/Thimbu'
      | 'Asia/Thimphu'
      | 'Asia/Tokyo'
      | 'Asia/Tomsk'
      | 'Asia/Ujung_Pandang'
      | 'Asia/Ulaanbaatar'
      | 'Asia/Ulan_Bator'
      | 'Asia/Urumqi'
      | 'Asia/Ust-Nera'
      | 'Asia/Vientiane'
      | 'Asia/Vladivostok'
      | 'Asia/Yakutsk'
      | 'Asia/Yangon'
      | 'Asia/Yekaterinburg'
      | 'Asia/Yerevan'
      | 'Atlantic/Azores'
      | 'Atlantic/Bermuda'
      | 'Atlantic/Canary'
      | 'Atlantic/Cape_Verde'
      | 'Atlantic/Faeroe'
      | 'Atlantic/Faroe'
      | 'Atlantic/Jan_Mayen'
      | 'Atlantic/Madeira'
      | 'Atlantic/Reykjavik'
      | 'Atlantic/South_Georgia'
      | 'Atlantic/St_Helena'
      | 'Atlantic/Stanley'
      | 'Australia/ACT'
      | 'Australia/Adelaide'
      | 'Australia/Brisbane'
      | 'Australia/Broken_Hill'
      | 'Australia/Canberra'
      | 'Australia/Currie'
      | 'Australia/Darwin'
      | 'Australia/Eucla'
      | 'Australia/Hobart'
      | 'Australia/LHI'
      | 'Australia/Lindeman'
      | 'Australia/Lord_Howe'
      | 'Australia/Melbourne'
      | 'Australia/NSW'
      | 'Australia/North'
      | 'Australia/Perth'
      | 'Australia/Queensland'
      | 'Australia/South'
      | 'Australia/Sydney'
      | 'Australia/Tasmania'
      | 'Australia/Victoria'
      | 'Australia/West'
      | 'Australia/Yancowinna'
      | 'Brazil/Acre'
      | 'Brazil/DeNoronha'
      | 'Brazil/East'
      | 'Brazil/West'
      | 'CET'
      | 'CST6CDT'
      | 'Canada/Atlantic'
      | 'Canada/Central'
      | 'Canada/Eastern'
      | 'Canada/Mountain'
      | 'Canada/Newfoundland'
      | 'Canada/Pacific'
      | 'Canada/Saskatchewan'
      | 'Canada/Yukon'
      | 'Chile/Continental'
      | 'Chile/EasterIsland'
      | 'Cuba'
      | 'EET'
      | 'EST'
      | 'EST5EDT'
      | 'Egypt'
      | 'Eire'
      | 'Etc/GMT'
      | 'Etc/GMT+0'
      | 'Etc/GMT+1'
      | 'Etc/GMT+10'
      | 'Etc/GMT+11'
      | 'Etc/GMT+12'
      | 'Etc/GMT+2'
      | 'Etc/GMT+3'
      | 'Etc/GMT+4'
      | 'Etc/GMT+5'
      | 'Etc/GMT+6'
      | 'Etc/GMT+7'
      | 'Etc/GMT+8'
      | 'Etc/GMT+9'
      | 'Etc/GMT-0'
      | 'Etc/GMT-1'
      | 'Etc/GMT-10'
      | 'Etc/GMT-11'
      | 'Etc/GMT-12'
      | 'Etc/GMT-13'
      | 'Etc/GMT-14'
      | 'Etc/GMT-2'
      | 'Etc/GMT-3'
      | 'Etc/GMT-4'
      | 'Etc/GMT-5'
      | 'Etc/GMT-6'
      | 'Etc/GMT-7'
      | 'Etc/GMT-8'
      | 'Etc/GMT-9'
      | 'Etc/GMT0'
      | 'Etc/Greenwich'
      | 'Etc/UCT'
      | 'Etc/UTC'
      | 'Etc/Universal'
      | 'Etc/Zulu'
      | 'Europe/Amsterdam'
      | 'Europe/Andorra'
      | 'Europe/Astrakhan'
      | 'Europe/Athens'
      | 'Europe/Belfast'
      | 'Europe/Belgrade'
      | 'Europe/Berlin'
      | 'Europe/Bratislava'
      | 'Europe/Brussels'
      | 'Europe/Bucharest'
      | 'Europe/Budapest'
      | 'Europe/Busingen'
      | 'Europe/Chisinau'
      | 'Europe/Copenhagen'
      | 'Europe/Dublin'
      | 'Europe/Gibraltar'
      | 'Europe/Guernsey'
      | 'Europe/Helsinki'
      | 'Europe/Isle_of_Man'
      | 'Europe/Istanbul'
      | 'Europe/Jersey'
      | 'Europe/Kaliningrad'
      | 'Europe/Kiev'
      | 'Europe/Kirov'
      | 'Europe/Kyiv'
      | 'Europe/Lisbon'
      | 'Europe/Ljubljana'
      | 'Europe/London'
      | 'Europe/Luxembourg'
      | 'Europe/Madrid'
      | 'Europe/Malta'
      | 'Europe/Mariehamn'
      | 'Europe/Minsk'
      | 'Europe/Monaco'
      | 'Europe/Moscow'
      | 'Europe/Nicosia'
      | 'Europe/Oslo'
      | 'Europe/Paris'
      | 'Europe/Podgorica'
      | 'Europe/Prague'
      | 'Europe/Riga'
      | 'Europe/Rome'
      | 'Europe/Samara'
      | 'Europe/San_Marino'
      | 'Europe/Sarajevo'
      | 'Europe/Saratov'
      | 'Europe/Simferopol'
      | 'Europe/Skopje'
      | 'Europe/Sofia'
      | 'Europe/Stockholm'
      | 'Europe/Tallinn'
      | 'Europe/Tirane'
      | 'Europe/Tiraspol'
      | 'Europe/Ulyanovsk'
      | 'Europe/Uzhgorod'
      | 'Europe/Vaduz'
      | 'Europe/Vatican'
      | 'Europe/Vienna'
      | 'Europe/Vilnius'
      | 'Europe/Volgograd'
      | 'Europe/Warsaw'
      | 'Europe/Zagreb'
      | 'Europe/Zaporozhye'
      | 'Europe/Zurich'
      | 'GB'
      | 'GB-Eire'
      | 'GMT'
      | 'GMT+0'
      | 'GMT-0'
      | 'GMT0'
      | 'Greenwich'
      | 'HST'
      | 'Hongkong'
      | 'Iceland'
      | 'Indian/Antananarivo'
      | 'Indian/Chagos'
      | 'Indian/Christmas'
      | 'Indian/Cocos'
      | 'Indian/Comoro'
      | 'Indian/Kerguelen'
      | 'Indian/Mahe'
      | 'Indian/Maldives'
      | 'Indian/Mauritius'
      | 'Indian/Mayotte'
      | 'Indian/Reunion'
      | 'Iran'
      | 'Israel'
      | 'Jamaica'
      | 'Japan'
      | 'Kwajalein'
      | 'Libya'
      | 'MET'
      | 'MST'
      | 'MST7MDT'
      | 'Mexico/BajaNorte'
      | 'Mexico/BajaSur'
      | 'Mexico/General'
      | 'NZ'
      | 'NZ-CHAT'
      | 'Navajo'
      | 'PRC'
      | 'PST8PDT'
      | 'Pacific/Apia'
      | 'Pacific/Auckland'
      | 'Pacific/Bougainville'
      | 'Pacific/Chatham'
      | 'Pacific/Chuuk'
      | 'Pacific/Easter'
      | 'Pacific/Efate'
      | 'Pacific/Enderbury'
      | 'Pacific/Fakaofo'
      | 'Pacific/Fiji'
      | 'Pacific/Funafuti'
      | 'Pacific/Galapagos'
      | 'Pacific/Gambier'
      | 'Pacific/Guadalcanal'
      | 'Pacific/Guam'
      | 'Pacific/Honolulu'
      | 'Pacific/Johnston'
      | 'Pacific/Kanton'
      | 'Pacific/Kiritimati'
      | 'Pacific/Kosrae'
      | 'Pacific/Kwajalein'
      | 'Pacific/Majuro'
      | 'Pacific/Marquesas'
      | 'Pacific/Midway'
      | 'Pacific/Nauru'
      | 'Pacific/Niue'
      | 'Pacific/Norfolk'
      | 'Pacific/Noumea'
      | 'Pacific/Pago_Pago'
      | 'Pacific/Palau'
      | 'Pacific/Pitcairn'
      | 'Pacific/Pohnpei'
      | 'Pacific/Ponape'
      | 'Pacific/Port_Moresby'
      | 'Pacific/Rarotonga'
      | 'Pacific/Saipan'
      | 'Pacific/Samoa'
      | 'Pacific/Tahiti'
      | 'Pacific/Tarawa'
      | 'Pacific/Tongatapu'
      | 'Pacific/Truk'
      | 'Pacific/Wake'
      | 'Pacific/Wallis'
      | 'Pacific/Yap'
      | 'Poland'
      | 'Portugal'
      | 'ROC'
      | 'ROK'
      | 'Singapore'
      | 'Turkey'
      | 'UCT'
      | 'US/Alaska'
      | 'US/Aleutian'
      | 'US/Arizona'
      | 'US/Central'
      | 'US/East-Indiana'
      | 'US/Eastern'
      | 'US/Hawaii'
      | 'US/Indiana-Starke'
      | 'US/Michigan'
      | 'US/Mountain'
      | 'US/Pacific'
      | 'US/Samoa'
      | 'UTC'
      | 'Universal'
      | 'W-SU'
      | 'WET'
      | 'Zulu';
  }

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

export interface AdAccountGetHistoryParams {
  /**
   * Query param:
   */
  page?: AdAccountGetHistoryParams.Page;

  /**
   * Body param:
   */
  data?: AdAccountGetHistoryParams.Data;
}

export namespace AdAccountGetHistoryParams {
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

  export interface Data {
    /**
     * The types of changes to show.
     */
    change_types?: Array<
      'AD_ACCOUNT' | 'AD' | 'AD_GROUP' | 'AUDIENCE' | 'BID' | 'BUDGET' | 'CAMPAIGN' | 'STATUS' | 'TARGETING'
    >;

    /**
     * The end time of the change.
     */
    end_time?: string;

    /**
     * The entity fields to show changes for.
     */
    entity_field_filters?: Array<Data.EntityFieldFilter>;

    /**
     * The entity ids to show changes for.
     */
    entity_id_filters?: Array<Data.EntityIDFilter>;

    /**
     * The entity names to show changes for.
     */
    entity_name_filters?: Array<Data.EntityNameFilter>;

    /**
     * The Reddit member id who made the change.
     */
    member_ids?: Array<string>;

    /**
     * The start time of the change.
     */
    start_time?: string;
  }

  export namespace Data {
    export interface EntityFieldFilter {
      /**
       * The entity fields to show changes for.
       */
      entity_fields: Array<string>;

      /**
       * The entity type to show changes for.
       */
      entity_type: 'AD' | 'AD_ACCOUNT' | 'AD_GROUP' | 'AUDIENCE' | 'CAMPAIGN';
    }

    export interface EntityIDFilter {
      /**
       * The entity ids to show changes for.
       */
      entity_ids: Array<string>;

      /**
       * The entity type to show changes for.
       */
      entity_type: 'AD' | 'AD_GROUP' | 'CAMPAIGN';

      /**
       * Whether to include changes for child entities. Defaults to false.
       */
      include_child_entities?: boolean;
    }

    export interface EntityNameFilter {
      /**
       * The entity names to show changes for.
       */
      entity_names: Array<string>;

      /**
       * The entity type to show changes for.
       */
      entity_type: 'AD' | 'AD_GROUP' | 'CAMPAIGN';

      /**
       * The operator to filter on.
       */
      operator: 'EQUALS' | 'LIKE';

      /**
       * Whether to include changes for child entities. Defaults to false.
       */
      include_child_entities?: boolean;
    }
  }
}

export interface AdAccountListFundingInstrumentsParams {
  /**
   * End time in ISO-8601 time of the funding instrument.
   */
  end_time?: string;

  /**
   * A list of funding instrument IDs separated by comma.
   */
  funding_instrument_ids?: Array<string>;

  /**
   * Deprecated. Please use mode=SELECTABLE or mode=ALL instead.
   */
  is_selectable?: boolean;

  /**
   * Applicable modes for the returned list of funding instruments:
   *
   * - ACTIVE: funds that have no start_time or start_time is in the past and no
   *   end_time or end_time is in the future, and haven't been manually deactivated
   *   by an admin
   * - INACTIVE: funds that have an end_time in the past OR have been manually
   *   deactivated by an admin
   * - UPCOMING: funds that have a start_time in the future AND haven't been manually
   *   deactivated by an admin
   * - SELECTABLE (default): funds that are either ACTIVE or will be active within
   *   the next 30 days AND haven't been manually deactivated by an admin. This is
   *   the default mode if no mode is provided.
   * - ALL returns all funds
   */
  mode?: 'ACTIVE' | 'INACTIVE' | 'UPCOMING' | 'SELECTABLE' | 'ALL';

  page?: AdAccountListFundingInstrumentsParams.Page;

  /**
   * Search text.
   */
  search?: string;

  /**
   * Start time in ISO-8601 time of the funding instrument.
   */
  start_time?: string;

  /**
   * A list of funding instrument types separated by comma.
   */
  types?: Array<string>;
}

export namespace AdAccountListFundingInstrumentsParams {
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

export interface AdAccountListPixelsParams {
  page?: AdAccountListPixelsParams.Page;
}

export namespace AdAccountListPixelsParams {
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

export interface AdAccountListProfilesParams {
  page?: AdAccountListProfilesParams.Page;
}

export namespace AdAccountListProfilesParams {
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

AdAccounts.AdGroups = AdGroups;
AdAccounts.Ads = Ads;
AdAccounts.Campaigns = Campaigns;
AdAccounts.CustomAudiences = CustomAudiences;
AdAccounts.LeadGenForms = LeadGenForms;
AdAccounts.SavedAudiences = SavedAudiences;

export declare namespace AdAccounts {
  export {
    type AdAccountRetrieveResponse as AdAccountRetrieveResponse,
    type AdAccountUpdateResponse as AdAccountUpdateResponse,
    type AdAccountGenerateReportResponse as AdAccountGenerateReportResponse,
    type AdAccountGetHistoryResponse as AdAccountGetHistoryResponse,
    type AdAccountListFundingInstrumentsResponse as AdAccountListFundingInstrumentsResponse,
    type AdAccountListPixelsResponse as AdAccountListPixelsResponse,
    type AdAccountListProfilesResponse as AdAccountListProfilesResponse,
    type AdAccountUpdateParams as AdAccountUpdateParams,
    type AdAccountGenerateReportParams as AdAccountGenerateReportParams,
    type AdAccountGetHistoryParams as AdAccountGetHistoryParams,
    type AdAccountListFundingInstrumentsParams as AdAccountListFundingInstrumentsParams,
    type AdAccountListPixelsParams as AdAccountListPixelsParams,
    type AdAccountListProfilesParams as AdAccountListProfilesParams,
  };

  export {
    AdGroups as AdGroups,
    type AdGroupCreateResponse as AdGroupCreateResponse,
    type AdGroupListResponse as AdGroupListResponse,
    type AdGroupCreateParams as AdGroupCreateParams,
    type AdGroupListParams as AdGroupListParams,
  };

  export {
    Ads as Ads,
    type AdCreateResponse as AdCreateResponse,
    type AdListResponse as AdListResponse,
    type AdCreateParams as AdCreateParams,
    type AdListParams as AdListParams,
  };

  export {
    Campaigns as Campaigns,
    type CampaignCreateResponse as CampaignCreateResponse,
    type CampaignListResponse as CampaignListResponse,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignListParams as CampaignListParams,
  };

  export {
    CustomAudiences as CustomAudiences,
    type CustomAudienceCreateResponse as CustomAudienceCreateResponse,
    type CustomAudienceListResponse as CustomAudienceListResponse,
    type CustomAudienceCreateParams as CustomAudienceCreateParams,
    type CustomAudienceListParams as CustomAudienceListParams,
  };

  export {
    LeadGenForms as LeadGenForms,
    type LeadGenFormCreateResponse as LeadGenFormCreateResponse,
    type LeadGenFormListResponse as LeadGenFormListResponse,
    type LeadGenFormCreateParams as LeadGenFormCreateParams,
    type LeadGenFormListParams as LeadGenFormListParams,
  };

  export {
    SavedAudiences as SavedAudiences,
    type SavedAudienceCreateResponse as SavedAudienceCreateResponse,
    type SavedAudienceListResponse as SavedAudienceListResponse,
    type SavedAudienceCreateParams as SavedAudienceCreateParams,
    type SavedAudienceListParams as SavedAudienceListParams,
  };
}
