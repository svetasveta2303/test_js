/* eslint-disable no-param-reassign */
import { SEARCH, CHANGE_PAGINATION, SET_DETAILS } from './mutation-types';

export default {
  [SEARCH](state, { search, requestSearch, currentPage, totalPages} ) {
    state.search = search;
    state.dataNpm = requestSearch;
    state.currentPage = currentPage;
    state.totalPages = totalPages;
  },
  [CHANGE_PAGINATION](state, payload) {
    state.currentPage = payload;
  },
  [SET_DETAILS](state, payload) {
    state.infoDetailModal = payload;
  }
};
