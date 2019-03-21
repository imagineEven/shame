import $ from 'jquery'
import scrollHtml from './scroll.html';
console.log(scrollHtml);
console.log($);
console.log($('#app'))
// console.log(JSON.parse(scrollHtml))
$('#app').append(scrollHtml);