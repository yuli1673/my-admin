/*
 * @Author: your name
 * @Date: 2021-02-12 21:39:53
 * @LastEditTime: 2021-02-16 22:29:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/router/modules/befor.js
 */
import router from "../index";
import { getToken } from "@/utils/token"; // get token from cookie

router.beforeEach((to, from, next) => {
  // set page title
  document.title = "my-admin-" + to.name;
  // determine whether the user has logged in
  const hasToken = getToken();
  console.log("token", hasToken);
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
