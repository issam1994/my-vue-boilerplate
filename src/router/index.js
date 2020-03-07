import Vue from "vue";
import VueRouter from "vue-router";
//middleware
import PublicRoutesMiddleware from '../config/router/PublicRoutesMiddleware'
import ProtectedRoutesMiddleware from '../config/router/ProtectedRoutesMiddleware'
//views
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    ...ProtectedRoutesMiddleware
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    ...PublicRoutesMiddleware
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    ...PublicRoutesMiddleware
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting & lazy-loading
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
    ...ProtectedRoutesMiddleware
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
