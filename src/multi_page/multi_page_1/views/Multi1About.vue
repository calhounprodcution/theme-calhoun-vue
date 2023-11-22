<template>
    <div class="bg-black h-[calc(100vh-70px)] w-screen">
        <div class="px-4 sm:container mx-auto h-full">
            <div class="flex justify-between items-center h-full w-full">
                <div class="md:w-[55%]">
                    <h1 class="text-[45px] mb-4 font-semibold text-white">Who We Are</h1>
                    <p class="my-4 text-justify text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magnam officiis accusantium in veritatis similique suscipit, omnis, cupiditate sed, cumque reprehenderit laborum labore alias est repellat consectetur quibusdam sapiente saepe.    
                    </p>
                    <p class="my-4 text-justify text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magnam officiis accusantium in veritatis similique suscipit, omnis, cupiditate sed, cumque reprehenderit laborum labore alias est repellat consectetur quibusdam sapiente saepe.    
                    </p>
                </div>
                <div class="hidden md:block md:w-[40%] py-6 h-full">
                    <img class="h-full w-full rounded-tr-[100px] rounded-bl-[100px]" 
                        src="../assets/img/image_desktop.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="px-4 py-12 sm:container mx-auto">
        <h2 class="text-[35px] font-bold text-black850 mb-4">Vision & Mission</h2>
        <div class="flex flex-wrap justify-between gap-6">
            <div class="md:w-[48%] card__product">
                <h4 class="mb-4 text-3xl font-bold">Vision</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae dolor voluptatum vel tenetur.</p>
                <!-- <ul class="list-disc ml-4">
                    <li class="bg-red">Meet the needs of hospitals for the community for health equipment that has a competitive advantage</li>
                    <li>Meet the needs of hospitals for the community for health equipment that has a competitive advantage</li>
                    <li>Meet the needs of hospitals for the community for health equipment that has a competitive advantage</li>
                </ul> -->
            </div>
            <div class="md:w-[48%] card__product">
                <h4 class="mb-4 text-3xl font-bold">Mission</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae dolor voluptatum vel tenetur.</p>
                <!-- <ul class="list-disc ml-4">
                    <li>Meet the needs of hospitals for the community for health equipment that has a competitive advantage</li>
                    <li>Meet the needs of hospitals for the community for health equipment that has a competitive advantage</li>
                </ul> -->
            </div>
        </div>
    </div>

    <div class="px-4 py-12 sm:container mx-auto">
        <h2 class="text-[35px] font-bold text-black850 mb-4">Our Teams</h2>
        <div class="flex flex-wrap justify-start gap-6">
            <div class="md:w-[22%]">
                <img class="w-full rounded-md" src="../assets/img/image_mobile.png" alt="">
                <h5 class="text-xl font-bold text-center mt-2">Your Name</h5>
                <p class="text-center">Job Title</p>
            </div>
            <div class="md:w-[22%]">
                <img class="w-full rounded-md" src="../assets/img/image_mobile.png" alt="">
                <h5 class="text-xl font-bold text-center mt-2">Your Name</h5>
                <p class="text-center">Job Title</p>
            </div>
            <div class="md:w-[22%]">
                <img class="w-full rounded-md" src="../assets/img/image_mobile.png" alt="">
                <h5 class="text-xl font-bold text-center mt-2">Your Name</h5>
                <p class="text-center">Job Title</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card__product {
        padding: 50px;
        background-color: white;
        box-shadow: 0 2px 5px rgba(0,0,0,.5);
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        transition: box-shadow 400ms;
    }
    .card__product:hover {
        box-shadow: -1px 0 5px rgba(0,0,0,.5);
    }
</style>