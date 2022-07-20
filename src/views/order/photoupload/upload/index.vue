<template>
  <div class="container">
    <div class="main">
      <div class="header">空箱(Empty Container)</div>
      <div class="content">确定集装箱是否有破损，集装箱内部清洁情况</div>
      <van-uploader
        class="photo"
        :after-read="afterRead"
        name="photo1"
        v-model="fileList1"
        multiple
        :max-count="1"
      />
    </div>
    <van-collapse class="specification" v-model="activeNames1">
      <van-collapse-item title="拍照规范"
        >①空箱拍照时正对集装箱拍照</van-collapse-item
      >
    </van-collapse>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container{
  margin:10px 0 0 0;
  .main {
    background:#ffffff;
    display: grid;
    gap:5px 8px;
    justify-items:flex-start;
    padding:13px 0;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr 2fr;
    padding-inline-end:30px;
    padding-inline-start:10px;
    grid-template-areas:
      "header photo"
      "content photo";
    .header {
      grid-area: header;
      font-size:16px;
      font-weight:600;
    }
    .content {
      grid-area: content;
      font-size:14px;
      font-weight:400;
    }
    .photo {
      grid-area: photo;
    }
  }
}
::v-deep .specification .van-collapse-item__title {
  display:flex;
  color: #3E4CBB;
}
::v-deep .specification .van-cell__title span {
  float:right;
}
</style>

