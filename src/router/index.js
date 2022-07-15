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
      path: "/authorize/google/callback",
      name: "authorize-google-page",
      component: () => import("@/views/LoginGoogle.vue"),
    },
    {
      path: "/user-registered",
      name: "user-registered-page",
      components: {
        default: () => import("@/views/RegisteredView.vue"),
        HomeView: () => import("@/views/HomeView.vue"),
      },
    },
    {
      path: "/user-confirmed",
      name: "user-confirmed-thanks-page",
      components: {
        default: () => import("@/views/ConfirmedView.vue"),
        HomeView: () => import("@/views/HomeView.vue"),
      },
    },
    {
      path: "/dashboard",
      name: "dashboard-page",
      component: () => import("@/views/dashboard/DashboardView.vue"),
    },
    {
      path: "/movies",
      name: "movies-page",
      component: () => import("@/views/dashboard/MovieListView.vue"),
    },
    {
      path: "/movie/:slug",
      name: "single-movie-page",
      component: () => import("@/components/movies/MovieIndividual.vue"),
    },
    {
      path: "/users/:userId",
      name: "user-page",
      component: () => import("@/views/dashboard/UserProfileView.vue"),
    },
    {
      path: "/unauthorized",
      name: "unauthorized-page",
      component: () => import("@/views/UnauthorizedView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found-page",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const protectedRoutes = ["/dashboard", "/movies"];
  if (
    localStorage.getItem("auth") === null &&
    protectedRoutes.includes(to.path)
  ) {
    return next("/unauthorized");
  } else {
    return next();
  }
});

export default router;
