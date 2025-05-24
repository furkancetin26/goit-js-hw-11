import{S as u,i}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const p="50461526-1c4ae7086be4914a89297c276";async function d(n){const r=`https://pixabay.com/api/?key=${p}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`,o=await fetch(r);if(!o.ok)throw new Error("API isteği başarısız");return await o.json()}const c=document.querySelector("#results-container");function m(n){c.innerHTML="";const r=n.hits.map(e=>`
      <a class="image-card" href="${e.largeImageURL}" 
         data-title="
           <strong>Tags:</strong> ${e.tags}<br>
           👍 ${e.likes} &nbsp;&nbsp;
           👁️ ${e.views} &nbsp;&nbsp;
           💬 ${e.comments} &nbsp;&nbsp;
           ⬇️ ${e.downloads}
         ">
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
    `).join("");c.insertAdjacentHTML("beforeend",r),new u(".results-container a",{captionsData:"data-title",captionDelay:250,captionPosition:"bottom"}).refresh()}const f=document.querySelector(".search-input"),g=document.querySelector(".search-button"),y=document.querySelector("#results-container"),l=document.getElementById("loader");g.addEventListener("click",async()=>{const n=f.value.trim();if(n){l.style.display="block";try{const r=await d(n);if(await new Promise(e=>setTimeout(e,1500)),y.innerHTML="",r.hits.length===0){i.warning({title:"Uyarı",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(r),new u(".results-container a",{captionsData:"data-title",captionDelay:250,captionPosition:"bottom"}).refresh()}catch{i.error({title:"Hata",message:"Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.",position:"topRight"})}finally{l.style.display="none"}}});
//# sourceMappingURL=index.js.map
