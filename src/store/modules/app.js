/*
 * @Author: josen
 * @Date: 2021-02-12 14:19:15
 * @LastEditTime: 2021-02-15 01:09:20
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
      // 是否隐藏
      // isWithout: false
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
      console.log("设置 collapse", is);
    }
    // 关 / 开 侧边栏
    // SET_WITHOUT_NAV(state, is) {
    //   state.isWithout = is;
    // }
  },
  actions: {}
};
