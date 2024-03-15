
import Vue from 'vue';
import Router from "vue-router";

const NotFound = () => {
  return import(/* webpackChunkName: "notfound" */ "@/components/NotFound.vue");
};

const MainLayout = () => {
  return import(/* webpackChunkName: "home" */ "@/layout/MainLayout.vue");
};

const HomePage = () => {
  return import(/* webpackChunkName: "home" */ "@/components/HomePage.vue");
};

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "HomePage",
          component: HomePage,
        },
      ]
    },
    {
      path: "/404",
      name: "PageNotFound",
      component: NotFound,
    },
    {
      path: "*",
      beforeEnter() {
        window.location.href = "/404";
      },
    },
  ]
});