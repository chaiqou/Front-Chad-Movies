<template>
  <DashboardLayout />

  <DashboardTimeline>
    <template #header>
      <div class="flex justify-between items-center">
        <span class="text-white font-medium mt-4 text-24 ml-8 md:ml-0"
          >My list of movies (Total {{ movies.length }})</span
        >
        <div class="flex justify-end items-center">
          <p class="flex mr-8 mt-4 items-end invisible md:visible space-x-2">
            <img src="@/assets/svgs/search.svg" alt="search" />
            <span class="text-white">search</span>
          </p>
          <button
            class="items-center invisible md:visible inline-flex justify-center mt-4 rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
            @click="movieAddButtonToggle"
          >
            <img
              class="mr-2"
              src="@/assets/svgs/add-button.svg"
              alt="addmovie"
            />
            Add movie
          </button>
        </div>
      </div>
      <div
        v-if="toggle"
        class="overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center"
      >
        <AddMovieModal />
      </div>
    </template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-20">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </DashboardTimeline>
</template>

<script>
import DashboardLayout from "@/components/dashboard/DashboardLayout.vue";
import DashboardTimeline from "@/components/dashboard/DashboardTimeline.vue";
import AddMovieModal from "@/components/modals/AddMovieModal.vue";

import { mapWritableState } from "pinia";
import { useAddMovieStore } from "@/stores/useAddMovieStore";
import { useMovieListStore } from "@/stores/useMovieListStore";
import MovieCard from "@/components/movies/MovieCard.vue";
import axios from "@/config/axios/index";

export default {
  components: {
    DashboardLayout,
    DashboardTimeline,
    AddMovieModal,
    MovieCard,
  },
  computed: {
    ...mapWritableState(useAddMovieStore, ["toggle"]),
    ...mapWritableState(useMovieListStore, ["movies"]),
  },
  created() {
    this.allMovies();
  },

  methods: {
    allMovies() {
      axios
        .get("movies")
        .then((response) => {
          this.movies = response.data.data;
        })
        .catch((error) => console.log(error));
    },
    movieAddButtonToggle() {
      this.toggle = !this.toggle;
    },
  },
};
</script>
