export default {
  name: "auth",
  component: () => import("@/modulos/auth/layout/AuthLayout.vue"),
  children: [
    {
      path: "",
      name: "login",
      component: () => import("@/modulos/auth/views/LoginView.vue"),
    },
    {
      path: "register",
      name: "register",
      component: () => import("@/modulos/auth/views/RegisterView.vue"),
    },
  ],
};
