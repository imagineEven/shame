import height from './otherModule';
import { BaseLogic } from '../../plugin/BaseLogic';
// import
// 引入的变量都是可读的，不允许改写接口，可以改写接口变量；
// example: var height = 23; 报错；
// 暴漏接口的时候 他会隐藏的做一些操作，让接口可读不可以改；


// variable += 1
// age += 1
// let age = age + 1;
// console.log('height', height)
// import { nihao } from './otherModule'
// console.log('variable', nihao)

class Es6Module extends BaseLogic {
  constructor() {
    super()
    console.log('----------------下面是es6模块化');
    // this.gate();
    this.createUI();
  }

  createUI() {
    let lunch = this.createLunch()
    console.log('lunch', lunch);
  }

  createLunch() {
    new Promise(resolve => {
      console.log('我这里面有执行吗')
      // 这个return是Promise回调函数的，并不能代表最外层的函数；
      // 在回调函数里 return 是没有什么意思的，
      return 111111
    })
  }

  async gate() {
    // 等待Promise;
    let nihao = await this.navigate();
    console.log(nihao);
    console.log('我是什么时候执行的？');
  }

  navigate() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('this is the navigation');
        resolve(11111);
      }, 2000);
    })
  }
}

export {
  Es6Module
}

