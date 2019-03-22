console.log('------------------下面是object.js');

function Produce() {
  this.production = function() {
    console.log('why');
  }
  function process() {
    console.log('process')
  }
}

// 对象会识别这种写法，转移成兑现给的函数；
let object = {
  direction() {
    console.log('---direction');
  },
  nihao: 'lala'
}

// setTimeout
console.log('global', global);
console.log('window', window);
console.log(global === window);