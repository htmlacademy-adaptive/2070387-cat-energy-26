let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('header-box--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-box--closed')) {
    navMain.classList.remove('header-box--closed');
    navMain.classList.add('header-box--opened');
  } else {
    navMain.classList.add('header-box--closed');
    navMain.classList.remove('header-box--opened');
  }
});
