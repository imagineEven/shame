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
    let optimize = new Map();
    optimize.set('one', 'oneText');
    optimize.set('two', 'twoText');
    // size mean has two key of value;
    // 有俩个键值对;
    console.log('optimize.size', optimize.size);
    // console.log(optimize.has('one'));
    // console.log(optimize.get('one'));
    // optimize.forEach((map, key) => {
    //   console.log('map', map);
    //   console.log('key', key);
    // })
  }
}

export {
  Object
}