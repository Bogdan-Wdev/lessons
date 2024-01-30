
const swiper = new Swiper('.swiper', {
  loop: true,
  effect: "fade",
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
});


document.addEventListener("DOMContentLoaded", function() {
  var sections = document.querySelectorAll('.page__slider, .page__categories, .page__featured-topics, .page__big-world');

  function isElementPartiallyInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return (
      rect.bottom >= 0 &&
      rect.top <= windowHeight
    );
  }

  function handleScroll() {
    sections.forEach(function(section) {
      if (isElementPartiallyInViewport(section)) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);

  handleScroll();
});



