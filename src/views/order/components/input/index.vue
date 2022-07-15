<template>
  <van-cell-group class="feidMargin">
    <van-field
      v-model="value"
      :label="genLabel(label.name,label.name_en)"
      :placeholder="genPlaceHolder(label.name,label.name_en)"
      :disabled="disabled"
    >
    <template #right-icon>
        <slot></slot>
      </template>
    </van-field>
  </van-cell-group>
</template>

<script>
export default {
  name: "input",
  props: {
    label: {
      type: Object,
    },
    disabled: {
      type: Boolean,
    },
    value: {
      type: String,
    }
  },
  methods:{
    genLabel(a,b){
      return `${a} (${b})`;
    },
    genPlaceHolder(a,b){
      return `请输入${a}(${b})`
    }
  }
};
</script>

<style scoped>
</style>

