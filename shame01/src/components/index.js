import { Scroll } from './scroll/scroll.js';
import { CommonJs } from './commonJS/commonJS.js';
import { Object } from './object/object.js';
import { Es6Module } from './es6Module/es6Module.js';
// console.log(Scroll);
// debugger;
// let scroll = new Scroll();
// const List = [Scroll];

let list = ['Scroll', 'CommonJs', 'Object', 'Es6Module'];
var evalCode = "new " + "Scroll" + "()";
console.log(evalCode);
eval(evalCode);

// new Scroll();

// list.forEach((element, index) => {
//   eval(`alert(${element})`);
//   eval(`new ${element}()`)
// });