
const baseUrl = 'http://216.10.245.166/Library/';

const getBooksByAuthorUrl = `${baseUrl}GetBook.php?AuthorName=MikaelBeat`;

const addBookUrl = `${baseUrl}Addbook.php`;
const getAddedBooksByAuthorUrl = `${baseUrl}GetBook.php?AuthorName=Kokki`;
const deleteBookUrl = `${baseUrl}DeleteBook.php`;
const getBookByIdUrl = `${baseUrl}GetBook.php?ID=12121212128`;


module.exports = { getBooksByAuthorUrl, addBookUrl, getAddedBooksByAuthorUrl, deleteBookUrl, getBookByIdUrl };