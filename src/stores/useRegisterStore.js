import { defineStore } from "pinia";

export const useRegisterStore = defineStore("useRegisterStore", {
  state: () => ({
    form_submmiting: false,
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  }),
});
