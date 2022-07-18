import { defineStore } from "pinia";

export const useAddQuoteStore = defineStore("useAddQuoteStore", {
  state: () => ({
    quote_en: "",
    quote_ka: "",
    thumbnail: null,
    form_submmiting: false,
    individual_quote: {},
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
