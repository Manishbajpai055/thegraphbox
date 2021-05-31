<template>
  <div>
    <Navbar />
    <section class="relative flex flex-col justify-between">
      <div
        class="relative grid grid-cols-1 lg:grid-cols-2 md:mx-16 place-items-center"
      >
        <div class="lg:mx-6 lg:order-2">
          <h1
            class="lg:px-4 px-4 md:px-0 text-5xl font-bold py-4 leading-tight"
          >
            Give your company the best chance of success<span
              class="text-blue-500"
              >.</span
            >
          </h1>
          <p
            class="lg:px-4 px-4 md:px-0 text-2xl text-gray-500 w-11/12 md:w-full leading-normal"
          >
            Brand identity, graphic design, 3D modeling, UI/UX design and Web
            development
          </p>
          <div class="flex flex-row mx-4 md:mx-0 lg:mx-4 my-6">
            <button
              v-on:click="work()"
              class="cta-btn-bg-2 mr-4 bg-blue-600 text-gray-100 font-semibold text-lg"
            >
              Our Work
            </button>
            <!-- <router-link to="/meeting"> -->
            <button
              @click="redirectMeeting"
              class="cta-btn-bg text-lg font-bold text-white px-4"
            >
              Schedule Meeting
            </button>
            <!-- </router-link> -->
          </div>
        </div>
        <div class="order-1 lg:flex place-content-center">
          <video
            muted=""
            playsinline=""
            crossorigin=""
            loop=""
            utoplay=""
            src="../assets/reel.mp4"
          ></video>
        </div>
      </div>
      <div
        id="Completedwork"
        class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 w-full md:order-last bg-blue-55 mt-10 py-4 px-10 place-content-center justify-between"
      >
        <div
          class="flex flex-col place-items-center text-2xl text-gray-700 mx-6 lg:mx-10 py-4 md:py-10"
        >
          <h2 class="font-bold py-2">20+</h2>
          <p class="text-center">Projects Completed</p>
        </div>
        <div
          class="flex flex-col place-items-center text-2xl text-gray-700 mx-6 lg:mx-10 py-4 md:py-10"
        >
          <h2 class="font-bold py-2">15+</h2>
          <p class="text-center">No of Clients</p>
        </div>
        <div
          class="flex flex-col place-items-center text-2xl text-gray-700 mx-6 lg:mx-10 py-4 md:py-10"
        >
          <h2 class="font-bold py-2">5+</h2>
          <p class="text-center">Experience</p>
        </div>
        <div
          class="flex flex-col place-items-center text-2xl text-gray-700 mx-6 lg:mx-10 py-4 md:py-10"
        >
          <h2 class="font-bold py-2">4+</h2>
          <p class="text-center">Team Size</p>
        </div>
      </div>
    </section>

    <Whatwedo-vue />
    <Project />
    <Contact />
    <Footer />
  </div>
</template>

<style>
.bg-blue-55 {
  background: #eef1fa;
}

.svg-color {
  color: #2563eb;
}

.text-blue-550 {
  color: #4c0dff;
}

a:hover {
  color: #2563eb !important;
}

.cta-btn-bg-2 {
  width: 160px;
  height: 62px;
}

.cta-btn-bg {
  width: 160px;
  height: 62px;
  background: linear-gradient(
    65.34deg,
    rgba(124, 58, 237, 0.9) 20.71%,
    rgba(206, 32, 168, 0.715) 90.89%
  );
}
</style>


<script>
import WhatwedoVue from "../components/whatwedo.vue";
import Project from "../components/projects_comp.vue";
import Contact from "../components/contact.vue";
import Footer from "../components/footer.vue";
import Navbar from "../components/navbar.vue";

export default {
  name: "Home_page",
  data() {
    return {
      text: "hello",
    };
  },
  methods: {
    Contact() {
      document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
    },
    work() {
      document.getElementById("work").scrollIntoView({ behavior: "smooth" });
    },
    redirectMeeting() {
      window.location.href = "https://calendly.com/thegraphbox/";
    },
  },
  components: {
    WhatwedoVue,
    Project,
    Contact,
    Footer,
    Navbar,
  },
};
</script>