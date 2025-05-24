import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const searchInput = document.querySelector('.search-input');
const loader = document.getElementById("loader");
const resultsContainer = document.querySelector('#results-container');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (!query) return;

  // Arama başlarken loader göster
  loader.style.display = "block";
  await new Promise(resolve => setTimeout(resolve, 1500));
  // Arama yapmadan önce sayfayı temizle (şartnamede gerekiyorsa)
  resultsContainer.innerHTML = '';

  try {
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      iziToast.warning({
        title: "Uyarı",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight"
      });
      return;
    }

    // Görselleri render et, ekleme şeklinde
    renderImages(data);

  } catch (error) {
    iziToast.error({
      title: "Hata",
      message: "Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.",
      position: "topRight"
    });
  } finally {
    // İşlem tamamlandığında loader gizle
    loader.style.display = "none";
  }
});
