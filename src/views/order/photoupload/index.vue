<template>
  <div class="body">
    <Header :title="title"></Header>
    <div class="body-main" v-if="iscontianer">
      <Upload :label="pu.emptyContainer" name="photo1" :value="photolists.photolist1" ></Upload>
      <Upload :label="pu.transporterPackingList" name="photo2" :value="photolists.photolist2" ></Upload>
      <Upload :label="pu.packgingMarks" name="photo3" :value="photolists.photolist3" ></Upload>
      <Upload :label="pu.fullPallet" name="photo4" :value="photolists.photolist4" ></Upload>
      <Upload :label="pu.shockSensorVerification" name="photo5" :value="photolists.photolist5" ></Upload>
      <Upload :label="pu.floor1" name="photo6" :value="photolists.photolist6" ></Upload>
      <Upload :label="pu.floor2" name="photo7" :value="photolists.photolist7" ></Upload>
      <Upload :label="pu.floor3" name="photo8" :value="photolists.photolist8" ></Upload>
      <Upload :label="pu.floor4" name="photo9" :value="photolists.photolist9" ></Upload>
      <Upload :label="pu.floor5" name="photo10" :value="photolists.photolist10" ></Upload>
      <Upload :label="pu.floor6" name="photo11" :value="photolists.photolist11" ></Upload>
      <Upload :label="pu.floor7" name="photo12" :value="photolists.photolist12" ></Upload>
      <Upload :label="pu.floor8" name="photo13" :value="photolists.photolist13" ></Upload>
      <Upload :label="pu.floor9" name="photo14" :value="photolists.photolist14" ></Upload>
      <Upload :label="pu.containerPartiallyClosed" name="photo15" :value="photolists.photolist15" ></Upload>
      <Upload :label="pu.containerSeal" name="photo16" :value="photolists.photolist16" ></Upload>
      <Upload :label="pu.sealNumber" name="photo17" :value="photolists.photolist17" ></Upload>
    </div>
    <div class="body-main" v-else>
      <Upload :label="pu.flat1" name="photo1" :value="photolists.photolist1" ></Upload>
      <Upload :label="pu.flat2" name="photo2" :value="photolists.photolist2" ></Upload>
      <Upload :label="pu.flat3" name="photo3" :value="photolists.photolist3" ></Upload>
      <Upload :label="pu.flat4" name="photo4" :value="photolists.photolist4" ></Upload>
      <Upload :label="pu.flat5" name="photo5" :value="photolists.photolist5" ></Upload>
      <Upload :label="pu.flat6" name="photo6" :value="photolists.photolist6" ></Upload>
      <Upload :label="pu.flat7" name="photo7" :value="photolists.photolist7" ></Upload>
      <Upload :label="pu.flat8" name="photo8" :value="photolists.photolist8" ></Upload>
      <Upload :label="pu.flat9" name="photo9" :value="photolists.photolist9" ></Upload>
      <Upload :label="pu.flat10" name="photo10" :value="photolists.photolist10" ></Upload>
      <Upload :label="pu.flat11" name="photo11" :value="photolists.photolist11" ></Upload>
      <Upload :label="pu.flat12" name="photo12" :value="photolists.photolist12" ></Upload>
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
      pu:photoupload,//pu照片上传显示信息
      photolists:{},
      form:{},
      shows:{},
      iscontianer:true,
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

