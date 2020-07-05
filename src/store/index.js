import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import search from './modules/search-npm';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search,
  },
});