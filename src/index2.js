import { fetchImages } from './api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const API_KEY = "50461526-1c4ae7086be4914a89297c276";
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-button');
const resultsContainer = document.querySelector('#results-container');
const loader = document.getElementById("loader");

searchBtn.addEventListener('click', async () => {
    
  const query = searchInput.value.trim();
  

  if (!query) return;
    loader.style.display = "block"; 
    
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    await new Promise(resolve => setTimeout(resolve, 1500)); // 1.5 saniye gecikme simülasyonu
    resultsContainer.innerHTML = "";

    if (data.hits.length === 0) {
      iziToast.warning({
        title: "Uyarı",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight"
      });
      return;
    }

    data.hits.forEach(hit => {
  const link = document.createElement("a");
  link.href = hit.largeImageURL;
  link.className = "image-card";

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

// SimpleLightrbox başlatılıyo
let lightbox = new SimpleLightbox('.results-container a');
lightbox.refresh();


  } catch (error) {
    iziToast.error({
      title: "Hata",
      message: "Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.",
      position: "topRight"
    });
  } finally {
    loader.style.display = "none"; // Yükleyiciyi gizle
  }
});
