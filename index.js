//  Initialise la bibliothèque

const library = new Library();

// Fonction ajouter livre au bibliothèque

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title && author) {
    const book = new Book(title, author);
    library.addBook(book);
    alert('Livre ajouté à la bibliothèque');
  } else {
    alert('Veuillez remplir tous les champs');
  }
}

// Fonction lister tous les livres

function listBooks() {
  const booksList = document.getElementById('booksList');
  booksList.innerHTML = ''; // Réinitialiser la liste

  library.books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = book.getDetails();
    booksList.appendChild(li);
  });
}

// Fonction rechercher un livre par titre

function findBook() {
  const title = document.getElementById('searchTitle').value;
  const result = library.findBookByTitle(title);

  const resultElement = document.getElementById('result');
  resultElement.textContent = result;
}
