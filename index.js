import{S as u,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="50461526-1c4ae7086be4914a89297c276";async function p(s){const o=`https://pixabay.com/api/?key=${d}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`,e=await fetch(o);if(!e.ok)throw new Error("API isteği başarısız");return await e.json()}const m=document.querySelector("#results-container");let i=null;function f(s){const o=s.hits.map(e=>`
    
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
    
  `).join("");m.insertAdjacentHTML("beforeend",o),i?i.refresh():i=new u("#results-container a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}const y=document.querySelector(".form"),g=document.querySelector(".search-input"),l=document.getElementById("loader"),h=document.querySelector("#results-container");y.addEventListener("submit",async s=>{s.preventDefault();const o=g.value.trim();if(o){l.style.display="block",await new Promise(e=>setTimeout(e,1500)),h.innerHTML="";try{const e=await p(o);if(e.hits.length===0){c.warning({title:"Uyarı",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(e)}catch{c.error({title:"Hata",message:"Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.",position:"topRight"})}finally{l.style.display="none"}}});
//# sourceMappingURL=index.js.map
