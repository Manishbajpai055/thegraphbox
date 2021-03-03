<template>
    <div class="grid grid-cols-1 md:grid-cols-2 md:mx-16 place-items-center">

        <div class="mx-6 place-items-end md:order-2">
            <h1 class="px-4 text-5xl font-bold py-4 leading-tight " >Give your company the best chance of success.</h1>
            <p class="px-4 text-2xl text-gray-500 w-11/12 md:w-3/4 leading-normal ">graphbox is a UI/UX and Brand Design Agency in India</p>
            <div class="flex flex-row px-4 my-6">
                
                <button class="cta-btn-bg text-lg font-bold text-white px-8 ">
                    Lets Talk</button>
                <button class="cta-btn-bg-2 ml-4 bg-purple-600 text-gray-100 font-semibold text-lg ">
                Our Work </button>
            </div>
        </div>
        <div class="order-1 lg:flex place-content-center">
            <video  loop utoplay src="src/assets/reel.mp4" ></video>
        </div>
    </div>
    <div class="flex flex-col md:flex-row w-full md:order-last bg-blue-55  px-10 place-content-center justify-between">
            <div class="flex flex-col place-items-center text-2xl text-gray-700 mx-10 py-4 md:py-10 "> 
                <h2 class="font-bold py-2">20+</h2>
                <p class="text-center">Projects Completed</p>
            </div>
            <div class="flex flex-col place-items-center text-2xl text-gray-700 mx-10 py-4 md:py-10 "> 
                <h2 class="font-bold py-2">15+</h2>
                <p class="text-center">No of Clients</p>
            </div>
            <div class="flex flex-col place-items-center text-2xl text-gray-700 mx-10 py-4 md:py-10 "> 
                <h2 class="font-bold py-2">5+</h2>
                <p class="text-center">Experience </p>
            </div>
            <div class="flex flex-col place-items-center text-2xl text-gray-700 mx-10 py-4 md:py-10 "> 
                <h2 class="font-bold py-2">4+</h2>
                <p class="text-center">Team Size</p>
            </div>
        </div>
        
    
</template>

<style>
.bg-blue-55{
    background:  #dfe5fa;
}
.text-blue-550{
    color : #4c0dff;
}
.cta-btn-bg-2{
    width: 160px;
    height: 62px;
   
}
.cta-btn-bg{
    width: 160px;
    height: 62px;
    background: linear-gradient(65.34deg, rgba(124, 58, 237, 0.9) 20.71%, rgba(206, 32, 168, 0.715) 90.89%);
}

</style>