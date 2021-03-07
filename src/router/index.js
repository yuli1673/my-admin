/*
 * @Author: your name
 * @Date: 2021-02-12 12:47:55
 * @LastEditTime: 2021-03-07 12:03:12
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
        component: () => import("../views/home")
      }
    ]
  },
  {
    path: "/file",
    name: "文档",
    component: layout,
    icon: "el-icon-document",
    redirect: "/file/index",
    children: [
      {
        path: "index",
        name: "file",
        component: () => import("../views/File")
      }
    ]
  },
  {
    path: "/components",
    name: "组件",
    icon: "el-icon-info",
    component: layout,
    redirect: "/about/index",
    children: [
      {
        path: "index",
        name: "表格",
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
