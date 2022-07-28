const workcards = [
  {
    id: 0,
    titulo: 'My Gratiest Work',
    lenguaje: 'html',
    lenguaje2: 'css',
    lenguaje3: 'Bootstrap',
    image: './img/inBackgroundcss.png',
    textpop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    profile: 'https://github.com/MarcoAurelioAntonio',
    deploy: 'https://marcoaurelioantonio.github.io/Portfolio-mobile-version-skeleton/',
  },
  {
    id: 1,
    titulo: 'A project with Art',
    lenguaje: 'bootstrap',
    lenguaje2: 'Ruby',
    lenguaje3: 'JavaScript',
    image: './img/Disable.png',
    textpop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    profile: 'https://github.com/MarcoAurelioAntonio',
    deploy: 'https://marcoaurelioantonio.github.io/Portfolio-mobile-version-skeleton/',
  },
  {
    id: 2,
    titulo: 'Doing Science',
    lenguaje: 'html',
    lenguaje2: 'css',
    lenguaje3: 'JavaScript',
    image: './img/Disable.png',
    textpop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    profile: 'https://github.com/MarcoAurelioAntonio',
    deploy: 'https://marcoaurelioantonio.github.io/Portfolio-mobile-version-skeleton/',
  },
  {
    id: 3,
    titulo: 'Group Work',
    lenguaje: 'html',
    lenguaje2: 'css',
    lenguaje3: 'React',
    image: './img/Disable.png',
    textpop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    profile: 'https://github.com/MarcoAurelioAntonio',
    deploy: 'https://marcoaurelioantonio.github.io/Portfolio-mobile-version-skeleton/',
  },
  {
    id: 4,
    titulo: 'My 5th Work',
    lenguaje: 'html',
    lenguaje2: 'css',
    lenguaje3: 'Redux',
    image: './img/Disable.png',
    textpop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    profile: 'https://github.com/MarcoAurelioAntonio',
    deploy: 'https://marcoaurelioantonio.github.io/Portfolio-mobile-version-skeleton/',
  },
  {
    id: 5,
    titulo: 'My 6th Work',
    lenguaje: 'html',
    lenguaje2: 'css',
    lenguaje3: 'java',
    image: './img/Disable.png',
    textpop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    profile: 'https://github.com/MarcoAurelioAntonio',
    deploy: 'https://marcoaurelioantonio.github.io/Portfolio-mobile-version-skeleton/',
  },
  {
    id: 6,
    titulo: 'My first Work',
    lenguaje: 'html',
    lenguaje2: 'css',
    lenguaje3: 'Ruby',
    image: './img/Disable.png',
    textpop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    profile: 'https://github.com/MarcoAurelioAntonio',
    deploy: 'https://marcoaurelioantonio.github.io/Portfolio-mobile-version-skeleton/',
  },
];

let id = 0;

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
const openButton1 = document.querySelector('#btn0');
const openButton2 = document.querySelector('#btn1');
const openButton3 = document.querySelector('#btn2');
const openButton4 = document.querySelector('#btn3');
const openButton5 = document.querySelector('#btn4');
const openButton6 = document.querySelector('#btn5');

function displayPopup() {
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

  for (let i = 0; i < workcards.length; i += 1) {
    if (workcards[i].id === id) {
      div.innerHTML = `
      <h2 class="pop-title">${workcards[i].titulo}</h2>
      <div>
        <ul class="techno">
          <li class="techno-pop">${workcards[i].lenguaje}</li>
          <li class="techno-pop">${workcards[i].lenguaje2}</li>
          <li class="techno-pop">${workcards[i].lenguaje3}</li>
        </ul>
      </div>
      <div class="desktop-pop-row">
        <div class="pop-img"></div>
        <div class="desktop-pop-col">
          <div class="pop-text">
            <p>
              ${workcards[i].textpop}
            </p>
          </div>
          <div>
            <ul class="pop-buttons">
              <li class="see one"><a href="${workcards[i].deploy}" target="_blank">See Live</a></li>
              <li class="see two"><a href="${workcards[i].profile}" target="_blank">See Sourse</a></li>
            </ul>
          </div>
        </div>  
      </div>
    `;
    }
  }
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
}

openButton.addEventListener('click', () => {
  id = 0;
  displayPopup();
});

openButton1.addEventListener('click', () => {
  id = 1;
  displayPopup();
});

openButton2.addEventListener('click', () => {
  id = 2;
  displayPopup();
});

openButton3.addEventListener('click', () => {
  id = 3;
  displayPopup();
});

openButton4.addEventListener('click', () => {
  id = 4;
  displayPopup();
});

openButton5.addEventListener('click', () => {
  id = 5;
  displayPopup();
});

openButton6.addEventListener('click', () => {
  id = 6;
  displayPopup();
});

/* Form validation email - lowercases */
const email = document.getElementById('email');
const error = document.getElementById('error');
const form = document.getElementById('all-the-form');

form.addEventListener('submit', (e) => {
  error.classList.add('hiden-msg');
  const upper = /[A-Z]/g;
  if (upper.test(email.value)) {
    e.preventDefault();
    email.value = email.value.toLowerCase();
    error.classList.remove('hiden-msg');
  }
});