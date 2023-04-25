import initRouter from './router/index';
initRouter();
import './features/menu';

import { startTimer } from './features/timer';
import { isPrintText } from './features/printText';
import fetchSearchMovies from './api/fetchData';

import templateMarkup from './partials/renderTest.hbs';

const timerRef = document.getElementById('deadline-timer');
const quizFormRef = document.querySelector('#quizForm');
const fRef = document.querySelector('.testRender');
const finishRef = document.querySelector('.finish-btn');
console.log(fRef);
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
finishRef.addEventListener('click', requestToServer);
function renderTemplate(e) {
  fRef.insertAdjacentHTML('beforeend', templateMarkup({ e }));
}
