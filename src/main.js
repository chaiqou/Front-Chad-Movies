import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "@/config/vee-validate/rules";
import "@/config/vee-validate/messages";
import "./main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
