<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="h-screen w-screen flex flex-col justify-evenly p-8 items-center theme__root">
        <p class="text-4xl md:text-5xl font-bold text-white web__title">Calhoun Production</p>
        <RouterLink :to="{ name: 'landing.page' }">
            <p class="button__theme" data-text="LANDING PAGE"><span>LANDING PAGE</span></p>
        </RouterLink>
		<!-- <RouterLink to="/medium">
			<p class="button__theme" data-text="MEDIUM"><span>MEDIUM</span></p>
        </RouterLink> -->
		<RouterLink :to="{ name: 'multi.page' }">
			<p class="button__theme" data-text="MULTI PAGE"><span>MULTI PAGE</span></p>
        </RouterLink>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Barlow+Condensed:wght@500;700&display=swap');

.theme__root {
    background: rgb(55,71,79);
    background: radial-gradient(circle, rgba(55,71,79,1) 0%, rgba(0,0,0,1) 100%);
}

.web__title {
    font-family: Agbalumo;
}

.button__theme {
    font-family: 'Barlow Condensed', sans-serif;
    vertical-align: middle;
    font-size: 1.1rem;
    text-align: center;
    min-width: 200px;
    max-width: 250px;
    padding: 1em 2em;
    color: white;
    border: 2px solid #FFF;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 0.25rem;
}

.button__theme::before,
.button__theme::after {
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
.button__theme::before {
	top: 0;
	padding-top: 1em;
}
.button__theme::after {
	bottom: 0;
	line-height: 0;
}
.button__theme > span {
	display: block;
	-webkit-transform: scale3d(0.2, 0.2, 1);
	transform: scale3d(0.2, 0.2, 1);
	opacity: 0;
	-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
	transition: transform 0.3s, opacity 0.3s;
	-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button__theme:hover::before {
	-webkit-transform: translate3d(0, -100%, 0);
	transform: translate3d(0, -100%, 0);
}
.button__theme:hover::after {
	-webkit-transform: translate3d(0, 100%, 0);
	transform: translate3d(0, 100%, 0);
}
.button__theme:hover > span {
	opacity: 1;
	-webkit-transform: scale3d(1, 1, 1);
	transform: scale3d(1, 1, 1);
}
</style>
