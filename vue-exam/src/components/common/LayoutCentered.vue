<template>
  <div
    class="layout-centered"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "LayoutCentered",
};
</script>

<style lang="scss" scoped>
.layout-centered {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
}

@media screen and (max-width: 768px) {
  .layout-centered > div {
    padding: 20px;
  }
}
</style>
