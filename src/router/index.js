// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/LibraryView.vue"),
  },
  {
    path: "/learn",
    component: () => import("@/views/LearnView.vue"),
  },
  {
    path: "/sign-up",
    component: () => import("@/views/SignUpView.vue"),
  },
  {
    path: "/log-in",
    component: () => import("@/views/LogInView.vue"),
  },
  {
    path: "/profile",
    component: () => import("@/views/ProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
