<template>
  <div class="table-request-search">
    <b-table
      :stacked="width <= 768"
      @row-clicked="openDetailsModal"
      :fields="fields"
      :items="data"
      empty-text="No data found"
      show-empty
      striped
      hover
    >
      <template v-slot:cell(avatar)="row">
        <img class="img-avatar" :src="row.value" alt="">
      </template>
    </b-table>
    <Modal v-if="show" @openClousModal="openClousModal" :info="modalInfo" :show="show"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Modal from "./Modal"

export default {
  data: () => ({
    fields: [ 'avatar', 'version', 'name', 'license', 'homepage' ],
    modalInfo: {},
    show: false,
    width: 0,
  }),
  created() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
  computed: {
    ...mapState({
      data: state => state.search.dataNpm
    })
  },
  methods: {
  updateWidth() {
    this.width = window.innerWidth;
  },
  openDetailsModal(value) {
    this.modalInfo = value;
    this.openClousModal();
  },
  openClousModal() {
    this.show = !this.show;
  }
  },
  components: {
    Modal
  }
}
</script>

<style>
.img-avatar {
  max-width: 50px;
}
.table-request-search {
  margin: 45px;
  border: 1px solid gray;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
</style>