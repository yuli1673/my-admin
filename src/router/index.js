/*
 * @Author: your name
 * @Date: 2021-02-12 12:47:55
 * @LastEditTime: 2021-03-07 23:56:08
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
    component: layout,
    redirect: "/home",
    meta: { title: "主页", icon: "el-icon-house" },
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
    component: layout,
    icon: "el-icon-document",
    redirect: "/file/index",
    meta: { title: "文档", icon: "el-icon-document" },
    children: [
      {
        path: "index",
        name: "File",
        component: () => import("../views/File")
      }
    ]
  },
  {
    path: "/about",
    component: layout,
    icon: "el-icon-help",
    meta: { title: "关于", icon: "el-icon-help" },
    redirect: "/about/table",
    children: [
      {
        path: "table",
        name: "Table",
        meta: { title: "表格", icon: "el-icon-s-data" },
        component: () => import("../views/about/Table.vue")
      },
      {
        path: "gitHub",
        name: "GitHub",
        meta: { title: "表格", icon: "el-icon-info" },
        component: () => import("../views/about/GitHub.vue")
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
