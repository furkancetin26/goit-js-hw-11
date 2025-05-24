// src/js/render-functions.js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const resultsContainer = document.querySelector('#results-container');

export function renderImages(data) {
  resultsContainer.innerHTML = '';

  const markup = data.hits.map(hit => {
    return `
      <a class="image-card" href="${hit.largeImageURL}" 
         data-title="
           <strong>Tags:</strong> ${hit.tags}<br>
           👍 ${hit.likes} &nbsp;&nbsp;
           👁️ ${hit.views} &nbsp;&nbsp;
           💬 ${hit.comments} &nbsp;&nbsp;
           ⬇️ ${hit.downloads}
         ">
        <img src="${hit.webformatURL}" alt="${hit.tags}" />
        <div class="image-info">
          <p class="tags">Tags: ${hit.tags}</p>
          <div class="stats">
            <span>👍 ${hit.likes}</span>
            <span>👁️ ${hit.views}</span>
            <span>💬 ${hit.comments}</span>
            <span>⬇️ ${hit.downloads}</span>
          </div>
        </div>
      </a>
    `;
  }).join('');

  resultsContainer.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.results-container a', {
    captionsData: 'data-title',
    captionDelay: 250,
    captionPosition: 'bottom',
  });

  lightbox.refresh();
}
