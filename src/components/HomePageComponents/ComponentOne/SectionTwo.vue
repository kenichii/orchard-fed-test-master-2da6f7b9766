<template>
  <div class="section-two-wrapper flex flex-column">
    <h2 class="title">Answer your body's needs</h2>
    <p>
      The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally devolops an appetite for the foods and nutrients it
      needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite
      guides you to consume according to your body's needs.
    </p>
    <h3>BE MINDFUL</h3>
    <p class="desc-2">Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.</p>
  </div>
</template>

<script>
export default {
  name: "SectionTwo",
};
</script>

<style lang="scss" scoped>
.section-two-wrapper {
  gap: 20px;
}

.title {
  text-transform: uppercase;
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  font-size: 28px;
}

.desc-2 {
  font-family: 'OpenSans-Medium';
}

p {
  font-size: 18px;
  line-height: 30px;
}
h3 {
  color: $red;
}
</style>
