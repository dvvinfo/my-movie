import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: () => import("../views/Movie.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/Search.vue"),
    },
  ],
});
