//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  // TODO your code goes in here, return the ul element
  
    const ulElement = document.createElement('ul');
  
    books.forEach((book) => {
      const liElement = document.createElement('li');
      const pElement = document.createElement('p');
      const imgElement = document.createElement('img');
  
      pElement.textContent = `${book.title} by ${book.author}`;
  
      imgElement.src = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`;
      
  
      liElement.appendChild(pElement);
      liElement.appendChild(imgElement);
  
      if (book.alreadyRead) {
        liElement.style.backgroundColor = "green";
      } else {
        liElement.style.backgroundColor = "red";
      }
  
      ulElement.appendChild(liElement);
    });
  
    return ulElement;
  
  
};


function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '0241956056',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
