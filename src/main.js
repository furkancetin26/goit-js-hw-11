import { fetchImages } from './js/pixabay-api'; 
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { renderImages } from './js/render-functions';

const form = document.querySelector('form'); // Formu seçiyoruz
const searchInput = document.querySelector('.search-input');
const resultsContainer = document.querySelector('#results-container');
const loader = document.getElementById("loader");

const lightbox = new SimpleLightbox('.results-container a', {
  captionsData: 'alt', // 'alt' kullanmak daha doğru
  captionDelay: 250,
  captionPosition: 'bottom',
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();  // Sayfa yenilenmesini engelle

  const query = searchInput.value.trim();
  if (!query) return;

  loader.style.display = "block";

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

    lightbox.refresh();  // Yeni resimler yüklendi, lightbox'u yenile

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
