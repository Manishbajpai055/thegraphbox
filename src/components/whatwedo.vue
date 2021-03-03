<template>
    <div>
       <h1 class="text-gray-700 text-center mt-20 font-bold text-4xl">
            What we do 
            <span class="text-blue-700">
                ? </span> </h1>
        
    </div>
    <div class="flex flex-col md:flex-row ">

        <div class="flex flex-col place-items-center transform duration-300 hover:-translate-y-2">
            <img class="w-2/3 py-4" src="src/assets/image/logo_design.svg" alt="">
            <p class="text-center text-gray-900 font-bold text-2xl">Logo Design </p>
            <button class="text-blue-700 LM my-8 font-semibold">Learn More -></button>
        </div>
        <div class="flex flex-col place-items-center transform duration-300 hover:-translate-y-2">
            <img class="w-3/5 py-4" src="src/assets/image/3d.svg" alt="">
            <p class="text-center text-gray-900 font-bold text-2xl">3D modeling </p>
            <button class="text-blue-700 LM my-8 font-semibold">Learn More -></button>
        </div>
        <div class="flex flex-col place-items-center transform duration-300 hover:-translate-y-2">
            <img class="w-2/3 py-4" src="src/assets/image/wireframing.svg" alt="">
            <p class="text-center text-gray-900 font-bold text-2xl">UI/UX Design</p>
            <button class="text-blue-700 LM my-8 font-semibold">Learn More -></button>
        </div>

    </div>
</template>


<style scoped>
button.LM:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 25px;
  content: "";
  height: 2px;
  left: 50%; 
  transform: translateX(-50%);
  position: absolute;
  background: rgb(61, 58, 255);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
@media screen and (min-width:360px) {

    button.LM:hover:after { 
        width: 31%; 
        left: 50%; 
        transform: translateX(-50%);
    }
}
@media screen and (min-width:660px) {
button.LM:hover:after { 
  width: 45%; 
  left: 50%; 
  transform: translateX(-50%);
}
}
@media screen and (min-width:1024px) {
button.LM:hover:after { 
  width: 25%; 
  left: 50%; 
  transform: translateX(-50%);
}
}
</style>