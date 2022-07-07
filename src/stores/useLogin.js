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
  },
});
