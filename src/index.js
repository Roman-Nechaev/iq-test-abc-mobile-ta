import initRouter from './router/index';

initRouter();

import './features/menu';
import './features/dataStor';

import { startTimer } from './features/timer';
import { isPrintText } from './features/printText';
import { onFetchData } from './features/storingResponses';
import { progressBar } from './features/progressBar';
// import { dataStor } from './features/dataStor';

const timerRef = document.getElementById('deadline-timer');
const quizFormRef = document.querySelector('#quizForm');
const fetchRenderRef = document.querySelector('.fetchRender');
const fetchBtnRef = document.querySelector('.finish-btn');
const progressBarRef = document.getElementById('progressBar');
const btnPage = document.querySelector('.btn');

// dataStor(quizFormRef, btnPage);
onFetchData(fetchRenderRef, fetchBtnRef);
isPrintText();

let storingResponses = JSON.parse(localStorage.getItem('collectData')) || [];

if (timerRef) startTimer();
if (progressBarRef) progressBar();

function onCollectData(item) {
  storingResponses.push(item);
  localStorage.setItem('collectData', JSON.stringify(storingResponses));
}
let count = 1;

if (quizFormRef) {
  btnPage.disabled = true;
  quizFormRef.addEventListener('submit', onSubmitValue);

  function checkValue() {
    quizFormRef.addEventListener('change', e => {
      e.currentTarget.item.value;

      btnPage.disabled = false;
    });
  }
  checkValue();
}

function onSubmitValue(evt) {
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
