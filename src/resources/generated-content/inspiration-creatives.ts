// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class InspirationCreatives extends APIResource {
  /**
   * Get AI generated summary of best practices followed by the ad.
   */
  retrieveSummary(
    inspirationCreativeID: string,
    options?: RequestOptions,
  ): APIPromise<InspirationCreativeRetrieveSummaryResponse> {
    return this._client.get(
      path`/generated_content/inspiration_creatives/${inspirationCreativeID}/summary`,
      options,
    );
  }

  /**
   * Search creatives for inspiration.
   */
  search(
    body: InspirationCreativeSearchParams,
    options?: RequestOptions,
  ): APIPromise<InspirationCreativeSearchResponse> {
    return this._client.post('/generated_content/inspiration_creatives/search', { body, ...options });
  }
}

export interface InspirationCreativeRetrieveSummaryResponse {
  data: InspirationCreativeRetrieveSummaryResponse.Data;
}

export namespace InspirationCreativeRetrieveSummaryResponse {
  export interface Data {
    analysis_summary?: Data.AnalysisSummary;

    inspiration_creative?: Data.InspirationCreative;
  }

  export namespace Data {
    export interface AnalysisSummary {
      /**
       * Headline analysis.
       */
      headline?: Array<string>;

      /**
       * Summary analysis derived from the creative's media content.
       */
      media?: Array<string>;
    }

    export interface InspirationCreative {
      /**
       * The ID of the creative.
       */
      id?: string;

      /**
       * The budget category of the campaign the creative is running under.
       */
      budget_category?: string;

      creative?: InspirationCreative.Creative;

      /**
       * Enum representing the type for an industry.
       */
      industry?:
        | 'ADULT'
        | 'ADVERTISING'
        | 'ALCOHOL'
        | 'AUTO'
        | 'CLOTHING_AND_FASHION'
        | 'CONSULTING'
        | 'CONSUMER_PACKAGED_GOODS'
        | 'DATING'
        | 'EDUCATION'
        | 'EMPLOYMENT'
        | 'ENTERTAINMENT'
        | 'FINANCIAL_SERVICES'
        | 'GAMBLING_AND_FANTASY_SPORTS'
        | 'GAMING'
        | 'HEALTH_AND_BEAUTY'
        | 'OTHER'
        | 'POLITICS_AND_GOVERNMENT'
        | 'PUBLISHING'
        | 'REAL_ESTATE'
        | 'RESTAURANTS_AND_FOOD'
        | 'RETAIL_AND_ECOMMERCE'
        | 'SPORTS'
        | 'TECH_B2B'
        | 'TECH_B2C'
        | 'TECH_OTHER'
        | 'TRAVEL';

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
       * The client location to place the advertisement.
       */
      placements?: Array<
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
       * The profile information of the creative.
       */
      profile_info?: InspirationCreative.ProfileInfo;
    }

    export namespace InspirationCreative {
      export interface Creative {
        /**
         * The unique identifier of the post.
         */
        id?: string;

        /**
         * Enable comments on the post, manageable in the
         * [Ads Manager](https://business.reddithelp.com/s/article/Managing-ads-with-comments-on).
         */
        allow_comments?: boolean;

        /**
         * The content for text posts.
         */
        body?: string;

        /**
         * The content of the post. Carousel posts support arrays of up to 6 images. Image,
         * Video and Text posts support only 1.
         */
        content?: Array<Creative.Content>;

        /**
         * The time that this entity was created represented in ISO 8601.
         */
        created_at?: string;

        /**
         * The title of the post.
         */
        headline?: string;

        /**
         * Whether the body of the TEXT post is in richtext or not.
         */
        is_richtext?: boolean | null;

        /**
         * Link to the post on Reddit.
         */
        post_url?: string;

        /**
         * The unique identifier of the profile that the post belongs to.
         */
        profile_id?: string | null;

        /**
         * The URL to the thumbnail image for the post. Required for video posts.
         */
        thumbnail_url?: string | null;

        /**
         * The type of the post.
         */
        type?: 'CAROUSEL' | 'IMAGE' | 'TEXT' | 'VIDEO';
      }

      export namespace Creative {
        export interface Content {
          /**
           * Text for the call to action button.
           */
          call_to_action?:
            | 'Apply Now'
            | 'Contact Us'
            | 'Download'
            | 'Get a Quote'
            | 'Get Showtimes'
            | 'Install'
            | 'Learn More'
            | 'Order Now'
            | 'Play Now'
            | 'Pre-order Now'
            | 'See Menu'
            | 'Shop Now'
            | 'Sign Up'
            | 'View More'
            | 'Watch Now'
            | 'Book Now'
            | 'Buy Tickets'
            | 'Get Directions'
            | 'Listen Now'
            | 'Read More'
            | 'Subscribe'
            | 'Visit Store'
            | 'Donate Now'
            | null;

          /**
           * The caption for the Carousel cards.
           */
          caption?: string | null;

          /**
           * The URL to navigate users to on click. Required for Image and Carousel posts.
           */
          destination_url?: string | null;

          /**
           * Optional display string for the destination URL.
           */
          display_url?: string | null;

          /**
           * The URL of the media for the post. Required for Image, Video and Carousel posts.
           */
          media_url?: string | null;
        }
      }

      /**
       * The profile information of the creative.
       */
      export interface ProfileInfo {
        /**
         * The Reddit username of the profile.
         */
        name?: string;

        /**
         * The URL of the profile's snoovatar icon.
         */
        snoovatar_icon_url?: string | null;
      }
    }
  }
}

export interface InspirationCreativeSearchResponse {
  data: Array<InspirationCreativeSearchResponse.Data>;

  pagination: InspirationCreativeSearchResponse.Pagination;
}

export namespace InspirationCreativeSearchResponse {
  export interface Data {
    /**
     * The ID of the creative.
     */
    id?: string;

    /**
     * The budget category of the campaign the creative is running under.
     */
    budget_category?: string;

    creative?: Data.Creative;

    /**
     * Enum representing the type for an industry.
     */
    industry?:
      | 'ADULT'
      | 'ADVERTISING'
      | 'ALCOHOL'
      | 'AUTO'
      | 'CLOTHING_AND_FASHION'
      | 'CONSULTING'
      | 'CONSUMER_PACKAGED_GOODS'
      | 'DATING'
      | 'EDUCATION'
      | 'EMPLOYMENT'
      | 'ENTERTAINMENT'
      | 'FINANCIAL_SERVICES'
      | 'GAMBLING_AND_FANTASY_SPORTS'
      | 'GAMING'
      | 'HEALTH_AND_BEAUTY'
      | 'OTHER'
      | 'POLITICS_AND_GOVERNMENT'
      | 'PUBLISHING'
      | 'REAL_ESTATE'
      | 'RESTAURANTS_AND_FOOD'
      | 'RETAIL_AND_ECOMMERCE'
      | 'SPORTS'
      | 'TECH_B2B'
      | 'TECH_B2C'
      | 'TECH_OTHER'
      | 'TRAVEL';

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
     * The client location to place the advertisement.
     */
    placements?: Array<
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
     * The profile information of the creative.
     */
    profile_info?: Data.ProfileInfo;
  }

  export namespace Data {
    export interface Creative {
      /**
       * The unique identifier of the post.
       */
      id?: string;

      /**
       * Enable comments on the post, manageable in the
       * [Ads Manager](https://business.reddithelp.com/s/article/Managing-ads-with-comments-on).
       */
      allow_comments?: boolean;

      /**
       * The content for text posts.
       */
      body?: string;

      /**
       * The content of the post. Carousel posts support arrays of up to 6 images. Image,
       * Video and Text posts support only 1.
       */
      content?: Array<Creative.Content>;

      /**
       * The time that this entity was created represented in ISO 8601.
       */
      created_at?: string;

      /**
       * The title of the post.
       */
      headline?: string;

      /**
       * Whether the body of the TEXT post is in richtext or not.
       */
      is_richtext?: boolean | null;

      /**
       * Link to the post on Reddit.
       */
      post_url?: string;

      /**
       * The unique identifier of the profile that the post belongs to.
       */
      profile_id?: string | null;

      /**
       * The URL to the thumbnail image for the post. Required for video posts.
       */
      thumbnail_url?: string | null;

      /**
       * The type of the post.
       */
      type?: 'CAROUSEL' | 'IMAGE' | 'TEXT' | 'VIDEO';
    }

    export namespace Creative {
      export interface Content {
        /**
         * Text for the call to action button.
         */
        call_to_action?:
          | 'Apply Now'
          | 'Contact Us'
          | 'Download'
          | 'Get a Quote'
          | 'Get Showtimes'
          | 'Install'
          | 'Learn More'
          | 'Order Now'
          | 'Play Now'
          | 'Pre-order Now'
          | 'See Menu'
          | 'Shop Now'
          | 'Sign Up'
          | 'View More'
          | 'Watch Now'
          | 'Book Now'
          | 'Buy Tickets'
          | 'Get Directions'
          | 'Listen Now'
          | 'Read More'
          | 'Subscribe'
          | 'Visit Store'
          | 'Donate Now'
          | null;

        /**
         * The caption for the Carousel cards.
         */
        caption?: string | null;

        /**
         * The URL to navigate users to on click. Required for Image and Carousel posts.
         */
        destination_url?: string | null;

        /**
         * Optional display string for the destination URL.
         */
        display_url?: string | null;

        /**
         * The URL of the media for the post. Required for Image, Video and Carousel posts.
         */
        media_url?: string | null;
      }
    }

    /**
     * The profile information of the creative.
     */
    export interface ProfileInfo {
      /**
       * The Reddit username of the profile.
       */
      name?: string;

      /**
       * The URL of the profile's snoovatar icon.
       */
      snoovatar_icon_url?: string | null;
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

export interface InspirationCreativeSearchParams {
  data: InspirationCreativeSearchParams.Data;
}

export namespace InspirationCreativeSearchParams {
  export interface Data {
    /**
     * Filter search results.
     */
    filters?: string;

    /**
     * Search query.
     */
    query?: string;
  }
}

export declare namespace InspirationCreatives {
  export {
    type InspirationCreativeRetrieveSummaryResponse as InspirationCreativeRetrieveSummaryResponse,
    type InspirationCreativeSearchResponse as InspirationCreativeSearchResponse,
    type InspirationCreativeSearchParams as InspirationCreativeSearchParams,
  };
}
