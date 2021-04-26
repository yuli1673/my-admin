/*
 * @Author: josen
 * @Date: 2021-02-12 21:39:53
 * @LastEditTime: 2021-02-18 19:37:07
 * @LastEditors: Please set LastEditors
 * @Description: 在入口文件 mainJS 中引入路由守卫
 * @FilePath: /my-admin/src/router/modules/before.js
 */
import router from "../index";
import { getToken } from "@/utils/token"; // get token from cookie

router.beforeEach((to, from, next) => {
  // set page title
  document.title = "my-admin-" + to.name;
  // determine whether the user has logged in
  const hasToken = getToken();
  // console.log("token", hasToken);
  if (to.path === "/login") {
    next();
  } else {
    if (hasToken) {
      next();
    } else {
      next("/login");
    }
  }
});
