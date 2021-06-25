import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "All",
    component: () =>
      import(
        /* webpackChunkName: "MarvelHeroes" */ "../views/All.vue"
      ),
  },
  // {
  //   path: "/marvelheroes",
  //   name: "MarvelHeroes",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "MarvelHeroes" */ "../views/MarvelHeroes.vue"
  //     ),
  // },
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
