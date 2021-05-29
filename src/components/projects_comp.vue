<template>
  <section id="work">
       <div class="mx-4 md:mx-16 py-24">
        <div class="text-center font-bold text-4xl text-gray-800">
            <h3>Featured work<span class="text-blue-500">.</span></h3>
            <p class="text-base text-gray-500 font-normal pt-6">Various products we have built in different domains</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center py-10">

            <div >
                <img src="src/assets/image/projects/fs.jpg" alt="">
                <p class="text-xl font-semibold text-gray-700 py-4">LOGO</p>
            </div>
            <div >
                <img src="src/assets/image/projects/gandeev.jpg" alt="">
                <p class="text-xl font-semibold text-gray-700 py-4">gandeev</p>
            </div>

            <div >
                <img src="src/assets/image/projects/chori-ki-car.jpg" alt="">
                <p class="text-xl font-semibold text-gray-700 py-4">chori ki car hai</p>
            </div>
            <div >
                <img src="src/assets/image/projects/bhutiya-mahal-ig.jpg" alt="">
                <p class="text-xl font-semibold text-gray-700 py-4">bhootiya mahal i guess
                </p>
            </div>
        </div>
         <div @mouseover="hover()" @mouseleave="unhover()" class="flex flex-row p-4 border-4 border-blue-600 w-60 cursor-pointer " id="allProjects" >
            <button class="text-blue-600 hover:outline-null focus:outline-null outline-null font-bold text-lg ">
                View All projects </button>
            <svg id="rA1" class="ml-4 duration-500 fill-current text-blue-600" version="1.1" width="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 512 512" xml:space="preserve">
                <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
                c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
                l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
                c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"/>
            </svg>
            
        </div>
    </div>
    
    
    <section id="Testimonials" class="mt-10 px-4 md:px-20 py-10 bg-blue-55">
        <div class="font-bold text-4xl text-gray-700 text-center">
            What our Clients say <span>?</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center py-10">
            <div class="flex flex-col place-items-center">
                <img src="src/assets/icons/logos_atomic.svg" alt="">
                <p class="text-base py-4 font-normal text-center">A responsive team, Thegraphbox is always available to provide support, making them excellent partners. Over the past five years, the project has run smoothly and successfully, satisfying internal stakeholders. </p>
                <h3 class="text-xl font-semibold text-center">- Atomic </h3>
            </div>
            <div class="flex flex-col place-items-center">
                <img src="src/assets/icons/logos_bugsnag.svg" alt="">
                <p class="text-base py-4 font-normal text-center">The portal has had a great impact since it's been integrated to the website. The team at Inkoop is responsive, easy to work with, understanding, timely, and able to do a great job. </p>
                <h3 class="text-xl font-semibold text-center">- Bugsnag </h3>
            </div>
            <!-- <div class="flex flex-col place-items-center">
                <img src="src/assets/icons/logos_coursera.svg" alt="">
                <p class="text-base py-4 font-normal text-center">Thegraphbox team is very helpfull Thegraphbox team is very helpfull Thegraphbox team is very helpfull Thegraphbox team is very helpfull </p>
                <h3 class="text-xl font-semibold text-center">- Coursera </h3>
            </div>
            <div class="flex flex-col place-items-center">
                <img src="src/assets/icons/logos_dev.svg" alt="">
                <p class="text-base py-4 font-normal text-center">Thegraphbox team is very helpfull Thegraphbox team is very helpfull Thegraphbox team is very helpfull Thegraphbox team is very helpfull </p>
                <h3 class="text-xl font-semibold text-center">- Webdev </h3>
            </div> -->
            
        </div>
    </section>
</section>
</template>



<script>
export default {
  name: "Projects",
  props: ['content'],
  components: {},
  methods: {
    
    hover() {
        document.getElementById('rA1').style.marginLeft = '1.5rem';
    },
    unhover(){
        document.getElementById('rA1').style.marginLeft = '1rem';    
       }
  },
};
</script>

