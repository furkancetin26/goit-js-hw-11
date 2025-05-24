import{S as u,i}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const p="50461526-1c4ae7086be4914a89297c276";async function d(o){const s=`https://pixabay.com/api/?key=${p}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`,n=await fetch(s);if(!n.ok)throw new Error("API isteği başarısız");return await n.json()}const c=document.querySelector("#results-container");function m(o){c.innerHTML="";const s=o.hits.map(e=>`
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
    `).join("");c.insertAdjacentHTML("beforeend",s),new u(".results-container a",{captionsData:"data-title",captionDelay:250,captionPosition:"bottom"}).refresh()}const f=document.querySelector("form"),g=document.querySelector(".search-input"),y=document.querySelector("#results-container"),l=document.getElementById("loader"),b=new u(".results-container a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});f.addEventListener("submit",async o=>{o.preventDefault();const s=g.value.trim();if(s){l.style.display="block";try{const n=await d(s);if(await new Promise(e=>setTimeout(e,1500)),y.innerHTML="",n.hits.length===0){i.warning({title:"Uyarı",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(n),b.refresh()}catch{i.error({title:"Hata",message:"Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.",position:"topRight"})}finally{l.style.display="none"}}});
//# sourceMappingURL=index.js.map
