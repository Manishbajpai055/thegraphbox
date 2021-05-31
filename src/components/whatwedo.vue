<template>
  <div>
    <h1 class="text-gray-700 text-center mt-20 font-bold text-4xl">
      What we do
      <span class="text-blue-500"> ? </span>
    </h1>
  </div>
  <div class="flex flex-col md:flex-row">
    <div
      class="flex flex-col place-items-center transform duration-300 hover:-translate-y-2"
    >
      <img class="w-2/3 py-4" src="/src/assets/image/logo_design.svg" alt="" />
      <p class="text-center text-gray-700 font-bold text-2xl">{{ title[1] }}</p>
      <button class="text-blue-700 text-lg LM my-8 font-semibold">
        Learn More ->
      </button>
    </div>
    <div
      class="flex flex-col place-items-center transform duration-300 hover:-translate-y-2"
    >
      <img class="w-3/5 py-4" src="/src/assets/image/3d.svg" alt="" />
      <p class="text-center text-gray-700 font-bold text-2xl">{{ title[2] }}</p>
      <button class="text-blue-700 text-lg LM my-8 font-semibold">
        Learn More ->
      </button>
    </div>
    <div
      class="flex flex-col place-items-center transform duration-300 hover:-translate-y-2"
    >
      <img class="w-2/3 py-4" src="/src/assets/image/wireframing.svg" alt="" />
      <p class="text-center text-gray-700 font-bold text-2xl">{{ title[3] }}</p>
      <button class="text-blue-700 text-lg LM my-8 font-semibold">
        Learn More ->
      </button>
    </div>
  </div>
</template>


<style>
button.LM:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 25px;
  content: "";
  height: 2px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  position: absolute;
  background: #3d3aff;
  -webkit-transition: width 0.3s ease 0s, left 0.3s ease 0s;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

a.LM:after {
  background: none repeat scroll 0 0 transparent;
  bottom: -4px;
  content: "";
  height: 2px;
  left: 0%;
  position: absolute;
  background: #3d3aff;
  -webkit-transition: width 0.3s ease 0s, left 0.3s ease 0s;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

@media screen and (min-width: 360px) {
  button.LM:hover:after {
    width: 31%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  a.LM:hover:after {
    width: 31%;
  }
}

button.LM:hover:after {
  width: 128px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

a.LM:hover:after {
  width: 35px;
}
a:hover {
  color: #2563eb !important;
}
</style>

<script>
export default {
  data() {
    return {
      title: {
        1: "Logo Design",
        2: "3D Modeling",
        3: "UI/UX Design",
      },
    };
  },
  setup() {},
};
</script>