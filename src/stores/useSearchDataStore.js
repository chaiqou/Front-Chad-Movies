import { defineStore } from "pinia";

export const useSearchDataStore = defineStore("useSearchDataStore", {
  state: () => ({
    search: "",
    searchedData: [],
  }),
});
