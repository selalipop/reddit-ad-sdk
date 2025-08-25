// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Posts extends APIResource {
  /**
   * Create a post.<h2>Rate Limit</h2>
   *
   *   <div><a href="/ratelimits/Creative Management">See the rate limits for <strong>Creative Management</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-creative-management</span></div>
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
    profileID: string,
    body: PostCreateParams,
    options?: RequestOptions,
  ): APIPromise<PostCreateResponse> {
    return this._client.post(path`/profiles/${profileID}/posts`, { body, ...options });
  }

  /**
   * Lists up to 1,000 of the most recent posts for the specified profile.<h2>Rate
   * Limit</h2>
   *
   *   <div><a href="/ratelimits/Creative Management">See the rate limits for <strong>Creative Management</strong></a></div>
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
   *                     <div role="heading">Policy Slug: <span class="sl-font-mono sl-font-medium sl-mx-0.5 sl-px-1 sl-py-0.5 sl-bg-code sl-text-on-code sl-rounded sl-border" style="font-size: 0.8125em;"> ads-creative-management</span></div>
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
  list(
    profileID: string,
    query: PostListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PostListResponse> {
    return this._client.get(path`/profiles/${profileID}/posts`, { query, ...options });
  }
}

export interface PostCreateResponse {
  data: PostCreateResponse.Data;
}

export namespace PostCreateResponse {
  export interface Data {
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
    content?: Array<Data.Content>;

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

  export namespace Data {
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
}

export interface PostListResponse {
  data: Array<PostListResponse.Data>;

  pagination: PostListResponse.Pagination;
}

export namespace PostListResponse {
  export interface Data {
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
    content?: Array<Data.Content>;

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

  export namespace Data {
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

export interface PostCreateParams {
  data: PostCreateParams.Data;
}

export namespace PostCreateParams {
  export interface Data {
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
    content?: Array<Data.Content>;

    /**
     * The title of the post.
     */
    headline?: string;

    /**
     * Whether the body of the TEXT post is in richtext or not.
     */
    is_richtext?: boolean | null;

    /**
     * The URL to the thumbnail image for the post. Required for video posts.
     */
    thumbnail_url?: string | null;

    /**
     * The type of the post.
     */
    type?: 'CAROUSEL' | 'IMAGE' | 'TEXT' | 'VIDEO';
  }

  export namespace Data {
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
}

export interface PostListParams {
  page?: PostListParams.Page;

  /**
   * The source of posts to be fetched.
   */
  source?: 'ORGANIC' | 'PROMOTED';

  /**
   * The type of posts to be fetched.
   */
  type?: 'CAROUSEL' | 'IMAGE' | 'TEXT' | 'VIDEO';
}

export namespace PostListParams {
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

export declare namespace Posts {
  export {
    type PostCreateResponse as PostCreateResponse,
    type PostListResponse as PostListResponse,
    type PostCreateParams as PostCreateParams,
    type PostListParams as PostListParams,
  };
}
