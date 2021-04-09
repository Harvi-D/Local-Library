// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  //get the total number of books in the array
  return books.length;
}

function getTotalAccountsCount(accounts) {
  //get the total number of accounts in the array
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  //get books that have not been returned
  const bookOut = books.filter((book) => !book.borrows[0].returned)
  return bookOut.length;
}

//helper function recieves an array or an object
function topFive(array){
  //sorts highest to lowest and limits the amount of items to 5
  return array.sort((a,b) => a.count < b.count ? 1 : -1).slice(0,5);
}

function getMostCommonGenres(books) {
  //get an array of genres
  const genres = books.map((book) => book.genre);
  //use reduce to get genre/ammount key/value pairs
  const listGenres = genres.reduce((acc, genre) => {
    if(acc[genre] !== undefined) {
      acc[genre]++;
    }else{
      acc[genre] = 1;
    }
    return acc;
  }, {})
  // new array with key value pairs in individual objects
  //{fiction: 12,
  // nonfiction: 3,
  // scifi: 13}
  let finalArray = [];
  for (let genre in listGenres){
    const count = listGenres[genre];
    finalArray.push({name: `${genre}`, count: count});
  }
  //helper function to sort top five genres  
  return topFive(finalArray);
}

function getMostPopularBooks(books) {
  let result = [];
  books.forEach((book) => result.push({name: book.title, count: book.borrows.length}));
  return topFive(result);
}

function getMostPopularAuthors(books, authors) {
  authorArray = [];
  //create new object with key/value pairs of author name:{first, last}
  //and count: total number of borrows for books
  authors.forEach((author) =>{
    authObj = {}
    //destructure author name
    const {name: {first, last}} = author;
    //name key
    authObj.name = `${first} ${last}`;
    //count key
    authObj.count = 0;
    //find number of borrows per author; add to author count
    books.forEach((book) =>{
      if(book.authorId === author.id){
        authObj.count = book.borrows.length;
      }
    })
    authorArray.push(authObj);
  })
  return topFive(authorArray);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
