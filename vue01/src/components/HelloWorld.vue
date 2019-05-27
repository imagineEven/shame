<template>
  <div class="helloWrapper">
    <div class="content">I am Even</div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
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
