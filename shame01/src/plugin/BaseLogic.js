import $ from 'jquery';
class BaseLogic {
  constructor() {
    // this.toggleScene(true);
    console.log('baseLogic 里面的内容已经执行了');
  }

  toggleScene(power) {
    if (power) {
      $('#list').css({
        display: 'none'
      });
      $('#app').css({
        display: 'auto'
      })
    } else {
      $('#list').css({
        display: 'auto'
      });
      $('#app').css({
        display: 'none'
      })
    }
  }
}

export  {
  BaseLogic
}

