import{i as k}from"./deleteModal-6c3c4667.js";function p(){const s=document.querySelector('[data-toggle="dark"]'),i=document.querySelector("#editor"),o=document.documentElement.classList;if(s){let a=function(t){tinymce.remove(),tinymce.init({selector:"textarea#editor",skin:t,plugins:"searchreplace autolink directionality visualblocks visualchars image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap emoticons autosave",toolbar:"undo redo print spellcheckdialog formatpainter | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image | alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent | removeformat"})},d=function(){s.innerHTML=n(!0),o.contains("light")&&(o.add("dark"),o.remove("light")),i&&a("oxide-dark"),localStorage.setItem("dark-mode","enabled")},c=function(){s.innerHTML=n(!1),o.contains("dark")&&(o.add("light"),o.remove("dark")),i&&a("oxide"),localStorage.setItem("dark-mode","disabled")},n=function(t){const m=t?"text-white hover:text-yellow-300":"hover:text-gray-600",u=t?'<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />':'<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />';return'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transition '+m+'">'+u+"</svg>"},e=function(){l=localStorage.getItem("dark-mode"),l==="enabled"?c():l==="disabled"&&d()},l=localStorage.getItem("dark-mode");l||(o.contains("dark")?localStorage.setItem("dark-mode","enabled"):localStorage.setItem("dark-mode","disabled")),s.addEventListener("click",e),l==="enabled"?d():l==="disabled"&&c()}}function b(){const s=document.querySelectorAll("form"),i=document.querySelector("#logout-button");s.forEach(o=>{o.addEventListener("submit",l=>{const a=o.querySelector('button[type="submit"]');o.querySelector('button[type="submit"] #btn-text');const d=o.querySelector('button[type="submit"] #btn-loader'),c=document.querySelector('button[type="submit"] #btn-icon');a&&(a.disabled=!0,a==null||a.classList.add("disabled:cursor-not-allowed")),d&&(d==null||d.classList.remove("hidden")),c&&(d==null||d.classList.add("!right[50%]"),c==null||c.classList.add("hidden"))})}),i&&(i==null||i.addEventListener("click",function(o){o.preventDefault(),i==null||i.parentNode.submit()}))}function v(){const s=document.querySelectorAll('[data-toggle="dropdown"]'),i=100,o=(n,e)=>{const t=n.getBoundingClientRect(),m=e.offsetHeight,u=e.offsetWidth;let f=t.bottom+window.scrollY,r;const g=t.left,h=window.innerWidth-t.right;g>=h?r=t.right-u:r=t.left,f+m>window.innerHeight+window.scrollY&&(f=t.top-m+window.scrollY),r<0?r=0:r+u>window.innerWidth&&(r=window.innerWidth-u),e.style.top=`${f}px`,e.style.left=`${r}px`,e.style.width=`${u}px`,e.style.zIndex="99999"},l=()=>{document.querySelectorAll(".cloned-menu").forEach(e=>{e.classList.add("hidden")});const n=document.querySelector(".cloned-menu");n&&n.remove()},a=n=>{const e=n.querySelector("#logout-button");e&&e.addEventListener("click",function(t){t.preventDefault(),e.parentNode.submit()})},d=n=>{const e=n.nextElementSibling;let t=null;document.querySelector(".cloned-menu")?l():e&&e.classList.contains("hidden")&&(l(),e.classList.remove("hidden"),o(n,e),t=e.cloneNode(!0),t.id="",t.classList.add("cloned-menu"),document.body.appendChild(t),k(),a(t),e.classList.add("hidden"))};s.forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),d(n)})}),document.addEventListener("click",n=>{n.target.closest('[data-toggle="dropdown"]')||l()});let c;window.addEventListener("resize",()=>{clearTimeout(c),c=setTimeout(l,i)})}function y(){const s=document.querySelectorAll("#close-ad");s&&s.forEach(i=>{i.addEventListener("click",o=>{o.preventDefault(),i.parentNode.remove()})})}document.addEventListener("DOMContentLoaded",function(){p(),b(),v(),y()});
