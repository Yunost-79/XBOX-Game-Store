let swiper = new Swiper('.mySwiper', {
  centeredSlides: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  rewind: true,
});
