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
    // 正常对象里面的get set 方法；
    let observe = {
      name: 'even',
      $name: 'even',
      get name () {
        return this.$name
      },
      set name(value) {
        this.$name = value;
      }
    }
    observe.name = 'haha';
    console.log(observe.name);
  }
}

export {
  Object
}