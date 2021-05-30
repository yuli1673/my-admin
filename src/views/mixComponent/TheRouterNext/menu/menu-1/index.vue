<!--
 * @Author: your name
 * @Date: 2021-03-13 23:26:28
 * @LastEditTime: 2021-03-13 23:48:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/views/about/menu/menu-1/Menu-1-1.vue
-->
<template>
  <div class="menu-1">
    <el-alert title="菜单栏-1" :closable="false" type="success">
      <template>
        <the-router />
      </template>
    </el-alert>
  </div>
</template>

<script>
import TheRouter from "@/components/TheRouter.vue";
export default {
  components: { TheRouter }
};
</script>

<style></style>
