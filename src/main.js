import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//css
import '@/assets/css/tailwindcss.css'
import '@/assets/css/transitions.css'
//axios config
import './config/axios/axios'
//router beforeEach middleware
import './config/router/GlobalMiddleware'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
