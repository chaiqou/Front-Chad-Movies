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
    photo: null,
  }),
});
