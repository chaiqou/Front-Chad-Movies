import { defineStore } from "pinia";

export const useAuthTokenStore = defineStore("useAuthTokenStore", {
  state: () => ({
    token: "",
    userId: "",
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
    setUserId(ctx) {
      localStorage.setItem("userId", ctx);
      this.userId = ctx;
    },
  },
});
