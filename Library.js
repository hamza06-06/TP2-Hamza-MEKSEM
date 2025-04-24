

class Library {
  constructor() {
    this.books = [];          
  }


  addBook(book) {
    this.books.push(book);
  }



  listBooks() {
    this.books.forEach(book => {
      console.log(book.getDetails());
    });
  }



  findBookByTitle(title) {
    const book = this.books.find(book => book.title === title);
    if (book) {
      return book.getDetails();
    } else {
      return 'Livre non trouvé';
    }
  }
}
