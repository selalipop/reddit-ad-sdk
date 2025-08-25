// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AdAccounts extends APIResource {
  /**
   * Get a list of ad_accounts under a business.<h2>Rate Limit</h2>
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
    businessID: string,
    query: AdAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdAccountListResponse> {
    return this._client.get(path`/businesses/${businessID}/ad_accounts`, { query, ...options });
  }

  /**
   * Query ad accounts by business.<h2>Rate Limit</h2>
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
  query(
    businessID: string,
    params: AdAccountQueryParams,
    options?: RequestOptions,
  ): APIPromise<AdAccountQueryResponse> {
    const { page, ...body } = params;
    return this._client.post(path`/businesses/${businessID}/ad_accounts/query`, {
      query: { page },
      body,
      ...options,
    });
  }
}

export interface AdAccountListResponse {
  data: Array<AdAccountListResponse.Data>;

  pagination: AdAccountListResponse.Pagination;
}

export namespace AdAccountListResponse {
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

export interface AdAccountQueryResponse {
  data: Array<AdAccountQueryResponse.Data>;

  pagination: AdAccountQueryResponse.Pagination;
}

export namespace AdAccountQueryResponse {
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

export interface AdAccountListParams {
  /**
   * IDs of ad accounts to search for within the business. Ad accounts should be
   * comma-separated.
   */
  ids?: string;

  page?: AdAccountListParams.Page;
}

export namespace AdAccountListParams {
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

export interface AdAccountQueryParams {
  /**
   * Body param:
   */
  data: AdAccountQueryParams.Data;

  /**
   * Query param:
   */
  page?: AdAccountQueryParams.Page;
}

export namespace AdAccountQueryParams {
  export interface Data {
    /**
     * Only return ad accounts to which the specified actors not have access.
     */
    actors?: Array<Data.Actor> | null;

    /**
     * Only return ad accounts that have access to these assets.
     */
    assets?: Array<Data.Asset> | null;

    /**
     * Filter string to query the entity. If null, the response contains all ad
     * accounts within the business.
     */
    filter?: string | null;

    /**
     * Only return ad accounts to which specified actors do not have these roles.
     */
    roles?: Array<'ADMIN' | 'ANALYST' | 'CATALOG_ADMIN' | 'BUSINESS_ADMIN' | 'CREATOR' | 'USE_ASSET'> | null;
  }

  export namespace Data {
    export interface Actor {
      /**
       * The unique identifier for the actor.
       */
      id?: string;

      /**
       * The type of the actor.
       */
      type?: 'AD_ACCOUNT' | 'BUSINESS' | 'INVITATION' | 'MEMBER';
    }

    export interface Asset {
      /**
       * The unique identifier for the asset.
       */
      id?: string;

      /**
       * The type of the asset.
       */
      type?:
        | 'AD_ACCOUNT'
        | 'CUSTOM_AUDIENCE'
        | 'FUNDING_INSTRUMENT'
        | 'PIXEL'
        | 'PRODUCT_CATALOG'
        | 'PROFILE';
    }
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

export declare namespace AdAccounts {
  export {
    type AdAccountListResponse as AdAccountListResponse,
    type AdAccountQueryResponse as AdAccountQueryResponse,
    type AdAccountListParams as AdAccountListParams,
    type AdAccountQueryParams as AdAccountQueryParams,
  };
}
