import{e as R,c as Y,b as U,d as T,f as J,S as W,a as X,A as K}from"./swiper.js";import{A as Z}from"./aos.js";import{_ as j}from"./image_desktop.js";import{_ as F}from"./image_mobile.js";import{_ as Q,r as V,o as ee,c as ae,a as l,b as d,w as c,F as te,f as N,p as ie,e as se}from"./index.js";function G(w,e,k,n){return w.params.createElements&&Object.keys(n).forEach(v=>{if(!k[v]&&k.auto===!0){let p=R(w.el,`.${n[v]}`)[0];p||(p=Y("div",n[v]),p.className=n[v],w.el.append(p)),k[v]=p,e[v]=p}}),k}function le(w){let{swiper:e,extendParams:k,on:n,emit:v}=w;k({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const p=s=>(Array.isArray(s)?s:[s]).filter(o=>!!o);function r(s){let o;return s&&typeof s=="string"&&e.isElement&&(o=e.el.querySelector(s),o)?o:(s&&(typeof s=="string"&&(o=[...document.querySelectorAll(s)]),e.params.uniqueNavElements&&typeof s=="string"&&o.length>1&&e.el.querySelectorAll(s).length===1&&(o=e.el.querySelector(s))),s&&!o?s:o)}function b(s,o){const f=e.params.navigation;s=p(s),s.forEach(a=>{a&&(a.classList[o?"add":"remove"](...f.disabledClass.split(" ")),a.tagName==="BUTTON"&&(a.disabled=o),e.params.watchOverflow&&e.enabled&&a.classList[e.isLocked?"add":"remove"](f.lockClass))})}function y(){const{nextEl:s,prevEl:o}=e.navigation;if(e.params.loop){b(o,!1),b(s,!1);return}b(o,e.isBeginning&&!e.params.rewind),b(s,e.isEnd&&!e.params.rewind)}function O(s){s.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),v("navigationPrev"))}function B(s){s.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),v("navigationNext"))}function $(){const s=e.params.navigation;if(e.params.navigation=G(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(s.nextEl||s.prevEl))return;let o=r(s.nextEl),f=r(s.prevEl);Object.assign(e.navigation,{nextEl:o,prevEl:f}),o=p(o),f=p(f);const a=(t,i)=>{t&&t.addEventListener("click",i==="next"?B:O),!e.enabled&&t&&t.classList.add(...s.lockClass.split(" "))};o.forEach(t=>a(t,"next")),f.forEach(t=>a(t,"prev"))}function A(){let{nextEl:s,prevEl:o}=e.navigation;s=p(s),o=p(o);const f=(a,t)=>{a.removeEventListener("click",t==="next"?B:O),a.classList.remove(...e.params.navigation.disabledClass.split(" "))};s.forEach(a=>f(a,"next")),o.forEach(a=>f(a,"prev"))}n("init",()=>{e.params.navigation.enabled===!1?I():($(),y())}),n("toEdge fromEdge lock unlock",()=>{y()}),n("destroy",()=>{A()}),n("enable disable",()=>{let{nextEl:s,prevEl:o}=e.navigation;if(s=p(s),o=p(o),e.enabled){y();return}[...s,...o].filter(f=>!!f).forEach(f=>f.classList.add(e.params.navigation.lockClass))}),n("click",(s,o)=>{let{nextEl:f,prevEl:a}=e.navigation;f=p(f),a=p(a);const t=o.target;if(e.params.navigation.hideOnClick&&!a.includes(t)&&!f.includes(t)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===t||e.pagination.el.contains(t)))return;let i;f.length?i=f[0].classList.contains(e.params.navigation.hiddenClass):a.length&&(i=a[0].classList.contains(e.params.navigation.hiddenClass)),v(i===!0?"navigationShow":"navigationHide"),[...f,...a].filter(u=>!!u).forEach(u=>u.classList.toggle(e.params.navigation.hiddenClass))}});const M=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),$(),y()},I=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),A()};Object.assign(e.navigation,{enable:M,disable:I,update:y,init:$,destroy:A})}function D(w){return w===void 0&&(w=""),`.${w.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ne(w){let{swiper:e,extendParams:k,on:n,emit:v}=w;const p="swiper-pagination";k({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${p}-bullet`,bulletActiveClass:`${p}-bullet-active`,modifierClass:`${p}-`,currentClass:`${p}-current`,totalClass:`${p}-total`,hiddenClass:`${p}-hidden`,progressbarFillClass:`${p}-progressbar-fill`,progressbarOppositeClass:`${p}-progressbar-opposite`,clickableClass:`${p}-clickable`,lockClass:`${p}-lock`,horizontalClass:`${p}-horizontal`,verticalClass:`${p}-vertical`,paginationDisabledClass:`${p}-disabled`}}),e.pagination={el:null,bullets:[]};let r,b=0;const y=a=>(Array.isArray(a)?a:[a]).filter(t=>!!t);function O(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function B(a,t){const{bulletActiveClass:i}=e.params.pagination;a&&(a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${i}-${t}`),a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${i}-${t}-${t}`)))}function $(a){const t=a.target.closest(D(e.params.pagination.bulletClass));if(!t)return;a.preventDefault();const i=T(t)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===i)return;e.slideToLoop(i)}else e.slideTo(i)}function A(){const a=e.rtl,t=e.params.pagination;if(O())return;let i=e.pagination.el;i=y(i);let u,S;const q=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,H=e.params.loop?Math.ceil(q/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(S=e.previousRealIndex||0,u=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(u=e.snapIndex,S=e.previousSnapIndex):(S=e.previousIndex||0,u=e.activeIndex||0),t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const g=e.pagination.bullets;let E,L,z;if(t.dynamicBullets&&(r=U(g[0],e.isHorizontal()?"width":"height",!0),i.forEach(x=>{x.style[e.isHorizontal()?"width":"height"]=`${r*(t.dynamicMainBullets+4)}px`}),t.dynamicMainBullets>1&&S!==void 0&&(b+=u-(S||0),b>t.dynamicMainBullets-1?b=t.dynamicMainBullets-1:b<0&&(b=0)),E=Math.max(u-b,0),L=E+(Math.min(g.length,t.dynamicMainBullets)-1),z=(L+E)/2),g.forEach(x=>{const _=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(C=>`${t.bulletActiveClass}${C}`)].map(C=>typeof C=="string"&&C.includes(" ")?C.split(" "):C).flat();x.classList.remove(..._)}),i.length>1)g.forEach(x=>{const _=T(x);_===u?x.classList.add(...t.bulletActiveClass.split(" ")):e.isElement&&x.setAttribute("part","bullet"),t.dynamicBullets&&(_>=E&&_<=L&&x.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),_===E&&B(x,"prev"),_===L&&B(x,"next"))});else{const x=g[u];if(x&&x.classList.add(...t.bulletActiveClass.split(" ")),e.isElement&&g.forEach((_,C)=>{_.setAttribute("part",C===u?"bullet-active":"bullet")}),t.dynamicBullets){const _=g[E],C=g[L];for(let P=E;P<=L;P+=1)g[P]&&g[P].classList.add(...`${t.bulletActiveClass}-main`.split(" "));B(_,"prev"),B(C,"next")}}if(t.dynamicBullets){const x=Math.min(g.length,t.dynamicMainBullets+4),_=(r*x-r)/2-z*r,C=a?"right":"left";g.forEach(P=>{P.style[e.isHorizontal()?C:"top"]=`${_}px`})}}i.forEach((g,E)=>{if(t.type==="fraction"&&(g.querySelectorAll(D(t.currentClass)).forEach(L=>{L.textContent=t.formatFractionCurrent(u+1)}),g.querySelectorAll(D(t.totalClass)).forEach(L=>{L.textContent=t.formatFractionTotal(H)})),t.type==="progressbar"){let L;t.progressbarOpposite?L=e.isHorizontal()?"vertical":"horizontal":L=e.isHorizontal()?"horizontal":"vertical";const z=(u+1)/H;let x=1,_=1;L==="horizontal"?x=z:_=z,g.querySelectorAll(D(t.progressbarFillClass)).forEach(C=>{C.style.transform=`translate3d(0,0,0) scaleX(${x}) scaleY(${_})`,C.style.transitionDuration=`${e.params.speed}ms`})}t.type==="custom"&&t.renderCustom?(g.innerHTML=t.renderCustom(e,u+1,H),E===0&&v("paginationRender",g)):(E===0&&v("paginationRender",g),v("paginationUpdate",g)),e.params.watchOverflow&&e.enabled&&g.classList[e.isLocked?"add":"remove"](t.lockClass)})}function M(){const a=e.params.pagination;if(O())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let i=e.pagination.el;i=y(i);let u="";if(a.type==="bullets"){let S=e.params.loop?Math.ceil(t/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&S>t&&(S=t);for(let q=0;q<S;q+=1)a.renderBullet?u+=a.renderBullet.call(e,q,a.bulletClass):u+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?u=a.renderFraction.call(e,a.currentClass,a.totalClass):u=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?u=a.renderProgressbar.call(e,a.progressbarFillClass):u=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(S=>{a.type!=="custom"&&(S.innerHTML=u||""),a.type==="bullets"&&e.pagination.bullets.push(...S.querySelectorAll(D(a.bulletClass)))}),a.type!=="custom"&&v("paginationRender",i[0])}function I(){e.params.pagination=G(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t;typeof a.el=="string"&&e.isElement&&(t=e.el.querySelector(a.el)),!t&&typeof a.el=="string"&&(t=[...document.querySelectorAll(a.el)]),t||(t=a.el),!(!t||t.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(a.el)],t.length>1&&(t=t.filter(i=>J(i,".swiper")[0]===e.el)[0])),Array.isArray(t)&&t.length===1&&(t=t[0]),Object.assign(e.pagination,{el:t}),t=y(t),t.forEach(i=>{a.type==="bullets"&&a.clickable&&i.classList.add(...(a.clickableClass||"").split(" ")),i.classList.add(a.modifierClass+a.type),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(i.classList.add(`${a.modifierClass}${a.type}-dynamic`),b=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&i.classList.add(a.progressbarOppositeClass),a.clickable&&i.addEventListener("click",$),e.enabled||i.classList.add(a.lockClass)}))}function s(){const a=e.params.pagination;if(O())return;let t=e.pagination.el;t&&(t=y(t),t.forEach(i=>{i.classList.remove(a.hiddenClass),i.classList.remove(a.modifierClass+a.type),i.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(i.classList.remove(...(a.clickableClass||"").split(" ")),i.removeEventListener("click",$))})),e.pagination.bullets&&e.pagination.bullets.forEach(i=>i.classList.remove(...a.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:t}=e.pagination;t=y(t),t.forEach(i=>{i.classList.remove(a.horizontalClass,a.verticalClass),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?f():(I(),M(),A())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&A()}),n("snapIndexChange",()=>{A()}),n("snapGridLengthChange",()=>{M(),A()}),n("destroy",()=>{s()}),n("enable disable",()=>{let{el:a}=e.pagination;a&&(a=y(a),a.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{A()}),n("click",(a,t)=>{const i=t.target,u=y(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&u&&u.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const S=u[0].classList.contains(e.params.pagination.hiddenClass);v(S===!0?"paginationShow":"paginationHide"),u.forEach(q=>q.classList.toggle(e.params.pagination.hiddenClass))}});const o=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=y(a),a.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),I(),M(),A()},f=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=y(a),a.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),s()};Object.assign(e.pagination,{enable:o,disable:f,render:M,update:A,init:I,destroy:s})}const re={components:{Swiper:W,SwiperSlide:X},data:function(){return{}},mounted:function(){Z.init()},methods:{},setup(){return{onSwiper:k=>{console.log(k)},onSlideChange:()=>{console.log("slide change")},modules:[K,ne,le]}}},h="/theme-calhoun-vue/assets/Dummy Logo.png",m=w=>(ie("data-v-15962a45"),w=w(),se(),w),oe={class:"h-[calc(100vh-70px)] w-screen hidden md:block"},de=m(()=>l("img",{src:j,class:"h-[calc(100vh-70px)] w-screen",alt:""},null,-1)),ce=m(()=>l("img",{src:j,class:"h-[calc(100vh-70px)] w-screen",alt:""},null,-1)),pe=m(()=>l("img",{src:j,class:"h-[calc(100vh-70px)] w-screen",alt:""},null,-1)),me={class:"h-[calc(100vh-70px)] w-screen md:hidden"},ue=m(()=>l("img",{src:F,class:"h-[calc(100vh-70px)] w-screen",alt:""},null,-1)),fe=m(()=>l("img",{src:F,class:"h-[calc(100vh-70px)] w-screen",alt:""},null,-1)),ge=m(()=>l("img",{src:F,class:"h-[calc(100vh-70px)] w-screen",alt:""},null,-1)),he=N('<div class="px-4 py-20 sm:container mx-auto" data-v-15962a45><div class="flex flex-col gap-y-5" data-v-15962a45><h2 class="text-[35px] text-center font-bold text-black850" data-v-15962a45>Our Products</h2><p class="text-center text-black850" data-v-15962a45>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p><div class="flex flex-wrap justify-between gap-6 mt-8" data-v-15962a45><div class="md:w-[47%] xl:w-[30%] card__product" data-v-15962a45><i class="fa-solid fa-paper-plane text-[150px]" data-v-15962a45></i><h4 class="mb-4 mt-8 text-2xl text-center font-bold" data-v-15962a45>Adventage 1</h4><p class="text-black850 text-center mb-8" data-v-15962a45> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. </p><a href="" class="bg-black py-3 px-10 rounded-md text-white text-center font-semibold" data-v-15962a45>Learn More</a></div><div class="md:w-[47%] xl:w-[30%] card__product" data-v-15962a45><i class="fa-solid fa-wifi text-[150px]" data-v-15962a45></i><h4 class="mb-4 mt-8 text-2xl text-center font-bold" data-v-15962a45>Adventage 1</h4><p class="text-black850 text-center mb-8" data-v-15962a45> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. </p><a href="" class="bg-black py-3 px-10 rounded-md text-white text-center font-semibold" data-v-15962a45>Learn More</a></div><div class="md:w-[47%] xl:w-[30%] card__product" data-v-15962a45><i class="fa-solid fa-stopwatch text-[150px]" data-v-15962a45></i><h4 class="mb-4 mt-8 text-2xl text-center font-bold" data-v-15962a45>Adventage 1</h4><p class="text-black850 text-center mb-8" data-v-15962a45> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. </p><a href="" class="bg-black py-3 px-10 rounded-md text-white text-center font-semibold" data-v-15962a45>Learn More</a></div></div></div></div>',1),ve=m(()=>l("div",{class:"bg-whitesmoke flex flex-col justify-center items-center px-8 py-20"},[l("h2",{class:"text-[35px] text-center font-bold text-black850 mb-8"},"Who We Are"),l("div",{class:"w-[95%] md:w-[70%] xl:w-[50%]"},[l("iframe",{class:"w-full rounded-md",height:"315",src:"https://www.youtube.com/embed/zk-H40Gp-oY?si=Kjxk72k7ZJYFJT89",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})])],-1)),be=N('<div class="px-4 py-20 sm:container mx-auto" data-v-15962a45><div class="flex flex-col gap-y-5" data-v-15962a45><h2 class="text-[35px] text-center font-bold text-black850" data-v-15962a45>Our Adventages</h2><p class="text-center text-black850" data-v-15962a45>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p><div class="flex flex-wrap justify-between gap-6 mt-8" data-v-15962a45><div class="md:w-[47%] xl:w-[30%]" data-v-15962a45><h4 class="mb-3 font-bold" data-v-15962a45>Adventage 1</h4><p class="text-justify text-black850" data-v-15962a45> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit. </p></div><div class="md:w-[47%] xl:w-[30%]" data-v-15962a45><h4 class="mb-3 font-bold" data-v-15962a45>Adventage 1</h4><p class="text-justify text-black850" data-v-15962a45> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit. </p></div><div class="md:w-[47%] xl:w-[30%]" data-v-15962a45><h4 class="mb-3 font-bold" data-v-15962a45>Adventage 1</h4><p class="text-justify text-black850" data-v-15962a45> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit. </p></div><div class="md:w-[47%] xl:w-[30%]" data-v-15962a45><h4 class="mb-3 font-bold" data-v-15962a45>Adventage 1</h4><p class="text-justify text-black850" data-v-15962a45> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit. </p></div><div class="md:w-[47%] xl:w-[30%]" data-v-15962a45><h4 class="mb-3 font-bold" data-v-15962a45>Adventage 1</h4><p class="text-justify text-black850" data-v-15962a45> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit. </p></div><div class="md:w-[47%] xl:w-[30%]" data-v-15962a45><h4 class="mb-3 font-bold" data-v-15962a45>Adventage 1</h4><p class="text-justify text-black850" data-v-15962a45> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit. </p></div></div></div></div>',1),xe={class:"px-4 py-20 sm:container mx-auto"},we={class:"flex flex-col gap-y-5"},_e=m(()=>l("h2",{class:"text-[35px] text-center font-bold text-black850"},"Our Clients",-1)),ye=m(()=>l("p",{class:"text-center text-black850 mb-8"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",-1)),Ce={class:"mb-12"},Se=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),Le=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),ke=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),Ae=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),Ee=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),Be=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),qe=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),Oe={class:"mb-12"},$e=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),Me=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),Ie=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),Pe=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),ze=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),De=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),He=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),je={class:"mb-12"},Fe=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),Ne=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),Te=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),Ve=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),Ge=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),Re=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),Ye=m(()=>l("img",{src:h,height:"50",width:"150",alt:""},null,-1)),Ue=N('<div class="bg-black" data-v-15962a45><div class="px-4 py-16 sm:container mx-auto" data-v-15962a45><div class="flex flex-col gap-y-4 md:justify-between md:flex-row md:items-center" data-v-15962a45><div data-v-15962a45><h3 class="text-2xl text-white font-bold mb-4" data-v-15962a45>Let&#39;s Get Started</h3><p class="text-white" data-v-15962a45>Are you ready for better medical devices &amp; hospital supplies?</p></div><a href="" class="bg-white py-3 px-12 rounded-md text-black text-center font-semibold" data-v-15962a45>Contact US</a></div></div></div>',1);function Je(w,e,k,n,v,p){const r=V("swiper-slide"),b=V("swiper");return ee(),ae(te,null,[l("div",oe,[d(b,{"slides-per-view":1,"space-between":0,loop:!0,onSwiper:n.onSwiper,onSlideChange:n.onSlideChange,class:"mySwiper homeSwiper",modules:n.modules,navigation:!0,pagination:!0},{default:c(()=>[d(r,null,{default:c(()=>[de]),_:1}),d(r,null,{default:c(()=>[ce]),_:1}),d(r,null,{default:c(()=>[pe]),_:1})]),_:1},8,["onSwiper","onSlideChange","modules"])]),l("div",me,[d(b,{"slides-per-view":1,"space-between":0,loop:!0,onSwiper:n.onSwiper,onSlideChange:n.onSlideChange,class:"mySwiper homeSwiper",modules:n.modules,navigation:!0,pagination:!0},{default:c(()=>[d(r,{class:"md:hidden"},{default:c(()=>[ue]),_:1}),d(r,{class:"md:hidden"},{default:c(()=>[fe]),_:1}),d(r,{class:"md:hidden"},{default:c(()=>[ge]),_:1})]),_:1},8,["onSwiper","onSlideChange","modules"])]),he,ve,be,l("div",xe,[l("div",we,[_e,ye,l("div",Ce,[d(b,{"slides-per-view":2,"space-between":50,loop:!0,onSwiper:n.onSwiper,onSlideChange:n.onSlideChange,class:"mySwiper",modules:n.modules,autoplay:{delay:1e3,pauseOnMouseEnter:!0,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:4,spaceBetween:30},1024:{slidesPerView:5,spaceBetween:50}}},{default:c(()=>[d(r,null,{default:c(()=>[Se]),_:1}),d(r,null,{default:c(()=>[Le]),_:1}),d(r,null,{default:c(()=>[ke]),_:1}),d(r,null,{default:c(()=>[Ae]),_:1}),d(r,null,{default:c(()=>[Ee]),_:1}),d(r,null,{default:c(()=>[Be]),_:1}),d(r,null,{default:c(()=>[qe]),_:1})]),_:1},8,["onSwiper","onSlideChange","modules"])]),l("div",Oe,[d(b,{"slides-per-view":2,"space-between":50,loop:!0,onSwiper:n.onSwiper,onSlideChange:n.onSlideChange,class:"mySwiper",modules:n.modules,autoplay:{delay:1e3,pauseOnMouseEnter:!0,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:4,spaceBetween:30},1024:{slidesPerView:5,spaceBetween:50}}},{default:c(()=>[d(r,null,{default:c(()=>[$e]),_:1}),d(r,null,{default:c(()=>[Me]),_:1}),d(r,null,{default:c(()=>[Ie]),_:1}),d(r,null,{default:c(()=>[Pe]),_:1}),d(r,null,{default:c(()=>[ze]),_:1}),d(r,null,{default:c(()=>[De]),_:1}),d(r,null,{default:c(()=>[He]),_:1})]),_:1},8,["onSwiper","onSlideChange","modules"])]),l("div",je,[d(b,{"slides-per-view":2,"space-between":50,loop:!0,onSwiper:n.onSwiper,onSlideChange:n.onSlideChange,class:"mySwiper",modules:n.modules,autoplay:{delay:1e3,pauseOnMouseEnter:!0,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:4,spaceBetween:30},1024:{slidesPerView:5,spaceBetween:50}}},{default:c(()=>[d(r,null,{default:c(()=>[Fe]),_:1}),d(r,null,{default:c(()=>[Ne]),_:1}),d(r,null,{default:c(()=>[Te]),_:1}),d(r,null,{default:c(()=>[Ve]),_:1}),d(r,null,{default:c(()=>[Ge]),_:1}),d(r,null,{default:c(()=>[Re]),_:1}),d(r,null,{default:c(()=>[Ye]),_:1})]),_:1},8,["onSwiper","onSlideChange","modules"])])])]),Ue],64)}const ea=Q(re,[["render",Je],["__scopeId","data-v-15962a45"]]);export{ea as default};