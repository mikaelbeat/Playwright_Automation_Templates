import { test, expect } from '@playwright/test';

const addBookPayload = require('../resources/payloads/add_book.json');
const expectedAddBookResponse = require('../resources/responses/add_book_response.json');
const { addBookUrl, getAddedBooksByAuthor } = require('../resources/variables/urls');

test('Adds a book and verifies it by author', async ({ request }) => {
	const addResponse = await request.post(addBookUrl, { data: addBookPayload });

	expect(addResponse.status()).toBe(200);
	expect(await addResponse.json()).toEqual(expectedAddBookResponse);

	const getResponse = await request.get(getAddedBooksByAuthor);

	expect(getResponse.status()).toBe(200);
	expect(await getResponse.json()).toContainEqual({
		book_name: addBookPayload.name,
		isbn: addBookPayload.isbn,
		aisle: addBookPayload.aisle,
	});
});
