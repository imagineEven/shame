import $ from 'jquery';
class BaseLogic {
  constructor() {
    this.createBack();
    this.toggleScene(true);
  }

  createBack() {
    let back = $('<div class="back">back</div>');
    let backNode = back.get(0);
    document.body.appendChild(backNode);
    let self = this;
    backNode.onclick = function() {
      self.toggleScene(false);
    }
  }

  toggleScene(power) {
    if (power) {
      $('#list').hide();
      $('#app').show();
      $('.back').show();
    } else {
      $('#list').show();
      $('#app').hide();
      $('#app > div').remove();
      $('.back').hide();
    }
  }
}

export  {
  BaseLogic
}

