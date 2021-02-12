/*
 * @Author: your name
 * @Date: 2021-02-12 12:47:55
 * @LastEditTime: 2021-02-12 23:37:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import layout from "@/layout";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: layout,
    icon: "el-icon-eleme"
  },
  {
    path: "/about",
    name: "About",
    icon: "el-icon-info",
    component: layout,
    children: [
      {
        path: "ab",
        name: "ab",
        component: () => import("../views/about/index.vue")
      },
      {
        path: "abc",
        name: "ABC",
        component: () => import("../views/about/abc.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    icon: "el-icon-present"
  }
];

const router = new VueRouter({
  routes
});
// router.beforeEach((to, from, next) => {

// });
export default router;
