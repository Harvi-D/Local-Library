// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  //find an author from a given id
  return authors.find((authors) => authors.id === id);
}

function findBookById(books, id) {
  //return book object that matches the id given
  return books.find((books) => books["id"] === id);
}

function partitionBooksByBorrowedStatus(books) {
  //filters books that have not been returned into an array
  const checkedOutBooks = books.filter((book) => !book.borrows[0].returned);
  //filters books that have been returned into another arryay
  const returnedBooks = books.filter((book) => book.borrows[0].returned );
  //places both new arrays into another
  return [checkedOutBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  //sets empty array for return
  let result = [];
  //loop through 'borrows' objects in book array 
  for(let index in book.borrows){
    //find account ids that match the ones that have borrowed books
    const borrowerAccount = accounts.find((account) => account.id === book.borrows[index].id);
    //only include the 'returned' books
    borrowerAccount.returned = book.borrows[index].returned;
    result.push(borrowerAccount);
  }
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
