import{T as v}from"./tomSelect-5d20063c.js";import{i as h}from"./deleteModal-6c3c4667.js";function y(){const t=document.querySelector("#filter-table");if(t){const n=document.querySelector("table"),r=Array.from(n.querySelectorAll("tr"));let e=document.querySelector("#no-results-row");if(!e){e=document.createElement("tr"),e.setAttribute("id","no-results-row");const o=document.createElement("td"),s=r[0].children.length;o.textContent=language.noResults,o.setAttribute("colspan",s),o.classList.add("py-10","text-center","text-sm","text-white","hover:bg-white/10","duration-300","transition-all"),e.appendChild(o)}t.addEventListener("keyup",function(o){o.preventDefault();const s=t.value.trim().toLowerCase();let l=0;if(r.forEach(c=>{const a=c.querySelector("td:nth-child(2)");if(a){const f=a.textContent.trim().toLowerCase().includes(s);c.classList.toggle("hidden",!f),f&&l++}}),l===0){const c=r[r.length-1];c.id!=="no-results-row"&&c.insertAdjacentElement("afterend",e)}else e.parentNode&&e.parentNode.removeChild(e)});const p=Array.from(n.querySelectorAll("th"));n.querySelector("thead tr");const i=n.querySelector("tbody");p.forEach((o,s)=>{o.addEventListener("click",function(){const l=o.dataset.sort==="asc",c=s,a=Array.from(i.querySelectorAll("tr"));a.sort((m,f)=>{const d=m.children[c].textContent.toLowerCase(),u=f.children[c].textContent.toLowerCase();return!isNaN(parseFloat(d))&&!isNaN(parseFloat(u))?l?d-u:u-d:d<u?l?-1:1:d>u?l?1:-1:0}),i.innerHTML="",a.forEach(m=>{i.appendChild(m)}),o.dataset.sort=l?"desc":"asc"})})}}function g(){const t=document.querySelector("#ad-type"),n=document.querySelector("#ad-banner"),r=document.querySelector("#ad-script");if(t){let e=function(){t.value==="banner"?(n.classList.remove("hidden"),r.classList.add("hidden")):(n.classList.add("hidden"),r.classList.remove("hidden"))};e(),t.addEventListener("change",e)}}function S(){const t=document.querySelector("#nav-toggle"),n=document.querySelector("#nav-menu"),r=t.parentElement.parentElement;let e=!1;i(),t.addEventListener("click",function(o){o.preventDefault(),e?i():p()});function p(){if(!e){const o=document.createElement("div");o.classList.add("sm:hidden","container-app","flex","flex-col","gap-3","navbar"),o.innerHTML=n.innerHTML,r.appendChild(o),o.querySelectorAll('[data-toggle="dropdown"]').forEach(l=>{const c=l.nextElementSibling;l.addEventListener("click",function(){c.classList.toggle("hidden")})}),e=!0}}function i(){e&&(r.removeChild(r.lastChild),e=!1)}}function L(){var n;document.querySelector("#tom-select")&&new v("#tom-select",{create:!1}),(n=document.querySelector(".ts-wrapper"))==null||n.classList.remove("hidden")}function q(){const t=document.querySelector("#title"),n=document.querySelector("#slug");t&&n&&t.addEventListener("input",function(){const e=t.value.trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+$/,"");n.value=e.toLowerCase()})}function w(){const t=document.querySelector("#cover"),n=document.querySelector("#cover-preview");document.querySelector(".tox-tinymce"),t&&t.addEventListener("change",r=>{r.target.files[0]&&(n.src=URL.createObjectURL(r.target.files[0]))})}document.addEventListener("DOMContentLoaded",function(){S(),y(),g(),L(),q(),h(),w()});
