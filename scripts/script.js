const buyLink = document.querySelectorAll('.buy-game-link');
const buyItem = document.querySelectorAll('.offers-block');

buyLink.forEach((e) => {
  e.addEventListener('click', () => {
    alert('You buught game!!!');
  });
});

buyItem.forEach((e)=>{
  e.addEventListener('click', () =>{
    alert('You buught game!!!, again');

  })
})

const links = document.querySelectorAll('a');

links.forEach((itemLink) => {
  itemLink.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
