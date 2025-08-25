// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RedditAdAPI from 'reddit-ad-api';

const client = new RedditAdAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.productCatalogs.products.list('catalog_id');
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
      client.productCatalogs.products.list(
        'catalog_id',
        { approval_decision: 'APPROVED', ids: ['string'], page: { token: 'token', size: 1000 }, search: 'x' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RedditAdAPI.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('batchDelete: only required params', async () => {
    const responsePromise = client.productCatalogs.products.batchDelete('catalog_id', { data: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('batchDelete: required and optional params', async () => {
    const response = await client.productCatalogs.products.batchDelete('catalog_id', { data: ['string'] });
  });

  // Prism tests are disabled
  test.skip('batchUpsert: only required params', async () => {
    const responsePromise = client.productCatalogs.products.batchUpsert('catalog_id', { data: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('batchUpsert: required and optional params', async () => {
    const response = await client.productCatalogs.products.batchUpsert('catalog_id', {
      data: [
        {
          id: 'reddit-best-product-42',
          additional_image_links: ['string'],
          adult: false,
          age_group: 'kids',
          availability: 'IN_STOCK',
          average_review_rating: '4.5',
          brand: 'Acme',
          color: 'red',
          condition: 'new',
          cost_of_goods_sold: '50.00 USD',
          custom_label_0: 'label',
          custom_label_1: 'label',
          custom_label_2: 'label',
          custom_label_3: 'label',
          custom_label_4: 'label',
          custom_number_0: 37,
          custom_number_1: 37,
          custom_number_2: 37,
          custom_number_3: 37,
          custom_number_4: 37,
          description: 'Awesome description',
          expiration_date: '2024-04-27T21:37:01Z',
          gender: 'unisex',
          google_product_category: 'Apparel & Accessories > Clothing > Dresses',
          gtin: '1234567890123',
          image_link: 'https://example.com/product_image.png',
          is_bundle: false,
          item_group_id: '012345',
          lifestyle_image_link: 'https://example.com/product_image.png',
          link: 'https://example.com/product',
          material: 'gold',
          mobile_link: 'https://example.com/product',
          mpn: '1234567890123',
          number_of_ratings: 100,
          pattern: 'solid',
          platform_specific_link: {
            android: 'https://example.com/product_for_android',
            ios: 'https://example.com/product_for_ios',
          },
          price: '100.00 USD',
          product_detail: 'buttons',
          product_highlight: 'shiny',
          product_type: 'apparel',
          sale_price: '99.99 USD',
          sale_price_effective_date: '2016-02-24T13:00-0800/2016-02-29T15:30-0800',
          size: 'L',
          size_type: 'Regular T-Shirt sizing',
          title: 'Awesome title',
        },
      ],
    });
  });
});
