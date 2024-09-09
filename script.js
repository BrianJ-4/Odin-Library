const myLibrary = [];
const displayedBooks = [];

const addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener('click', (event) => {
    addBookToLibrary(bookOne);
});

const bookGrid = document.getElementById("book-grid");

function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;  
}

function addBookToLibrary(book)
{
    myLibrary.push(book);
    
    const newBook = document.createElement("div");
    newBook.className = "book-card";

    const titleDisplay = document.createElement("div");
    const authorDisplay = document.createElement("div");
    const pagesDisplay = document.createElement("div");
    const readButton = document.createElement("button");
    const removeButton = document.createElement("button");

    titleDisplay.id = "title";
    authorDisplay.id = "author";
    pagesDisplay.id = "pages";
    readButton.id = "read-button";
    removeButton.id = "remove-button"

    titleDisplay.innerText = book.title;
    authorDisplay.innerText = book.author;
    pagesDisplay.innerText = book.pages + " Pages";
    removeButton.innerText = "Remove";

    if (book.read)
    {
        readButton.className = "read";
        readButton.innerText = "Read";
    }
    else
    {
        readButton.className = "unread";
        readButton.innerText = "Unread";
    }

    newBook.append(titleDisplay, authorDisplay, pagesDisplay, readButton, removeButton);

    bookGrid.append(newBook);
}

let bookOne = new Book("Test Book", "John Doe", 234, true);