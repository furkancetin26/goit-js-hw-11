import{S as g,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const f="50461526-1c4ae7086be4914a89297c276";async function y(a){const n=`https://pixabay.com/api/?key=${f}&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true`,o=await fetch(n);if(!o.ok)throw new Error("API isteği başarısız");return await o.json()}const p=document.querySelector("#results-container");function b(a){p.innerHTML="";const n=a.hits.map(e=>`
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
    `).join("");p.insertAdjacentHTML("beforeend",n),new g(".results-container a",{captionsData:"alt",captionDelay:250}).refresh()}const h=document.querySelector(".search-input"),$=document.querySelector(".search-button"),u=document.querySelector("#results-container"),m=document.getElementById("loader");$.addEventListener("click",async()=>{const a=h.value.trim();if(a){m.style.display="block";try{const n=await y(a);if(await new Promise(e=>setTimeout(e,1500)),u.innerHTML="",n.hits.length===0){d.warning({title:"Uyarı",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(n),n.hits.forEach(e=>{const t=document.createElement("a");t.href=e.largeImageURL,t.className="image-card";const s=`
        <strong>Tags:</strong> ${e.tags}<br>
        👍 ${e.likes} &nbsp;&nbsp;
        👁️ ${e.views} &nbsp;&nbsp;
        💬 ${e.comments} &nbsp;&nbsp;
        ⬇️ ${e.downloads}
      `;t.setAttribute("data-title",s),t.setAttribute("data-lightbox","gallery");const r=document.createElement("img");r.src=e.webformatURL,r.alt=e.tags;const i=document.createElement("div");i.className="image-info";const c=document.createElement("p");c.className="tags",c.textContent=`Tags: ${e.tags}`;const l=document.createElement("div");l.className="stats",l.innerHTML=`
        <span>👍 ${e.likes}</span>
        <span>👁️ ${e.views}</span>
        <span>💬 ${e.comments}</span>
        <span>⬇️ ${e.downloads}</span>
      `,i.appendChild(c),i.appendChild(l),t.appendChild(r),t.appendChild(i),u.appendChild(t)}),new g(".results-container a",{captionsData:"data-title",captionDelay:250,captionPosition:"bottom"}).refresh()}catch{d.error({title:"Hata",message:"Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.",position:"topRight"})}finally{m.style.display="none"}}});
//# sourceMappingURL=index.js.map
