import{S as h,a as x,A as w}from"./swiper.js";import{A as b}from"./aos.js";import{_ as g,r as p,o as _,c as y,a,n,b as i,w as l,F as C,f as v,p as N,e as k}from"./index.js";const S={components:{Swiper:h,SwiperSlide:x},data:function(){return{listNavbar:["home","about","service","client","contact"],allNavbar:[{name:"home",link:"#home"}],mobileNav:!1,activeNav:"home"}},mounted:function(){b.init()},methods:{handleScroll:function(){},showMenuMobile:function(){this.mobileNav=!this.mobileNav},replaceActiveNav:function(t){this.listNavbar.includes(t)?this.activeNav=t:this.activeNav="home"}},setup(){return{onSwiper:m=>{console.log(m)},onSlideChange:()=>{console.log("slide change")},modules:[w]}}},A="/theme-calhoun-vue/assets/about-hero.webp",o="/theme-calhoun-vue/assets/Dummy Logo.png",q="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20175.216%20175.552'%20height='50'%20width='50'%20style='transform:%20scaleX(-1);'%3e%3cdefs%3e%3clinearGradient%20id='b'%20x1='85.915'%20x2='86.535'%20y1='32.567'%20y2='137.092'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2357d163'/%3e%3cstop%20offset='1'%20stop-color='%2323b33a'/%3e%3c/linearGradient%3e%3cfilter%20id='a'%20width='1.115'%20height='1.114'%20x='-.057'%20y='-.057'%20color-interpolation-filters='sRGB'%3e%3cfeGaussianBlur%20stdDeviation='3.531'/%3e%3c/filter%3e%3c/defs%3e%3cpath%20fill='%23b3b3b3'%20d='m54.532%20138.45%202.235%201.324c9.387%205.571%2020.15%208.518%2031.126%208.523h.023c33.707%200%2061.139-27.426%2061.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75%2060.75%200%200%200%2087.94%2025.983c-33.733%200-61.166%2027.423-61.178%2061.13a60.98%2060.98%200%200%200%209.349%2032.535l1.455%202.312-6.179%2022.558zm-40.811%2023.544L24.16%20123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556%2033.021-73.55%2073.578-73.55%2019.681.01%2038.154%207.669%2052.047%2021.572s21.537%2032.383%2021.53%2052.037c-.018%2040.553-33.027%2073.553-73.578%2073.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0%200'%20filter='url(%23a)'/%3e%3cpath%20fill='%23fff'%20d='m12.966%20161.238%2010.439-38.114a73.42%2073.42%200%200%201-9.821-36.772c.017-40.556%2033.021-73.55%2073.578-73.55%2019.681.01%2038.154%207.669%2052.047%2021.572s21.537%2032.383%2021.53%2052.037c-.018%2040.553-33.027%2073.553-73.578%2073.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z'/%3e%3cpath%20fill='url(%23linearGradient1780)'%20d='M87.184%2025.227c-33.733%200-61.166%2027.423-61.178%2061.13a60.98%2060.98%200%200%200%209.349%2032.535l1.455%202.312-6.179%2022.559%2023.146-6.069%202.235%201.324c9.387%205.571%2020.15%208.518%2031.126%208.524h.023c33.707%200%2061.14-27.426%2061.153-61.135a60.75%2060.75%200%200%200-17.895-43.251%2060.75%2060.75%200%200%200-43.235-17.929z'/%3e%3cpath%20fill='url(%23b)'%20d='M87.184%2025.227c-33.733%200-61.166%2027.423-61.178%2061.13a60.98%2060.98%200%200%200%209.349%2032.535l1.455%202.313-6.179%2022.558%2023.146-6.069%202.235%201.324c9.387%205.571%2020.15%208.517%2031.126%208.523h.023c33.707%200%2061.14-27.426%2061.153-61.135a60.75%2060.75%200%200%200-17.895-43.251%2060.75%2060.75%200%200%200-43.235-17.928z'/%3e%3cpath%20fill='%23fff'%20fill-rule='evenodd'%20d='M68.772%2055.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226%200-3.218.46-4.902%202.3s-6.435%206.287-6.435%2015.332%206.588%2017.785%207.506%2019.013%2012.718%2020.381%2031.405%2027.75c15.529%206.124%2018.689%204.906%2022.061%204.6s10.877-4.447%2012.408-8.74%201.532-7.971%201.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746%205.979-5.819%207.206-2.144%201.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824%201.838-2.147%202.759-3.22s1.224-1.84%201.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647'/%3e%3c/svg%3e",s=t=>(N("data-v-662df563"),t=t(),k(),t),P={id:"navbar",class:"navbar"},V={class:"relative flex justify-between items-center sm:container xs:w-screen px-4"},E=s(()=>a("a",{href:"",class:"font-alfa text-2xl mr-10 text-white"},"Calhoun Production",-1)),j=s(()=>a("span",null,null,-1)),B=s(()=>a("span",null,null,-1)),I=s(()=>a("span",null,null,-1)),L=[j,B,I],M={class:"hidden cursor-pointer md:flex md:items-center md:gap-10"},O={class:"nav-item"},z={class:"nav-item"},G={class:"nav-item"},U={class:"nav-item"},R={class:"nav-item"},F=s(()=>a("li",{class:"nav-item"},[a("p",{class:"lang-toggle border-white"},"IN")],-1)),D={class:"mobile-nav-wrap"},J={class:"nav-mobile-lists"},H={class:"nav-mobile-item"},W={class:"nav-mobile-item"},K={class:"nav-mobile-item"},T={class:"nav-mobile-item"},X={class:"nav-mobile-item"},Y=s(()=>a("div",{class:"mobile-lang-wrap"},[a("div",{class:"flex items-center gap-x-5"},[a("p",null,"LANGUAGE"),a("p",{class:"lang-toggle"},"IN")])],-1)),Q={id:"home",datasection:"",class:"h-screen w-screen",ref:"home_section"},Z=v('<div class="px-4 sm:container mx-auto" data-v-662df563><div class="h-screen flex flex-col justify-center items-center md:items-start" data-v-662df563><div class="typewriter" data-v-662df563><h1 class="text-4xl pr-1 font-bold mb-4" data-v-662df563>Calhoun Production</h1></div><h5 class="text-xl mb-8" data-v-662df563>Rinding the Wave</h5><a href="#contact" class="bg-white w-[200px] text-dark hover:text-black text-center py-3 text-lg rounded-md font-semibold" data-v-662df563>Contact Us</a></div></div>',1),$=[Z],aa={id:"about",datasection:"",ref:"about_section"},ea=v('<div class="px-4 py-24 sm:container mx-auto" data-v-662df563><div class="flex justify-between flex-wrap gap-y-10" data-v-662df563><div class="w-full md:w-[50%]" data-v-662df563><div class="pb-10" data-v-662df563><h5 class="text-base font-semibold" data-aos="fade-right" data-aos-offset="300" data-aos-delay="100" data-aos-easing="ease-in-sine" data-v-662df563> - 02 </h5><h2 class="text-[40px] font-bold py-3" data-aos="fade-right" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in-sine" data-v-662df563> About Us </h2></div><p class="text-justify" data-v-662df563> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ex ipsum quis necessitatibus eius. Porro atque laborum sint nisi commodi molestias, repudiandae enim excepturi ratione officiis totam impedit. Provident, saepe! </p><div class="flex gap-x-8 mt-8" data-v-662df563><div class="w-1/2 flex flex-col items-center" data-v-662df563><div class="icon-vision-mission" data-v-662df563><i class="fa-solid fa-brain" data-v-662df563></i></div><h4 class="text-2xl font-bold mb-4" data-v-662df563>Vision</h4><p class="text-center" data-v-662df563>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque est quos itaque voluptatem ratione, cum veritatis dicta maiores?</p></div><div class="w-1/2 flex flex-col items-center" data-v-662df563><div class="icon-vision-mission" data-v-662df563><i class="fa-solid fa-chart-line" data-v-662df563></i></div><h4 class="text-2xl font-bold mb-4" data-v-662df563>Mission</h4><p class="text-center" data-v-662df563>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque est quos itaque voluptatem ratione, cum veritatis dicta maiores?</p></div></div></div><div class="w-full md:w-[45%]" data-v-662df563><img class="h-full w-full" alt="Company Banner" src="'+A+'" data-v-662df563></div></div></div>',1),ta=[ea],sa={id:"service",datasection:"",class:"bg-whitesmoke",ref:"service_section"},ia=v('<div class="px-4 py-20 sm:container mx-auto" data-v-662df563><div class="pt-10 pb-20" data-v-662df563><h5 class="text-base font-semibold" data-aos="fade-right" data-aos-offset="300" data-aos-delay="100" data-aos-easing="ease-in-sine" data-v-662df563> - 03 </h5><h2 class="text-[40px] font-bold py-3" data-aos="fade-right" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in-sine" data-v-662df563> Our Services </h2></div><div class="flex justify-between gap-y-8 flex-wrap" data-v-662df563><div class="w-full xl:w-[48%] flex flex-col gap-y-4 md:flex-row" data-v-662df563><div class="flex justify-center items-center w-full md:w-[25%]" data-v-662df563><i class="fa-solid fa-plane text-[100px]" data-v-662df563></i></div><div class="w-full md:w-[75%] md:pl-2" data-v-662df563><h4 class="text-2xl font-bold mb-4 text-center md:text-left" data-v-662df563>SERVICE</h4><p class="text-justify" data-v-662df563>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto cupiditate dolorem fugiat, numquam libero, magni doloribus dolor voluptatem doloremque, odit voluptates inventore minima laudantium aliquid quia sed veritatis perspiciatis!</p></div></div><div class="w-full xl:w-[48%] flex flex-col gap-y-4 md:flex-row" data-v-662df563><div class="flex justify-center items-center w-full md:w-[25%]" data-v-662df563><i class="fa-solid fa-ship text-[100px]" data-v-662df563></i></div><div class="w-full md:w-[75%] md:pl-2" data-v-662df563><h4 class="text-2xl font-bold mb-4 text-center md:text-left" data-v-662df563>SERVICE</h4><p class="text-justify" data-v-662df563>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto cupiditate dolorem fugiat, numquam libero, magni doloribus dolor voluptatem doloremque, odit voluptates inventore minima laudantium aliquid quia sed veritatis perspiciatis!</p></div></div><div class="w-full xl:w-[48%] flex flex-col gap-y-4 md:flex-row" data-v-662df563><div class="flex justify-center items-center w-full md:w-[25%]" data-v-662df563><i class="fa-solid fa-truck text-[100px]" data-v-662df563></i></div><div class="w-full md:w-[75%] md:pl-2" data-v-662df563><h4 class="text-2xl font-bold mb-4 text-center md:text-left" data-v-662df563>SERVICE</h4><p class="text-justify" data-v-662df563>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto cupiditate dolorem fugiat, numquam libero, magni doloribus dolor voluptatem doloremque, odit voluptates inventore minima laudantium aliquid quia sed veritatis perspiciatis!</p></div></div><div class="w-full xl:w-[48%] flex flex-col gap-y-4 md:flex-row" data-v-662df563><div class="flex justify-center items-center w-full md:w-[25%]" data-v-662df563><i class="fa-solid fa-train text-[100px]" data-v-662df563></i></div><div class="w-full md:w-[75%] md:pl-2" data-v-662df563><h4 class="text-2xl font-bold mb-4 text-center md:text-left" data-v-662df563>SERVICE</h4><p class="text-justify" data-v-662df563>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto cupiditate dolorem fugiat, numquam libero, magni doloribus dolor voluptatem doloremque, odit voluptates inventore minima laudantium aliquid quia sed veritatis perspiciatis!</p></div></div></div></div>',1),la=[ia],da={id:"client",datasection:"",ref:"client_section"},oa={class:"px-4 py-20 sm:container mx-auto"},na=s(()=>a("div",{class:"pt-10 pb-20"},[a("h5",{class:"text-base font-semibold","data-aos":"fade-right","data-aos-offset":"300","data-aos-delay":"100","data-aos-easing":"ease-in-sine"}," - 04 "),a("h2",{class:"text-[40px] font-bold py-3","data-aos":"fade-right","data-aos-offset":"300","data-aos-delay":"300","data-aos-easing":"ease-in-sine"}," Our Clients ")],-1)),ca={class:"mb-12"},ra=s(()=>a("img",{src:o,height:"50",alt:""},null,-1)),fa=s(()=>a("img",{src:o,height:"50",alt:""},null,-1)),va=s(()=>a("img",{src:o,height:"50",alt:""},null,-1)),ma=s(()=>a("img",{src:o,height:"50",alt:""},null,-1)),ua=s(()=>a("img",{src:o,height:"50",alt:""},null,-1)),pa=s(()=>a("img",{src:o,height:"50",alt:""},null,-1)),ha=s(()=>a("img",{src:o,height:"50",alt:""},null,-1)),xa={class:"mb-12"},wa=s(()=>a("img",{src:o,height:"50",alt:""},null,-1)),ba=s(()=>a("img",{src:o,height:"50",alt:""},null,-1)),ga=s(()=>a("img",{src:o,height:"50",alt:""},null,-1)),_a=s(()=>a("img",{src:o,height:"50",alt:""},null,-1)),ya=s(()=>a("img",{src:o,height:"50",alt:""},null,-1)),Ca=s(()=>a("img",{src:o,height:"50",alt:""},null,-1)),Na=s(()=>a("img",{src:o,height:"50",alt:""},null,-1)),ka={id:"contact",datasection:"",ref:"contact_section"},Sa=v('<div class="px-4 py-20 sm:container mx-auto" data-v-662df563><div class="pt-10 pb-20" data-v-662df563><h5 class="text-base font-semibold" data-aos="fade-right" data-aos-offset="300" data-aos-delay="100" data-aos-easing="ease-in-sine" data-v-662df563> - 05 </h5><h2 class="text-[40px] font-bold py-3" data-aos="fade-right" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in-sine" data-v-662df563> Get In Touch With Us! </h2></div><div class="contact-content flex justify-between flex-wrap gap-y-5" data-v-662df563><div class="address-content flex flex-col gap-y-10 w-full md:w-2/5 md:pr-4" data-v-662df563><div data-v-662df563><h4 class="text-2xl font-bold mb-4" data-v-662df563>OFFICE</h4><p data-v-662df563>Jalan Anugerah No.116 Kp.Kebantenan Jatiasih, Jatiasih, Bekasi, Jawa Barat, 17423</p><p data-v-662df563><span class="w-24" data-v-662df563>Phone</span>: 0817-6708-816</p><p data-v-662df563><span class="w-24" data-v-662df563>Email</span>: ptabadinusarayasakti@gmail.com</p><p data-v-662df563><span class="w-24" data-v-662df563>Marketing</span>: ptabadinusarayasakti@gmail.com</p></div><div data-v-662df563><h4 class="text-2xl font-bold mb-5" data-v-662df563>FOLLOW US</h4><div class="flex gap-x-4" data-v-662df563><a href="https://www.facebook.com/" title="Calhoun Production" data-v-662df563><i class="text-2xl fa-brands fa-facebook" data-v-662df563></i></a><a href="https://www.facebook.com/" title="Calhoun Production" data-v-662df563><i class="text-2xl fa-brands fa-x-twitter" data-v-662df563></i></a><a href="https://www.facebook.com/" title="Calhoun Production" data-v-662df563><i class="text-2xl fa-brands fa-linkedin" data-v-662df563></i></a><a href="https://www.facebook.com/" title="Calhoun Production" data-v-662df563><i class="text-2xl fa-brands fa-instagram" data-v-662df563></i></a><a href="https://www.facebook.com/" title="Calhoun Production" data-v-662df563><i class="text-2xl fa-brands fa-youtube" data-v-662df563></i></a></div></div></div><div class="map-content w-full md:w-3/5 md:pl-4" data-v-662df563><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666347494426!2d106.8230273234449!3d-6.1754030105101565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1700204127162!5m2!1sid!2sid" width="100%" height="300" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-662df563></iframe></div></div></div>',1),Aa=[Sa],qa=v('<footer data-v-662df563><div id="footer" class="py-6 bg-black text-white" data-v-662df563><div class="px-4 sm:container mx-auto flex justify-between flex-wrap" data-v-662df563><p class="w-full text-center md:w-1/2 md:text-left" data-v-662df563> © 2023 <a href="" class="text-link" data-v-662df563>Your Company</a>. All right reserved. </p><p class="w-full text-center md:w-1/2 md:text-right" data-v-662df563> Enginereed by <a href="" class="text-link" data-v-662df563>Calhoun Production</a></p></div></div><div id="whatsapp_button" class="fixed bottom-10 right-4 z-[9999]" data-v-662df563><a href="https://wa.me/6288225184769?text=Halooo" class="flex items-center gap-x-4" target="_blank" data-v-662df563><div class="chat-whatsapp-wrap" data-v-662df563><p class="chat-whatsapp" data-v-662df563>Chat with us</p></div><img src="'+q+'" alt="" data-v-662df563></a></div></footer>',1);function Pa(t,e,m,f,Va,c){const d=p("swiper-slide"),u=p("swiper");return _(),y(C,null,[a("nav",P,[a("div",V,[E,a("div",{class:n(["nav-toggle md:hidden",{active:t.mobileNav,inactive:!t.mobileNav}]),onClick:e[0]||(e[0]=r=>c.showMenuMobile())},L,2),a("ul",M,[a("li",O,[a("a",{href:"#home",onClick:e[1]||(e[1]=r=>c.replaceActiveNav("home")),class:n({active:t.activeNav==="home"})}," Home ",2)]),a("li",z,[a("a",{href:"#about",onClick:e[2]||(e[2]=r=>c.replaceActiveNav("about")),class:n({active:t.activeNav==="about"})}," About ",2)]),a("li",G,[a("a",{href:"#service",onClick:e[3]||(e[3]=r=>c.replaceActiveNav("service")),class:n({active:t.activeNav==="service"})}," Services ",2)]),a("li",U,[a("a",{href:"#client",onClick:e[4]||(e[4]=r=>c.replaceActiveNav("client")),class:n({active:t.activeNav==="client"})}," Clients ",2)]),a("li",R,[a("a",{href:"#contact",onClick:e[5]||(e[5]=r=>c.replaceActiveNav("contact")),class:n({active:t.activeNav==="contact"})}," Contact ",2)]),F])])]),a("div",{class:n(["navbar-mobile",{active:t.mobileNav}])},[a("div",D,[a("ul",J,[a("li",H,[a("a",{href:"#home",class:n(["nav-mobile-link",{active:t.activeNav==="home"}]),onClick:e[6]||(e[6]=r=>c.replaceActiveNav("home"))}," Home ",2)]),a("li",W,[a("a",{href:"#about",class:n(["nav-mobile-link",{active:t.activeNav==="about"}]),onClick:e[7]||(e[7]=r=>c.replaceActiveNav("about"))}," About ",2)]),a("li",K,[a("a",{href:"#services",class:n(["nav-mobile-link",{active:t.activeNav==="service"}]),onClick:e[8]||(e[8]=r=>c.replaceActiveNav("service"))}," Services ",2)]),a("li",T,[a("a",{href:"#clients",class:n(["nav-mobile-link",{active:t.activeNav==="client"}]),onClick:e[9]||(e[9]=r=>c.replaceActiveNav("client"))}," Clients ",2)]),a("li",X,[a("a",{href:"#contact",class:n(["nav-mobile-link",{active:t.activeNav==="contact"}]),onClick:e[10]||(e[10]=r=>c.replaceActiveNav("contact"))}," Contact ",2)])])]),Y],2),a("main",null,[a("section",Q,$,512),a("section",aa,ta,512),a("section",sa,la,512),a("section",da,[a("div",oa,[na,a("div",ca,[i(u,{"slides-per-view":2,"space-between":100,loop:!0,onSwiper:f.onSwiper,onSlideChange:f.onSlideChange,class:"mySwiper",modules:f.modules,autoplay:{delay:1e3,pauseOnMouseEnter:!0,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:2,spaceBetween:30},768:{slidesPerView:4,spaceBetween:30},1024:{slidesPerView:5,spaceBetween:50}}},{default:l(()=>[i(d,null,{default:l(()=>[ra]),_:1}),i(d,null,{default:l(()=>[fa]),_:1}),i(d,null,{default:l(()=>[va]),_:1}),i(d,null,{default:l(()=>[ma]),_:1}),i(d,null,{default:l(()=>[ua]),_:1}),i(d,null,{default:l(()=>[pa]),_:1}),i(d,null,{default:l(()=>[ha]),_:1})]),_:1},8,["onSwiper","onSlideChange","modules"])]),a("div",xa,[i(u,{"slides-per-view":2,"space-between":100,loop:!0,onSwiper:f.onSwiper,onSlideChange:f.onSlideChange,class:"mySwiper",modules:f.modules,autoplay:{delay:1e3,pauseOnMouseEnter:!0,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:2,spaceBetween:30},768:{slidesPerView:4,spaceBetween:30},1024:{slidesPerView:5,spaceBetween:50}}},{default:l(()=>[i(d,null,{default:l(()=>[wa]),_:1}),i(d,null,{default:l(()=>[ba]),_:1}),i(d,null,{default:l(()=>[ga]),_:1}),i(d,null,{default:l(()=>[_a]),_:1}),i(d,null,{default:l(()=>[ya]),_:1}),i(d,null,{default:l(()=>[Ca]),_:1}),i(d,null,{default:l(()=>[Na]),_:1})]),_:1},8,["onSwiper","onSlideChange","modules"])])])],512),a("section",ka,Aa,512)]),qa],64)}const Ia=g(S,[["render",Pa],["__scopeId","data-v-662df563"]]);export{Ia as default};
