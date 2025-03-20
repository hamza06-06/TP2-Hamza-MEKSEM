// Crée la classe Library

class Library {
  constructor() {
    this.books = [];           // un tableau ou on va stocker les livres
  }

  // Méthode ajouter un livre au bibliothèque

  addBook(book) {
    this.books.push(book);
  }

  // Méthode qui liste tous les livres

  listBooks() {
    this.books.forEach(book => {
      console.log(book.getDetails());
    });
  }

  // Méthode qui recherche un livre par titre

  findBookByTitle(title) {
    const book = this.books.find(book => book.title === title);
    if (book) {
      return book.getDetails();
    } else {
      return 'Livre non trouvé';
    }
  }
}
