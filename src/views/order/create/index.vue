<template>
  <div>
    <Header :title="title"></Header>
    <Main :title="title"></Main>
  </div>
</template>

<script>
import Header from '../components/header'
import Main from './content'

  export default{
    components:{
      Header,
      Main
    },
    data() {
      return {
        title: "集装箱出货单新增"
      };
    },
  }
</script>

<style scoped>

</style>

