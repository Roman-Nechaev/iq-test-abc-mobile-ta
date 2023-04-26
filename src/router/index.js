import Route from 'route-parser';

import appConstants from '../common/constants';

import img from '../images/rain_bk3-1.png';
import imgQ8 from '../images/image.jpg';
import imgQ10 from '../images/q10.jpeg';
import imgQ11 from '../images/imageQ11.jpeg';
import img1 from '../images/325-01.png';
import call from '../images/call.svg';

import MainPage from '../partials/main.hbs';

import Question1 from '../partials/quiz-01.hbs';
import Question2 from '../partials/quiz-02.hbs';
import Question3 from '../partials/quiz-03.hbs';
import Question4 from '../partials/quiz-04.hbs';
import Question5 from '../partials/quiz-05.hbs';
import Question6 from '../partials/quiz-06.hbs';
import Question7 from '../partials/quiz-07.hbs';
import Question8 from '../partials/quiz-08.hbs';
import Question9 from '../partials/quiz-09.hbs';
import Question10 from '../partials/quiz-10.hbs';
import Question11 from '../partials/quiz-11.hbs';
import Question12 from '../partials/quiz-12.hbs';
import Question13 from '../partials/quiz-13.hbs';

export const routes = {
  Main: new Route(appConstants.routes.index),
  Question1: new Route(appConstants.routes.q1),
  Question2: new Route(appConstants.routes.q2),
  Question3: new Route(appConstants.routes.q3),
  Question4: new Route(appConstants.routes.q4),
  Question5: new Route(appConstants.routes.q5),
  Question6: new Route(appConstants.routes.q6),
  Question7: new Route(appConstants.routes.q7),
  Question8: new Route(appConstants.routes.q8),
  Question9: new Route(appConstants.routes.q9),
  Question10: new Route(appConstants.routes.q10),
  Question11: new Route(appConstants.routes.q11),
  Question12: new Route(appConstants.routes.q12),
  Question13: new Route(appConstants.routes.q13),
};

export const render = path => {
  let result = '<h1>404</h1>';

  if (routes.Main.match(path)) {
    result = MainPage({ img, img1 });
  } else if (routes.Question1.match(path)) {
    result = Question1();
  } else if (routes.Question2.match(path)) {
    result = Question2();
  } else if (routes.Question3.match(path)) {
    result = Question3();
  } else if (routes.Question4.match(path)) {
    result = Question4();
  } else if (routes.Question5.match(path)) {
    result = Question5();
  } else if (routes.Question6.match(path)) {
    result = Question6();
  } else if (routes.Question7.match(path)) {
    result = Question7();
  } else if (routes.Question8.match(path)) {
    result = Question8({ imgQ8 });
  } else if (routes.Question9.match(path)) {
    result = Question9();
  } else if (routes.Question10.match(path)) {
    result = Question10({ imgQ10 });
  } else if (routes.Question11.match(path)) {
    result = Question11({ imgQ11 });
  } else if (routes.Question12.match(path)) {
    result = Question12();
  } else if (routes.Question13.match(path)) {
    result = Question13({ call });
  }

  document.querySelector('#app').innerHTML = result;
};

const initRouter = () => {
  render(new URL(window.location.href).pathname);
};

export default initRouter;
