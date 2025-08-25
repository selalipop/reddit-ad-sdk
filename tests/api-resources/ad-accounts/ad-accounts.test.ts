// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RedditAdAPI from 'reddit-ad-api';

const client = new RedditAdAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource adAccounts', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.adAccounts.retrieve('ad_account_id');
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
    const responsePromise = client.adAccounts.update('ad_account_id', { data: {} });
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
    const response = await client.adAccounts.update('ad_account_id', {
      data: {
        admin_approval: 'VALID',
        attribution_type: 'CLICK_THROUGH_CONVERSION',
        business_id: {},
        click_attribution_window: 'DAY',
        excluded_communities: ['gaming'],
        excluded_keywords: ['guns'],
        name: 'reddit-advertiser',
        primary_contact_member_id: 't2_123456',
        spend_cap_type: 'LIFETIME',
        type: 'SELF_SERVE',
        view_attribution_window: 'MONTH',
      },
    });
  });

  // Prism tests are disabled
  test.skip('generateReport: only required params', async () => {
    const responsePromise = client.adAccounts.generateReport('ad_account_id', {
      data: { ends_at: '2023-11-30T03:00:00Z', fields: ['CPC'], starts_at: '2023-11-20T03:00:00Z' },
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
  test.skip('generateReport: required and optional params', async () => {
    const response = await client.adAccounts.generateReport('ad_account_id', {
      data: {
        ends_at: '2023-11-30T03:00:00Z',
        fields: ['CPC'],
        starts_at: '2023-11-20T03:00:00Z',
        breakdowns: ['CAMPAIGN_ID', 'DATE', 'INTEREST'],
        custom_column_ids: ['c32c1514-802a-4f9f-91b6-868845d7896d', '93fed6b6-9bbc-479e-9a3a-4f2c57785eb2'],
        filter: 'campaign:effective_status==PENDING_BILLING_INFO,campaign:effective_status==ACTIVE',
        time_zone_id: 'GMT',
      },
      page: { token: 'token', size: 1000 },
    });
  });

  // Prism tests are disabled
  test.skip('getHistory', async () => {
    const responsePromise = client.adAccounts.getHistory('ad_account_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listFundingInstruments', async () => {
    const responsePromise = client.adAccounts.listFundingInstruments('ad_account_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listFundingInstruments: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.adAccounts.listFundingInstruments(
        'ad_account_id',
        {
          end_time: '2019-12-27T18:11:19.117Z',
          funding_instrument_ids: ['string'],
          is_selectable: true,
          mode: 'ACTIVE',
          page: { token: 'token', size: 1000 },
          search: 'search',
          start_time: '2019-12-27T18:11:19.117Z',
          types: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RedditAdAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listPixels', async () => {
    const responsePromise = client.adAccounts.listPixels('t2_123456');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listPixels: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.adAccounts.listPixels(
        't2_123456',
        { page: { token: 'token', size: 1000 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RedditAdAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listProfiles', async () => {
    const responsePromise = client.adAccounts.listProfiles('ad_account_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listProfiles: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.adAccounts.listProfiles(
        'ad_account_id',
        { page: { token: 'token', size: 1000 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RedditAdAPI.NotFoundError);
  });
});
