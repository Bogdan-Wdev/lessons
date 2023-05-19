const menuToggle = document.querySelector('.menu__toggle');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('menu__toggle--visible');
});

window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;
  const menuToggle = document.querySelector('.menu__toggle');

  if (windowWidth >= 920) {
    menuToggle.classList.remove('menu__toggle--visible');
  }
});