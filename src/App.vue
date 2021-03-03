<template>
<section class="flex flex-col justify-between md:h-screen">
    <navbar />
    <landing-hero />
</section>

<section class="flex flex-col h-screen">
  <whatwedo />
</section>

  

</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import navbar from './components/navbar.vue'
import LandingHero from './components/LandingHero.vue'
import videoSection from './components/videosection.vue'
import whatwedo from './components/whatwedo.vue'

</script>

<style>


</style>