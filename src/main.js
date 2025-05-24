import { fetchImages } from './js/pixabay-api.js'; 
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { renderImages } from './js/render-functions';

const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-button');
const resultsContainer = document.querySelector('#results-container');
const loader = document.getElementById("loader");

searchBtn.addEventListener('click', async () => {
  const query = searchInput.value.trim();
  if (!query) return;

  loader.style.display="block";

  try {

    const data = await fetchImages(query); 
    await new Promise(resolve => setTimeout(resolve, 1500));
    resultsContainer.innerHTML = "";

    if (data.hits.length === 0) {
      iziToast.warning({
        title: "Uyarı",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight"
      });
      return;
    }
    renderImages(data);
    

    let lightbox = new SimpleLightbox('.results-container a', {
      captionsData: 'data-title',
      captionDelay: 250,
      captionPosition: 'bottom',
    });
    lightbox.refresh();

  } catch (error) {
    iziToast.error({
      title: "Hata",
      message: "Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.",
      position: "topRight"
    });
  } finally {
    loader.style.display = "none";
  }
});
