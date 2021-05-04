import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/UserList.vue";
import user from "../views/UserDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:id",
    name: "user",
    component: user,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
