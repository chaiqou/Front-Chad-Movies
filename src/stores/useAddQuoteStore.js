import { defineStore } from "pinia";

export const useAddQuoteStore = defineStore("useAddQuoteStore", {
  state: () => ({
    quote_en: "",
    quote_ka: "",
    quote_toggle: true,
    thumbnail: null,
    form_submmiting: false,
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
