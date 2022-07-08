import { defineStore } from "pinia";

export const useAuthTokenStore = defineStore("useAuthTokenStore", {
  state: () => ({
    token: "",
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
