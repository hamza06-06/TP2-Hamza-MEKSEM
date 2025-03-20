// Crée la classe Book


class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // une méthode getDetails retourne détails du livre


  getDetails() {
    return `Titre : ${this.title} / Auteur : ${this.author}`;
  }
}
