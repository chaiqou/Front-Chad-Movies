import { defineStore } from "pinia";
import axios from "@/config/axios/index";

export const useLoginStore = defineStore("useLoginStore", {
  state: () => ({
    email: "",
    password: "",
    remember: false,
  }),

  actions: {
    loginGoogleAction() {
      return new Promise((resolve, reject) => {
        axios
          .get("authorize/google/redirect")
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    loginGoogleCallbackAction(ctx) {
      return new Promise((resolve, reject) => {
        console.log(ctx);
        axios
          .get("authorize/google/callback", { params: ctx })
          .then((response) => {
            localStorage.setItem("auth", response.data.access_token);
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    },
  },
});
