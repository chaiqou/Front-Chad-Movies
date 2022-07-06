import { defineStore } from "pinia";
import axios from "@/config/axios/index.js";

export const useUserVerify = defineStore("useUserVerify", {
  state: () => ({
    verify: "",
  }),
  actions: {
    verifyEmail(ctx) {
      return new Promise((resolve, reject) => {
        axios
          .get("email-verification", { params: ctx })
          .then((res) => {
            resolve(res);
            this.verify = res;
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
