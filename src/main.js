import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const searchInput = document.querySelector('.search-input');


form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const query = searchInput.value.trim();
  if (!query) return;

  showLoader();
  clearGallery();

  try {
    const data = await fetchImages(query);
    await new Promise(r => setTimeout(r, 1500)); // loading gösterimi için

    if (data.hits.length === 0) {
      iziToast.warning({
        title: "Uyarı",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight"
      });
      return;
    }

    renderImages(data);

  } catch (error) {
    iziToast.error({
      title: "Hata",
      message: "Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.",
      position: "topRight"
    });
  } finally {
    hideLoader();
  }
});
