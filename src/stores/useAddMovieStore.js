import { defineStore } from "pinia";

export const useAddMovieStore = defineStore("useAddMovieStore", {
  state: () => ({
    toggle: false,
    form_submmiting: false,
    genresOption: [],
    genre: "",
    title: { en: "", ka: "" },
    director: { en: "", ka: "" },
    description: { en: "", ka: "" },
    budget: null,
    year: null,
    thumbnail: null,
  }),

  getters: {
    getMovieData(state) {
      return {
        title: state.title,
        director: state.director,
        description: state.description,
        budget: state.budget,
        year: state.year,
        thumbnail: state.thumbnail,
        genre: state.genre,
      };
    },
  },
});
