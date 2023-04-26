export function progressBar() {
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
      cost = 50;
  }

  document.getElementById('progressBar').style.width = cost + '%';
}
