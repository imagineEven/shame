import { BaseLogic } from '../../plugin/BaseLogic';
import $ from 'jquery';
import preloadImage from './preloadImage.html'
class ImageFun extends BaseLogic {
  constructor() {
    super();
    // 图片预加载；
    this.createUI();
  }

  createUI() {
    let imagesStringArr = [
      'http://img.article.pchome.net/00/44/23/20/pic_lib/wm/2.jpg',
      'http://pc.duowan.com/uploads/allimg/2009-11/16101540-6-4K952.jpg',
      'http://seopic.699pic.com/photo/50043/9886.jpg_wh1200.jpg',
      'https://hbimg.huabanimg.com/1a2bf98921b9ef9c67e98c0869a15bd9aab1e1f34e92-6po7lF_fw658',
      'http://img0.imgtn.bdimg.com/it/u=1451252150,3009402518&fm=26&gp=0.jpg',
      'http://img0.imgtn.bdimg.com/it/u=1451252150,123009402518&fm=26&gp=0.jpg'
    ]

    let images = []
    let count = 0;
    // 做图片加载；
    imagesStringArr.forEach(item => {
      var imgObj = new Image();
      imgObj.src = item;
      images.push(imgObj)
      // 加载成功；
      imgObj.onload = function() {
        // console.log('加载完了');
        let progress = Math.round((count + 1)/images.length*100);
        $('.mask').html( progress + '%'); 
        count ++;
        if (progress > 99) {
          $('.mask').hide();
        }
      }
      // 加载失败;
      imgObj.onerror = function() {
        // console.log('加载完了');
        let progress = Math.round((count + 1)/images.length*100);
        $('.mask').html( progress + '%'); 
        count ++;
        if (progress > 99) {
          $('.mask').hide();
        }
      }
    })


    let  len = images.length;
    // console.log($('.imageBox'));
    $('.imageBox').length === 0 && $('#app').append(preloadImage);

    let startIndex = 0;
    $('.btn').on('click', function() {
      if ($(this).data('control') === 'prev') {
        // 上一个
        startIndex = Math.max(0, --startIndex);
      } else {
        // 下一个;
        startIndex = Math.min(images.length - 1, ++startIndex);
      }
      $('.image').attr('src', images[startIndex].src);
    })



  }
}

export {
  ImageFun
}