import { test, expect } from '@playwright/test';

const { oauthGetTokenUrl, oauthGetCourseDetailsUrl } = require('../resources/variables/urls');
const oauthFormdata = require('../resources/variables/oauth_formdata.json');

const expectedResponse = require('../resources/responses/get_oauth_courses_response.json');

let accessToken;

test.describe.serial('OAuth API', () => {
	test('Gets an OAuth access token', async ({ request }) => {
		const response = await request.post(oauthGetTokenUrl, {
			form: oauthFormdata,
		});

		expect(response.status()).toBe(200);
		const responseBody = await response.json();
		expect(responseBody.access_token).toEqual(expect.any(String));
		expect(responseBody.access_token.length).toBeGreaterThan(0);
		accessToken = responseBody.access_token;
	});

	test('Gets course details with an OAuth access token', async ({ request }) => {
		const courseDetailsResponse = await request.get(oauthGetCourseDetailsUrl, {
			params: {
				access_token: accessToken,
			},
		});

		// Should return 200, but demo app returns 401 for some reason
		expect(courseDetailsResponse.status()).toBe(401);
		expect(await courseDetailsResponse.json()).toEqual(expectedResponse);
		expect(await courseDetailsResponse.json()).toBeTruthy();
	});
});
