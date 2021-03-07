<!--
 * @Author: josen
 * @Date: 2021-03-07 12:08:31
 * @LastEditTime: 2021-03-07 18:22:38
 * @LastEditors: Please set LastEditors
 * @Description: 表单
 * @FilePath: /my-admin/src/components/TheForm.vue
-->
<template>
  <el-form
    class="the-form"
    ref="form"
    inline
    :model="form"
    :label-width="labelWidth + 'px'"
  >
    <el-form-item
      class="form_item"
      v-for="title in field"
      :key="title.prop"
      :label="title.label + ' : '"
    >
      <!-- 插槽 -->
      <slot class="item_component" v-if="title.component === 'slot'"></slot>
      <!-- 单选框 -->
      <el-radio-group
        class="item_component"
        v-else-if="title.component === 'radio'"
        v-model="form[title.prop]"
      >
        <el-radio
          v-for="option in title.options"
          :key="option.value"
          :label="option.value"
        >
          {{ option.label }}
        </el-radio>
      </el-radio-group>
      <!-- 输入框 -->
      <el-input
        class="item_component"
        v-model="form[title.prop]"
        v-else-if="title.component === 'input'"
      ></el-input>
      <!-- 下拉选 -->
      <el-select
        class="item_component"
        v-else-if="title.component === 'select'"
        v-model="form[title.prop]"
        placeholder="请选择"
      >
        <el-option
          v-for="item in title.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <!-- 开关器 -->
      <el-switch
        class="item_component"
        v-else-if="title.component === 'switch'"
        v-model="form[title.prop]"
      >
      </el-switch>
      <!-- 默认文本显示 -->
      <span class="item_component" v-else>{{ form[title.prop] }}</span>
    </el-form-item>
    <!-- 操作按钮 -->
    <el-form-item>
      <el-button icon="el-icon-search" @click="submit" type="primary">
        确定
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    labelWidth: {
      type: Number,
      default: () => 80
    },
    /**
     * @description: 表单数据
     * @param {*}
     * @return {*}
     */
    form: {
      type: Object,
      default: () => ({}),
      require: true
    },
    /**
     * @description: 字段属性
     * @param {*}
     * @return {*}
     */
    field: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    submit() {
      this.$emit("submit");
    }
  }
};
</script>

<style lang="stylus" scoped>
.the-form
  text-align left
</style>
