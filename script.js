// select the html elements 

let myLibraryEl = document.querySelector('.library-section-container')




// create myLibrary Array to store all Books

let myLibrary = []


// Constroctor function for the Book objects
function Book (title, author, pages, read){
  this.title = title
  this.author = author
  this.pages= pages
  this.read = read
}

function addBookToLibrary (book){
  myLibrary.push(book)
}


// create new Books with the constructor function
book1 = new Book('In Search of Lost Time', 'Marcel Proust', 200, 'not read yet')
book2 = new Book('Ulysses', 'James Joyce', 300, 'already read')
book3 = new Book('Don Quixote', 'Miguel de Cervantes', 306, 'already read')
book4 = new Book('One Hundred Years of Solitude', 'Gabriel Garcia Marquez', 230, 'not read yet')
book5 = new Book('The Great Gatsby', 'F. Scott Flitzgerald', 180, 'already read')

// add the books to the library
addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)
addBookToLibrary(book5)


// function for adding the books from the myLibrary array to the DOM
  // loop through every book in the myLabrary array
    // create the appropriate elements such as title, author...
    // give them the right textcontent
    // append them to the parent container to show them on the page 
function addToDom(){
  for(book of myLibrary){
    console.log(book.title)
    console.log(book)
    
    
    bookUlEl = document.createElement('ul')
    bookTitleEl = document.createElement('li')
    bookAuthorEl = document.createElement('li')
    bookPagesEl = document.createElement('li')
    bookReadEl = document.createElement('li')
    
    bookTitleEl.textContent = `Title: ${book.title}`
    bookAuthorEl.textContent =  `Author: ${book.author}`
    bookPagesEl.textContent =  `Pages: ${book.pages}`
    bookReadEl.textContent = book.read

    bookUlEl.append(bookTitleEl, bookAuthorEl, bookPagesEl, bookReadEl)
    myLibraryEl.appendChild(bookUlEl)
  }
}

addToDom()