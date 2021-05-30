<!--
 * @Author: josen
 * @Date: 2021-03-07 12:08:31
 * @LastEditTime: 2021-05-30 17:21:15
 * @LastEditors: Please set LastEditors
 * @Description: 表单
 * @FilePath: /my-admin/src/components/TheForm.vue
-->
<template>
  <el-form
    class="the-form"
    ref="form"
    :inline="inline"
    :model="form"
    :label-width="labelWidth + 'px'"
  >
    <el-form-item
      class="form_item"
      v-for="title in titles"
      :key="title.prop"
      :style="{ width: title.width + 'px' }"
    >
      <!-- 
        注意事项悬浮提示 
        如果标签宽度或者标签内容一个没有，则不显示提示信息
      -->
      <template #label v-if="labelWidth && title.label">
        <!-- 有,悬浮提示 -->
        <span v-if="title.tooltip">
          <el-tooltip :content="title.tooltip" effect="dark">
            <span>
              <i :class="title.icon"></i>
              {{ title.label }}:
            </span>
          </el-tooltip>
        </span>
        <!-- 没有,悬浮提示 -->
        <span v-else>
          <i :class="title.icon"></i>
          <span> {{ title.label }}: </span>
        </span>
      </template>
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
      <el-button @click="submit" type="primary"> 确定 </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    labelWidth: {
      type: Number,
      default: () => 80
    },
    // *表单数据
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
    titles: {
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

<style lang="stylus" scoped></style>
