// select the html elements 
let titleInput = document.querySelector('#title')
let authorInput = document.querySelector('#author')
let pagesInput = document.querySelector('#pages')
let readInput = document.querySelector('#read')
let addButton = document.querySelector('.adding-button')



let myLibraryEl = document.querySelector('.library-section-container')

// create myLibrary Array to store all Books
let myLibrary = []


// Constroctor function for the Book objects
class Book{
  constructor(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages= pages
  this.read = read
  }
  toggleReadStatus (){
    if (this.read=== "already read"){
      this.read= 'not read yet'
    }
    else if(this.read==='not read yet'){
      this.read='already read'
    }
  }
}




// function for adding the books to the library
function addBookToLibrary (title, author, pages, read){
  let newBook = new Book(title,author,pages,read)
  myLibrary.push(newBook)
}



// event listener of the add button, to create a new book with the input values
  // if there is a input without value, alert it
  // else
    // create a new book with the Book constructer, then add it to the library and add it to the dom
    // after all set the input values to empty string
    addButton.addEventListener('click', function(){
      if(!titleInput.value || !authorInput.value || !pagesInput.value){
        alert('please enter valid value')
      }
      else{
        let title = titleInput.value
        let author = authorInput.value
        let pages = pagesInput.value
        let read = readInput.value        
        addBookToLibrary(title,author,pages,read)
        addToDom()
  
        titleInput.value=""
        authorInput.value =""
        pagesInput.value =""
      }
    })
    
    


// add the books to the library
addBookToLibrary('In Search of Lost Time', 'Marcel Proust', 200, 'not read yet')
addBookToLibrary('Ulysses', 'James Joyce', 300, 'already read')
addBookToLibrary('Don Quixote', 'Miguel de Cervantes', 306, 'already read')
addBookToLibrary('One Hundred Years of Solitude', 'Gabriel Garcia Marquez', 230, 'not read yet')
addBookToLibrary('The Great Gatsby', 'F. Scott Flitzgerald', 180, 'already read')


// function for adding the books from the myLibrary array to the DOM
  // begin the library el without textcontent everytime you add something to the DOM
  // loop through every book in the myLabrary array
    // create the appropriate elements such as title, author...
    // give them the right textcontent
    // append them to the parent container to show them on the page 
    
function addToDom(){
  myLibraryEl.textContent=""
  for(book of myLibrary){
    
    //create the Elements
    bookContainer = document.createElement('div')
    bookDeleteButton = document.createElement('button')
    bookUlEl = document.createElement('ul')
    bookTitleEl = document.createElement('li')
    bookAuthorEl = document.createElement('li')
    bookPagesEl = document.createElement('li')
    bookReadEl = document.createElement('li')
    toggleReadButton = document.createElement('p')
 
    // give them textcontent
    bookDeleteButton.textContent = 'x'
    bookTitleEl.textContent = `Title: ${book.title}`
    bookAuthorEl.textContent =  `Author: ${book.author}`
    bookPagesEl.textContent =  `Pages: ${book.pages}`
    bookReadEl.textContent = book.read
    toggleReadButton.textContent = 'toggle read status'

    //append them to the parents
    bookUlEl.append(bookTitleEl, bookAuthorEl, bookPagesEl, bookReadEl)
    bookContainer.append( bookDeleteButton, bookUlEl, toggleReadButton)
    myLibraryEl.appendChild(bookContainer)

    // give Them classes
    bookContainer.classList.add('book-container')
    bookUlEl.classList.add('book-ul')
    bookTitleEl.classList.add('book-title')
    bookAuthorEl.classList.add('book-author')
    bookPagesEl.classList.add('book-pages') 
    bookReadEl.classList.add('book-read-status')   


    // individuall Classes for the Clickable buttons
    // get the index of each book and
    // create a class for each book based on its own index in the myLibrary array
      // add the created class to the book delete button and the toggle read button
    bookIndex=myLibrary.indexOf(book)  
    bookDeleteButton.classList.add(bookIndex)
    toggleReadButton.classList.add(bookIndex)

    // when clicking the delete button, 
    // get the individual class of the clicked button
    // use splice method to delete object from the Library
    // call addToDom function to update the dom
    bookDeleteButton.addEventListener('click', function(){
      thisClass = this.classList.value   
      myLibrary.splice(thisClass,1)
      addToDom() 
    })

    // when clicking the toggle button,
    // get the individual class of the clicked button
    // use the toggleReadStatus method to toggle the status from the Library
    // call addToDom function to update the dom
    toggleReadButton.addEventListener('click', function(){
      thisClass=this.classList.value
      console.log(myLibrary[this.classList.value].read)
      myLibrary[thisClass].toggleReadStatus()
      console.log(myLibrary[this.classList.value].read)
      addToDom()      
    })
  }
}

addToDom()

