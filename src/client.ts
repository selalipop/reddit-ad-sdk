// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  AdGroupRetrieveResponse,
  AdGroupUpdateParams,
  AdGroupUpdateResponse,
  AdGroups,
} from './resources/ad-groups';
import { AdRetrieveResponse, AdUpdateParams, AdUpdateResponse, Ads } from './resources/ads';
import {
  AppRetrieveLastFiredAtReportResponse,
  AppRetrieveSkanAvailabilityParams,
  AppRetrieveSkanAvailabilityResponse,
  Apps,
} from './resources/apps';
import {
  CampaignRetrieveResponse,
  CampaignUpdateParams,
  CampaignUpdateResponse,
  Campaigns,
} from './resources/campaigns';
import {
  CatalogImportListIssuesParams,
  CatalogImportListIssuesResponse,
  CatalogImportRetrieveReportResponse,
  CatalogImports,
} from './resources/catalog-imports';
import {
  CustomAudienceRetrieveResponse,
  CustomAudienceUpdateUsersParams,
  CustomAudiences,
} from './resources/custom-audiences';
import {
  Forecasting,
  ForecastingSuggestBidsParams,
  ForecastingSuggestBidsResponse,
} from './resources/forecasting';
import {
  FundingInstrumentListAllocationsParams,
  FundingInstrumentListAllocationsResponse,
  FundingInstruments,
} from './resources/funding-instruments';
import { Industries, IndustryListResponse } from './resources/industries';
import { LeadGenFormRetrieveResponse, LeadGenForms } from './resources/lead-gen-forms';
import { Me, MeListBusinessesParams, MeListBusinessesResponse, MeRetrieveResponse } from './resources/me';
import { PixelRetrieveLastFiredAtResponse, Pixels } from './resources/pixels';
import { PostRetrieveResponse, PostUpdateParams, PostUpdateResponse, Posts } from './resources/posts';
import {
  ProductFeedRetrieveResponse,
  ProductFeedUpdateParams,
  ProductFeedUpdateResponse,
  ProductFeeds,
} from './resources/product-feeds';
import {
  ProductSetListProductsParams,
  ProductSetListProductsResponse,
  ProductSetRetrieveResponse,
  ProductSetUpdateParams,
  ProductSetUpdateResponse,
  ProductSets,
} from './resources/product-sets';
import {
  SavedAudienceRetrieveResponse,
  SavedAudienceUpdateParams,
  SavedAudienceUpdateResponse,
  SavedAudiences,
} from './resources/saved-audiences';
import { TimeZoneListParams, TimeZoneListResponse, TimeZones } from './resources/time-zones';
import {
  AdAccountGenerateReportParams,
  AdAccountGenerateReportResponse,
  AdAccountGetHistoryParams,
  AdAccountGetHistoryResponse,
  AdAccountListFundingInstrumentsParams,
  AdAccountListFundingInstrumentsResponse,
  AdAccountListPixelsParams,
  AdAccountListPixelsResponse,
  AdAccountListProfilesParams,
  AdAccountListProfilesResponse,
  AdAccountRetrieveResponse,
  AdAccountUpdateParams,
  AdAccountUpdateResponse,
  AdAccounts,
} from './resources/ad-accounts/ad-accounts';
import {
  BusinessListPixelsParams,
  BusinessListPixelsResponse,
  BusinessListProfilesParams,
  BusinessListProfilesResponse,
  BusinessRetrieveResponse,
  BusinessUpdateParams,
  BusinessUpdateResponse,
  Businesses,
} from './resources/businesses/businesses';
import { GeneratedContent } from './resources/generated-content/generated-content';
import {
  ProductCatalogListImportsParams,
  ProductCatalogListImportsResponse,
  ProductCatalogRetrieveResponse,
  ProductCatalogUpdateParams,
  ProductCatalogUpdateResponse,
  ProductCatalogs,
} from './resources/product-catalogs/product-catalogs';
import { ProfileRetrieveResponse, Profiles } from './resources/profiles/profiles';
import {
  Targeting,
  TargetingListCarriersParams,
  TargetingListCarriersResponse,
  TargetingListDevicesParams,
  TargetingListDevicesResponse,
  TargetingListGeolocationsParams,
  TargetingListGeolocationsResponse,
  TargetingListInterestsResponse,
  TargetingListThirdPartyAudiencesParams,
  TargetingListThirdPartyAudiencesResponse,
  TargetingValidateGeolocationsParams,
  TargetingValidateGeolocationsResponse,
  TargetingValidateKeywordsParams,
  TargetingValidateKeywordsResponse,
} from './resources/targeting/targeting';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Defaults to process.env['REDDIT_AD_API_API_KEY'].
   */
  apiKey?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['REDDIT_AD_API_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['REDDIT_AD_API_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Reddit Ad API API.
 */
export class RedditAdAPI {
  apiKey: string | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Reddit Ad API API.
   *
   * @param {string | null | undefined} [opts.apiKey=process.env['REDDIT_AD_API_API_KEY'] ?? null]
   * @param {string} [opts.baseURL=process.env['REDDIT_AD_API_BASE_URL'] ?? https://ads-api.reddit.com/api/v3] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('REDDIT_AD_API_BASE_URL'),
    apiKey = readEnv('REDDIT_AD_API_API_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://ads-api.reddit.com/api/v3`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? RedditAdAPI.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('REDDIT_AD_API_LOG'), "process.env['REDDIT_AD_API_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://ads-api.reddit.com/api/v3';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    if (this.apiKey && values.get('authorization')) {
      return;
    }
    if (nulls.has('authorization')) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected the apiKey to be set. Or for the "Authorization" headers to be explicitly omitted',
    );
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    if (this.apiKey == null) {
      return undefined;
    }
    return buildHeaders([{ Authorization: `Bearer ${this.apiKey}` }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static RedditAdAPI = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static RedditAdAPIError = Errors.RedditAdAPIError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  adAccounts: API.AdAccounts = new API.AdAccounts(this);
  adGroups: API.AdGroups = new API.AdGroups(this);
  ads: API.Ads = new API.Ads(this);
  apps: API.Apps = new API.Apps(this);
  businesses: API.Businesses = new API.Businesses(this);
  campaigns: API.Campaigns = new API.Campaigns(this);
  catalogImports: API.CatalogImports = new API.CatalogImports(this);
  customAudiences: API.CustomAudiences = new API.CustomAudiences(this);
  forecasting: API.Forecasting = new API.Forecasting(this);
  fundingInstruments: API.FundingInstruments = new API.FundingInstruments(this);
  generatedContent: API.GeneratedContent = new API.GeneratedContent(this);
  industries: API.Industries = new API.Industries(this);
  leadGenForms: API.LeadGenForms = new API.LeadGenForms(this);
  me: API.Me = new API.Me(this);
  pixels: API.Pixels = new API.Pixels(this);
  posts: API.Posts = new API.Posts(this);
  productCatalogs: API.ProductCatalogs = new API.ProductCatalogs(this);
  productFeeds: API.ProductFeeds = new API.ProductFeeds(this);
  productSets: API.ProductSets = new API.ProductSets(this);
  profiles: API.Profiles = new API.Profiles(this);
  savedAudiences: API.SavedAudiences = new API.SavedAudiences(this);
  targeting: API.Targeting = new API.Targeting(this);
  timeZones: API.TimeZones = new API.TimeZones(this);
}

RedditAdAPI.AdAccounts = AdAccounts;
RedditAdAPI.AdGroups = AdGroups;
RedditAdAPI.Ads = Ads;
RedditAdAPI.Apps = Apps;
RedditAdAPI.Businesses = Businesses;
RedditAdAPI.Campaigns = Campaigns;
RedditAdAPI.CatalogImports = CatalogImports;
RedditAdAPI.CustomAudiences = CustomAudiences;
RedditAdAPI.Forecasting = Forecasting;
RedditAdAPI.FundingInstruments = FundingInstruments;
RedditAdAPI.GeneratedContent = GeneratedContent;
RedditAdAPI.Industries = Industries;
RedditAdAPI.LeadGenForms = LeadGenForms;
RedditAdAPI.Me = Me;
RedditAdAPI.Pixels = Pixels;
RedditAdAPI.Posts = Posts;
RedditAdAPI.ProductCatalogs = ProductCatalogs;
RedditAdAPI.ProductFeeds = ProductFeeds;
RedditAdAPI.ProductSets = ProductSets;
RedditAdAPI.Profiles = Profiles;
RedditAdAPI.SavedAudiences = SavedAudiences;
RedditAdAPI.Targeting = Targeting;
RedditAdAPI.TimeZones = TimeZones;

export declare namespace RedditAdAPI {
  export type RequestOptions = Opts.RequestOptions;

  export {
    AdAccounts as AdAccounts,
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
    type AdGroupRetrieveResponse as AdGroupRetrieveResponse,
    type AdGroupUpdateResponse as AdGroupUpdateResponse,
    type AdGroupUpdateParams as AdGroupUpdateParams,
  };

  export {
    Ads as Ads,
    type AdRetrieveResponse as AdRetrieveResponse,
    type AdUpdateResponse as AdUpdateResponse,
    type AdUpdateParams as AdUpdateParams,
  };

  export {
    Apps as Apps,
    type AppRetrieveLastFiredAtReportResponse as AppRetrieveLastFiredAtReportResponse,
    type AppRetrieveSkanAvailabilityResponse as AppRetrieveSkanAvailabilityResponse,
    type AppRetrieveSkanAvailabilityParams as AppRetrieveSkanAvailabilityParams,
  };

  export {
    Businesses as Businesses,
    type BusinessRetrieveResponse as BusinessRetrieveResponse,
    type BusinessUpdateResponse as BusinessUpdateResponse,
    type BusinessListPixelsResponse as BusinessListPixelsResponse,
    type BusinessListProfilesResponse as BusinessListProfilesResponse,
    type BusinessUpdateParams as BusinessUpdateParams,
    type BusinessListPixelsParams as BusinessListPixelsParams,
    type BusinessListProfilesParams as BusinessListProfilesParams,
  };

  export {
    Campaigns as Campaigns,
    type CampaignRetrieveResponse as CampaignRetrieveResponse,
    type CampaignUpdateResponse as CampaignUpdateResponse,
    type CampaignUpdateParams as CampaignUpdateParams,
  };

  export {
    CatalogImports as CatalogImports,
    type CatalogImportListIssuesResponse as CatalogImportListIssuesResponse,
    type CatalogImportRetrieveReportResponse as CatalogImportRetrieveReportResponse,
    type CatalogImportListIssuesParams as CatalogImportListIssuesParams,
  };

  export {
    CustomAudiences as CustomAudiences,
    type CustomAudienceRetrieveResponse as CustomAudienceRetrieveResponse,
    type CustomAudienceUpdateUsersParams as CustomAudienceUpdateUsersParams,
  };

  export {
    Forecasting as Forecasting,
    type ForecastingSuggestBidsResponse as ForecastingSuggestBidsResponse,
    type ForecastingSuggestBidsParams as ForecastingSuggestBidsParams,
  };

  export {
    FundingInstruments as FundingInstruments,
    type FundingInstrumentListAllocationsResponse as FundingInstrumentListAllocationsResponse,
    type FundingInstrumentListAllocationsParams as FundingInstrumentListAllocationsParams,
  };

  export { GeneratedContent as GeneratedContent };

  export { Industries as Industries, type IndustryListResponse as IndustryListResponse };

  export { LeadGenForms as LeadGenForms, type LeadGenFormRetrieveResponse as LeadGenFormRetrieveResponse };

  export {
    Me as Me,
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeListBusinessesResponse as MeListBusinessesResponse,
    type MeListBusinessesParams as MeListBusinessesParams,
  };

  export { Pixels as Pixels, type PixelRetrieveLastFiredAtResponse as PixelRetrieveLastFiredAtResponse };

  export {
    Posts as Posts,
    type PostRetrieveResponse as PostRetrieveResponse,
    type PostUpdateResponse as PostUpdateResponse,
    type PostUpdateParams as PostUpdateParams,
  };

  export {
    ProductCatalogs as ProductCatalogs,
    type ProductCatalogRetrieveResponse as ProductCatalogRetrieveResponse,
    type ProductCatalogUpdateResponse as ProductCatalogUpdateResponse,
    type ProductCatalogListImportsResponse as ProductCatalogListImportsResponse,
    type ProductCatalogUpdateParams as ProductCatalogUpdateParams,
    type ProductCatalogListImportsParams as ProductCatalogListImportsParams,
  };

  export {
    ProductFeeds as ProductFeeds,
    type ProductFeedRetrieveResponse as ProductFeedRetrieveResponse,
    type ProductFeedUpdateResponse as ProductFeedUpdateResponse,
    type ProductFeedUpdateParams as ProductFeedUpdateParams,
  };

  export {
    ProductSets as ProductSets,
    type ProductSetRetrieveResponse as ProductSetRetrieveResponse,
    type ProductSetUpdateResponse as ProductSetUpdateResponse,
    type ProductSetListProductsResponse as ProductSetListProductsResponse,
    type ProductSetUpdateParams as ProductSetUpdateParams,
    type ProductSetListProductsParams as ProductSetListProductsParams,
  };

  export { Profiles as Profiles, type ProfileRetrieveResponse as ProfileRetrieveResponse };

  export {
    SavedAudiences as SavedAudiences,
    type SavedAudienceRetrieveResponse as SavedAudienceRetrieveResponse,
    type SavedAudienceUpdateResponse as SavedAudienceUpdateResponse,
    type SavedAudienceUpdateParams as SavedAudienceUpdateParams,
  };

  export {
    Targeting as Targeting,
    type TargetingListCarriersResponse as TargetingListCarriersResponse,
    type TargetingListDevicesResponse as TargetingListDevicesResponse,
    type TargetingListGeolocationsResponse as TargetingListGeolocationsResponse,
    type TargetingListInterestsResponse as TargetingListInterestsResponse,
    type TargetingListThirdPartyAudiencesResponse as TargetingListThirdPartyAudiencesResponse,
    type TargetingValidateGeolocationsResponse as TargetingValidateGeolocationsResponse,
    type TargetingValidateKeywordsResponse as TargetingValidateKeywordsResponse,
    type TargetingListCarriersParams as TargetingListCarriersParams,
    type TargetingListDevicesParams as TargetingListDevicesParams,
    type TargetingListGeolocationsParams as TargetingListGeolocationsParams,
    type TargetingListThirdPartyAudiencesParams as TargetingListThirdPartyAudiencesParams,
    type TargetingValidateGeolocationsParams as TargetingValidateGeolocationsParams,
    type TargetingValidateKeywordsParams as TargetingValidateKeywordsParams,
  };

  export {
    TimeZones as TimeZones,
    type TimeZoneListResponse as TimeZoneListResponse,
    type TimeZoneListParams as TimeZoneListParams,
  };
}
