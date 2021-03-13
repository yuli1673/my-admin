<!--
 * @Author: josen
 * @Date: 2021-02-28 16:38:50
 * @LastEditTime: 2021-02-28 16:56:25
 * @LastEditors: Please set LastEditors
 * @Description: 文档
 * @FilePath: /my-admin/src/views/File.vue
-->
<template>
  <div class="file">
    <h1>分享</h1>
    <p v-for="(item, index) in list" :key="index">
      <el-link :href="item.src" target="_blank">
        {{ item.label }}
      </el-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          label: "gitHub项目地址",
          src: "https://github.com"
        },
        {
          label: "文档地址（掘金）",
          src: "https://juejin.cn"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped></style>
