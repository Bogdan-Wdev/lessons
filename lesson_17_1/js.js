const menuToggle = document.querySelector('.menu__toggle');
const menuList = document.querySelector('.menu__list');

menuToggle.addEventListener('click', () => {
  menuList.classList.toggle('menu__list--visible');
});