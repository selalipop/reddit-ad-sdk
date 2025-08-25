// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RedditAdAPI from 'reddit-ad-api';

const client = new RedditAdAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource campaigns', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.adAccounts.campaigns.create('ad_account_id', {
      data: { configured_status: 'ACTIVE', name: 'My Campaign', objective: 'IMPRESSIONS' },
    });
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
    const response = await client.adAccounts.campaigns.create('ad_account_id', {
      data: {
        configured_status: 'ACTIVE',
        name: 'My Campaign',
        objective: 'IMPRESSIONS',
        age_restriction: 'ABOVE_18',
        app_id: '1064216828',
        funding_instrument_id: '123',
        goal_type: 'LIFETIME_SPEND',
        goal_value: 100000000,
        spend_cap: 100000000,
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.adAccounts.campaigns.list('ad_account_id');
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
      client.adAccounts.campaigns.list(
        'ad_account_id',
        { id: ['string'], page: { token: 'token', size: 1000 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RedditAdAPI.NotFoundError);
  });
});
