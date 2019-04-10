// Your code goes here
const navItems = document.querySelectorAll('nav a');
const logo = document.querySelector('.logo-heading');
const images = document.querySelectorAll('img');
const contextMenu = document.querySelector('.contextmenu');
const closeMenu = document.querySelector('.close');
const buttons = document.querySelectorAll('.btn');

// prevent nav links from loading new page
navItems.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
  });
});

// hijack the right click
window.addEventListener('contextmenu', event => {
  event.preventDefault();
  contextMenu.style.display = 'flex';
  contextMenu.style.top = event.clientY + 20 + 'px';
  contextMenu.style.left = event.clientX + 'px';
});

// closes the context menu
closeMenu.addEventListener('click', () => {
  contextMenu.style.display = 'none';
});

// double click to change the image src to Nick Cage images
images[0].addEventListener('click', event => {
  images[0].src = 'https://www.fillmurray.com/800/240';
});

images[1].addEventListener('click', event => {
  images[1].src = 'https://www.fillmurray.com/376/282';
});

images[2].addEventListener('click', event => {
  images[2].src = 'https://www.fillmurray.com/375/282';
});

images[3].addEventListener('click', event => {
  images[3].src = 'https://www.fillmurray.com/599/200';
});

// mouse click to change image src to Bill Murray images
images[0].addEventListener('dblclick', event => {
  images[0].src = 'https://www.placecage.com/800/240';
});

images[1].addEventListener('dblclick', event => {
  images[1].src = 'https://www.placecage.com/373/282';
});

images[2].addEventListener('dblclick', event => {
  images[2].src = 'https://www.placecage.com/374/281';
});

images[3].addEventListener('dblclick', event => {
  images[3].src = 'https://www.placecage.com/600/199';
});

// click for original images
buttons[0].addEventListener('click', event => {
  images[0].src = 'img/fun-bus.jpg';
  images[1].src = 'img/adventure.jpg';
  images[2].src = 'img/fun.jpg';
  images[3].src = 'img/destination.jpg';
});

// click for Bill Murray images
buttons[1].addEventListener('click', event => {
  images[0].src = 'https://www.fillmurray.com/800/240';
  images[1].src = 'https://www.fillmurray.com/376/282';
  images[2].src = 'https://www.fillmurray.com/375/282';
  images[3].src = 'https://www.fillmurray.com/599/200';
});

// click for Nick Cage images
buttons[2].addEventListener('click', () => {
  images[0].src = 'https://www.placecage.com/800/240';
  images[1].src = 'https://www.placecage.com/373/282';
  images[2].src = 'https://www.placecage.com/374/281';
  images[3].src = 'https://www.placecage.com/600/199';
});
