/*
 * @Author: your name
 * @Date: 2021-02-16 21:45:45
 * @LastEditTime: 2021-02-16 21:52:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/store/modules/user.js
 */
import { getToken } from "@/utils/token";

const state = {
  token: getToken(),
  name: ""
};

const mutations = {
  RESET_STATE: state => {
    Object.assign(state, {
      token: getToken(),
      name: ""
    });
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
