import { defineStore } from "pinia";

export const useAddQuoteStore = defineStore("useAddQuoteStore", {
  state: () => ({
    toggleQuote: false,
    quote_en: "",
    quote_ka: "",
    form_submmiting: false,
  }),
});
