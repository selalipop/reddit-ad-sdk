// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RedditAdAPI from 'unofficial-reddit-ad-api';

const client = new RedditAdAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apps', () => {
  // Prism tests are disabled
  test.skip('retrieveLastFiredAtReport', async () => {
    const responsePromise = client.apps.retrieveLastFiredAtReport('app_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveSkanAvailability', async () => {
    const responsePromise = client.apps.retrieveSkanAvailability('app_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveSkanAvailability: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.apps.retrieveSkanAvailability(
        'app_id',
        { ad_group_id: '142154364526', campaign_id: '12345' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RedditAdAPI.NotFoundError);
  });
});
