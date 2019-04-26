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



console.log('------------------------')