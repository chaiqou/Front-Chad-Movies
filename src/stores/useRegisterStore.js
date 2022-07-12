import { defineStore } from "pinia";

export const useRegisterStore = defineStore("useRegisterStore", {
  state: () => ({
    form_submmiting: false,
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  }),

  getters: {
    getRegistrationData(state) {
      return {
        name: state.name,
        email: state.email,
        password: state.password,
        password_confirmation: state.password_confirmation,
      };
    },
  },
});
