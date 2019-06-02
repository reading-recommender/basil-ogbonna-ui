
const menu = document.querySelectorAll('.navlink');
menu.forEach(navlink => navlink.classList.remove('navlink-open'));
document.getElementById('hamburger').onclick = () => {
  menu.forEach((navlink) => {
    navlink.classList.add('navlink-open');
    navlink.classList.remove('fadeInDown');
  });
  if (document.querySelector('.svg-b').classList.contains('fa-book')) {
    document.querySelector('.svg-b').className = 'fas fa-book-open svg-b';
    document.querySelector('.navbar').className += 'aos-init aos-animate';
    document.querySelector('nav').setAttribute('data-aos', 'fade-out');
  } else {
    menu.forEach(navlink => navlink.classList.remove('navlink-open'));
    document.querySelector('.svg-b').className = 'fas fa-book svg-b';
    document.querySelector('nav').removeAttribute('data-aos', 'fade-out');
  }
};
