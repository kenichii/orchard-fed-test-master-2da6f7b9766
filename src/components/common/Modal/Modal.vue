<template>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <span class="close pointer-cursor" @click="closeModal">&times;</span>
            <div class="modal-body">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
  name: "ModalComponent",
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
@import "./Modal.scss";
</style>
