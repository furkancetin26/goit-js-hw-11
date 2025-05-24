// src/js/index.js
import { fetchImages } from './js/pixabay-api.js'; // 📦 API modülünü çağır
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { renderImages } from './js/render-functions';
// Diğer DOM seçimleri...
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
    data.hits.forEach(hit => {
      const link = document.createElement("a");
      link.href = hit.largeImageURL;
      link.className = "image-card";

      const captionText = `
        <strong>Tags:</strong> ${hit.tags}<br>
        👍 ${hit.likes} &nbsp;&nbsp;
        👁️ ${hit.views} &nbsp;&nbsp;
        💬 ${hit.comments} &nbsp;&nbsp;
        ⬇️ ${hit.downloads}
      `;

      link.setAttribute("data-title", captionText);
      link.setAttribute("data-lightbox", "gallery");

      const img = document.createElement("img");
      img.src = hit.webformatURL;
      img.alt = hit.tags;

      const info = document.createElement("div");
      info.className = "image-info";

      const tags = document.createElement("p");
      tags.className = "tags";
      tags.textContent = `Tags: ${hit.tags}`;

      const stats = document.createElement("div");
      stats.className = "stats";
      stats.innerHTML = `
        <span>👍 ${hit.likes}</span>
        <span>👁️ ${hit.views}</span>
        <span>💬 ${hit.comments}</span>
        <span>⬇️ ${hit.downloads}</span>
      `;

      info.appendChild(tags);
      info.appendChild(stats);
      link.appendChild(img);
      link.appendChild(info);

      resultsContainer.appendChild(link);
    });

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
