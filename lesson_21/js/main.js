
new Swiper('.swiper',{
  loop:true,
  pagination:{
    el:'.swiper-pagination',
    type:'fraction',
  },
});


document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('search-input');
  var label = document.querySelector('.form-header__label');

  label.addEventListener('click', function () {
      input.classList.toggle('_active');
  });

  document.addEventListener('click', function (event) {
      // Проверяем, был ли клик вне элемента label
      if (!label.contains(event.target) && !input.contains(event.target)) {
          input.classList.remove('_active');
      }
  });
});
