import { defineStore } from "pinia";

export const useLoginStore = defineStore("useLoginStore", {
  state: () => ({
    email: "",
    password: "",
    remember: false,
  }),
});
