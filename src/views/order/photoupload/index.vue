<template>
  <div class="body">
    <Header :title="title"></Header>
    <div class="body-main">
      <Upload :item="pu.emptyContainer" :value="form.one" :show="show.one"></Upload>
      <Upload></Upload>
      <Upload></Upload>
      <Upload></Upload>
      <Upload></Upload>
      <Upload></Upload>
      <Upload></Upload>
      <Upload></Upload>
      <Upload></Upload>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
import Upload from "./upload";
import photoupload from "@/data/photoupload"; 

export default {
  components: {
    Header,
    Upload,
  },
  data() {
    return {
      title: "照片列表",
      pu:photoupload,//照片上传显示信息
      form:{},
      show:{},
    };
  },
};
</script>

<style lang="scss" scoped>
.body {
  display: grid;
  background: #f7f8fa;
  .body-main{
    margin-top:20px;
  }

}
</style>

