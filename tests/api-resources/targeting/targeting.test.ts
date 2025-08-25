// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RedditAdAPI from 'reddit-ad-api';

const client = new RedditAdAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource targeting', () => {
  // Prism tests are disabled
  test.skip('listCarriers', async () => {
    const responsePromise = client.targeting.listCarriers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listCarriers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.targeting.listCarriers(
        { page: { token: 'token', size: 1000 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RedditAdAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listDevices', async () => {
    const responsePromise = client.targeting.listDevices();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listDevices: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.targeting.listDevices(
        { page: { token: 'token', size: 1000 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RedditAdAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listGeolocations', async () => {
    const responsePromise = client.targeting.listGeolocations();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listGeolocations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.targeting.listGeolocations(
        { cities_search: 'cities_search', country: 'country', postal_code: 'postal_code' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RedditAdAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listInterests', async () => {
    const responsePromise = client.targeting.listInterests();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listThirdPartyAudiences', async () => {
    const responsePromise = client.targeting.listThirdPartyAudiences();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listThirdPartyAudiences: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.targeting.listThirdPartyAudiences(
        { page: { token: 'token', size: 1000 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RedditAdAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('validateGeolocations: only required params', async () => {
    const responsePromise = client.targeting.validateGeolocations({
      data: { geolocation_ids: ['GB:2641599', 'US-90210', 'US', '662', 'US-CA'] },
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
  test.skip('validateGeolocations: required and optional params', async () => {
    const response = await client.targeting.validateGeolocations({
      data: { geolocation_ids: ['GB:2641599', 'US-90210', 'US', '662', 'US-CA'] },
    });
  });

  // Prism tests are disabled
  test.skip('validateKeywords: only required params', async () => {
    const responsePromise = client.targeting.validateKeywords({ data: { keywords: [{}] } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('validateKeywords: required and optional params', async () => {
    const response = await client.targeting.validateKeywords({ data: { keywords: [{}] } });
  });
});
