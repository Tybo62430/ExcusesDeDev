import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const options = {
  // You can set your default options here
};

Vue.use(Toast, options);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
