<template>
  <div class="snap-y snap-proximity h-[100vh] overflow-y-scroll">
    <div class="h-[100vh]">
      <nav class="p-5 flex items-center justify-between whitespace-nowrap">
        <p class="text-[#DDCCAA] text-lg font-medium leadieng-[150%]">
          MOVIE QUOTES
        </p>

        <ul class="flex items-center">
          <span class="invisible md:visible md:text-white px-5 py-2.5 mr-2">
            ENG S
          </span>
          <li>
            <router-link
              to="/register"
              class="invisible md:visible focus:outline-none text-white bg-[#E31221] hover:bg-red-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >Sign Up</router-link
            >
          </li>
          <li>
            <router-link
              to="/login"
              class="text-white border border-gray-300 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-3 md:px-5 py-2.5 mr-2 mb-2"
              >Log In</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="flex items-center justify-center relative h-[70vh]">
        <h1
          class="text-[#DDCCAA] md:w-1/3 text-center leading-9 font-bold md:text-6xl text-4xl whitespace-wrap"
        >
          Find any quote in millions of movie lines
        </h1>
        <router-link
          to="/register"
          class="absolute top-[42vh] right-[18 vh] md:top-[46vh] md:right-[92vh] focus:outline-none text-white bg-[#E31221] hover:bg-red-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >Get Started</router-link
        >
      </div>
    </div>
    <scrollable-images />
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import ScrollableImages from "../components/landing/ScrollableImages.vue";

export default {
  components: {
    RouterLink,
    ScrollableImages,
  },
};
</script>
