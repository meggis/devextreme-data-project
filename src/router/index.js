import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/marvelheroes",
    name: "MarvelHeroes",
    component: () =>
      import(
        /* webpackChunkName: "MarvelHeroes" */ "../views/MarvelHeroes.vue"
      ),
  },
  {
    path: "/herocard/:id",
    name: "HeroCard",
    component: () =>
      import(/* webpackChunkName: "HeroCard" */ "../views/HeroCard.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
