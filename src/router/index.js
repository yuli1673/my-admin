/*
 * @Author: your name
 * @Date: 2021-02-12 12:47:55
 * @LastEditTime: 2021-02-16 22:25:06
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
    name: "主页",
    component: layout,
    icon: "el-icon-eleme",
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("../views/Home.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    icon: "el-icon-info",
    component: layout,
    redirect: "/about/abc",
    children: [
      {
        path: "ab",
        name: "ab",
        component: () => import("../views/about/index.vue")
      },
      {
        hidden: true,
        path: "abc",
        name: "ABC",
        component: () => import("../views/about/abc.vue")
      }
    ]
  },
  {
    hidden: true,
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },
  // 404
  { path: "*", redirect: "/404", hidden: true }
];

const router = new VueRouter({
  routes
});

export default router;
