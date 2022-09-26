import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  excuses: [],
};

const mutations = {
  SET_EXCUSES(state, excuses) {
    state.excuses = excuses.reverse();
  },
  ADD_EXCUSE: (state, excuse) => {
    state.excuses.push({
      http_code: excuse.http_code,
      tag: excuse.tag,
      message: excuse.message,
    });
  },
};

const getters = {
  excuses: (state) => state.excuses,
  excuseByHttpCode: (state) => (http_code) => {
    return state.excuses.find((excuse) => excuse.http_code == http_code);
  },
};

const actions = {
  setExcuses: async (store) => {
    try {
      const data = await axios.get("http://localhost:3000/excuses");
      store.commit("SET_EXCUSES", data.data);
    } catch (error) {
      console.log("erreur", error);
    }
  },
  addExcuse: async (store, excuse) => {
    await axios
      .post("http://localhost:3000/excuses", excuse)
      .then((response) => {
        store.commit("ADD_EXCUSE", response);
        store.dispatch("setExcuses");
        Vue.$toast.success("Excuse ajouté");
      })
      .catch((error) => {
        Vue.$toast.error("Erreur:", error);
      });
  },
};

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {},
  strict: true,
});
