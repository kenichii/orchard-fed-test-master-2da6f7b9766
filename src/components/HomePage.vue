<template>
  <div class="hello">
    <ComponentOne />
    <ComponentTwo />
  </div>
</template>

<script>
import ComponentOne from "./HomePageComponents/ComponentOne/component-01.vue";
import ComponentTwo from "./HomePageComponents/ComponentTwo/component-02.vue";

export default {
  name: "HomePage",
  components: {
    ComponentOne,
    ComponentTwo,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
