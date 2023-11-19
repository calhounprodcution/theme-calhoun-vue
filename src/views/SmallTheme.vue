<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="bg-whitesmoke min-h-screen">
        <div class="px-4 py-8 sm:container mx-auto">
            <div class="header__theme__display drop-shadow">
                <RouterLink to="/">
                    <i class="fa-solid fa-chevron-left text-xl"></i>
                </RouterLink>
                <h2 class="text-xl font-bold">SMALL THEME</h2>
            </div>
            <div class="flex flex-wrap gap-y-10 justify-between">
                <div class="w-full bg-white drop-shadow flex flex-col items-center p-2 md:w-[49%] xl:w-[24%]">
                    <img class="w-full" src="../assets/theme_large.jpg" alt="">
                    <RouterLink :to="{ name: 'small.small.1' }">
                        <p class="button__open__theme button__tamaya" data-text="OPEN THEME"><span>OPEN THEME</span></p>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .header__theme__display {
        display: flex;
        column-gap: 2rem;
        align-items: center;
        background-color: white;
        padding: .8rem 2rem;
        margin-bottom: 2rem;
        border-radius: 0.25rem;
    }
    
    .button__open__theme {
        font-family: 'Barlow Condensed', sans-serif;
        vertical-align: middle;
        font-size: 1rem;
        margin-top: 1rem;
        text-align: center;
        min-width: 100px;
        width: 100%;
        padding: .5em 2em;
        color: #FFF;
        background-color: #0E185F;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border-radius: 0.25rem;
    }

    .button__open__theme::before,
    .button__open__theme::after {
        content: attr(data-text);
        position: absolute;
        width: 100%;
        height: 50%;
        left: 0;
        background: #7986cb;
        color: #fff;
        overflow: hidden;
        -webkit-transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }
    .button__open__theme::before {
        top: 0;
        padding-top: .5em;
    }
    .button__open__theme::after {
        bottom: 0;
        line-height: 0;
    }
    .button__open__theme > span {
        display: block;
        -webkit-transform: scale3d(0.2, 0.2, 1);
        transform: scale3d(0.2, 0.2, 1);
        opacity: 0;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
        -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }
    .button__open__theme:hover::before {
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }
    .button__open__theme:hover::after {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
    .button__open__theme:hover > span {
        opacity: 1;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
</style>