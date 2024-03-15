<template>
  <div class="component-1 flex is-halfheight">
    <SectionOne class="section-one" />
    <SectionTwo class="section-two" />
  </div>
</template>

<script>
import SectionOne from "./SectionOne.vue";
import SectionTwo from './SectionTwo.vue';

export default {
  name: "ComponentOne",
  components: {
    SectionOne,
    SectionTwo,
  },
};
</script>

<style lang="scss" scoped>
@import "./component-01.scss";
</style>
