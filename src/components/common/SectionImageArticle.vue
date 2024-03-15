<template>
  <article class="card flex flex-column gap-20" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <img :src="require(`@/assets${getImage}`)" alt="Sample photo" :class="{ 'hovered': isHovered }" />
    <div class="text flex flex-column gap-20">
      <h3>{{ article.title }}</h3>
      <p>{{ article.description }}</p>
      <button @click="handleReadMore" class="control">Read More</button>
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
.control {
  background: none;
  color: white;
  border: none;
  width: fit-content;
  padding: 0;
  border-bottom: 1px solid $red;
  padding-bottom: 5px;
  font-size: 15px;
  cursor: pointer;
}
.card {
  width: 25rem;
}
.card img {
  max-width: 100%;
  border-bottom: 3px solid $red;
  transition: border-bottom-width 0.3s ease; // Add transition for border-bottom-width
}

.card img.hovered {
  border-bottom-width: 6px; // Increase border-bottom-width when hovered
}
.card .text > button {
  text-transform: uppercase;
}
</style>
