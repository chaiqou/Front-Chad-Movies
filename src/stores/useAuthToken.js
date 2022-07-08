import { defineStore } from "pinia";

export const useAuthToken = defineStore("useAuthToken", {
  state: () => ({
    token: localStorage.getItem("auth"),
  }),
  actions: {
    setToken(ctx) {
      localStorage.setItem("auth", ctx);
      this.token = ctx;
    },
    clearToken() {
      localStorage.removeItem("auth");
      this.token = "";
    },
  },
});
