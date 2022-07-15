import { defineStore } from "pinia";

export const useAddQuoteStore = defineStore("useAddQuoteStore", {
  state: () => ({
    toggleQuote: false,
  }),
});
