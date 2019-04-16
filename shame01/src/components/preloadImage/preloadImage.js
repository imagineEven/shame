import { BaseLogic } from '../../plugin/BaseLogic';
import $ from 'jquery';
class Image extends BaseLogic {
  constructor() {
    super();
    this.createUI();
  }

  createUI() {
    console.warn('this is the page of image');
    let images = [
      'http://i2.hoopchina.com.cn/user/308/15960308/13383588090.jpg',
      'http://img.article.pchome.net/00/44/23/20/pic_lib/wm/2.jpg',
      'http://pc.duowan.com/uploads/allimg/2009-11/16101540-6-4K952.jpg'
    ]

    let startIndex = 0;
    let  len = images.length;
  }
}

export {
  Image
}