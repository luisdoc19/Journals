import { createRouter, createWebHashHistory } from "vue-router";
import dayBookRouter from "../modulos/daybook/router";
import authRouter from "../modulos/auth/router";
import HomeView from "../views/HomeView.vue";
import isAuthenticatedGuard from "../modulos/auth/router/auth-guard";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/daybook",
    beforeEnter: [isAuthenticatedGuard],
    ...dayBookRouter,
  },
  {
    path: "/auth",
    ...authRouter,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
