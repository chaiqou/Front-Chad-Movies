import { defineStore } from "pinia";

export const useDashboardQuotesStore = defineStore("useDashboardQuotesStore", {
  state: () => ({
    quotes: [],
  }),
});
