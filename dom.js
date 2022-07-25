/* Open Menu in Mobile version */
const menu = document.getElementById('menu');
const nav2 = document.querySelector('.navlinks');

function displayMenu() {
  nav2.classList.toggle('active');
}
menu.addEventListener('click', displayMenu);
