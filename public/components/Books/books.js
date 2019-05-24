class Books {
  constructor(book) {
    this.book = book;
    this.url = 'https://reading-recommender.netlify.com/';


    this.book.addEventListener('click', () => {
      this.buttonClick();
    });
  }

  buttonClick() {
    window.location.href = this.url;
  }
}

const books = document.querySelectorAll('button');
books.forEach(book => new Books(book));
