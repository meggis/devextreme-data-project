import Vue from "vue";
import Vuex from "vuex";

import createHeroStore from "./marvelHeroes";

Vue.use(Vuex);

export default (dependencies) => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      hero: createHeroStore(dependencies),
    },
  });
};
