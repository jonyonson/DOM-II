// Your code goes here
const navItems = document.querySelectorAll('nav a');
const logo = document.querySelector('.logo-heading');
const images = document.querySelectorAll('img');
const contextMenu = document.querySelector('.contextmenu');
const closeMenu = document.querySelector('.close');
const buttons = document.querySelectorAll('.btn');

// Prevent Nav links from loading new page
navItems.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
  });
});

// Hijack the right click
window.addEventListener('contextmenu', event => {
  event.preventDefault();
  contextMenu.style.display = 'flex';
  contextMenu.style.top = event.clientY + 20 + 'px';
  contextMenu.style.left = event.clientX + 'px';
});

// to close the context menu
closeMenu.addEventListener('click', () => {
  contextMenu.style.display = 'none';
});

// Double Click images to change the src to Bi
images[0].addEventListener('dblclick', event => {
  images[0].src = 'https://www.fillmurray.com/800/240';
});

images[1].addEventListener('dblclick', event => {
  images[1].src = 'https://www.fillmurray.com/376/282';
});

images[2].addEventListener('dblclick', event => {
  images[2].src = 'https://www.fillmurray.com/375/282';
});

images[3].addEventListener('dblclick', event => {
  images[3].src = 'https://www.fillmurray.com/599/200';
});

// Mouse click to change the image src
images[0].addEventListener('mouseup', event => {
  images[0].src = 'https://www.placecage.com/800/240';
});

images[1].addEventListener('mouseup', event => {
  images[1].src = 'https://www.placecage.com/373/282';
});

images[2].addEventListener('mouseup', event => {
  images[2].src = 'https://www.placecage.com/374/281';
});

images[3].addEventListener('mouseup', event => {
  images[3].src = 'https://www.placecage.com/600/199';
});

// Click for original images
buttons[0].addEventListener('click', event => {
  images[0].src = 'img/fun-bus.jpg';
  images[1].src = 'img/adventure.jpg';
  images[2].src = 'img/fun.jpg';
  images[3].src = 'img/destination.jpg';
});

buttons[1].addEventListener('click', event => {
  images[0].src = 'https://www.fillmurray.com/800/240';
  images[1].src = 'https://www.fillmurray.com/376/282';
  images[2].src = 'https://www.fillmurray.com/375/282';
  images[3].src = 'https://www.fillmurray.com/599/200';
});
buttons[2].addEventListener('click', () => {
  images[0].src = 'https://www.placecage.com/800/240';
  images[1].src = 'https://www.placecage.com/373/282';
  images[2].src = 'https://www.placecage.com/374/281';
  images[3].src = 'https://www.placecage.com/600/199';
});
