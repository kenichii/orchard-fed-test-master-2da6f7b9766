<template>
  <article class="card flex flex-column gap-20" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <img :src="require(`@/assets${getImage}`)" alt="Sample photo" :class="{ 'hovered': isHovered }" />
    <div class="text flex flex-column gap-20">
      <h3>{{ article.title }}</h3>
      <p>{{ article.description }}</p>
      <button @click="handleReadMore" class="control">READ MORE</button>
    </div>
  </article>
</template>

<script>
export default {
  name: "SectionImageArticle",
  props: {
    article: {
      type: Object,
      required: true,
    },
    handleReadMore: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isHovered: false
    };
  },
  computed: {
    getImage() {
      return this.article.image;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./SectionImageArticle.scss";
</style>
