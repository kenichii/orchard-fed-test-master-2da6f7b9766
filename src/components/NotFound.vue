<template>
  <div class="not-found-body">
    <p class="not-found-404">404</p>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  components: {
  },
};
</script>

<style lang="scss" scoped>
.not-found-body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.not-found-404 {
  font-size: 100px;
}
</style>
