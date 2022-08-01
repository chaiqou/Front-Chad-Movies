import App from "@/App.vue";
import router from "@/router";

import Echo from "laravel-echo";
import Pusher from "pusher-js";
import i18n from "@/config/i18n/index";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { setLocale } from "@vee-validate/i18n";

import "@/config/vee-validate/rules";
import "@/config/vee-validate/messages";
import "@/main.css";

window.Pusher = Pusher;
window.Echo = new Echo({
  authEndpoint: "http://localhost:8000/broadcasting/auth",
  broadcaster: "pusher",
  key: "a5f71dba33215ec7e280",
  cluster: "ap2",
  encrypted: false,
  forceTLS: true,
  auth: {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth")}`,
    },
  },
});

setLocale(localStorage.getItem("language") === "georgian" ? "ka" : "en");

const app = createApp(App);
app.use(createPinia());
app.use(i18n);
app.use(router);
app.mount("#app");
