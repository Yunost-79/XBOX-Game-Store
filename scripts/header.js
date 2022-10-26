let lastScroll = 0;

const defaultOffset = document.querySelector('.swiper-1').getBoundingClientRect().height;
const header = document.querySelector('header');
const headerHight = header.getBoundingClientRect().height;
const containsHide = header.classList.contains('hide');
const scrollPosition = () => window.scrollY + headerHight;

window.addEventListener('scroll', () => {
  if (defaultOffset <= scrollPosition()) {
    header.classList.add('active');

    if (scrollPosition() >= lastScroll && !containsHide) {
      header.classList.remove('hide');
    } else {
      header.classList.add('hide');
    }

    lastScroll = scrollPosition();
  } else {
    header.classList.remove('active');
    header.classList.remove('hide');
  }
});
