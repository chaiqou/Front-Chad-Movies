<template>
  <DashboardLayout />

  <DashboardTimeline>
    <template #header>
      <div class="flex justify-between items-center">
        <span class="text-white font-medium mt-4 text-24 ml-8 md:ml-0"
          >My list of movies (Total {{ movies.length }})</span
        >
        <div class="flex justify-end items-center">
          <!-- aqedan buttonamde !-->
          <div class="invisible md:visible">
            <div class="mt-4 mr-4 relative rounded-md">
              <input
                v-model="search"
                type="text"
                class="block w-full pr-10 text-white border-none bg-inherit p-3 rounded-md"
              />
              <div
                class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
              >
                <p
                  class="flex items-center invisible md:visible space-x-2 z-10"
                >
                  <IconSearch />
                  <span class="text-white">search</span>
                </p>
              </div>
            </div>
          </div>
          <button
            class="items-center invisible md:visible inline-flex justify-center mt-4 rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#E31221] text-base font-medium text-white"
            @click="movieAddButtonToggle"
          >
            <IconAddButton class="mr-2" />
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
import IconSearch from "@/components/icons/IconSearch.vue";
import IconAddButton from "@/components/icons/IconAddButton.vue";

export default {
  components: {
    DashboardLayout,
    DashboardTimeline,
    AddMovieModal,
    MovieCard,
    IconSearch,
    IconAddButton,
  },

  computed: {
    ...mapWritableState(useAddMovieStore, ["toggle"]),
    ...mapWritableState(useMovieListStore, ["movies", "search"]),
  },
  watch: {
    search() {
      this.getResults();
    },
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
        .catch(() => {
          this.movies = "Movies doesn't exist";
        });
    },
    movieAddButtonToggle() {
      this.toggle = !this.toggle;
    },

    getResults() {
      axios
        .get("movies", {
          params: {
            search: this.search,
          },
        })
        .then((response) => {
          this.movies = response.data.data;
        })
        .catch(() => {
          this.movies = "Movies doesn't exist";
        });
    },
  },
};
</script>
