const myLibrary = [];
const displayedBooks = [];

const addBookDialog = document.getElementById("add-book-dialog");

const openAddDialogButton = document.getElementById("open-add-dialog-button");
openAddDialogButton.addEventListener('click', (event) => {
    addBookDialog.showModal();
});

const closeDialogButton = document.getElementById("close-dialog-button");
closeDialogButton.addEventListener('click', (event) => {
    addBookDialog.close();
});

const addBookButton = document.getElementById("add-book-button");
addBookButton.addEventListener('click', (event) => {
    event.preventDefault();
    const form = document.getElementById("book-form");
    const book = new Book(form.elements["book-title"].value, form.elements["book-author"].value, form.elements["book-pages"].value, form.elements["book-read"].checked);
    addBookDialog.close();
    addBookToLibrary(book);
    form.reset();
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

    titleDisplay.className = "title";
    authorDisplay.className = "author";
    pagesDisplay.className = "pages";
    readButton.className = "read-button";
    removeButton.className = "remove-button";

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