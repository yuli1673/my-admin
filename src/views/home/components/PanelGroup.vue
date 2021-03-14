<!--
 * @Author: josen
 * @Date: 2021-02-18 16:59:33
 * @LastEditTime: 2021-03-14 12:48:37
 * @LastEditors: Please set LastEditors
 * @Description: 面板
 * @FilePath: /my-admin/src/views/home/components/ThePanelGroup.vue
-->
<template>
  <div class="panel-group">
    <div
      class="item"
      v-for="(item, index) in panel"
      :key="index"
      @click="clickPanel(item)"
    >
      <img :src="item.src" class="item-img" />
      <h3>
        <p class="item-text">{{ item.label }}</p>
        <p class="item-text">$ {{ item.value }}</p>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panel: [
        {
          label: "Visits",
          value: "10394",
          src: require("@/assets/logo.png")
        },
        {
          label: "Messages",
          value: "194845",
          src: require("@/assets/logo.png")
        },
        {
          label: "Purchacacawcaases",
          value: "839204",
          src: require("@/assets/logo.png")
        },
        {
          label: "Shoppings",
          value: "9378475",
          src: require("@/assets/logo.png")
        }
      ]
    };
  },
  methods: {
    clickPanel(panel) {
      this.$emit("clickPanel", panel);
    }
  },
  computed: {
    device() {
      return this.$store.state.app.device;
    }
  }
};
</script>

<style lang="stylus" scoped>
.panel-group
  display flex
  justify-content space-between
  .item
    padding 10px
    background-color white
    display flex
    align-items center
    justify-content space-between
    transition-duration 0.3s
    cursor pointer
    width 20%
    border-radius 10px
    &:hover
      box-shadow 3px 3px 50px #E6A23C
      transform translateY(-5px)
      background-color #E6A23C
      color white
    &:active
      transform translateY(0)
    .item-img
      width 80px
      height 80px
    h3
      overflow hidden
      .item-text
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
@media screen and (max-width 996px)
  .panel-group
    display block
    .item
      padding 10px
      margin-right 0
      width calc(100% - 20px)
      float none
</style>
