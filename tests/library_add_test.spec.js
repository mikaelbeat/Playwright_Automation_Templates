import { test, expect } from '@playwright/test';

const { addBookUrl, getAddedBooksByAuthorUrl, deleteBookUrl, getBookByIdUrl } = require('../resources/variables/urls');

const addBookPayload = require('../resources/payloads/post_add_book.json');
const expectedAddBookResponse = require('../resources/responses/post_add_book_response.json');
const expectedGetAddedBookResponse = require('../resources/responses/get_added_book_response.json');

const deleteBookPayload = require('../resources/payloads/post_delete_book_by_id.json');
const expectedDeleteBookResponse = require('../resources/responses/post_delete_book_response.json');
const expectedGetBookNotFound = require('../resources/responses/get_book_not_found_response.json');


test('Adds a book and verifies it by author', async ({ request }) => {

	// Adds book and verifies the response
	const addResponse = await request.post(addBookUrl, { data: addBookPayload });
	expect(addResponse.status()).toBe(200);
	expect(await addResponse.json()).toEqual(expectedAddBookResponse);

	// Gets the added book by author and verifies the response
	const getResponse = await request.get(getAddedBooksByAuthorUrl, {
		params: {
			AuthorName: addBookPayload.author,
		},
	});

	expect(getResponse.status()).toBe(200);
	expect(await getResponse.json()).toEqual(expectedGetAddedBookResponse);

	// Deletes the added book and verifies the response
	const deleteResponse = await request.post(deleteBookUrl, { data: deleteBookPayload });
	expect(deleteResponse.status()).toBe(200);
	expect(await deleteResponse.json()).toEqual(expectedDeleteBookResponse);

	// Verifies the book is deleted and the response
	const getResponseAfterDelete = await request.get(getBookByIdUrl, {
		params: {
			ID: deleteBookPayload.ID,
		},
	});
	expect(getResponseAfterDelete.status()).toBe(404);
	expect(await getResponseAfterDelete.json()).toEqual(expectedGetBookNotFound);

});
