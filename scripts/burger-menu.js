const burgerBtn = document.querySelector('.burger__lines');
const burgerMenu = document.querySelector('.burger__menu');
const backDrop = document.querySelector('.burger__backdrop');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  document.body.classList.toggle('lock');
  backDrop.classList.toggle('active');
});

backDrop.addEventListener('click', () => {
  burgerBtn.classList.remove('active');
  burgerMenu.classList.remove('active');
  backDrop.classList.remove('active')
  document.body.classList.remove('lock');
});
