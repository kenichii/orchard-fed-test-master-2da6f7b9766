<template>
  <div class="component-2 flex flex-column gap-20 is-halfheight">
    <h1 class="title text-center">ALL THE LATEST FROM EAG</h1>
    <div class="articles flex flex-wrap gap-20 justify-center">
      <SectionImageArticle
        v-for="article in articles"
        :key="article.id"
        :article="article"
        :handleReadMore="handleReadMore"
        class="article"
      />
    </div>
  </div>
</template>

<script>
import SectionImageArticle from '../common/SectionImageArticle.vue';

export default {
  name: "ComponentTwo",
  components: {
    SectionImageArticle
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Summer Lunch Menu By Mark Best",
          description: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
          image: "/component-02/Image-01.jpg",
        },
        {
          id: 2,
          title: "A Traditional Christmas Eve, Mark Best Style",
          description: "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
          image: "/component-02/Image-02.jpg",
        },
        {
          id: 3,
          title: "Taking Taste Further",
          description: "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your",
          image: "/component-02/Image-03.jpg",
        },
      ]
    };
  },
  methods: {
    handleReadMore() {
      console.log("Read More!");
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 3em;
}
.component-2 {
  margin-top: 10rem;
}
.articles {
  margin-top: 3rem;
}
.articles {
  margin-top: 3rem;
}

.article {
  width: calc(33.333% - 20px); /* 3 columns on desktop */
  margin-bottom: 20px;
}

@media screen and (max-width: 1024px) {
  .article {
    width: calc(50% - 20px); /* 2 columns on tablets */
  }
}

@media screen and (max-width: 768px) {
  .articles {
    margin-top: 1.5rem;
  }
  .article {
    width: calc(100% - 20px); /* 1 column on mobile */
  }
  .title {
    font-size: 1.5rem;
  }
}
</style>
