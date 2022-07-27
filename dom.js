/* Open Menu in Mobile version */
const menu = document.getElementById('menu');
const nav2 = document.querySelector('.navlinks');

function displayMenu() {
  nav2.classList.toggle('active');
}
menu.addEventListener('click', displayMenu);

/* PopUp windows */
const body = document.querySelector('body');
const openButton = document.querySelector('.see-project');
openButton.addEventListener('click', () => {
  const blur = document.querySelector('.header');
  blur.classList.toggle('active');
  const blur1 = document.querySelector('.principal');
  blur1.classList.toggle('active');
  const blur2 = document.querySelector('.work');
  blur2.classList.toggle('active');
  const blur3 = document.querySelector('.cards');
  blur3.classList.toggle('active');
  const blur4 = document.querySelector('.about');
  blur4.classList.toggle('active');
  const blur5 = document.querySelector('.skill');
  blur5.classList.toggle('active');
  const blur6 = document.querySelector('.form');
  blur6.classList.toggle('active');
  const blur7 = document.querySelector('footer');
  blur7.classList.toggle('active');
  const div = document.createElement('div');
  div.className = 'popup';
  div.innerHTML = `
  <h2 class="pop-title">Multi Post Stories</h2>
    <div>
      <ul class="techno">
        <li class="techno-pop">html</li>
        <li class="techno-pop">bootstrap</li>
        <li class="techno-pop">Ruby on Rails</li>
      </ul>
    </div>
    <div class="pop-img"></div>
    <div class="pop-text">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
      </p>
    </div>
    <div>
      <ul class="pop-buttons">
        <li class="see one"><a href="#">See Live</a></li>
        <li class="see two"><a href="#">See Sourse</a></li>
      </ul>
    </div>
  `;
  body.appendChild(div);
  const cross = document.querySelector('.pop-title');
  cross.addEventListener('click', () => {
    body.removeChild(div);
    blur.classList.toggle('active');
    blur1.classList.toggle('active');
    blur2.classList.toggle('active');
    blur3.classList.toggle('active');
    blur4.classList.toggle('active');
    blur5.classList.toggle('active');
    blur6.classList.toggle('active');
    blur7.classList.toggle('active');
  });
});