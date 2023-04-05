function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

let books = [];
const book = {
  name: 'A Game of Thrones',
  // ...
};

console.log(book.name);
fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => console.log(json));
  

 // The 5th book in the series
 console.log(`The 5th book in the series: ${books[4].name}`);

 // The total number of pages of all the books
 const totalPages = books.reduce((acc, book) => acc + book.numberOfPages, 0);
 console.log(`The total number of pages of all the books: ${totalPages}`);

 // The 1031st character in the series
 fetch("https://anapioficeandfire.com/api/characters/1031")
   .then((resp) => resp.json())
   .then((character) => {
     console.log(`The 1031st character in the series: ${character.name}`);
   });

