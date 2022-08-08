import { defineStore } from "pinia";

export const useAuthTokenStore = defineStore("useAuthTokenStore", {
  state: () => ({
    token: "",
    userId: "",
    userName: "",
  }),
  actions: {
    setToken(ctx) {
      localStorage.setItem("jwt_token", ctx);
      this.token = ctx;
    },
    clearToken() {
      localStorage.removeItem("jwt_token");
      this.token = "";
    },
    setUserId(ctx) {
      localStorage.setItem("userId", ctx);
      this.userId = ctx;
    },
    setUserName(ctx) {
      localStorage.setItem("userName", ctx);
      this.userName = ctx;
    },
  },
});
