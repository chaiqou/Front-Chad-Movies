import { defineStore } from "pinia";
import axios from "@/config/axios/index.js";

export const useUserVerifyEmailStore = defineStore("useUserVerifyEmailStore", {
  state: () => ({
    verify: "",
  }),

  actions: {
    verifyEmail(ctx) {
      return new Promise((resolve, reject) => {
        axios
          .get("email-verification", { params: ctx })
          .then((response) => {
            resolve(response);
            this.verify = response;
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
