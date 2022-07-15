import { defineStore } from "pinia";

export const useMovieListStore = defineStore("useMovieListStore", {
  state: () => ({
    movies: [],
    currentMovie: {},
    search: null,
    backurl: import.meta.env.VITE_BACKEND_BASE_URL,
    loading: true,
  }),
});
