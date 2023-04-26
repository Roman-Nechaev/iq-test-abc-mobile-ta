let storingResponses = JSON.parse(localStorage.getItem('collectData')) || [];

export function dataStor(quizFormRef, btnPage) {
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

    window.location.pathname = `/quiz/${count}`;
  };
}
