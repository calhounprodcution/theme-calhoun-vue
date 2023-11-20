<script lang="ts">
// Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
    import AOS from 'aos';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';

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
            :pagination="true"
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
            :pagination="true"
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
            <h2 class="sub__header text-[35px] text-center text-black850">Our Products</h2>
            <p class="text__content text-center text-black850">The products we sell are disposable products with the best quality, have complete certification, are registered in the E-Catalogue and have been tested in various hospitals throughout Indonesia.</p>
            <div class="flex flex-wrap justify-start gap-6 mt-8">
                <div class="md:w-[48%] xl:w-[32%] card__product">
                    <i class="fa-solid fa-paper-plane text-[150px]"></i>
                    <h4 class="sub__header mb-4 mt-8 text-2xl text-center">Adventage 1</h4>
                    <p class="text__content text-black850 text-center mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis.
                    </p>
                    <a href="" class="bg-black py-3 px-10 rounded-md text-white text-center font-semibold">Learn More</a>
                </div>
                <div class="md:w-[48%] xl:w-[32%] card__product">
                    <i class="fa-solid fa-wifi text-[150px]"></i>
                    <h4 class="sub__header mb-4 mt-8 text-2xl text-center">Adventage 1</h4>
                    <p class="text__content text-black850 text-center mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis.
                    </p>
                    <a href="" class="bg-black py-3 px-10 rounded-md text-white text-center font-semibold">Learn More</a>
                </div>
                <div class="md:w-[48%] xl:w-[32%] card__product">
                    <i class="fa-solid fa-stopwatch text-[150px]"></i>
                    <h4 class="sub__header mb-4 mt-8 text-2xl text-center">Adventage 1</h4>
                    <p class="text__content text-black850 text-center mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis.
                    </p>
                    <a href="" class="bg-black py-3 px-10 rounded-md text-white text-center font-semibold">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    <div class="px-4 py-20 sm:container mx-auto">
        <div class="flex flex-col gap-y-5">
            <h2 class="sub__header text-[35px] text-center text-black850">Our Adventages</h2>
            <p class="text__content text-center text-black850">As a medical device distributor company, we prioritize customer satisfaction with the best products and services.</p>
            <div class="flex flex-wrap justify-start gap-6 mt-8">
                <div class="md:w-[48%] xl:w-[32%]">
                    <h4 class="sub__header mb-3">Adventage 1</h4>
                    <p class="text__content text-justify text-black850">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit.
                    </p>
                </div>
                <div class="md:w-[48%] xl:w-[32%]">
                    <h4 class="sub__header mb-3">Adventage 1</h4>
                    <p class="text__content text-justify text-black850">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit.
                    </p>
                </div>
                <div class="md:w-[48%] xl:w-[32%]">
                    <h4 class="sub__header mb-3">Adventage 1</h4>
                    <p class="text__content text-justify text-black850">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit.
                    </p>
                </div>
                <div class="md:w-[48%] xl:w-[32%]">
                    <h4 class="sub__header mb-3">Adventage 1</h4>
                    <p class="text__content text-justify text-black850">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit.
                    </p>
                </div>
                <div class="md:w-[48%] xl:w-[32%]">
                    <h4 class="sub__header mb-3">Adventage 1</h4>
                    <p class="text__content text-justify text-black850">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit.
                    </p>
                </div>
                <div class="md:w-[48%] xl:w-[32%]">
                    <h4 class="sub__header mb-3">Adventage 1</h4>
                    <p class="text__content text-justify text-black850">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus reiciendis laborum enim quae quod alias illo maxime distinctio blanditiis. Sunt quaerat, minus dignissimos maiores sit reprehenderit. Assumenda, nam reprehenderit.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-black">
        <div class="px-4 py-16 sm:container mx-auto">
            <div class="flex flex-col gap-y-4 md:justify-between md:flex-row md:items-center">
                <div>
                    <h3 class="sub__header text-2xl text-white mb-4">Let's Get Started</h3>
                    <p class="text__content text-white">Are you ready for better medical devices & hospital supplies?</p>
                </div>
                <a href="" class="bg-white py-3 px-12 rounded-md text-black text-center font-semibold">Contact US</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

    .sub__header {
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
    }
    .text__content {
        font-family: 'Roboto', sans-serif;
    }

    .card__product {
        padding: 30px 20px;
        background-color: white;
        box-shadow: 0 2px 5px rgba(0,0,0,.5);
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        transition: box-shadow 400ms;
    }
    .card__product:hover {
        box-shadow: -1px 0 5px rgba(0,0,0,.5);
    }
</style>