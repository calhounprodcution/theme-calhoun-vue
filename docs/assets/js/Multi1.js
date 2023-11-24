import{g as u,R as p,_ as f,r,o as b,c as h,a as e,n as l,b as i,w as n,F as g,f as _,h as d,p as N,e as w}from"./index.js";import{A as k}from"./aos.js";const x={data:function(){return{listNavbar:["home","about","product","gallery","contact"],mobileNav:!1,activeNav:"home"}},mounted:function(){k.init()},methods:{showMenuMobile:function(){this.mobileNav=!this.mobileNav},replaceActiveNav:function(t){this.listNavbar.includes(t)?this.activeNav=t:this.activeNav="home"}},setup(){return{RouterView:u,RouterLink:p}}},A="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20175.216%20175.552'%20height='50'%20width='50'%20style='transform:%20scaleX(-1);'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='85.915'%20x2='86.535'%20y1='32.567'%20y2='137.092'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2357d163'/%3e%3cstop%20offset='1'%20stop-color='%2323b33a'/%3e%3c/linearGradient%3e%3cfilter%20id='a'%20width='1.115'%20height='1.114'%20x='-.057'%20y='-.057'%20color-interpolation-filters='sRGB'%3e%3cfeGaussianBlur%20stdDeviation='3.531'/%3e%3c/filter%3e%3c/defs%3e%3cpath%20fill='%23b3b3b3'%20d='m54.532%20138.45%202.235%201.324c9.387%205.571%2020.15%208.518%2031.126%208.523h.023c33.707%200%2061.139-27.426%2061.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75%2060.75%200%200%200%2087.94%2025.983c-33.733%200-61.166%2027.423-61.178%2061.13a60.98%2060.98%200%200%200%209.349%2032.535l1.455%202.312-6.179%2022.558zm-40.811%2023.544L24.16%20123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556%2033.021-73.55%2073.578-73.55%2019.681.01%2038.154%207.669%2052.047%2021.572s21.537%2032.383%2021.53%2052.037c-.018%2040.553-33.027%2073.553-73.578%2073.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0%200'%20filter='url(%23a)'/%3e%3cpath%20fill='%23fff'%20d='m12.966%20161.238%2010.439-38.114a73.42%2073.42%200%200%201-9.821-36.772c.017-40.556%2033.021-73.55%2073.578-73.55%2019.681.01%2038.154%207.669%2052.047%2021.572s21.537%2032.383%2021.53%2052.037c-.018%2040.553-33.027%2073.553-73.578%2073.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z'/%3e%3cpath%20fill='url(%23linearGradient1780)'%20d='M87.184%2025.227c-33.733%200-61.166%2027.423-61.178%2061.13a60.98%2060.98%200%200%200%209.349%2032.535l1.455%202.312-6.179%2022.559%2023.146-6.069%202.235%201.324c9.387%205.571%2020.15%208.518%2031.126%208.524h.023c33.707%200%2061.14-27.426%2061.153-61.135a60.75%2060.75%200%200%200-17.895-43.251%2060.75%2060.75%200%200%200-43.235-17.929z'/%3e%3cpath%20fill='url(%23b)'%20d='M87.184%2025.227c-33.733%200-61.166%2027.423-61.178%2061.13a60.98%2060.98%200%200%200%209.349%2032.535l1.455%202.313-6.179%2022.558%2023.146-6.069%202.235%201.324c9.387%205.571%2020.15%208.517%2031.126%208.523h.023c33.707%200%2061.14-27.426%2061.153-61.135a60.75%2060.75%200%200%200-17.895-43.251%2060.75%2060.75%200%200%200-43.235-17.928z'/%3e%3cpath%20fill='%23fff'%20fill-rule='evenodd'%20d='M68.772%2055.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226%200-3.218.46-4.902%202.3s-6.435%206.287-6.435%2015.332%206.588%2017.785%207.506%2019.013%2012.718%2020.381%2031.405%2027.75c15.529%206.124%2018.689%204.906%2022.061%204.6s10.877-4.447%2012.408-8.74%201.532-7.971%201.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746%205.979-5.819%207.206-2.144%201.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824%201.838-2.147%202.759-3.22s1.224-1.84%201.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647'/%3e%3c/svg%3e",v=t=>(N("data-v-2c2c7abd"),t=t(),w(),t),C={id:"navbar",class:"navbar"},y={class:"relative flex justify-between items-center sm:container xs:w-screen px-4"},G=v(()=>e("a",{href:"",class:"font-alfa text-2xl mr-10 text-white"},"Calhoun Production",-1)),M=v(()=>e("span",null,null,-1)),R=v(()=>e("span",null,null,-1)),z=v(()=>e("span",null,null,-1)),V=[M,R,z],B={class:"hidden cursor-pointer md:flex md:items-center md:gap-10"},I={class:"nav-item"},S={class:"nav-item"},L={class:"nav-item"},P={class:"nav-item"},$={class:"nav-item"},E=v(()=>e("li",{class:"nav-item"},[e("p",{class:"lang-toggle border-white"},"IN")],-1)),H={class:"mobile-nav-wrap"},U={class:"nav-mobile-lists"},j={class:"nav-mobile-item"},F={class:"nav-mobile-item"},O={class:"nav-mobile-item"},D={class:"nav-mobile-item"},T={class:"nav-mobile-item"},X=v(()=>e("div",{class:"mobile-lang-wrap"},[e("div",{class:"flex items-center gap-x-5"},[e("p",null,"LANGUAGE"),e("p",{class:"lang-toggle"},"IN")])],-1)),Y=_('<footer data-v-2c2c7abd><div id="footer" class="py-6 bg-black text-white" data-v-2c2c7abd><div class="px-4 sm:container mx-auto flex justify-between flex-wrap" data-v-2c2c7abd><p class="w-full text-center md:w-1/2 md:text-left" data-v-2c2c7abd> © 2023 <a href="" class="text-link" data-v-2c2c7abd>Your Company</a>. All right reserved. </p><p class="w-full text-center md:w-1/2 md:text-right" data-v-2c2c7abd> Enginereed by <a href="" class="text-link" data-v-2c2c7abd>Calhoun Production</a></p></div></div><div id="whatsapp_button" class="fixed bottom-10 right-4 z-[9999]" data-v-2c2c7abd><a href="https://wa.me/6288225184769?text=Halooo" class="flex items-center gap-x-4" target="_blank" data-v-2c2c7abd><div class="chat-whatsapp-wrap" data-v-2c2c7abd><p class="chat-whatsapp" data-v-2c2c7abd>Chat with us</p></div><img src="'+A+'" alt="" data-v-2c2c7abd></a></div></footer>',1);function q(t,a,J,K,Q,s){const c=r("RouterLink"),m=r("RouterView");return b(),h(g,null,[e("nav",C,[e("div",y,[G,e("div",{class:l(["nav-toggle md:hidden",{active:t.mobileNav,inactive:!t.mobileNav}]),onClick:a[0]||(a[0]=o=>s.showMenuMobile())},V,2),e("ul",B,[e("li",I,[i(c,{to:{name:"multi.page.1.home"},class:l({active:t.activeNav==="home"}),onClick:a[1]||(a[1]=o=>s.replaceActiveNav("home"))},{default:n(()=>[d(" Home ")]),_:1},8,["to","class"])]),e("li",S,[i(c,{to:{name:"multi.page.1.about"},class:l({active:t.activeNav==="about"}),onClick:a[2]||(a[2]=o=>s.replaceActiveNav("about"))},{default:n(()=>[d(" About ")]),_:1},8,["to","class"])]),e("li",L,[i(c,{to:{name:"multi.page.1.product"},class:l({active:t.activeNav==="product"}),onClick:a[3]||(a[3]=o=>s.replaceActiveNav("product"))},{default:n(()=>[d(" Product ")]),_:1},8,["to","class"])]),e("li",P,[i(c,{to:{name:"multi.page.1.gallery"},class:l({active:t.activeNav==="gallery"}),onClick:a[4]||(a[4]=o=>s.replaceActiveNav("gallery"))},{default:n(()=>[d(" Gallery ")]),_:1},8,["to","class"])]),e("li",$,[i(c,{to:{name:"multi.page.1.contact"},class:l({active:t.activeNav==="contact"}),onClick:a[5]||(a[5]=o=>s.replaceActiveNav("contact"))},{default:n(()=>[d(" Contact ")]),_:1},8,["to","class"])]),E])])]),e("div",{class:l(["navbar-mobile",{active:t.mobileNav}])},[e("div",H,[e("ul",U,[e("li",j,[i(c,{to:{name:"multi.page.1.home"},class:l(["nav-mobile-link",{active:t.activeNav==="home"}]),onClick:a[6]||(a[6]=o=>s.replaceActiveNav("home"))},{default:n(()=>[d(" Home ")]),_:1},8,["to","class"])]),e("li",F,[i(c,{to:{name:"multi.page.1.about"},class:l(["nav-mobile-link",{active:t.activeNav==="about"}]),onClick:a[7]||(a[7]=o=>s.replaceActiveNav("about"))},{default:n(()=>[d(" About ")]),_:1},8,["to","class"])]),e("li",O,[i(c,{to:{name:"multi.page.1.product"},class:l(["nav-mobile-link",{active:t.activeNav==="product"}]),onClick:a[8]||(a[8]=o=>s.replaceActiveNav("product"))},{default:n(()=>[d(" Product ")]),_:1},8,["to","class"])]),e("li",D,[i(c,{to:{name:"multi.page.1.gallery"},class:l(["nav-mobile-link",{active:t.activeNav==="gallery"}]),onClick:a[9]||(a[9]=o=>s.replaceActiveNav("gallery"))},{default:n(()=>[d(" Gallery ")]),_:1},8,["to","class"])]),e("li",T,[i(c,{to:{name:"multi.page.1.contact"},class:l(["nav-mobile-link",{active:t.activeNav==="contact"}]),onClick:a[10]||(a[10]=o=>s.replaceActiveNav("contact"))},{default:n(()=>[d(" Contact ")]),_:1},8,["to","class"])])])]),X],2),e("main",null,[i(m)]),Y],64)}const e2=f(x,[["render",q],["__scopeId","data-v-2c2c7abd"]]);export{e2 as default};
