<template>
  <div class="image-wrapper flex">
    <div class="column">
      <div class="row">
        <img src="@/assets/component-01/Image-01.jpg" alt="Image 1" />
      </div>
    </div>
    <div class="column flex flex-column justify-between">
      <div class="row">
        <img src="@/assets/component-01/Image-02.jpg" alt="Image 2" />
      </div>
      <div class="row">
        <img src="@/assets/component-01/Image-03.jpg" alt="Image 3" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionOne"
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
