
  const header = document.querySelector('header');
  const menuToggle = header.querySelector('.header__menu .menu__toggle');
  const menuList = header.querySelector('.header__menu .menu__list');

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



  const form = document.querySelector('.header__form');
  const input = document.querySelector('.form-header__input');
  const label = document.querySelector('.form-header__label');

  // Обработчик события для клика на изображение или любую область
  const handleClick = () => {
    // Если input скрыт, показываем его, иначе скрываем
    if (input.hidden) {
      input.removeAttribute('hidden');
    } else {
      input.setAttribute('hidden', 'hidden');
    }
  };

  // Привязываем обработчик события к изображению и форме
  label.addEventListener('click', handleClick);
  form.addEventListener('click', handleClick); 