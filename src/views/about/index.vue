<!--
 * @Author: your name
 * @Date: 2021-02-12 12:47:55
 * @LastEditTime: 2021-02-21 23:21:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-admin/src/views/About.vue
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <the-table
      :table-data="tableData"
      :columns="columns"
      :operates="operates"
    />
  </div>
</template>

<script>
import TheTable from "@/components/TheTable.vue";

export default {
  components: { TheTable },
  data() {
    return {
      tableData: [
        {
          a: "123",
          b: 321,
          c: 456
        }
      ],
      columns: [
        {
          prop: "a",
          label: "a",
          minWidth: "500",
          fixed: false
        },
        {
          prop: "b",
          label: "b",
          minWidth: "500",
          fixed: false
        },
        {
          prop: "c",
          label: "c",
          minWidth: "500",
          fixed: false
        }
      ],
      operates: [
        {
          label: "1",
          type: "",
          fun: (index, row) => this.fun1(index, row)
        }
      ]
    };
  },
  methods: {
    fun1(index, row) {
      console.log(index, row);
    }
  }
};
</script>
