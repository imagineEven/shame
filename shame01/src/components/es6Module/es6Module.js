import height from './otherModule';
// import
// 引入的变量都是可读的，不允许改写接口，可以改写接口变量；
// example: var height = 23; 报错；
// 暴漏接口的时候 他会隐藏的做一些操作，让接口可读不可以改；


// variable += 1
// age += 1
// let age = age + 1;
console.log('height', height)
// import { nihao } from './otherModule'
// console.log('variable', nihao)

class Es6Module{
  constructor() {
    console.log('----------------下面是es6模块化');
  }
}

export {
  Es6Module
}

