class Books {
  constructor(book, url) {
    this.book = book;
    this.url = url;
    this.buttonClick();
    this.read = document.querySelector('button');
    this.read.addEventListener('click', () => {
      this.buttonClick();
    });
  }

  buttonClick() {
    window.location.href = this.url;
  }
}
const books = document.querySelectorAll('book');
books.forEach(book => new Books(book));
