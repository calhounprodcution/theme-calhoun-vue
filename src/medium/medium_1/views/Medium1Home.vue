<template>
    <div class="h-[calc(100vh-70px)]">
        <img class="h-full w-full" src="../assets/img/home-banner.jpg" alt="Home Banner">
        <a href="#home_content" class="absolute bottom-2 left-1/2 arrow__down">
            <i class="fa-solid fa-angles-down text-4xl text-white"></i>
        </a>
    </div>
    <div id="home_content" class="px-4 py-20 sm:container mx-auto">
        <h2 class="text-[30px] font-bold py-3">Arash Shankara Muda</h2>
        <p class="text-justify py-3 text-[#000000D9]">
            is a private company in Jakarta, Indonesia. We offers the best solution in many sectors of industry. The people behind it are people with a great vision, passion, and expertise in this industry.
        </p>
        <p class="text-justify py-3 text-[#000000D9]">
            Supported our network, we are able to integrate all these functions with our fruitful experience. The expertise and competence in our work come from the years of experience and the commanding knowledge we have of the markets. Backed also by a team of highly reliable, reputable and professionally skilled workforce. Our numerous competencies allow us to respond to the needs of market.
        </p>
        <p class="text-justify py-3 text-[#000000D9]">
            We look forward to welcoming you to our company and work to develop and enhance your current business.​
        </p>
        <h2 class="text-[30px] font-bold py-3 pt-8">At Arash</h2>
        <p class="text-justify py-3 text-[#000000D9]">
            We are well-equipped with the capabilities and access to an extensive range of products & services, ensuring that our clients have the legitimate solutions that best fit their requirements in accordance to the standards.
        </p>
    </div>
</template>

<style scoped>
    .arrow__down {
        animation: arrowDown 1s infinite;
    }
    @keyframes arrowDown {
        0% { bottom: 0.5rem }
        50% { bottom: 0 }
        100% { bottom: 0.5rem }
    }
</style>