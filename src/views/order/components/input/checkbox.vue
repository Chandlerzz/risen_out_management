<template>
  <van-cell-group >
    <van-field :label="label.name">
      <template #right-icon>
        <van-checkbox-group v-model="value" direction="horizontal">
          <van-checkbox style="flex-direction: column;padding-left:10px" v-for="(val,key) in options" :key="key" class="checkboxpad" :name="val.value">{{val.label}}</van-checkbox>
        </van-checkbox-group>
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

