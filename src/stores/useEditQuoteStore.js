import { defineStore } from "pinia";

export const useEditQuoteStore = defineStore("useEditQuoteStore", {
  state: () => ({
    quote_en: "",
    quote_ka: "",
    thumbnail: null,
    form_submmiting: false,
    backurl: import.meta.env.VITE_BACKEND_BASE_URL,
  }),

  getters: {
    getQuoteData(state) {
      return {
        quote_en: state.quote_en,
        quote_ka: state.quote_ka,
        thumbnail: state.thumbnail,
      };
    },
  },
});
