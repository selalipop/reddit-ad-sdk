// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RedditAdAPI } from '../client';

export abstract class APIResource {
  protected _client: RedditAdAPI;

  constructor(client: RedditAdAPI) {
    this._client = client;
  }
}
