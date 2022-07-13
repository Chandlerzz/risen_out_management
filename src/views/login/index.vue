<template>
  <div class="container">
    <header class="title">
      <span class="titleOne">欢迎使用</span>
      <span class="titleTwo">日升出货</span>
    </header>
    <div class="picture"></div>
    <van-cell-group class="form" :border="false" style="">
      <van-field
        class="landing1"
        v-model="form.account"
        placeholder="请输入用户名(User Name)"
      />
      <van-field
        class="landing1"
        type="password"
        v-model="form.password"
        placeholder="请输入密码(Password)"
      >
      </van-field>
      <van-button class="landing" round size="large" @click="login"
        >登录</van-button
      >
    </van-cell-group>
  </div>
</template>

<script>  
export default{
  data() {
    return {
      form:{}, 
    };
  },
  
  methods: {
    login() {
      console.log('method');
    }
  },
  
}
</script>  
<style lang="scss" scoped>
.container {
  height: inherit;
  font-family: PingFangSC-Regular;
  background: var(--body-background-color);
  display: grid;
  grid-template-rows: 3fr 10fr 14fr;
  place-items: center;
  .title {
    justify-self: start;
    display: flex;
    padding-inline-start: 20px;
    gap: 0.5rem;
    color: #000000;
    font-size: 1.3rem;
    .titleOne {
      font-weight: 400;
    }
    .titleTwo {
      font-family: PingFangSC-Medium;
      font-size: 1.4rem;
      font-weight: 600;
    }
  }
  .picture {
    width: 100%;
    height: 100%;
    background: url("https://object.risen.com/risenoutmanagement-img/img/signin@3x.png")
      no-repeat;
    background-color: white;
    background-size: 100% 80%;
  }
  .form {
    padding: 0 20px;
    width: 100%;
    height: 100%;
    align-self: start;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 1.7rem;
    .landing1 {
      max-width: 20rem;
      background: #f7f8fa;
      border-radius: 22px;
    }
    .landing {
      width: 10rem;
      color: #ffffff;
      background-color: #3e4cbb;
      border: 1px solid #3e4cbb;
    }
  }
}
</style>

