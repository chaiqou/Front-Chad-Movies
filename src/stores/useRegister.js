import { defineStore } from "pinia";

export const useRegisterStore = defineStore("useRegisterStore", {
  state: () => ({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  }),
});
