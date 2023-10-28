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

const baseSkillsURL =
  'https://res.cloudinary.com/dihe16lrv/image/upload/f_auto,q_auto/v1/portfolio/skills';

const skills = [
  {
    name: 'HTML',
    srcImg: `${baseSkillsURL}/v5hzhthbsdzg4akrsnsl`,
  },
  {
    name: 'CSS',
    srcImg: `${baseSkillsURL}/lcxgezddu8kzurmiygla`,
  },
  {
    name: 'JS',
    srcImg: `${baseSkillsURL}/wiipcxed9tnf2vugvq8g`,
  },
  {
    name: 'C#',
    srcImg: `${baseSkillsURL}/j1dqwnzcs6moytkb4pf5`,
  },
  {
    name: 'ASP.NET',
    srcImg: `${baseSkillsURL}/bpigr4pobotr0txeci4j`,
  },
  {
    name: 'VUE.JS',
    srcImg: `${baseSkillsURL}/kvwkmheulp2q28ogzo1y`,
  },
  {
    name: 'BOOTSTRAP',
    srcImg: `${baseSkillsURL}/hws3w99nzis4brrujur6`,
  },
  {
    name: 'SASS',
    srcImg: `${baseSkillsURL}/xqvbcwqvxjecwffcdhal`,
  },
  {
    name: 'TS',
    srcImg: `${baseSkillsURL}/ijhmheow5b1nxxudzsn9`,
  },
  {
    name: 'SQL',
    srcImg: `${baseSkillsURL}/q17sflz4bljx3c26iahe`,
  },
  {
    name: 'GIT',
    srcImg: `${baseSkillsURL}/pnkbe2ftu81xjcwrxu6b`,
  },
  {
    name: 'FIGMA',
    srcImg: `${baseSkillsURL}/ee1n4cbhw61vw3cuaa78`,
  },
  {
    name: 'REACT.JS',
    srcImg: `${baseSkillsURL}/o2nfbmmrhx0fg4spvxdc`,
  },
  {
    name: 'MONGODB',
    srcImg: `${baseSkillsURL}/hzmp3ehm2iiyw5nzwzih`,
  },
  {
    name: 'NODE.JS',
    srcImg: `${baseSkillsURL}/jjiq3nl1tkokteqoistd`,
  },
  {
    name: 'EXPRESS.JS',
    srcImg: `${baseSkillsURL}/z8j8dfxye0qwckz0gzos`,
  },
];
const skillsElement = document.querySelector('#webSkills');

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

shuffle(skills);

skills.forEach((skill) => {
  const elem = `
  <div class="d-flex flex-column justify-content-center align-items-center" style="width:55px;">
      <img class="opacity-75 shadow-effect" src="${skill.srcImg}" alt="${skill.name}">
      <small>${skill.name}</small>
  </div>
  `;
  skillsElement.insertAdjacentHTML('afterbegin', elem);
});

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
