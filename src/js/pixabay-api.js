// src/js/api.js

const API_KEY = "50461526-1c4ae7086be4914a89297c276"; // Gerçek projelerde .env ile gizlenir

export async function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("API isteği başarısız");
  }

  const data = await response.json();
  return data;
}
