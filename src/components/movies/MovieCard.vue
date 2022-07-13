<template>
  <div v-for="movie in movies" :key="movie.id">
    <router-link to="/dashboard">
      <img
        :src="backurl + movie.thumbnail"
        alt="movieimage"
        class="hover:opacity-50 transition ease-in-out duration-500 rounded-lg h-full w-full"
      />
    </router-link>
    <div class="mt-4 text-24 ml-8 md:ml-0">
      <h3 class="text-white md:mb-2 md:mt-2">
        {{ movie.title.en }} ({{ movie.year }})
      </h3>
      <div class="flex items-center">
        <span class="text-white mr-2">10</span>
        <img
          src="@/assets/svgs/comment.svg"
          alt="comment"
          height="20"
          width="20"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useMovieListStore } from "@/stores/useMovieListStore";
import { mapWritableState } from "pinia";
import axios from "@/config/axios/index";
export default {
  computed: {
    ...mapWritableState(useMovieListStore, ["movies", "backurl"]),
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
  },
};
</script>
