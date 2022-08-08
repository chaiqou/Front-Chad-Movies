import { defineStore } from "pinia";
import axios from "@/config/axios/index";

export const useLoginStore = defineStore("useLoginStore", {
  state: () => ({
    email: "",
    password: "",
    showPasswordType: "password",
    remember: false,
    form_submmiting: false,
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
        axios
          .get("authorize/google/callback", { params: ctx })
          .then((response) => {
            localStorage.setItem("jwt_token", response.data.access_token);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getters: {
      getUserData(state) {
        return {
          email: state.email,
          password: state.password,
          remember_token: state.remember,
        };
      },
    },
  },
});
