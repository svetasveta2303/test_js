<template>
  <div id="app" class="d-flex flex-column h-100">
    <div class="content">
      <Search msg="Welcome to Your Vue.js App"/>
      <Pagination/>
      <table-search></table-search>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Search from './components/Search.vue';
import TableSearch from './components/TableSearch';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Search,
    TableSearch,
    Pagination,
    Footer
  }
}
</script>
<style lang="scss">
  html, body {
    height:100%
  }
  .content {
    flex: 1 0 auto;
  }
  .footer {
    flex: 0 0 auto;
  }
</style>

