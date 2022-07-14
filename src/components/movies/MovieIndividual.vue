<template>
  <DashboardLayout />
  <div v-if="loading">Loading..</div>
  <DashboardTimeline v-else>
    <div class="md:flex container mx-auto">
      <img
        class="md:w-1/2 md:h-72"
        :src="backurl + currentMovie.thumbnail"
        alt="moviephoto"
      />
      <div class="ml-2 md:ml-12">
        <div class="md:flex md:items-center md:justify-between">
          <h1 class="text-[#DDCCAA] font-medium text-2xl mt-4">
            {{ currentMovie.title["en"] }} ({{ currentMovie.year }})
          </h1>
          <div
            class="items-center ml-16 flex space-x-3 bg-[#24222F] p-4 rounded-lg invisible md:visible"
          >
            <button @click="delete_movie(currentMovie.id)">
              <IconDelete />
            </button>
            <div class="border-r-2">|</div>
            <IconEdit />
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
            currentMovie.director["en"]
          }}</span>
        </p>
        <p class="text-[#CED4DA] mt-4 font-bold">
          Budget:
          <span class="text-white font-medium ml-2">{{
            currentMovie.budget
          }}</span>
        </p>
        <p class="text-white font-normal mt-4">
          {{ currentMovie.description["en"] }}
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
import IconDelete from "../icons/IconDelete.vue";
import IconEdit from "../icons/IconEdit.vue";
export default {
  components: {
    DashboardLayout,
    DashboardTimeline,
    IconDelete,
    IconEdit,
  },

  computed: {
    ...mapWritableState(useMovieListStore, [
      "currentMovie",
      "backurl",
      "loading",
    ]),
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
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
    delete_movie(currentMovie_id) {
      axios.delete(`movies/` + currentMovie_id).then(() => {
        this.$router.push("/movies");
      });
    },
  },
};
</script>
