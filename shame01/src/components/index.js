import { Scroll } from './scroll/scroll.js';
import { CommonJs } from './commonJS/commonJS.js';
import { Object } from './object/object.js';
import { Es6Module } from './es6Module/es6Module.js';
import $ from 'jquery';

let list = ['Scroll', 'CommonJs', 'Object', 'Es6Module'];
list.forEach((element, index) => {
  let scopeElement = element
  let div = $(`<div class="${element} option" >${element}</div>`).css({
    marginBottom: '5px',
    border: '1px solid rgba(25, 25, 25, 0.3)',
    fontSize: '26px'
  });
  let domDiv = div.get(0);
  $('#list').append(domDiv);
  domDiv.onclick = domClike;
});

function domClike(event) {
  let textContent = event.target.textContent;
  switch (textContent) {
    case 'Scroll':
      new Scroll();
      break;
    case 'CommonJs':
      new CommonJs();
      break;
    case 'Object':
      new Object();
      break;
    case 'Es6Module':
      new Es6Module();
      break;
      default:
      console.log(111);
      break;
  }
}