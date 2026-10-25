// Q3: Library Management System
class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) return false;
    this.isIssued = true;
    return true;
  }

  returnBook() {
    this.isIssued = false;
  }
}

const books = [
  new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
  new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN002"),
  new Book("Atomic Habits", "James Clear", "ISBN003", true),
  new Book("The Hobbit", "J. R. R. Tolkien", "ISBN004")
];

const availableBooks = document.getElementById("availableBooks");
const message = document.getElementById("message");

function renderAvailableBooks() {
  availableBooks.innerHTML = "";
  const available = books.filter(book => !book.isIssued);

  if (available.length === 0) {
    availableBooks.textContent = "No books are currently available.";
    return;
  }

  available.forEach(book => {
    const item = document.createElement("li");
    item.textContent = `${book.title} — ${book.author} (ISBN: ${book.isbn})`;
    availableBooks.appendChild(item);
  });
}

document.getElementById("issueForm").addEventListener("submit", event => {
  event.preventDefault();
  const isbn = document.getElementById("isbn").value.trim();
  const book = books.find(item => item.isbn.toLowerCase() === isbn.toLowerCase());

  if (!book) {
    message.textContent = "No book found with that ISBN.";
  } else if (!book.issueBook()) {
    message.textContent = "That book has already been issued.";
  } else {
    message.textContent = `Successfully issued: ${book.title}`;
    renderAvailableBooks();
  }
  event.target.reset();
});

renderAvailableBooks();
