/*
 * @Author: josen
 * @Date: 2021-02-16 21:19:58
 * @LastEditTime: 2021-03-14 00:03:24
 * @LastEditors: Please set LastEditors
 * @Description: 对 token 的操作
 * @FilePath: /my-admin/src/utils/token.js
 */
// token 的 key
const TOKEN_KEY = "admin-token";

export function getToken() {
  return sessionStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  return sessionStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
  return sessionStorage.removeItem(TOKEN_KEY);
}
