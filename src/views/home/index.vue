<template>
  <div>
    <header class="home-header">
      <van-row type="flex" justify="space-between" class="banner">
        <van-col span="4" class="banner_item" @click="create">
          <van-icon class="icon" name="add" size="25" />
        </van-col>
        <van-col span="8" class="banner_item">日升出货</van-col>

        <van-col span="4" class="banner_item" @click="search">
          <van-icon class="icon" name="search" size="25" />
        </van-col>
      </van-row>
      <van-tabs @click-tab="onClick" line-width="80pt" color="#3e4cbb">
        <van-tab title="集装箱出货"></van-tab>
        <van-tab title="平板车出货"></van-tab>
      </van-tabs>
    </header>
    <div style="padding-top: 80pt">
      <div v-for="item in chuhuoData" :key="item.id" class="container">
        <van-row type="flex" justify="space-around" class="">
          <van-col span="16" class="container_title"
            >订单号：{{ item.orderNum }}</van-col
          >
          <van-col span="6" class="" style="text-align: right">
            <van-icon
              @click="(show3 = true), (Id = item.id)"
              style="padding: 10pt 12pt 0 20pt"
              name="ellipsis"
              size="25"
            />
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" class="">
          <van-col span="11" class="container_item"
            >出货日期: {{ item.outDate }}</van-col
          >
          <van-col span="11" class="container_item1"
            >操作人员: {{ item.name }}</van-col
          >
        </van-row>
        <van-row type="flex" justify="space-around" class="">
          <van-col span="11" v-if="index == 1" class="container_item"
            >车牌挂号: {{ item.carNumber }}</van-col
          >
          <van-col span="11" v-if="index == 0" class="container_item"
            >集装箱号: {{ item.containerNum }}</van-col
          >
          <van-col span="11" class="container_item1"
            >项目地点: {{ item.proPlace }}</van-col
          >
        </van-row>
      </div>
    </div>
    <create ref="create" :show="showCreate" v-on:close="closeCreateDialog" ></create>
    <search :show="showSearch" v-on:close="closeSearhDialog"></search>
    <edit :show="showEdit"></edit>
  </div>
</template>
<script >
import Create from './create'
import Search from './search'
import Edit from './edit'
export default {
  name: "Home",
  components:{Create,Search,Edit},
  data() {
    return {
      showCreate: false,
      showSearch: false,
      showEdit: false,
      chuhuoData: {},
    };
  },
  methods: {
    closeCreateDialog(){
      this.showCreate = false;
    },
    closeSearhDialog(){
      this.showSearch = false;
    },
    create() {
      this.showCreate = true;
    },
    edit() {
      this.showEdit = true;
    },
    search() {
      this.showSearch = true;
    },
    cancealEdit() {
      this.showEdit = false;
    },
    cancealSearch() {
      this.showSearch = false;
    },
    onClick() {
      console.log("method");
    },
    confirm(){},
  },
};
</script>


<style lang='scss' scoped>
.home-header {
  position: fixed;
  top: 0px;
  float: inherit;
  width: 100%;
  .banner {
    background: #3e4cbb;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
    font-family: PingFangSC-Semibold;
    font-size: 17px;
    color: #ffffff;
    letter-spacing: -0.41px;
    text-align: center;
    line-height: 22px;
    font-weight: 600;
    .banner_item {
      padding: 20px;
      .icon {
        font-size: 25px;
        margin: 0 auto;
      }
    }
  }
}
.ccc .van-dialog__footer {
  display: none;
}
.ccc {
  text-align: center;
}
.feidMargin {
  padding: 7pt;
}
.radiopad {
  margin-right: 50px;
}
.radiopadthree {
  margin-right: 20px;
}
.formatPho {
  display: flex;
  flex-direction: row;
}
</style>

