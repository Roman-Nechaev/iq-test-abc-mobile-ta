import fetchData from '../api/fetchData';
import templateMarkup from '../partials/templateMarkup.hbs';

export function onFetchData(fetchRenderRef, fetchBtnRef) {
  async function requestToServer() {
    try {
      const response = await fetchData();

      renderTemplate(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  if (fetchBtnRef) {
    fetchBtnRef.addEventListener('click', requestToServer);

    function renderTemplate(e) {
      fetchRenderRef.insertAdjacentHTML('beforeend', templateMarkup({ e }));
      fetchBtnRef.removeEventListener('click', requestToServer);
    }
  }
}
