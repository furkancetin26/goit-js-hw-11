import{S as l,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const u="50461526-1c4ae7086be4914a89297c276";async function d(r){const n=`https://pixabay.com/api/?key=${u}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true`,e=await fetch(n);if(!e.ok)throw new Error("API isteği başarısız");return await e.json()}const f=document.querySelector("#results-container");let i=null;function p(r){const n=r.hits.map(e=>`
    
      <a class="image-card" href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
        <div class="image-info">
          <p class="tags">Tags: ${e.tags}</p>
          <div class="stats">
            <span>👍 ${e.likes}</span>
            <span>👁️ ${e.views}</span>
            <span>💬 ${e.comments}</span>
            <span>⬇️ ${e.downloads}</span>
          </div>
        </div>
      </a>
    
  `).join("");f.insertAdjacentHTML("beforeend",n),i?i.refresh():i=new l("#results-container a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function m(){const r=document.querySelector("#results-container");r.innerHTML=""}function y(){const r=document.getElementById("loader");r.style.display="block"}function g(){const r=document.getElementById("loader");r.style.display="none"}const h=document.querySelector(".form"),L=document.querySelector(".search-input");h.addEventListener("submit",async r=>{r.preventDefault();const n=L.value.trim();if(n){y(),m();try{const e=await d(n);if(e.hits.length===0){c.warning({title:"Uyarı",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(e)}catch{c.error({title:"Hata",message:"Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.",position:"topRight"})}finally{g()}}});
//# sourceMappingURL=index.js.map
