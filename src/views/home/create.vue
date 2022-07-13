<template>
  <van-dialog
    v-model="show"
    title="选择出货模板"
    v-on:overlay="overlay"
    :close-on-click-overlay="closeOnClickOverlay"
    :showConfirmButton="showConfirmButton"
  >
  <div class="content">
    <div>
      <img
        @click="goConship()"
        src="https://object.risen.com/risenoutmanagement-img/img/Container@3x.png"
      />
      <span >集装箱出货单</span>
    </div>
    <div>
      <img
        @click="goFlatship()"
        src="https://object.risen.com/risenoutmanagement-img/img/flatcar@3x.png"
      />
        <span >平板车出货单</span>
    </div>
  </div>
  </van-dialog>
</template>

<script>
export default {
  name: "create",
  data() {
    return {
      showConfirmButton: false,
      closeOnClickOverlay:true
    };
  },

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    overlay(){
      this.$emit("close")
    },
    goConship() {
      console.log("method");
    },
    goFlatship() {
      console.log("method");
    },
  },
  mounted(){
  }
};
</script>

<style lang="scss" scoped>
.icon{
  position:absolute;
  top:0;
  right:0;
}
.content{
  display:grid;
  grid-template-columns:repeat(2 ,1fr);
  padding: 17px;
  gap:2rem;
  img {
    width: 100%;
  }
}
</style>

