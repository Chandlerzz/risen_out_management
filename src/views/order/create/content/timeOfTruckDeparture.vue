<template>
  <van-cell-group class="feidMargin">
    <van-field
      v-model="outDate"
      label="出货日期(Time of Truck Departure)"
      placeholder="请输入出货日期(Time of Truck Departure)"
      @click="show = true"
    />
  </van-cell-group>
</template>

<script>
export default {
  name: "TimeOfTruckDeparture",
  data() {
    return {
      value: "1",
    };
  },
};
</script>

<style scoped>
</style>

