<template>
  <div class="children">
    我是children组件；
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeUpdate() {
    console.log('beforeUpdate', '组件有更新吗？')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@red: red;
.children {
  background: yellow
}
</style>
