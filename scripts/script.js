const buyLink = document.querySelectorAll('.buy-game-link');

buyLink.forEach((e) => {
  e.addEventListener('click', () => {
    alert('You buy it!!!');
  });
});

const links = document.querySelectorAll('a');

links.forEach((itemLink) => {
  itemLink.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
