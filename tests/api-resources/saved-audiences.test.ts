// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RedditAdAPI from 'reddit-ad-api';

const client = new RedditAdAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource savedAudiences', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.savedAudiences.retrieve('saved_audience_id');
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
    const responsePromise = client.savedAudiences.update('saved_audience_id', { data: {} });
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
    const response = await client.savedAudiences.update('saved_audience_id', {
      data: {
        name: 'saved_audience_name',
        status: 'VALID',
        targeting: {
          age_targeting: { max_age: 64, min_age: 18 },
          carriers: ['ATT_WIRELESS_US'],
          communities: ['aww'],
          custom_audience_ids: ['67547345732543'],
          devices: [
            {
              label_map: { Samsung: ['Galaxy S9', 'Galaxy S10+'] },
              max_version: '9',
              min_version: '8',
              os: 'IOS',
              type: 'DESKTOP',
            },
          ],
          excluded_communities: ['politics'],
          excluded_custom_audience_ids: ['95423594327534'],
          excluded_geolocations: ['US', '3852263', 'CA:6167865'],
          excluded_interests: ['entertainment'],
          excluded_keywords: ['alcohol', 'drugs'],
          expand_targeting: true,
          gender: 'MALE',
          geolocations: ['US', 'CA:6167865'],
          interests: ['entertainment'],
          keywords: ['apple', 'computer'],
          locations: ['FEED'],
          platforms: ['DESKTOP'],
          suppression_event_types: ['ALL_FEATURES'],
          view_modes: ['CARD'],
        },
        type: 'LOOKALIKE',
      },
    });
  });
});
