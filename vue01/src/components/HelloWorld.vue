<template>
  <div class="helloWrapper">
    <div class="content">I am Even</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@red: red;
.helloWrapper {
  .content {
    background: @red;
  }
}
</style>
