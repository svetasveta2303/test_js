<template>
    <b-modal 
      v-model="showModal"
      id="modal-1"
      @change="() => $emit('openClousModal')"
      :title="info.name" 
      hide-footer
    >
    <div class="info d-flex">
      <div>
        <img class="info-modal mr-5" :src="info.avatar">
        <a :href="info.owner.link" class="d-block" target="_blank">
          <img class="info-modal" src="@/assets/github.png">
        </a>
      </div>
      <div class="w-100">
        <p class="text-center">{{ info.description }}</p>
        <div class="mt-2">
          <span>Version:</span>
          <span v-if="infoDetailModal.version">{{ infoDetailModal.version }}</span>
        </div>
          <div class="mt-2">
            <span>Total Save: </span>
            <span v-if="infoDetailModal.version">{{ infoDetailModal.version }}</span>
          </div>
        </div>
    </div>
  </b-modal>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    showModal: false
  }),
  props: {
    info: {
      type: Object
    },
    show: {
      type: Boolean
    }
  },
  created() {
    this.showModal = this.show;
    if( this.show ) {
      this.getDelails(this.info.name);
    }
  },
  computed: {
    ...mapState({
      infoDetailModal: state => state.search.infoDetailModal
    })
  },
  methods: {
    ...mapActions({
      'getDelails': 'search/getDelails',
    }),
  }
}
</script>

<style lang="scss" scoped>
.info {
  &-modal {
    width: 150px;
  }
}
</style>