import { BaseLogic } from '../../plugin/BaseLogic';
import innerHTML from './preloadJs.html';
import $ from 'jquery';

class PreloadJs extends BaseLogic {
  constructor() {
    super();
    this.createUI()
    this.createPreload()
  }
  createUI() {
    // $('#app').append(innerHTML);

  }
  createPreload() {
    // 预加载网址： https://loading.io/
    // console.log('document.readyState', document.readyState);
    // 因为是后续执行 所以不会监听到statechange变化；
    document.onreadystatechange = function() {
      console.log(document.readyState)
      if(document.readyState === 'complete') {
        console.log('加载完毕');
      }
    }
  }
}





export {
  PreloadJs
}