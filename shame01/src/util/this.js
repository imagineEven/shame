console.log('this指向的问题')
console.log('------------------------')
let numberOne = function () {
  this.away = 'away'; // 相当于window.away = 'away';
  console.log(this.away); // 
}
numberOne();
console.log(away);
console.log('------------------------')
let a = {
  word: 'word',
  hello() {
    console.log(this.word); // undefined;
  }
}
let numberTwo = a.hello;
numberTwo(); // window.numberTwo;
console.log('------------------------')
// 构造函数里的this;
/**
 * new关键字；copy函数的所有属性, 创建了一个实列对象；
 */


// this 是可变的；
// 看到this 找他的函数体是谁调用的；
class Factor {
  constructor() {
    this.age = 'Factor';
    this.number = 15;
    let engine = new Engine();
    let address = '佳木斯';
    engine.getName(function() {
      console.log(this.age);
    }, this);
  }

}

class Engine {
  constructor() {
    this.name = 'engine';
  }

  getName(callback, that) {
    that.callback = callback;
    that.callback();
  }
}

let factor = new Factor();


console.log('------------------------')