const burgerBtn = document.querySelector('.burger__lines');
const burgerMenu = document.querySelector('.burger__menu');
const backDrop = document.querySelector('.burger__backdrop');

function handleBurgerMenu() {
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  document.body.classList.toggle('lock')
  if (burgerMenu.classList.contains('active')) {
    backDrop.classList.add('shown');
    setTimeout(() => {
      backDrop.classList.add('active');
    }, 500);
  } else {
    setTimeout(() => {
      backDrop.classList.remove('shown');
      backDrop.classList.remove('active');
    });
  }
}
