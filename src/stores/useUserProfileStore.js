import { defineStore } from "pinia";

export const useUserProfileStore = defineStore("useUserProfileStore", {
  state: () => ({
    email: "",
    name: "",
    profile_image: "",
    provider: "",
    password: null,
    password_confirmation: null,
    form_submmiting: false,
    loading: true,
    backurl: import.meta.env.VITE_BACKEND_BASE_URL,
  }),

  getters: {
    getUserData(state) {
      return {
        email: state.email,
        name: state.name,
        profile_image: state.profile_image,
      };
    },
  },
});
