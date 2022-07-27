import { defineStore } from "pinia";

export const useAddMovieStore = defineStore("useAddMovieStore", {
  state: () => ({
    toggle: false,
    form_submmiting: false,
    genresOption: [],
    title_en: "",
    title_ka: "",
    director_en: "",
    director_ka: "",
    description_en: "",
    description_ka: "",
    genre: [],
    budget: null,
    year: null,
    thumbnail: null,
    selectedGenre: [],
  }),

  getters: {
    getMovieData(state) {
      return {
        title_en: state.title_en,
        title_ka: state.title_ka,
        director_en: state.director_en,
        director_ka: state.director_ka,
        description_en: state.description_en,
        description_ka: state.description_ka,
        year: state.year,
        budget: state.budget,
        thumbnail: state.thumbnail,
        genre: state.genre,
      };
    },
  },
});
