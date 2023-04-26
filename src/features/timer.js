let numberOfMinutes = 10;
let currentTime = new Date();

let deadlineTime = currentTime.setMinutes(
  currentTime.getMinutes() + numberOfMinutes
);

export function startTimer() {
  let timer = setInterval(() => {
    let nowTime = new Date().getTime();

    let remainingTime = deadlineTime - nowTime;

    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('deadline-timer').innerHTML =
      minutes + ':' + seconds;

    if (minutes == 0) {
      document.getElementById('min-or-sec').innerHTML = 'секунд';
    }

    if (remainingTime < 0) {
      clearInterval(timer);
      document.getElementById('time-remainder').innerHTML =
        '<h2 class="text-timer">Время истекло!</h2>';
    }
  }, 1000);
}
