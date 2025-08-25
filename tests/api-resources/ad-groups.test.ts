// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RedditAdAPI from 'reddit-ad-api';

const client = new RedditAdAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource adGroups', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.adGroups.retrieve('ad_group_id');
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
    const responsePromise = client.adGroups.update('ad_group_id', { data: {} });
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
    const response = await client.adGroups.update('ad_group_id', {
      data: {
        app_id: '1064216828',
        bid_strategy: 'MAXIMIZE_VOLUME',
        bid_type: 'CPC',
        bid_value: 500000,
        campaign_id: '579922433862993631',
        configured_status: 'ACTIVE',
        effective_status: 'ACTIVE',
        end_time: '2019-02-18T22:27:10Z',
        goal_type: 'DAILY_SPEND',
        goal_value: 75,
        name: 'My Ad Group',
        optimization_goal: 'PAGE_VISIT',
        optimization_strategy_type: 'DOWNSTREAM_CONVERSIONS',
        product_set_id: 'ebb0698a-fef2-4373-ae75-8ec44ba4d037',
        schedule: [{ end_day: 5, end_hour: 7, start_day: 1, start_hour: 10 }],
        shopping_targeting: {
          conversion_event_types: ['VIEW_CONTENT', 'SEARCH'],
          excluded_conversion_event_types: ['VIEW_CONTENT'],
          lookback_window_days: 90,
          targeting_type: 'PROSPECTING',
        },
        shopping_type: 'STATIC',
        skadnetwork_metadata: { status: 'ENABLED' },
        start_time: '2019-02-18T22:27:10Z',
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
        view_through_conversion_type: 'SEVEN_DAY_CLICKS',
      },
    });
  });
});
