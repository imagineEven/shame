// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
require('style/border.css');
require('style/reset.css');
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});


// content = {};
// console.log('content', content);

class Father {
  constructor() {
    console.log('Father');
    this.name = 'even';
  }
}

class Child extends Father{
  constructor() {
    super();
    console.log('Child');
    // console.log(super);
    this.createUI();
  }

  createUI() {
    // console.log('super', super);
  }
}

let child = new Child();