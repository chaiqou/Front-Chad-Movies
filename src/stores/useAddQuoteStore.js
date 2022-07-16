import { defineStore } from "pinia";

export const useAddQuoteStore = defineStore("useAddQuoteStore", {
  state: () => ({
    quote_en: "",
    quote_ka: "",
    thumbnail: null,
    form_submmiting: false,
  }),
});
