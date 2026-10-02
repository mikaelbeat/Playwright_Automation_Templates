
// LIBRARY API URLS
const baseUrl = 'http://216.10.245.166/Library/';

const getBooksByAuthorUrl = `${baseUrl}GetBook.php`;

const addBookUrl = `${baseUrl}Addbook.php`;
const getAddedBooksByAuthorUrl = `${baseUrl}GetBook.php`;
const deleteBookUrl = `${baseUrl}DeleteBook.php`;
const getBookByIdUrl = `${baseUrl}GetBook.php`;


// OAuth2 API URLS
const oauthGetTokenUrl = 'https://rahulshettyacademy.com/oauthapi/oauth2/resourceOwner/token';
const oauthGetCourseDetailsUrl = 'https://rahulshettyacademy.com/oauthapi/getCourseDetails';


module.exports = { getBooksByAuthorUrl, addBookUrl, getAddedBooksByAuthorUrl, deleteBookUrl, getBookByIdUrl, oauthGetTokenUrl, oauthGetCourseDetailsUrl };