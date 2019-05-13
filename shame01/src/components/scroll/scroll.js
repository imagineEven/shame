import HtmlScroll from './scroll.html';
import { BaseLogic } from '../../plugin/BaseLogic.js';
class Scroll extends BaseLogic {
  constructor() {
    super()
    console.log('---------------------scroll');
    this.init()
  }
  init() {
    console.log('promise');
    let p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('1111')
      },1000)
    })
    let p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('22222')
      },1100)
    })
    Promise.all([p1, p2]).then((res) => {
      console.log('all', res);
    })
    Promise.race([p1, p2]).then(res => {
      console.log('race', res);
    })
  }
}


export {
  Scroll
}

