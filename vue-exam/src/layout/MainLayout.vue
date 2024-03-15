<template>
  <div class="main-layout is-fullheight">
    <LayoutCentered>
      <router-view />
    </LayoutCentered>
  </div>
</template>

<script>
import LayoutCentered from "@/components/common/LayoutCentered.vue";

export default {
  name: "MainLayout",
  components: {
    LayoutCentered,
  }
}
</script>

<style lang="scss" scoped>
.main-layout {
  background-color: #0e1414;
  padding: 10rem 0;
}
</style>