// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RedditAdAPI from 'unofficial-reddit-ad-api';

const client = new RedditAdAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource adAccounts', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.businesses.adAccounts.list('1e200a0b-4e98-32cc-dd47-3006e4c85bb2');
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
      client.businesses.adAccounts.list(
        '1e200a0b-4e98-32cc-dd47-3006e4c85bb2',
        { ids: 'ids', page: { token: 'token', size: 1000 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RedditAdAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('query: only required params', async () => {
    const responsePromise = client.businesses.adAccounts.query('1e200a0b-4e98-32cc-dd47-3006e4c85bb2', {
      data: {},
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
  test.skip('query: required and optional params', async () => {
    const response = await client.businesses.adAccounts.query('1e200a0b-4e98-32cc-dd47-3006e4c85bb2', {
      data: {
        actors: [{ id: '1238-1234-1234-1234-1212', type: 'MEMBER' }],
        assets: [{ id: '1238-1234-1234-1234-1212', type: 'AD_ACCOUNT' }],
        filter: 'id==a2_foo,name=@foo',
        roles: ['ADMIN'],
      },
      page: { token: 'token', size: 1000 },
    });
  });
});
