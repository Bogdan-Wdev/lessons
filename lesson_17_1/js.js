const menuToggle = document.querySelector('.menu__toggle');


menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('menu__toggle--visible');
});


document.addEventListener('click', (event) => {
  const target = event.target;
  const menu = document.querySelector('.menu');

  if (!menu.contains(target)) {
    menuToggle.classList.remove('menu__toggle--visible');
  }
});