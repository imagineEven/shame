import { BaseLogic } from '../../plugin/BaseLogic';
// import { BaseLogic } from '../../plugin/BaseLogic';
import $ from 'jquery';
class Object extends BaseLogic{
  constructor() {
    super()
    console.log('------------------下面是object.js');
    this.createUI();
  }
  createUI() {   
    let nihao = "\"wo%20shi%20yi%20ge%20dou%20hao%2C%20wo%20hai%20hsi";
    // 返回的是符合要求的字符串
    let haha = decodeURIComponent(nihao)
    console.log('haha', haha);
  }
}

export {
  Object
}