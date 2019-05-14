import React from 'react'; 
import ReactDOM from 'react-dom';
import  "babel-polyfill";

ReactDOM.render(
  <h1>hello, world;</h1>,
  document.getElementById('app')
);
// function test () {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(111111)
//     },1000)
//   }).then((height) => {
//     return 22222;
//   })
// }

// console.log('test', test());