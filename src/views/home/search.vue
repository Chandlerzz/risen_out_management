<template>
  <van-action-sheet v-model="show" @click-overlay="overlay" title="">
    <div class="content">
      <van-cell-group>
        <van-field
          v-model="form.orderNum"
          label="订单号："
          placeholder="请输入订单号"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="form.proOrderNum"
          label="生产订单号:"
          placeholder="请输入生产订单号"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="form.proPlace"
          label="项目地点:"
          placeholder="请输入项目地点"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="form.outDate"
          label="出货时间:"
          placeholder="请输入出货时间"
          @click-input="showCalendar = true"
        />
      </van-cell-group>
      <van-calendar
        v-model="showCalendar"
        :min-date="form.minDate"
        @confirm="onConfirm"
      />
    </div>
    <div>
      <van-button round type="primary" @click="Clear()">清除筛选</van-button>
      <van-button round type="info" @click="Submit(), (shows = false)"
        >确认</van-button
      >
    </div>
  </van-action-sheet>
</template>

<script>
export default {
  name: "search",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {},
      showCalendar: false,
    };
  },
  methods: {
    formatDate(date) {
      let ret;
      let fmt = "YYYY-mm-dd ";
      const opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString(), // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(
            ret[1],
            ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
          );
        }
      }
      return fmt;
    },
    overlay() {
      this.$emit("close");
    },
    calendar() {
      this.showCalendar = true;
    },
    onConfirm(date) {
      this.showCalendar = false;
      this.form.outDate = this.formatDate(date);
    },
  },
};
</script>

<style scoped>
</style>

