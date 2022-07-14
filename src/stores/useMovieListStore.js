// import axios from "@/config/axios/index";
import { defineStore } from "pinia";

export const useMovieListStore = defineStore("useMovieListStore", {
  state: () => ({
    movies: [],
    currentMovie: {},
    backurl: import.meta.env.VITE_BACKEND_BASE_URL,
  }),
});
