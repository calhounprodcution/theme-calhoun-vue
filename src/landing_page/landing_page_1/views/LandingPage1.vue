<script lang="ts">
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper/modules';
    import AOS from 'aos';

    // Import Swiper styles
    import 'swiper/css';

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        data: function() {
            return {
                listNavbar: ['home', 'about', 'service', 'client', 'contact'],
                allNavbar: [
                    { name: 'home', link: '#home' },
                ],
                mobileNav: false,
                activeNav: 'home',
                allSection: [
                    { name: 'home', offsetTop: -1, height: -1 },
                    { name: 'about', offsetTop: -1, height: -1 },
                    { name: 'service', offsetTop: -1, height: -1 },
                    { name: 'client', offsetTop: -1, height: -1 },
                    { name: 'contact', offsetTop: -1, height: -1 },
                ]
            };
        },
        // beforeMount: function() {
        //     window.addEventListener('scroll', this.handleScroll);
        // },
        // unmounted: function() {
        //     window.removeEventListener('scroll', this.handleScroll);
        // },
        mounted: function() {
            AOS.init()
            // this.getOffsetTopElement()
        },
        methods: {
            getOffsetTopElement: function() {
                const home_section = this.$refs['home_section'] as HTMLElement;
                const about_section = this.$refs['about_section'] as HTMLElement;
                const service_section = this.$refs['service_section'] as HTMLElement;
                const client_section = this.$refs['client_section'] as HTMLElement;
                const contact_section = this.$refs['contact_section'] as HTMLElement;
                this.allSection = [
                    { 
                        name: 'home', 
                        offsetTop: home_section.offsetTop, 
                        height: home_section.getBoundingClientRect().height 
                    },
                    { 
                        name: 'about', 
                        offsetTop: about_section.offsetTop, 
                        height: about_section.getBoundingClientRect().height 
                    },
                    { 
                        name: 'service', 
                        offsetTop: service_section.offsetTop, 
                        height: service_section.getBoundingClientRect().height 
                    },
                    { 
                        name: 'client', 
                        offsetTop: client_section.offsetTop, 
                        height: client_section.getBoundingClientRect().height 
                    },
                    { 
                        name: 'contact', 
                        offsetTop: contact_section.offsetTop, 
                        height: contact_section.getBoundingClientRect().height 
                    },
                ]
                
            },
            handleScroll: function () {
                this.allSection.forEach(section => {
                    let top = window.scrollY;
                    let offset = section.offsetTop
                    let height = section.height
                    if (height > 0) {
                        if (top >= offset && top < offset + height) {
                            this.activeNav = section.name
                        }
                    }
                })
            },
            showMenuMobile: function() {
                this.mobileNav = !this.mobileNav;
            },
            replaceActiveNav: function(nav: string) {
                if (this.listNavbar.includes(nav)) {
                    this.activeNav = nav
                } else {
                    this.activeNav = 'home'
                }
            }
        },
        setup() {
            const onSwiper = (swiper: any) => {
                console.log(swiper);
            };
            const onSlideChange = () => {
                console.log('slide change');
            };
            return {
                onSwiper,
                onSlideChange,
                modules: [Autoplay]
            };
        },
    };
</script>

<template>
    <!-- START NAVBAR DESKTOP -->
    <nav id="navbar" class="navbar">
        <div class="relative flex justify-between items-center sm:container xs:w-screen px-4">
            <a href="" class="font-alfa text-2xl mr-10 text-white">Calhoun Production</a>
            <div class="nav-toggle md:hidden" 
                @click="showMenuMobile()"
                :class="{ active: mobileNav, inactive: !mobileNav }">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="hidden cursor-pointer md:flex md:items-center md:gap-10">
                <li class="nav-item">
                    <a href="#home" 
                        @click="replaceActiveNav('home')"
                        :class="{ active: activeNav === 'home' }">
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#about" 
                        @click="replaceActiveNav('about')"
                        :class="{ active: activeNav === 'about' }">
                        About
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#service" 
                        @click="replaceActiveNav('service')"
                        :class="{ active: activeNav === 'service' }">
                        Services
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#client" 
                        @click="replaceActiveNav('client')"
                        :class="{ active: activeNav === 'client' }">
                        Clients
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#contact" 
                        @click="replaceActiveNav('contact')"
                        :class="{ active: activeNav === 'contact' }">
                        Contact
                    </a>
                </li>
                <li class="nav-item">
                    <p class="lang-toggle border-white">IN</p>
                </li>
            </ul>
        </div>
    </nav>
    <!-- END NAVBAR DESKTOP -->
    
    <!-- START NAVBAR MOBILE -->
    <div class="navbar-mobile" :class="{ active: mobileNav}">
        <div class="mobile-nav-wrap">
            <ul class="nav-mobile-lists">
                <li class="nav-mobile-item">
                    <a href="#home" class="nav-mobile-link"
                        @click="replaceActiveNav('home')"
                        :class="{ active: activeNav === 'home' }">
                        Home
                    </a>
                </li>
                <li class="nav-mobile-item">
                    <a href="#about" class="nav-mobile-link"
                        @click="replaceActiveNav('about')"
                        :class="{ active: activeNav === 'about' }">
                        About
                    </a>
                </li>
                <li class="nav-mobile-item">
                    <a href="#services" class="nav-mobile-link"
                        @click="replaceActiveNav('service')"
                        :class="{ active: activeNav === 'service' }">
                        Services
                    </a>
                </li>
                <li class="nav-mobile-item">
                    <a href="#clients" class="nav-mobile-link"
                        @click="replaceActiveNav('client')"
                        :class="{ active: activeNav === 'client' }">
                        Clients
                    </a>
                </li>
                <li class="nav-mobile-item">
                    <a href="#contact" class="nav-mobile-link"
                        @click="replaceActiveNav('contact')"
                        :class="{ active: activeNav === 'contact' }">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
        <div class="mobile-lang-wrap">
            <div class="flex items-center gap-x-5">
                <p>LANGUAGE</p>
                <p class="lang-toggle">IN</p>
            </div>
        </div>
    </div>
    <!-- END NAVBAR MOBILE -->

    <main>
        <section id="home" datasection class="h-screen w-screen" ref="home_section">
            <div class="px-4 sm:container mx-auto">
                <div class="h-screen flex flex-col justify-center items-center md:items-start">
                    <h1 class="text-4xl font-bold mb-4">Your Company</h1>
                    <h5 class="text-xl mb-8">Company Tagline</h5>
                    <a href="#contact" class="bg-white w-[200px] text-dark hover:text-black text-center py-3 text-lg rounded-md font-semibold">Contact Us</a>
                </div>
            </div>
        </section>
        <section id="about" datasection ref="about_section">
            <div class="px-4 py-24 sm:container mx-auto">
                <div class="flex justify-between flex-wrap gap-y-10">
                    <div class="w-full md:w-[50%]">
                        <div class="pb-10">
                            <h5 class="text-base font-semibold" 
                                data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-delay="100"
                                data-aos-easing="ease-in-sine">
                                - 02
                            </h5>
                            <h2 class="text-[40px] font-bold py-3"
                                data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-delay="300"
                                data-aos-easing="ease-in-sine">
                                About Us
                            </h2>
                        </div>
                        <p class="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ex ipsum quis 
                            necessitatibus eius. Porro atque laborum sint nisi commodi molestias, repudiandae 
                            enim excepturi ratione officiis totam impedit. Provident, saepe!
                        </p>
                        <div class="flex gap-x-8 mt-8">
                            <div class="w-1/2 flex flex-col items-center">
                                <div class="icon-vision-mission"><i class="fa-solid fa-brain"></i></div>
                                <h4 class="text-2xl font-bold mb-4">Vision</h4>
                                <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque est quos itaque voluptatem ratione, cum veritatis dicta maiores?</p>
                            </div>
                            <div class="w-1/2 flex flex-col items-center">
                                <div class="icon-vision-mission"><i class="fa-solid fa-chart-line"></i></div>
                                <h4 class="text-2xl font-bold mb-4">Mission</h4>
                                <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque est quos itaque voluptatem ratione, cum veritatis dicta maiores?</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-[45%]">
                        <img class="h-full w-full" alt="Company Banner" src="../assets/img/about-hero.webp" >
                    </div>
                </div>
            </div>
        </section>
        <section id="service" datasection class="bg-whitesmoke" ref="service_section">
            <div class="px-4 py-20 sm:container mx-auto">
                <div class="pt-10 pb-20">
                    <h5 class="text-base font-semibold"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-delay="100"
                        data-aos-easing="ease-in-sine">
                        - 03
                    </h5>
                    <h2 class="text-[40px] font-bold py-3" 
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-delay="300"
                        data-aos-easing="ease-in-sine">
                        Our Services
                    </h2>
                </div>
                <div class="flex justify-between gap-y-8 flex-wrap">
                    <div class="w-full xl:w-[48%] flex flex-col gap-y-4 md:flex-row">
                        <div class="flex justify-center items-center w-full md:w-[25%]">
                            <i class="fa-solid fa-plane text-[100px]"></i>
                        </div>
                        <div class="w-full md:w-[75%] md:pl-2">
                            <h4 class="text-2xl font-bold mb-4 text-center md:text-left">SERVICE</h4>
                            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto cupiditate dolorem fugiat, numquam libero, magni doloribus dolor voluptatem doloremque, odit voluptates inventore minima laudantium aliquid quia sed veritatis perspiciatis!</p>
                        </div>
                    </div>
                    <div class="w-full xl:w-[48%] flex flex-col gap-y-4 md:flex-row">
                        <div class="flex justify-center items-center w-full md:w-[25%]">
                            <i class="fa-solid fa-ship text-[100px]"></i>
                        </div>
                        <div class="w-full md:w-[75%] md:pl-2">
                            <h4 class="text-2xl font-bold mb-4 text-center md:text-left">SERVICE</h4>
                            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto cupiditate dolorem fugiat, numquam libero, magni doloribus dolor voluptatem doloremque, odit voluptates inventore minima laudantium aliquid quia sed veritatis perspiciatis!</p>
                        </div>
                    </div>
                    <div class="w-full xl:w-[48%] flex flex-col gap-y-4 md:flex-row">
                        <div class="flex justify-center items-center w-full md:w-[25%]">
                            <i class="fa-solid fa-truck text-[100px]"></i>
                        </div>
                        <div class="w-full md:w-[75%] md:pl-2">
                            <h4 class="text-2xl font-bold mb-4 text-center md:text-left">SERVICE</h4>
                            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto cupiditate dolorem fugiat, numquam libero, magni doloribus dolor voluptatem doloremque, odit voluptates inventore minima laudantium aliquid quia sed veritatis perspiciatis!</p>
                        </div>
                    </div>
                    <div class="w-full xl:w-[48%] flex flex-col gap-y-4 md:flex-row">
                        <div class="flex justify-center items-center w-full md:w-[25%]">
                            <i class="fa-solid fa-train text-[100px]"></i>
                        </div>
                        <div class="w-full md:w-[75%] md:pl-2">
                            <h4 class="text-2xl font-bold mb-4 text-center md:text-left">SERVICE</h4>
                            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto cupiditate dolorem fugiat, numquam libero, magni doloribus dolor voluptatem doloremque, odit voluptates inventore minima laudantium aliquid quia sed veritatis perspiciatis!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="client" datasection ref="client_section">
            <div class="px-4 py-20 sm:container mx-auto">
                <div class="pt-10 pb-20">
                    <h5 class="text-base font-semibold" 
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-delay="100"
                        data-aos-easing="ease-in-sine">
                        - 04
                    </h5>
                    <h2 class="text-[40px] font-bold py-3" 
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-delay="300"
                        data-aos-easing="ease-in-sine">
                        Our Clients
                    </h2>
                </div>
                <div class="mb-12">
                    <swiper
                        :slides-per-view="2"
                        :space-between="50"
                        :loop="true"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                        class="mySwiper"
                        :modules="modules"
                        :autoplay="{
                            delay: 1000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }"
                        :breakpoints="{
                            '640': {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            '768': {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            '1024': {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }"
                    >
                        <swiper-slide>
                            <img src="../assets/img/Dummy Logo.png" height="50" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/Dummy Logo.png" height="50" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/Dummy Logo.png" height="50" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/Dummy Logo.png" height="50" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/Dummy Logo.png" height="50" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/Dummy Logo.png" height="50" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/Dummy Logo.png" height="50" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="mb-12">
                    <swiper
                        :slides-per-view="2"
                        :space-between="50"
                        :loop="true"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                        class="mySwiper"
                        :modules="modules"
                        :autoplay="{
                            delay: 1000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }"
                        :breakpoints="{
                            '640': {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            '768': {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            '1024': {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }"
                    >
                        <swiper-slide>
                            <img src="../assets/img/Dummy Logo.png" height="50" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/Dummy Logo.png" height="50" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/Dummy Logo.png" height="50" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/Dummy Logo.png" height="50" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/Dummy Logo.png" height="50" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/Dummy Logo.png" height="50" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../assets/img/Dummy Logo.png" height="50" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </section>
        <section id="contact" datasection ref="contact_section">
            <div class="px-4 py-20 sm:container mx-auto">
                <div class="pt-10 pb-20">
                    <h5 class="text-base font-semibold" 
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-delay="100"
                        data-aos-easing="ease-in-sine">
                        - 05
                    </h5>
                    <h2 class="text-[40px] font-bold py-3 " 
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-delay="300"
                        data-aos-easing="ease-in-sine">
                        Get In Touch With Us!
                    </h2>
                </div>
                <div class="contact-content flex justify-between flex-wrap gap-y-5">
                    <div class="address-content flex flex-col gap-y-10 w-full md:w-2/5 md:pr-4">
                        <div>
                            <h4 class="text-2xl font-bold mb-4">OFFICE</h4>
                            <p>Jalan Anugerah No.116 Kp.Kebantenan Jatiasih, Jatiasih, Bekasi, Jawa Barat, 17423</p>
                            <p><span class="w-24">Phone</span>: 0817-6708-816</p>
                            <p><span class="w-24">Email</span>: ptabadinusarayasakti@gmail.com</p>
                            <p><span class="w-24">Marketing</span>: ptabadinusarayasakti@gmail.com</p>
                        </div>
                        <div>
                            <h4 class="text-2xl font-bold mb-5">FOLLOW US</h4>
                            <div class="flex gap-x-4">
                                <a href="https://www.facebook.com/" title="Calhoun Production">
                                    <i class="text-2xl fa-brands fa-facebook"></i>
                                </a>
                                <a href="https://www.facebook.com/" title="Calhoun Production">
                                    <i class="text-2xl fa-brands fa-x-twitter"></i>
                                </a>
                                <a href="https://www.facebook.com/" title="Calhoun Production">
                                    <i class="text-2xl fa-brands fa-linkedin"></i>
                                </a>
                                <a href="https://www.facebook.com/" title="Calhoun Production">
                                    <i class="text-2xl fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://www.facebook.com/" title="Calhoun Production">
                                    <i class="text-2xl fa-brands fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="map-content w-full md:w-3/5 md:pl-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666347494426!2d106.8230273234449!3d-6.1754030105101565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1700204127162!5m2!1sid!2sid" width="100%" height="300" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>

        <!-- START FOOTER -->
        <div id="footer" class="py-6 bg-black text-white">
            <div class="px-4 sm:container mx-auto flex justify-between flex-wrap">
                <p class="w-full text-center md:w-1/2 md:text-left">
                    &copy; 2023 <a href="" class="text-link">Your Company</a>. All right reserved.
                </p>
                <p class="w-full text-center md:w-1/2 md:text-right">
                    Enginereed by <a href="" class="text-link">Calhoun Production</a>
                </p>
            </div>
        </div>
        <!-- END FOOTER -->

        <!-- START BUTTON WHATSAPP -->
        <div id="whatsapp_button" class="fixed bottom-10 right-4 z-[9999]">
            <a href="https://wa.me/6288225184769?text=Halooo" class="flex items-center gap-x-4" target="_blank">
                <p class="chat-whatsapp">Chat with us</p>
                <img src="../assets/img/logo_whatsapp.svg" alt="">
            </a>
        </div>
        <!-- END BUTTON WHATSAPP -->
    </footer>
</template>

<style scoped>

    /* START NAVBAR */
    .navbar {
        background-color: black;
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 9999;
        height: 70px;
    }
    .nav-item {
        color: white;
    }
    .nav-item a:hover {
        text-decoration: underline;
    }
    .nav-item a.active {
        font-weight: bold;
    }
    .nav-toggle {
        cursor: pointer;
    }
    .nav-toggle span {
        display: block;
        background-color: white;
        height: 2px;
        width: 23px;
        margin: 4px 0;
        border-radius: 30px;
        transition: transform 1s;
        transform-origin: center center;
        text-align: center;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: translateY(-6px) rotate(-40deg);
        animation: activeToggleNavBottom 1s;
    }
    .nav-toggle.active span:nth-child(2) {
        transform: scale(0);
    }
    .nav-toggle.active span:nth-child(1) {
        animation: activeToggleNavTop 1s;
        transform: translateY(6px) rotate(40deg);
    }
    @keyframes activeToggleNavTop {
        0% {transform: translateY(0)}
        50% {transform: translateY(6px)}
        100% {transform: translateY(6px) rotate(40deg)}
    }
    @keyframes activeToggleNavBottom {
        0% {transform: translateY(0)}
        50% {transform: translateY(-6px)}
        100% {transform: translateY(-6px) rotate(-40deg)}
    }
    
    .nav-toggle.inactive span:nth-child(3) {
        animation: inactiveToggleNavBottom 1s;
    }
    .nav-toggle.inactive span:nth-child(2) {
        transform: scale(1);
    }
    .nav-toggle.inactive span:nth-child(1) {
        animation: inactiveToggleNavTop 1s;
    }
    @keyframes inactiveToggleNavBottom {
        0% {transform: translateY(-6px) rotate(-40deg)}
        50% {transform: translateY(-6px) rotate(0)}
        100% {transform: translateY(0)}
    }
    @keyframes inactiveToggleNavTop {
        0% {transform: translateY(6px) rotate(40deg)}
        50% {transform: translateY(6px) rotate(0)}
        100% {transform: translateY(0)}
    }
    /* END NAVBAR */

    /* START SECTIONS */
    #home {
        background-image: url(../assets/img/home-hero.jpg);
    }
    #contact {
        background-image: url(../assets/img/contact-hero.jpg);
    }
    #home, #contact {
        position: relative;
        background-color: rgba(0, 0, 0, .5);
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: darken;
        background-position: center;
        background-attachment: fixed;
        color: white;
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
    }
    .icon-vision-mission {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 9999px;
        margin-bottom: .75rem;
        height: 40px;
        width: 40px;
        border: 2px solid black;
    }
    /* END SECTIONS */
</style>