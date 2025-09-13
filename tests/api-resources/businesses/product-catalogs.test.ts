// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RedditAdAPI from 'unofficial-reddit-ad-api';

const client = new RedditAdAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource productCatalogs', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.businesses.productCatalogs.create('1e200a0b-4e98-32cc-dd47-3006e4c85bb2', {
      data: { default_currency: 'USD', default_language: 'en', name: 'My awesome catalog' },
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
    const response = await client.businesses.productCatalogs.create('1e200a0b-4e98-32cc-dd47-3006e4c85bb2', {
      data: {
        default_currency: 'USD',
        default_language: 'en',
        name: 'My awesome catalog',
        event_sources: ['string'],
      },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.businesses.productCatalogs.list('1e200a0b-4e98-32cc-dd47-3006e4c85bb2');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
