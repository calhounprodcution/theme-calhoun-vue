<script lang="ts">
    import { RouterView, RouterLink } from 'vue-router'
    import AOS from 'aos';

    export default {
        data: function() {
            return {
                listNavbar: ['home', 'about', 'service', 'client', 'contact'],
                mobileNav: false,
                activeNav: 'home',
            };
        },
        mounted: function() {
            AOS.init()
        },
        methods: {
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
            return {
                RouterView,
                RouterLink
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
                    <RouterLink :to="{ name: 'large.large.1.home' }"
                                :class="{ active: activeNav === 'home' }"
                                @click.native="replaceActiveNav('home')">
                        Home
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{ name: 'large.large.1.about' }"
                                :class="{ active: activeNav === 'about' }"
                                @click.native="replaceActiveNav('about')">
                        About
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{ name: 'large.large.1.product' }"
                                :class="{ active: activeNav === 'product' }"
                                @click.native="replaceActiveNav('product')">
                        Product
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{ name: 'large.large.1.contact' }"
                                :class="{ active: activeNav === 'contact' }"
                                @click.native="replaceActiveNav('contact')">
                        Contact
                    </RouterLink>
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
                    <RouterLink :to="{ name: 'large.large.1.home' }"
                                class="nav-mobile-link"
                                :class="{ active: activeNav === 'home' }"
                                @click.native="replaceActiveNav('home')">
                        Home
                    </RouterLink>
                </li>
                <li class="nav-mobile-item">
                    <RouterLink :to="{ name: 'large.large.1.about' }"
                                class="nav-mobile-link"
                                :class="{ active: activeNav === 'about' }"
                                @click.native="replaceActiveNav('about')">
                        About
                    </RouterLink>
                </li>
                <li class="nav-mobile-item">
                    <RouterLink :to="{ name: 'large.large.1.product' }"
                                class="nav-mobile-link"
                                :class="{ active: activeNav === 'product' }"
                                @click.native="replaceActiveNav('product')">
                        Product
                    </RouterLink>
                </li>
                <li class="nav-mobile-item">
                    <RouterLink :to="{ name: 'large.large.1.contact' }"
                                class="nav-mobile-link"
                                :class="{ active: activeNav === 'contact' }"
                                @click.native="replaceActiveNav('contact')">
                        Contact
                    </RouterLink>
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
        <RouterView/>
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
</style>