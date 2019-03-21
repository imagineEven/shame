import $ from 'jquery';
class BaseLogic {
  constructor(value) {
    console.log(value);
    this.toggleScene(true);
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