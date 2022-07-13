<template>
  <van-dialog
    v-model="show"
    show-cancel-button
    style="text-align: center"
    @confirm="update()"
  >
    <span style="padding: 0 15pt 0 15pt; line-height: 80pt">是否进行编辑?</span>
  </van-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
</style>

