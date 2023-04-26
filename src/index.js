import initRouter from './router/index';
initRouter();
import './features/menu';

import { startTimer } from './features/timer';
import { isPrintText } from './features/printText';
import fetchSearchMovies from './api/fetchData';

import templateMarkup from './partials/renderTest.hbs';

const timerRef = document.getElementById('deadline-timer');
const quizFormRef = document.querySelector('#quizForm');
const fetchRenderRef = document.querySelector('.fetchRender');
const btnRef = document.querySelector('.finish-btn');

const btnPage = document.querySelector('.btn');
let count = 1;

if (timerRef) {
  startTimer();
}

isPrintText();

let storingResponses = JSON.parse(localStorage.getItem('collectData')) || [];

function onCollectData(item) {
  storingResponses.push(item);
  localStorage.setItem('collectData', JSON.stringify(storingResponses));
}

if (quizFormRef) {
  btnPage.disabled = true;
  quizFormRef.addEventListener('submit', submitValue);

  function checkValue() {
    quizFormRef.addEventListener('change', e => {
      e.currentTarget.item.value;

      btnPage.disabled = false;
    });
  }
  checkValue();
}

function submitValue(evt) {
  evt.preventDefault();
  const currentItem = evt.currentTarget.item.value;

  onCollectData(currentItem);

  goToPage();
}

const goToPage = () => {
  let currentPage = window.location.pathname.replace(/\D/g, '');

  count += Number(currentPage);

  window.location.href = `/quiz/${count}`;
};

async function requestToServer() {
  try {
    const response = await fetchSearchMovies();

    renderTemplate(response);
  } catch (error) {
    console.log(error.message);
  }
}
if (btnRef) {
  btnRef.addEventListener('click', requestToServer);

  function renderTemplate(e) {
    fetchRenderRef.insertAdjacentHTML('beforeend', templateMarkup({ e }));
  }
}

//!

if (document.getElementById('progressBar')) {
  myFunction();
}

function myFunction() {
  let currentPage = window.location.pathname.replace(/\D/g, '');
  let cost;
  switch (currentPage) {
    case '1':
      cost = 8;
      break;
    case '2':
      cost = 18;
      break;
    case '3':
      cost = 26;
      break;
    case '4':
      cost = 34;
      break;
    case '5':
      cost = 42;
      break;
    case '6':
      cost = 50;
      break;
    case '7':
      cost = 58;
      break;
    case '8':
      cost = 66;
      break;
    case '9':
      cost = 74;
      break;
    case '10':
      cost = 82;
      break;
    case '11':
      cost = 92;
      break;
    case '12':
      cost = 100;
      break;

    default:
      console.log('Invalid subscription type');
  }
  console.log(cost);
  document.getElementById('progressBar').style.width = cost + '%';
}
