/*
 * @Author: your name
 * @Date: 2021-02-12 12:47:55
 * @LastEditTime: 2021-04-26 21:50:24
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
    path: "/share",
    component: layout,
    icon: "el-icon-document",
    redirect: "/share/index",
    meta: { title: "分享", icon: "el-icon-share" },
    children: [
      {
        path: "index",
        name: "Share",
        component: () => import("../views/Share")
      }
    ]
  },
  {
    path: "/mixComponent",
    component: layout,
    icon: "el-icon-help",
    meta: { title: "混合组件", icon: "el-icon-help" },
    redirect: "/mixComponent/theTable",
    children: [
      {
        path: "theTable",
        name: "TheTable",
        meta: { title: "表格", icon: "el-icon-s-data" },
        component: () => import("../views/mixComponent/TheTable.vue")
      },
      {
        path: "theRouterNext",
        name: "TheRouterNext",
        meta: { title: "嵌套路由", icon: "el-icon-guide" },
        component: () => import("../views/mixComponent/TheRouterNext.vue"),
        children: [
          {
            path: "menu-1",
            name: "Menu-1",
            meta: { title: "菜单-1" },
            component: () => import("../views/mixComponent/menu/menu-1"),
            children: [
              {
                path: "menu-1-1",
                name: "Menu-1-1",
                meta: { title: "菜单-1-1" },
                component: () =>
                  import("../views/mixComponent/menu/menu-1/Menu-1-1.vue")
              },
              {
                path: "menu-1-2",
                name: "Menu-1-2",
                meta: { title: "菜单-1-2" },
                component: () =>
                  import("../views/mixComponent/menu/menu-1/Menu-1-2.vue")
              }
            ]
          },
          {
            path: "menu-2",
            name: "Menu-2",
            meta: { title: "菜单-2" },
            component: () => import("../views/mixComponent/menu/Menu-2")
          }
        ]
      },
      {
        path: "g6",
        name: "G6",
        meta: { title: "G6", icon: "el-icon-data-analysis" },
        component: () => import("@/views/G6.vue")
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
    component: () => import("@/views/404/index"),
    hidden: true
  },
  // 404
  { path: "*", redirect: "/404", hidden: true }
];

const router = new VueRouter({
  routes
});

export default router;
