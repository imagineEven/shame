// require的作用是执行文件，并返回暴漏的模块；
// 可以使用结构赋值，
let {name, age} = require('./otherModule.js');
name = name + 1

// require 加载的是缓存的模块；
class CommonJs {
  constructor() {
    console.log('--------------commonJS模块');
    console.log('name', name);
    console.log('age', age);
  }
}

export {
  CommonJs
}