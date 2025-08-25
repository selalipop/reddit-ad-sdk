// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RedditAdAPI from 'reddit-ad-api';

const client = new RedditAdAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ads', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.adAccounts.ads.create('ad_account_id', { data: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.adAccounts.ads.create('ad_account_id', {
      data: {
        campaign_objective_type: 'IMPRESSIONS',
        click_url: 'https://www.redditinc.com/',
        click_url_query_parameters: [
          { name: 'utm_source', value: 'reddit' },
          { name: 'utm_medium', value: '{{AD_ID}}' },
        ],
        configured_status: 'ACTIVE',
        event_trackers: [{ type: 'CLICK', url: 'https://www.redditinc.com/' }],
        name: 'My Ad',
        post_id: 't3_12345',
        preview_expiry: '2023-03-27T21:18:39.927000+00:00',
        products: [{ product_id: '1234' }],
        profile_id: 'profile_id',
        profile_username: 'profile_username',
        shopping_creative: {
          allow_comments: true,
          call_to_action: 'Shop Now',
          destination_url: 'https://www.redditinc.com/',
          dpa_carousel_mode: 'AUTO',
          headline: 'Sample Headline',
          second_line_cta: 'PRICE',
        },
        type: 'UNSPECIFIED',
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.adAccounts.ads.list('ad_account_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.adAccounts.ads.list(
        'ad_account_id',
        { id: ['string'], page: { token: 'token', size: 1000 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RedditAdAPI.NotFoundError);
  });
});
