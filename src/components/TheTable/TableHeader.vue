<!--
 * @Author: your name
 * @Date: 2021-05-30 11:43:45
 * @LastEditTime: 2021-05-30 11:44:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/components/TheTable/TableHeader.vue
-->
<template>
  <header class="header">
    <el-button-group>
      <el-button
        icon="el-icon-search"
        @click="isSearch = !isSearch"
        type="info"
      ></el-button>
      <el-button
        class="header-button"
        icon="el-icon-refresh"
        @click="refresh"
      ></el-button>
      <!-- 塞选表格显示的表头 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-button icon="el-icon-menu"></el-button>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-checkbox-group @change="changeCheckBox" v-model="checkboxArr">
            <el-dropdown-item v-for="column in columns" :key="column.prop">
              <el-checkbox :label="column.label" :disabled="column.disabled">
                {{ column.label }}
              </el-checkbox>
            </el-dropdown-item>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>
    </el-button-group>
    <!-- 搜索菜单 -->
    <transition name="el-fade-in-linear">
      <the-form
        v-if="isSearch"
        :form="queryForm"
        :field="queryTitle"
        @submit="search"
      ></the-form>
    </transition>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
