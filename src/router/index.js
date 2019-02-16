import Vue from "vue";

import Router from "vue-router";

import Hello from "../components/hello.vue";


Vue.use(Router);

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      component: Hello,
      name: "Hello",
      props: true
    }
  ]
});