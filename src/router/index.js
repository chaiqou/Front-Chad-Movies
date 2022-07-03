import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-page",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/register",
      name: "registration-page",
      components: {
        default: () => import("@/views/RegistrationView.vue"),
        HomeView: () => import("@/views/HomeView.vue"),
      },
    },
    {
      path: "/login",
      name: "login-page",
      components: {
        default: () => import("@/views/LoginView.vue"),
        HomeView: () => import("@/views/HomeView.vue"),
      },
    },
    {
      path: "/dashboard",
      name: "dashboard-page",
      component: () => import("@/views/DashboardView.vue"),
    },
    {
      path: "/test",
      name: "forbidden-page",
      component: () => import("@/views/ForbiddenView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found-page",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;
