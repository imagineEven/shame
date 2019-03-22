
// module对象管理整个对象；
// var exports = module.exports; 指向一个对象，但是以后者为主；
module.exports = {
  name: 'even',
  age: '13'
}

// module模块的变量都是局部的，这个是定义全局变量的方法；
global.warning = '我是其他模块定义的全局变量';
