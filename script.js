// select the html elements 

let myLibraryEl = document.querySelector('.library-section-container')
let testButton = document.querySelector('.test-button')

let titleInput = document.querySelector('#title')
let authorInput = document.querySelector('#author')
let pagesInput = document.querySelector('#pages')
let readInput = document.querySelector('#read')



// event listener of the add button, to create a new book with the input values
  // after creating the new book add it to the library and add it to the dom
testButton.addEventListener('click', function(){
  let title = titleInput.value
  let author = authorInput.value
  let pages = pagesInput.value
  let read = readInput.value
  console.log(title)
  console.log(author)
  console.log(pages)
  console.log(read)

  let newBook = new Book (title,author,pages,read)
  console.log(newBook)
  addBookToLibrary(newBook)
  addToDom()

})




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
  // begin the library el without textcontent everytime you add something to the DOM
  // loop through every book in the myLabrary array
    // create the appropriate elements such as title, author...
    // give them the right textcontent
    // append them to the parent container to show them on the page 
function addToDom(){
  myLibraryEl.textContent=""
  for(book of myLibrary){
    
    
    bookIndex=myLibrary.indexOf(book)
    
    
    
    //create the Elements
    bookContainer = document.createElement('div')
    bookDeleteButton = document.createElement('button')
    bookUlEl = document.createElement('ul')
    bookTitleEl = document.createElement('li')
    bookAuthorEl = document.createElement('li')
    bookPagesEl = document.createElement('li')
    bookReadEl = document.createElement('li')

 
    // give them textcontent
    bookDeleteButton.textContent = 'x'
    bookTitleEl.textContent = `Title: ${book.title}`
    bookAuthorEl.textContent =  `Author: ${book.author}`
    bookPagesEl.textContent =  `Pages: ${book.pages}`
    bookReadEl.textContent = book.read
   
    //append them to the parents
    bookUlEl.append(bookTitleEl, bookAuthorEl, bookPagesEl, bookReadEl)
    bookContainer.append( bookDeleteButton, bookUlEl)
    myLibraryEl.appendChild(bookContainer)

    // give delete button a class with its own index in the myLibrary array
    buttonClass=bookIndex
    bookDeleteButton.classList.add(buttonClass)
    // when clicking the button, delete its parent with parentNode method
    bookDeleteButton.addEventListener('click', function(){
      console.log(this.parentNode)
      
      console.log(this.classList.value)

      this.parentNode.remove()
      myLibrary.splice(buttonClass,1)
      addToDom()
      
    })
  }
}

addToDom()



