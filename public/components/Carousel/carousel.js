
class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.rightButton = document.querySelector('.right-button');
    this.leftButton = document.querySelector('.left-button');
    this.leftButton.style.zIndex = '999';
    this.rightButton.style.zIndex = '999';
    this.images = this.carousel.querySelectorAll('.carousel-img');
    this.currentSlide = document.querySelector(`img[data-tab="${this.index}"].carousel-img`);
    this.prevslide = null;

    this.currentSlide.style.display = 'block';
    this.detail = new BookDescription(this.currentSlide);
    this.prevSlide();
    this.nextSlide();
  }

  prevSlide() {
    this.leftButton.addEventListener('click', () => {
      this.prevslide = this.currentSlide;
      this.prevslide.style.display = 'none';
      this.index === 0 ? this.index = this.slide.length - 1 : this.index = this.index - 1;
      this.currentSlide = this.slide[this.index];
      this.currentSlide.style.display = 'block';
      return TweenMax.from(currentSlide, 0.5, { x: '1184px' });
    });
  }

  nextSlide() {
    this.rightButton.addEventListener('click', () => {
      this.prevslide = this.slide[this.index];
      this.prevslide.style.display = 'none';
      this.index < this.slide.length - 1 ? this.index = this.index + 1 : this.index = 0;
      this.currentSlide = this.slide[this.index];
      this.currentSlide.style.display = 'block';
      return TweenMax.from(this.currentSlide, 0.5, { x: '-1184px' });
    });
  }
}
class BookDescription {
  constructor(detail) {
    this.detail = detail;
  }

  select() {
    this.detail.classList.add('book-featured');
  }

  deselect() {
    const bookDetails = document.querySelectorAll('.book-description');
    bookDetails.forEach(bookDetail => bookDetail.classList.remove('.book-featured'));
    this.detail.classList.remove('.book-featured');
  }
}


const carousel = document.querySelector('.book-images');
const Sliding = new Carousel(carousel);
