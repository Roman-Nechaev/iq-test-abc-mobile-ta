import initRouter from './router/index';
initRouter();

import './features/menu';
import './features/dataStor';

import { startTimer } from './features/timer';
import { isPrintText } from './features/printText';
import { onFetchData } from './features/storingResponses';
import { progressBar } from './features/progressBar';
import { dataStor } from './features/dataStor';

const timerRef = document.getElementById('deadline-timer');
const quizFormRef = document.querySelector('#quizForm');
const fetchRenderRef = document.querySelector('.fetchRender');
const fetchBtnRef = document.querySelector('.finish-btn');
const progressBarRef = document.getElementById('progressBar');
const btnPage = document.querySelector('.btn');

dataStor(quizFormRef, btnPage);
onFetchData(fetchRenderRef, fetchBtnRef);
isPrintText();

if (timerRef) startTimer();
if (progressBarRef) progressBar();
