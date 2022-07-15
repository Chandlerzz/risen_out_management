<template>
  <van-cell-group >
    <van-field :label="label.name">
      <template #right-icon>
        <van-radio-group v-model="value" direction="horizontal">
          <van-radio v-for="(val,key) in options" :key="key" class="radiopad" :name="val.value">{{val.label}}</van-radio>
        </van-radio-group>
      </template>
    </van-field>
  </van-cell-group>
</template>

<script>
export default {
  name: "input",
  props:{
    label:{
      type:Object,
    },
    options:{
      type:Object,
    },
    value:{
      type:String,
    }
  }
};
</script>

<style scoped>
</style>

