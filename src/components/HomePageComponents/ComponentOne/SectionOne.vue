<template>
  <div class="image-wrapper flex">
    <div class="column">
      <div class="row">
        <img src="@/assets/component-01/Image-01.jpg" alt="Image 1"  class="pointer-cursor" @click="showModal(1)" />
      </div>
    </div>
    <div class="column flex flex-column justify-between">
      <div class="row">
        <img src="@/assets/component-01/Image-02.jpg" alt="Image 2"  class="pointer-cursor" @click="showModal(2)" />
      </div>
      <div class="row">
        <img src="@/assets/component-01/Image-03.jpg" alt="Image 3"  class="pointer-cursor" @click="showModal(3)" />
      </div>
    </div>
    <Modal v-if="modalVisible" @close="closeModal" :imageIndex="modalImageIndex">
      <img :src="require(`@/assets/component-01/Image-0${modalImageIndex}.jpg`)" :alt="`Image ${modalImageIndex}`" />
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/common/Modal.vue";

export default {
  name: "SectionOne",
  components: {
    Modal,
  },
  data() {
    return {
      modalVisible: false,
      modalImageIndex: null
    };
  },
  methods: {
    showModal(index) {
      this.modalVisible = true;
      this.modalImageIndex = index;
    },
    closeModal() {
      this.modalVisible = false;
      this.modalImageIndex = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  gap: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.row img {
  width: 100%; /* Adjust as needed */
  height: auto; /* Maintain aspect ratio */
}
</style>
