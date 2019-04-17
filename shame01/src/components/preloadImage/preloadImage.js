import { BaseLogic } from '../../plugin/BaseLogic';
import $ from 'jquery';
import preloadImage from './preloadImage.html'
class Image extends BaseLogic {
  constructor() {
    super();
    this.createUI();
  }

  createUI() {
    console.warn('this is the page of image');
    let images = [
      'http://img.article.pchome.net/00/44/23/20/pic_lib/wm/2.jpg',
      'http://pc.duowan.com/uploads/allimg/2009-11/16101540-6-4K952.jpg',
      'http://img.article.pchome.net/00/44/23/20/pic_lib/wm/2.jpg',
      'http://pc.duowan.com/uploads/allimg/2009-11/16101540-6-4K952.jpg',
      'http://img.article.pchome.net/00/44/23/20/pic_lib/wm/2.jpg',
      'http://pc.duowan.com/uploads/allimg/2009-11/16101540-6-4K952.jpg',
      'http://img.article.pchome.net/00/44/23/20/pic_lib/wm/2.jpg',
      'http://pc.duowan.com/uploads/allimg/2009-11/16101540-6-4K952.jpg',
      'http://img.article.pchome.net/00/44/23/20/pic_lib/wm/2.jpg',
      'http://pc.duowan.com/uploads/allimg/2009-11/16101540-6-4K952.jpg'
    ]
    let  len = images.length;
    console.log($('.imageBox'));
    $('.imageBox').length === 0 && $('#app').append(preloadImage);
    // new Image();
    // document.querySelector('.btn').onclick = function() {
    //   console.log(this);
    //   console.log(this.data);
    // }

    let startIndex = 0;
    $('.btn').on('click', function() {
      console.log(this);
      console.warn($(this).data('control'));
      if ($(this).data('control') === 'prev') {
        // 下一个
        startIndex = Math.min(images.length - 1, ++startIndex);
      } else {
        // 上一个;
        startIndex = Math.max(0, --startIndex);
      }
    })
  }
}

export {
  Image
}