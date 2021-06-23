import { createSettersFromStateKeys } from "../utils/store-helper";

const initialState = {
  heroPersons: null,
  heroLoading: false,
  heroPerson: null,
};

export default ({ heroApi }) => {
  const actions = {
    async fetchHeroPersons({ commit }) {
      try {
        commit("setHeroPersons", await heroApi.getHeroPersons());
      } finally {
        commit("setHeroLoading", true);
      }
    },
    async fetchHeroPerson({ commit }, id) {
      try {
        const item = await heroApi.getHeroPerson(id);
        commit("setHeroPerson", item);
      } finally {
        commit("setHeroLoading", false);
      }
    },
  };

  const mutations = {};
  const getters = {};

  return {
    namespaced: true,
    //wypakowana lista initialState
    state: { ...initialState },
    actions,
    mutations: {
      ...createSettersFromStateKeys(initialState),
      ...mutations,
    },
    getters,
  };
};
