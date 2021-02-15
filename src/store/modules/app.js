/*
 * @Author: josen
 * @Date: 2021-02-12 14:19:15
 * @LastEditTime: 2021-02-15 18:57:18
 * @LastEditors: Please set LastEditors
 * @Description: 应用的组件状态
 * @FilePath: /my-admin/src/store/modules/app.js
 */
export default {
  namespaced: true,
  state: {
    // 当前是 pc / mobile
    device: "pc",
    // 侧边栏的状态
    theNav: {
      // 是否收缩
      isCollapse: false
    }
  },
  mutations: {
    // 设备检测
    TOGGLE_DEVICE(state, device) {
      state.device = device;
    },
    // 缩 / 放侧边栏
    SET_COLLAPSE_NAV(state, is) {
      state.theNav.isCollapse = is;
    }
  },
  actions: {}
};
