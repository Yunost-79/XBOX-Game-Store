let swiper1 = new Swiper('.mySwiper-1', {
  centeredSlides: true,
  autoplay: {
    delay: 1500,
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

var swiper = new Swiper('.mySwiper-2', {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    500:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768:{
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },

  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
