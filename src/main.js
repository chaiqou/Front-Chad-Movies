import App from "@/App.vue";
import router from "@/router";
import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/config/vee-validate/rules";
import "@/config/vee-validate/messages";
import "@/main.css";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;
window.Echo = new Echo({
  authEndpoint: "http://localhost:8000/broadcasting/auth",
  broadcaster: "pusher",
  key: "a5f71dba33215ec7e280",
  cluster: "ap2",
  forceTLS: true,
  encrypted: true,
  auth: {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("auth")}`,
    },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
