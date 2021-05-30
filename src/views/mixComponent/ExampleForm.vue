<!--
 * @Author: your name
 * @Date: 2021-05-20 23:49:14
 * @LastEditTime: 2021-05-30 17:17:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/views/mixComponent/Form.vue
-->
<template>
  <div class="example-form">
    <the-form :labelWidth="100" :form="form" :titles="titles" :inline="true">
    </the-form>
  </div>
</template>

<script>
export default {
  components: { TheForm: () => import("@/components/TheForm") },
  data() {
    return {
      titles: [
        {
          label: "活动名称",
          component: "input",
          icon: "el-icon-help",
          tooltip: "我有文字提示，哈哈哈，大帅哥",
          prop: "name"
        },
        {
          label: "活动名称",
          component: "select",
          icon: "el-icon-eleme",
          prop: "region"
        }
      ],
      form: { name: "", region: "" }
    };
  }
};
</script>

<style lang="scss" scoped></style>
