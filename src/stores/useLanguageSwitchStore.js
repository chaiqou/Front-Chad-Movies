import { defineStore } from "pinia";

export const useLanguageSwitchStore = defineStore("useLanguageSwitchStore", {
  state: () => ({
    language: localStorage.getItem("language") || "english",
  }),
});
