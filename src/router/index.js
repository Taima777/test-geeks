import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import Overview from "./views/Overview.vue";
import Product from "./views/Product.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      children:[
        {
            path: "overview",
            name: "overview",
            component: Overview
        },
        {
            path: "product",
            name: "product",
            component: Product
        }
        
      ]
    },
    {
      path: "/",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      //which is lazy.loaded when the route is visited.
      component: () => import(/*webpackChunkName */ "./views/About.vue"),
    },
  ],
});
