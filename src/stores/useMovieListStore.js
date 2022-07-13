import { defineStore } from "pinia";

export const useMovieListStore = defineStore("useMovieListStore", {
  state: () => ({
    movies: [],
    backurl: import.meta.env.VITE_BACKEND_BASE_URL,
  }),
});
