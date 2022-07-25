<template>
  <div class="container">
    <div class="main">
      <div class="header">{{ genLabel(label.name, label.name_en) }}</div>
      <div class="content">{{ label.content }}</div>
      <van-uploader
        class="photo"
        :after-read="afterRead"
        name="photo1"
        v-model="fileList"
        multiple
        :max-count="1"
      />
    </div>
    <van-collapse class="specification" v-model="active">
      <van-collapse-item title="拍照规范"
        >
        <!-- <p>{{ label.specification }}</p> -->
        <p :key="key" v-for="(item, key) in specification">{{ item }}</p>
      </van-collapse-item
      >
    </van-collapse>
  </div>
</template>

<script>
import { genLabel } from "@/utils/generate";
export default {
  props: {
    label: {
      type: Object,
    },
    value: {
      type: Array,
    },
    fileList: {
      type: Array,
    },
  },
  data() {
    return {
      active: [],
    };
  },
  computed: {
    specification() {
      return this.label.specification.split("\n");
    },
  },

  methods: {
    genLabel(a, b) {
      return genLabel(a, b);
    },
    afterRead() {},
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 10px 0 0 0;
  .main {
    background: #ffffff;
    display: grid;
    gap: 5px 8px;
    justify-items: flex-start;
    padding: 13px 0;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr 2fr;
    padding-inline-end: 30px;
    padding-inline-start: 10px;
    grid-template-areas:
      "header photo"
      "content photo";
    .header {
      grid-area: header;
      font-size: 16px;
      font-weight: 600;
    }
    .content {
      grid-area: content;
      font-size: 14px;
      font-weight: 400;
    }
    .photo {
      grid-area: photo;
    }
  }
}
::v-deep .specification .van-collapse-item__title {
  display: flex;
  color: #3e4cbb;
}
::v-deep .specification .van-cell__title span {
  float: right;
}
::v-deep .specification .van-collapse-item__content {
  display:grid;
  justify-content:start;
  justify-items:start;
}
</style>

