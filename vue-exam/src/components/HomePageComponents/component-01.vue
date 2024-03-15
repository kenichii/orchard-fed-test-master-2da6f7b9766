<template>
  <div class="component-1 flex is-halfheight">
    <SectionOne class="section-one" />
    <SectionTwo class="section-two" />
  </div>
</template>

<script>
import SectionOne from "./ComponentOne/SectionOne.vue";
import SectionTwo from './ComponentOne/SectionTwo.vue';

export default {
  name: "ComponentOne",
  components: {
    SectionOne,
    SectionTwo,
  },
};
</script>

<style lang="scss" scoped>
.component-1 {
  gap: 20px;
}
// .section-info {
//   width: 35%;
// }

.section-one {
  width: 100%; // Take full width on mobile
}

.section-two {
  width: calc(50% - 20px); // Default width for desktop
}

@media screen and (max-width: 768px) {
  .component-1 {
    flex-wrap: wrap;
  }
  .section-two {
    width: 100%; // Full width on mobile
  }
}
</style>
