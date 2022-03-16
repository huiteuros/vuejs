import Vue from "vue";
import Vuex from "vuex";
import plats from "./module/plats.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLogged: false
    },
    modules: {
        plats,
    },
    plugins: [createPersistedState()]
});
export default store;
