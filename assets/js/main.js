AOS.init();
AOS.init({
  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

const skills = [
  {
    name: 'HTML',
    srcImg: './assets/images/html-5-b35dd2c0.png',
  },
  {
    name: 'CSS',
    srcImg: './assets/images/css-3-059eb572.png',
  },
  {
    name: 'JAVASCRIPT',
    srcImg: './assets/images/js-30558d7e.png',
  },
  {
    name: 'C#',
    srcImg: './assets/images/c-sharp-19211c9f.png',
  },
  {
    name: 'ASP.NET',
    srcImg: './assets/images/aspdotnet.png',
  },
  {
    name: 'VUE.JS',
    srcImg: './assets/images/vue-js-6897cf02.png',
  },
  {
    name: 'BOOTSTRAP',
    srcImg: './assets/images/bootstrap-4385031f.png',
  },
  {
    name: 'SASS',
    srcImg: './assets/images/sass-c6a8ebc8.png',
  },
  {
    name: 'TYPESCRIPT',
    srcImg: './assets/images/typescript-f01a041f.png',
  },
  {
    name: 'SQL',
    srcImg: './assets/images/microsoft-sql-server-logo.png',
  },
  {
    name: 'GIT',
    srcImg: './assets/images/git-f0b50044.png',
  },
  {
    name: 'FIGMA',
    srcImg: './assets/images/figma-0a1384c5.png',
  },
];
const skillsElement = document.querySelector('#webSkills');
skills.reverse();
for (let i = 0; i < skills.length; i++) {
  const elem = `
  <div class="d-flex flex-column justify-content-center align-items-center" style="width:55px;">
      <img class="opacity-75 shadow-effect" src="${skills[i].srcImg}" alt="${skills[i].name}">
      <small>${skills[i].name}</small>
  </div>
  `;
  skillsElement.insertAdjacentHTML('afterbegin', elem);
}

// Mouse move effect
let cursorElem = document.querySelector('.cursor');
let cursorOutlineElem = document.querySelector('.cursor-outline');
let isCursorMoving = false;

document.addEventListener('mousemove', (e) => {
  if (!isCursorMoving) {
    isCursorMoving = true;
    requestAnimationFrame(() => {
      cursorElem.style.cssText =
        cursorOutlineElem.style.cssText = `left:${e.clientX}px; top:${e.clientY}px;`;
      isCursorMoving = false;
    });
  }
});

const submitBtn = document.querySelector('#btnSubmit');

submitBtn.addEventListener('click', () => {
  const formElem = document.querySelector('#myForm');
  formElem.submit();
  formElem.reset();
});

let loaderElem = document.querySelector('#loader');

window.addEventListener('load', () => {
  loaderElem.style.display = 'none';
});
