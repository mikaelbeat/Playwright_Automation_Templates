
import { test, expect } from '@playwright/test';

const expectedResponse = require('../resources/responses/get_book_response.json');
const { getBooksByAuthorUrl } = require('../resources/variables/urls');

test('Get books by author', async ({ request }) => {
	const response = await request.get(getBooksByAuthorUrl, {
		params: {
			AuthorName: 'MikaelBeat',
		},
	});

	expect(response.status()).toBe(200);
	expect(await response.json()).toEqual(expectedResponse);
});