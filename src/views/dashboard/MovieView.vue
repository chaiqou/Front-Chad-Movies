<template>
  <DashboardLayout />
  <DashboardTimeline>
    <div class="md:flex container mx-auto">
      <img
        class="md:w-1/2 md:h-72"
        :src="backurl + currentMovie.thumbnail"
        alt="moviephoto"
      />
      <div class="ml-2 md:ml-12">
        <div class="md:flex md:items-center md:justify-between">
          <h1 class="text-[#DDCCAA] font-medium text-2xl mt-4">
            {{ currentMovie.title }} ({{ currentMovie.year }})
          </h1>
          <div
            class="items-center flex space-x-4 bg-[#24222F] p-4 rounded-lg invisible md:visible"
          >
            <img src="@/assets/svgs/trash.svg" alt="trash" />
            <div class="border-r-2">|</div>
            <img src="@/assets/svgs/edit.svg" alt="edit" />
          </div>
        </div>

        <p
          class="text-white bg-gray-500 inline-block p-1 rounded-lg font-bold mt-4"
        >
          {{ currentMovie.genre }}
        </p>
        <p class="text-[#CED4DA] mt-4 font-bold">
          Director:
          <span class="text-white font-medium ml-2">{{
            currentMovie.director
          }}</span>
        </p>
        <p class="text-[#CED4DA] mt-4 font-bold">
          Budget:
          <span class="text-white font-medium ml-2">{{
            currentMovie.budget
          }}</span>
        </p>
        <p class="text-white font-normal mt-4">
          {{ currentMovie.description }}
        </p>
      </div>
    </div>
  </DashboardTimeline>
</template>

<script>
import DashboardLayout from "@/components/dashboard/DashboardLayout.vue";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";
import { useMovieListStore } from "@/stores/useMovieListStore";
import { mapWritableState } from "pinia";
import axios from "@/config/axios/index";
export default {
  components: {
    DashboardLayout,
    DashboardTimeline,
  },

  computed: {
    ...mapWritableState(useMovieListStore, ["currentMovie", "backurl"]),
  },

  created() {
    this.getMovieBySlug(this.$route.params.slug);
  },

  methods: {
    async getMovieBySlug() {
      await axios
        .get(`movie-slug/${this.$route.params.slug}`)
        .then((response) => {
          this.currentMovie = response.data.data;
          return response.data.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
