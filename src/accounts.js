// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  //find an account with a given id number
  return accounts.find((accounts) => accounts["id"] === id);
}

function sortAccountsByLastName(accounts) {
  //sorts accounts by last name
  return accounts.sort((accountA, accountB) =>
   accountA.name.last > accountB.name.last ? 1 : -1
   );
}

function getTotalNumberOfBorrows(account, books) {
// get the total number of borrows for a given book
  let counter = 0;
  for (let book in books){
    if(books[book].borrows.find((person) => person.id === account.id))
    counter += 1
  }
  return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  //returns an array of books and authors that represents all books
  //'currently checked out' by the given account.
  let checkedOut = [];
  //loop through books array
  for (let index in books){
    let book = books[index];
    //check status of each book
    book.borrows.forEach((person) =>{
      //check if book is still checked out
      if(account.id === person.id && person.returned === false){
        let bookOut = book;
        //loop through array of authors
        for (let indexA in authors){
          let author = authors[indexA];
          //check if author matches author of checked out book
          if(author.id === book.authorId){
            //if they match the 'bookOut author' becomes that 'authors' object
            bookOut["author"] = author;
            //add that book to the checkedOut array
            checkedOut.push(bookOut);
          }
        }
      }
    })
  }
  return checkedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
