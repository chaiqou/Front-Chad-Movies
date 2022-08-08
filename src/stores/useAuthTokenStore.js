import { defineStore } from "pinia";

export const useAuthTokenStore = defineStore("useAuthTokenStore", {
  actions: {
    setToken(ctx) {
      localStorage.setItem("jwt_token", ctx);
    },
    clearToken() {
      localStorage.removeItem("jwt_token");
    },
    setUserId(ctx) {
      localStorage.setItem("userId", ctx);
    },
    setUserName(ctx) {
      localStorage.setItem("userName", ctx);
    },
  },
});
