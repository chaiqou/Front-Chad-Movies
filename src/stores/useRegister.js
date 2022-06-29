import { defineStore } from "pinia";

export const useRegisterStore = defineStore("register", {
  state: () => ({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  }),
  actions: {},
});
