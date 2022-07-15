import { defineStore } from "pinia";

export const useAddMovieStore = defineStore("useAddMovieStore", {
  state: () => ({
    toggle: false,
    form_submmiting: false,
    genresOption: [],
    genre: "",
    title_en: "",
    title_ka: "",
    director_en: "",
    director_ka: "",
    description_en: "",
    description_ka: "",
    budget: null,
    year: null,
    thumbnail: null,
  }),
});
