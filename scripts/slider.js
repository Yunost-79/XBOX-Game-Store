let swiper1 = new Swiper('.mySwiper-1', {
  centeredSlides: true,
  autoplay: {
    delay: 3500,
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

let swiper2 = new Swiper('.mySwiper-2', {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
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

let swiper3 = new Swiper('.mySwiper-3', {
  slidesPerView: 'auto',
  slidesPerView: 1,
  spaceBetween: 5,
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 27,

    },
  },
  autoHeight: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    depth: 50,
    scale: 0.9,
    slideShadows: false,
  },
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
