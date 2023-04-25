export function isPrintText() {
  const text =
    '.............................................................................';
  const delay = 100;

  const elem = document.getElementById('result');
  if (!elem) {
    return;
  }

  const printText = (text, elem, delay) => {
    if (text.length > 0) {
      elem.innerHTML += text[0];
      setTimeout(() => {
        printText(text.slice(1), elem, delay);
      }, delay);
      return;
    }
    window.location.href = `/quiz/13`;
  };

  printText(text, elem, delay);
}
