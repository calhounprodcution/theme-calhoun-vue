<script lang="ts">
// Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
    import AOS from 'aos';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import '../assets/css/home_swiper.css'

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        data: function() {
            return {
            };
        },
        mounted: function() {
            AOS.init()
        },
        methods: {
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
                pagination: {
                    clickable: true,
                },
                modules: [Autoplay, Pagination, Navigation]
            };
        },
    };
</script>

<template>
    <!-- SWIPER ON DESKTOP -->
    <div class="h-[calc(100vh-70px)] w-screen hidden md:block">
        <swiper
            :slides-per-view="1"
            :space-between="0"
            :loop="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="mySwiper homeSwiper"
            :modules="modules"
            
            :navigation="true"
            :pagination="pagination"
        >
            <swiper-slide>
                <img src="../assets/img/image_desktop.png" class="h-[calc(100vh-70px)] w-screen" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/img/image_desktop.png" class="h-[calc(100vh-70px)] w-screen" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/img/image_desktop.png" class="h-[calc(100vh-70px)] w-screen" alt="">
            </swiper-slide>
        </swiper>
    </div>
    <!-- SWIPER ON MOBILE -->
    <div class="h-[calc(100vh-70px)] w-screen md:hidden">
        <swiper
            :slides-per-view="1"
            :space-between="0"
            :loop="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="mySwiper homeSwiper"
            :modules="modules"
            
            :navigation="true"
            :pagination="pagination"
        >
            <swiper-slide class="md:hidden">
                <img src="../assets/img/image_mobile.png" class="h-[calc(100vh-70px)] w-screen" alt="">
            </swiper-slide>
            <swiper-slide class="md:hidden">
                <img src="../assets/img/image_mobile.png" class="h-[calc(100vh-70px)] w-screen" alt="">
            </swiper-slide>
            <swiper-slide class="md:hidden">
                <img src="../assets/img/image_mobile.png" class="h-[calc(100vh-70px)] w-screen" alt="">
            </swiper-slide>
        </swiper>
    </div>

    <div class="px-4 py-20 sm:container mx-auto">
        <div class="flex flex-col gap-y-5">
            <h2 class="text-[35px] text-center font-bold text-black850"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                Our Products
            </h2>
            <p class="text-center text-black850"
                data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <div class="flex flex-wrap justify-between gap-6 mt-8">
                <div class="md:w-[47%] xl:w-[30%]">
                    <div class="card__product"
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-delay="0"
                        data-aos-easing="ease-in-sine">
                        <i class="fa-solid fa-paper-plane text-[150px]"></i>
                        <h4 class="mb-4 mt-8 text-2xl text-center font-bold">Adventage 1</h4>
                        <p class="text-black850 text-center mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis.
                        </p>
                        <a href="" class="bg-black py-3 px-10 rounded-md text-white text-center font-semibold">Learn More</a>
                    </div>
                </div>
                <div class="md:w-[47%] xl:w-[30%]">
                    <div class="card__product"
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-delay="100"
                        data-aos-easing="ease-in-sine">
                        <i class="fa-solid fa-wifi text-[150px]"></i>
                        <h4 class="mb-4 mt-8 text-2xl text-center font-bold">Adventage 1</h4>
                        <p class="text-black850 text-center mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis.
                        </p>
                        <a href="" class="bg-black py-3 px-10 rounded-md text-white text-center font-semibold">Learn More</a>
                    </div>
                </div>
                <div class="md:w-[47%] xl:w-[30%]">
                    <div class="card__product"
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-delay="200"
                        data-aos-easing="ease-in-sine">
                        <i class="fa-solid fa-stopwatch text-[150px]"></i>
                        <h4 class="mb-4 mt-8 text-2xl text-center font-bold">Adventage 1</h4>
                        <p class="text-black850 text-center mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis.
                        </p>
                        <a href="" class="bg-black py-3 px-10 rounded-md text-white text-center font-semibold">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-whitesmoke flex flex-col justify-center items-center px-8 py-20">
        <h2 class="text-[35px] text-center font-bold text-black850 mb-8">Who We Are</h2>
        <div class="w-[95%] md:w-[70%] xl:w-[50%]">
            <iframe class="w-full rounded-md" height="315" src="https://www.youtube.com/embed/zk-H40Gp-oY?si=Kjxk72k7ZJYFJT89" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>

    <div class="px-4 py-20 sm:container mx-auto">
        <div class="flex flex-col gap-y-5">
            <h2 class="text-[35px] text-center font-bold text-black850">Our Adventages</h2>
            <p class="text-center text-black850">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div class="flex flex-wrap justify-between gap-6 mt-8">
                <div class="md:w-[47%] xl:w-[30%]">
                    <h4 class="mb-3 font-bold">Adventage 1</h4>
                    <p class="text-justify text-black850">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit.
                    </p>
                </div>
                <div class="md:w-[47%] xl:w-[30%]">
                    <h4 class="mb-3 font-bold">Adventage 1</h4>
                    <p class="text-justify text-black850">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit.
                    </p>
                </div>
                <div class="md:w-[47%] xl:w-[30%]">
                    <h4 class="mb-3 font-bold">Adventage 1</h4>
                    <p class="text-justify text-black850">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit.
                    </p>
                </div>
                <div class="md:w-[47%] xl:w-[30%]">
                    <h4 class="mb-3 font-bold">Adventage 1</h4>
                    <p class="text-justify text-black850">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit.
                    </p>
                </div>
                <div class="md:w-[47%] xl:w-[30%]">
                    <h4 class="mb-3 font-bold">Adventage 1</h4>
                    <p class="text-justify text-black850">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit.
                    </p>
                </div>
                <div class="md:w-[47%] xl:w-[30%]">
                    <h4 class="mb-3 font-bold">Adventage 1</h4>
                    <p class="text-justify text-black850">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="px-4 py-20 sm:container mx-auto">
        <div class="flex flex-col gap-y-5">
            <h2 class="text-[35px] text-center font-bold text-black850">Our Clients</h2>
            <p class="text-center text-black850 mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
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
                            slidesPerView: 3,
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
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
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
                            slidesPerView: 3,
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
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
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
                            slidesPerView: 3,
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
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/img/Dummy Logo.png" height="50" width="150" alt="">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>

    <div class="bg-black">
        <div class="px-4 py-16 sm:container mx-auto">
            <div class="flex flex-col gap-y-4 md:justify-between md:flex-row md:items-center">
                <div>
                    <h3 class="text-2xl text-white font-bold mb-4">Let's Get Started</h3>
                    <p class="text-white">Are you ready for better medical devices & hospital supplies?</p>
                </div>
                <a href="" class="bg-white py-3 px-12 rounded-md text-black text-center font-semibold">Contact US</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card__product {
        padding: 30px 20px;
        background-color: white;
        box-shadow: 0 2px 5px rgba(0,0,0,.5);
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .card__product:hover {
        box-shadow: -1px 0 5px rgba(0,0,0,.5);
    }
</style>