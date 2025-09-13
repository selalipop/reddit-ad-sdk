// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RedditAdAPI from 'unofficial-reddit-ad-api';

const client = new RedditAdAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customAudiences', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.customAudiences.retrieve('audience_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.customAudiences.delete('audience_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateUsers: only required params', async () => {
    const responsePromise = client.customAudiences.updateUsers('audience_id', {
      data: {
        action_type: 'ADD',
        column_order: ['EMAIL_SHA256', 'MAID_SHA256'],
        user_data: [
          [
            'd7ef2e7b2a3663c25284a3d6d13b1ca727fc8c659474b81afe0cec997a4737d2',
            '510870d7b3e47a28a2b2f3aef27a4c81aab0b2eefda27dea50bc4c991d9e5435',
          ],
        ],
      },
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
  test.skip('updateUsers: required and optional params', async () => {
    const response = await client.customAudiences.updateUsers('audience_id', {
      data: {
        action_type: 'ADD',
        column_order: ['EMAIL_SHA256', 'MAID_SHA256'],
        user_data: [
          [
            'd7ef2e7b2a3663c25284a3d6d13b1ca727fc8c659474b81afe0cec997a4737d2',
            '510870d7b3e47a28a2b2f3aef27a4c81aab0b2eefda27dea50bc4c991d9e5435',
          ],
        ],
      },
    });
  });
});
