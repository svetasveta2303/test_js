<template>
  <b-pagination
    v-model="currentPage"
    @input="submitChangePage"
    :total-rows="totalPages"
    :per-page="showItems"
    aria-controls="my-table"
    class="pagination-table mt-5 mb-5"
  ></b-pagination>
</template>

<script>
import { mapState, mapActions } from 'vuex'; 

export default {
  data: () => ({
    currentPage: 0
  }),
  created() {
    this.current()
  },
  watch: {
    currentPageState() {
      this.current()
    }
  },
  computed: {
    ...mapState({
      currentPageState: state => state.search.currentPage,
      totalPages: state => state.search.totalPages,
      showItems: state => state.search.showItems
    })
  },
  methods: {
    ...mapActions({
      'pagination': 'search/pagination',
    }),
    current() {
      this.currentPage = this.currentPageState === 0 ? 1 : this.currentPageState;
    },
    submitChangePage() {
      this.pagination(this.currentPage)
    }
  }
}
</script>
<style lang="scss">
.pagination-table {
  width: fit-content;
  margin-left: auto;
  margin-right: 3rem;
  @media (max-width: 768px) {
    margin-right: auto;
  }
  .page-item.active .page-link {
    background: gray;
    border-color:gray;
    box-shadow: none;
    color: white !important;
  }
  .page-link {
    color: black !important;
    box-shadow: none !important
  }
}
</style>