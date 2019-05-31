<template>
  <div class="helloWrapper">
    <div class="content" @click="clickContent">I am Even</div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <Children></Children>
  </div>
</template>

<script>
import Children from './children.vue'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    clickContent() {
      this.msg = this.msg + 1;
      console.log('this.msg', this.msg);
    }
  },
  components: {
    Children
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@red: red;
.helloWrapper {
  .content {
    width: 750px;
    background: @red;
  }
}
</style>
