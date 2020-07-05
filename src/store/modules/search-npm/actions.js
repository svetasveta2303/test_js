import * as types from './mutation-types';
import { index } from '@/constants/index';
import { tranformItemsData, tranformInfoVersion, transformTotal } from '@/transform/transformNpm';
import axios from "axios";

export default {
  searchNpm({ commit, state }, { search, showItems, page}) {
      let options = {
        page: page <= 1 ? 0 : state.totalPages === page ? page - 1 : page ,
        hitsPerPage: showItems ,
        attributesToHighlight: [],
        attributesToRetrieve: [ 'deprecated', 'description', 'githubRepo', 'homepage', 'keywords', 'license', 'name', 'owner', 'version' ],
        analyticsTags: [ 'jsdelivr' ],
      };
      index.search(search, options).then((request) => {
        commit(types.SEARCH, { 
          search: search,
          requestSearch: tranformItemsData(request.hits),
          currentPage: request.page,
          totalPages: transformTotal(request.nbPages, request.hitsPerPage),
        });
    });
  },

  pagination({ commit, dispatch, state }, payload) {
    commit(types.CHANGE_PAGINATION, payload);
    const { search, showItems, currentPage} = state;
    dispatch('searchNpm',{ search, showItems, page: currentPage });
  },

  getDelails({ commit }, payload) {
    axios.all([
      axios.get(`https://data.jsdelivr.com/v1/package/npm/${payload}`),
      axios.get(`https://data.jsdelivr.com/v1/package/npm/${payload}/stats`)
    ]).then( axios.spread((version, stats) => {
      commit(types.SET_DETAILS, {
        version: tranformInfoVersion(version.data.versions),
        stats: stats.data.total
      });
    }))
  }
};
