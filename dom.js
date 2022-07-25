/* Open Menu in Mobile version */
const menu = document.getElementById('menu');
const nav2 = document.querySelector('.navlinks')

menu.addEventListener('click', displayMenu);

function displayMenu() {
    nav2.classList.toggle('active');
}
