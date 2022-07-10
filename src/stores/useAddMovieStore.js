import { defineStore } from "pinia";

export const useAddMovieStore = defineStore("useAddMovieStore", {
  state: () => ({
    toggle: false,
  }),
});
