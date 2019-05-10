import { BaseLogic } from '../../plugin/BaseLogic';
// import { BaseLogic } from '../../plugin/BaseLogic';
import $ from 'jquery';
class Objectone extends BaseLogic{
  constructor() {
    super()
    console.log('------------------下面是object.js');
    this.originObject();
    this.property();
    this.proxy();
  }

  proxy() {
    let obj = {
      name: 'even'
    }
    // 代理属于浅拷贝；
    let p = new Proxy(obj, {
      getPrototypeOf(target) {
        console.log('target', target);
      }
    })
    obj.name = 'levi'
    console.log('name', p.name);
  }

  originObject() {
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
    // observe.name = 'haha';
    // console.log(observe.name);
  }

  property() {
    let obj = {}
    Object.defineProperty(obj, "key", {
      // 可枚举属性；
      enumerable: true,
      // 对象的属性是否可以被删除，以及除value和writable特性外的其他特性是否可以被修改；
      configurable: false,
      // 可写属性；
      writable: true,
      // 属性值；
      value: "static"
    });
  }

}

export {
  Objectone
}