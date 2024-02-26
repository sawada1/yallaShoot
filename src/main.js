import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";

import ar from "./locales/ar.json";
import en from "./locales/en.json";

// configure i18n
const i18n = createI18n({
  legacy:false,
  locale: "ar",
  fallbackLocale: "en",
  messages: { ar, en },
});

//vuetify

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import axios from "axios";
import "../src/assets/main.scss";
const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(i18n);
// app.use(axios);
app.mount("#app");
