// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ProductFeeds extends APIResource {
  /**
   * Set up a new feed for a catalog. Each catalog can contain up to 2 feeds, but
   * they must be of different types.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Product Catalog">See the rate limits for <strong>Product Catalog</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-product-catalog</span></div>
   *                 </div>
   *             </summary>
   *             <div class="sl-panel__content-wrapper sl-border-t" role="region">
   *                 <div class="sl-panel__content sl-p-4">
   *                     <div class="sl--m-2">
   *                         <div>
   *                             <div class="sl-m-2 sl-p-2 sl-border">
   *                                 <div class="sl-prose sl-markdown-viewer" style="font-size: 12px;">
   *                                     <ul>
   *                                         <li>Window: 300 seconds</li>
   *                                         <li>Quota: 7000 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-product-catalog-burst</span></div>
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
   *                                         <li>Quota: 3000 requests</li>
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
    catalogID: string,
    body: ProductFeedCreateParams,
    options?: RequestOptions,
  ): APIPromise<ProductFeedCreateResponse> {
    return this._client.post(path`/product_catalogs/${catalogID}/product_feeds`, { body, ...options });
  }

  /**
   * Retrieve metadata for all feeds in a catalog.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Product Catalog">See the rate limits for <strong>Product Catalog</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-product-catalog</span></div>
   *                 </div>
   *             </summary>
   *             <div class="sl-panel__content-wrapper sl-border-t" role="region">
   *                 <div class="sl-panel__content sl-p-4">
   *                     <div class="sl--m-2">
   *                         <div>
   *                             <div class="sl-m-2 sl-p-2 sl-border">
   *                                 <div class="sl-prose sl-markdown-viewer" style="font-size: 12px;">
   *                                     <ul>
   *                                         <li>Window: 300 seconds</li>
   *                                         <li>Quota: 7000 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-product-catalog-burst</span></div>
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
   *                                         <li>Quota: 3000 requests</li>
   *                                     </ul>
   *                                 </div>
   *                             </div>
   *                         </div>
   *                     </div>
   *                 </div>
   *             </div>
   *         </details>
   */
  list(catalogID: string, options?: RequestOptions): APIPromise<ProductFeedListResponse> {
    return this._client.get(path`/product_catalogs/${catalogID}/product_feeds`, options);
  }
}

export interface ProductFeedCreateResponse {
  data: ProductFeedCreateResponse.Data;
}

export namespace ProductFeedCreateResponse {
  export interface Data {
    /**
     * The ID of the product feed.
     */
    id?: string;

    /**
     * The ID of the product catalog that this feed belongs to.
     */
    catalog_id?: string;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The update mode of this feed.
     */
    mode?: 'REPLACE' | 'UPDATE';

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The name of the feed.
     */
    name?: string | null;

    /**
     * The password that is needed to access the URL.
     */
    password?: string | null;

    /**
     * The schedule of the feed.
     */
    schedule?: Data.Schedule | null;

    /**
     * The list of feed transformations.
     */
    transformations?: Array<Data.Transformation> | null;

    /**
     * The URL of the product feed to fetch.
     */
    url?: string;

    /**
     * The username that is needed to access the URL.
     */
    username?: string | null;
  }

  export namespace Data {
    /**
     * The schedule of the feed.
     */
    export interface Schedule {
      /**
       * The day of month to fetch feed for monthly schedules.
       */
      day_of_month?: number | null;

      /**
       * The day of week to fetch feed for weekly schedules.
       */
      day_of_week?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY' | null;

      /**
       * Hour of the day to fetch the product feed.
       */
      hour?: number | null;

      /**
       * The interval at which the product feed gets fetched.
       */
      interval?: 'HOURLY' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | null;

      /**
       * Specifies number of intervals between each import. The default is 1. For
       * example, if `interval_count` is 2 and `interval` is `daily`, the feed will be
       * imported every 2 days at the specified time.
       */
      interval_count?: number | null;

      /**
       * Describes whether the schedule is paused or not.
       */
      is_paused?: boolean | null;

      /**
       * Minute of the hour to fetch the product feed.
       */
      minute?: number | null;

      /**
       * The next time the feed will be imported in ISO 8601.
       */
      next_import_at?: string | null;

      /**
       * The default time zone setting for this entity.
       */
      timezone?:
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
    }

    export interface Transformation {
      /**
       * The dictionary of required arguments for the transformation.
       */
      arguments?: unknown;

      /**
       * Type of the feed transformation.
       */
      type?: string;
    }
  }
}

export interface ProductFeedListResponse {
  data: Array<ProductFeedListResponse.Data>;
}

export namespace ProductFeedListResponse {
  export interface Data {
    /**
     * The ID of the product feed.
     */
    id?: string;

    /**
     * The ID of the product catalog that this feed belongs to.
     */
    catalog_id?: string;

    /**
     * The time that this entity was created represented in ISO 8601.
     */
    created_at?: string;

    /**
     * The update mode of this feed.
     */
    mode?: 'REPLACE' | 'UPDATE';

    /**
     * The last time that this entity was modified represented in ISO 8601.
     */
    modified_at?: string;

    /**
     * The name of the feed.
     */
    name?: string | null;

    /**
     * The password that is needed to access the URL.
     */
    password?: string | null;

    /**
     * The schedule of the feed.
     */
    schedule?: Data.Schedule | null;

    /**
     * The list of feed transformations.
     */
    transformations?: Array<Data.Transformation> | null;

    /**
     * The URL of the product feed to fetch.
     */
    url?: string;

    /**
     * The username that is needed to access the URL.
     */
    username?: string | null;
  }

  export namespace Data {
    /**
     * The schedule of the feed.
     */
    export interface Schedule {
      /**
       * The day of month to fetch feed for monthly schedules.
       */
      day_of_month?: number | null;

      /**
       * The day of week to fetch feed for weekly schedules.
       */
      day_of_week?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY' | null;

      /**
       * Hour of the day to fetch the product feed.
       */
      hour?: number | null;

      /**
       * The interval at which the product feed gets fetched.
       */
      interval?: 'HOURLY' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | null;

      /**
       * Specifies number of intervals between each import. The default is 1. For
       * example, if `interval_count` is 2 and `interval` is `daily`, the feed will be
       * imported every 2 days at the specified time.
       */
      interval_count?: number | null;

      /**
       * Describes whether the schedule is paused or not.
       */
      is_paused?: boolean | null;

      /**
       * Minute of the hour to fetch the product feed.
       */
      minute?: number | null;

      /**
       * The next time the feed will be imported in ISO 8601.
       */
      next_import_at?: string | null;

      /**
       * The default time zone setting for this entity.
       */
      timezone?:
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
    }

    export interface Transformation {
      /**
       * The dictionary of required arguments for the transformation.
       */
      arguments?: unknown;

      /**
       * Type of the feed transformation.
       */
      type?: string;
    }
  }
}

export interface ProductFeedCreateParams {
  data: ProductFeedCreateParams.Data;
}

export namespace ProductFeedCreateParams {
  export interface Data {
    /**
     * The update mode of this feed.
     */
    mode: 'REPLACE' | 'UPDATE';

    /**
     * The URL of the product feed to fetch.
     */
    url: string;

    /**
     * The name of the feed.
     */
    name?: string | null;

    /**
     * The password that is needed to access the URL.
     */
    password?: string | null;

    /**
     * The schedule of the feed.
     */
    schedule?: Data.Schedule | null;

    /**
     * The list of feed transformations.
     */
    transformations?: Array<Data.Transformation> | null;

    /**
     * The username that is needed to access the URL.
     */
    username?: string | null;
  }

  export namespace Data {
    /**
     * The schedule of the feed.
     */
    export interface Schedule {
      /**
       * The day of month to fetch feed for monthly schedules.
       */
      day_of_month?: number | null;

      /**
       * The day of week to fetch feed for weekly schedules.
       */
      day_of_week?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY' | null;

      /**
       * Hour of the day to fetch the product feed.
       */
      hour?: number | null;

      /**
       * The interval at which the product feed gets fetched.
       */
      interval?: 'HOURLY' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | null;

      /**
       * Specifies number of intervals between each import. The default is 1. For
       * example, if `interval_count` is 2 and `interval` is `daily`, the feed will be
       * imported every 2 days at the specified time.
       */
      interval_count?: number | null;

      /**
       * Describes whether the schedule is paused or not.
       */
      is_paused?: boolean | null;

      /**
       * Minute of the hour to fetch the product feed.
       */
      minute?: number | null;

      /**
       * The default time zone setting for this entity.
       */
      timezone?:
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
    }

    export interface Transformation {
      /**
       * The dictionary of required arguments for the transformation.
       */
      arguments?: unknown;

      /**
       * Type of the feed transformation.
       */
      type?: string;
    }
  }
}

export declare namespace ProductFeeds {
  export {
    type ProductFeedCreateResponse as ProductFeedCreateResponse,
    type ProductFeedListResponse as ProductFeedListResponse,
    type ProductFeedCreateParams as ProductFeedCreateParams,
  };
}
