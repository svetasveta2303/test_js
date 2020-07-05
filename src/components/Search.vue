<template>
  <div class="search">
    <div>
      <b-navbar toggleable="lg" class="search-bg-gray justify-content-center">
        <b-nav-form>
          <b-form-input  class="search-input mr-sm-2" v-model="search" @input="searchSubmit" placeholder="Search"></b-form-input>
        </b-nav-form>
        <b-navbar-nav>
          <b-nav-item-dropdown :text="showItems" class="text-right search-items position-absolute mr-3">
            <template v-for="(item, index) in allShowItems">
              <b-dropdown-item @click="() => submitQuantityItems(item)" v-if="item !== showItems" :key="index">
                {{ item }}
              </b-dropdown-item>
            </template>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    search: '',
    showItems: '10',
    allShowItems: ['10', '25', '50']
  }),
  created() {
    this.searchSubmit()
  },
  methods:{
    ...mapActions({
      'searchNpm': 'search/searchNpm',
    }),
    searchSubmit() {
      const { search, showItems } = this;
      this.searchNpm({ search, showItems, page: 0 });
    },
    submitQuantityItems(value) {
      this.showItems = value;
      this.searchSubmit();
    }
  }
}
</script>

<style lang="scss" >
.search {
  &-text {
    margin-right: 5px;
  }
  &-items {
    right: 0;
    top: 5px;
    min-width: 60px;
    max-width: 60px;
    .dropdown-menu.show {
      position: relative !important;
      max-width: 60px;
      min-width: 60px;
      z-index: 5;
      .dropdown-item {
        background: white !important;
        color: black !important
      }
    }
  }
  &-bg-gray {
    background: #C0C0C0;
  }
  &-input {
    width: 400px !important;
    @media (max-width: 768px) {
      width: 250px !important;
    }
  }
}
</style>
