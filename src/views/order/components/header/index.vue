<template>
  <header>
    <van-icon class="icon" name="arrow-left" size="25" />
    <span class="title"> {{ title }} </span>
  </header>
</template>

<script>
export default {
  namer: "orderHeader",
  props: {
    title: {
      type: String,
      default: "1",
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  align-items:center;
  background: #3e4cbb;
  color: #ffffff;
  letter-spacing: -0.41px;
  font-weight: 600;
  height: 60px;
  z-index:1;
  .icon {
    left:10px;
    position:absolute;
    margin-right: auto;
  }
  .title{
    flex:1;
  }
}
</style>

