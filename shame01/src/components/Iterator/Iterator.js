import { BaseLogic } from '../../plugin/BaseLogic';

class Iterator extends BaseLogic {
  constructor() {
    super()
    this.createIterator();
    this.createAsync();
  }
  createIterator() {
    // 调用的时候返回的是遍历对象； 函数自身并不会执行；
    let iterator = hellowIterator();
    iterator.next();
    function* hellowIterator() {
      yield 'hellow';
      yield 'word';
      return 'ending'
    }
  }

  createAsync() {
    // 返回Promise fullfill状态 参数为返回值；

    function takeLongTime() {
      return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
      });
    }

    async function test() {
      // const v = await takeLongTime();
      await new Promise(resolve => {
         console.log('where is I of inner');
         resolve('nihao')
      })
      //  return 'nihap'
    }

    console.log(test())
  }
}

export {
  Iterator
}