// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RedditAdAPI from 'reddit-ad-api';

const client = new RedditAdAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource productFeeds', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.productCatalogs.productFeeds.create('catalog_id', {
      data: { mode: 'REPLACE', url: 'http://example.com/catalog.csv' },
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
    const response = await client.productCatalogs.productFeeds.create('catalog_id', {
      data: {
        mode: 'REPLACE',
        url: 'http://example.com/catalog.csv',
        name: 'Primary feed',
        password: '123456',
        schedule: {
          day_of_month: 11,
          day_of_week: 'WEDNESDAY',
          hour: 12,
          interval: 'DAILY',
          interval_count: 1,
          is_paused: true,
          minute: 21,
          timezone: 'America/New_York',
        },
        transformations: [{ arguments: {}, type: 'type' }],
        username: 'admin',
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.productCatalogs.productFeeds.list('catalog_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
