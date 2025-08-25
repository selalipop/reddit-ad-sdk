// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RedditAdAPI from 'reddit-ad-api';

const client = new RedditAdAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource campaigns', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.campaigns.retrieve('campaign_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.campaigns.update('campaign_id', { data: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.campaigns.update('campaign_id', {
      data: {
        age_restriction: 'ABOVE_18',
        app_id: '1064216828',
        configured_status: 'ACTIVE',
        funding_instrument_id: '123',
        goal_type: 'LIFETIME_SPEND',
        goal_value: 100000000,
        name: 'My Campaign',
        objective: 'IMPRESSIONS',
        skadnetwork_metadata: { status: 'ENABLED' },
        spend_cap: 100000000,
      },
    });
  });
});
