import './style/main.css';
import dom from './components/component.html';
let nihao = 'it is remind you of sth'
function app() {
  console.log(nihao)
  let necessary = 'but it <br> dith 23 </br> of 22 with';
  // 这样的话只会替换一次： 返回新的字符串： 没有改变原有字符串；
  // let section = necessary.replace(/\<\/*br\>/g, '/')

  // 返回的是匹配到后的数组；
  let section = necessary.match(/\<\/*br\>/g);
  console.log('匹配后的字符串',section);
  console.log('原有字符串',necessary);
}
app();
let appDom = document.querySelector('#app');
appDom.innerHTML = dom;



// necessary;
// function fun(n, o) {
//   console.log(o)
//   return {
//     fun: function (m) {
//       return fun(m, n);
//     }
//   };
// }

// var a = fun(0);  // undefined
// a.fun(1); // 
// a.fun(2); 
// a.fun(3);
// var b = fun(0).fun(1).fun(2).fun(3);
// var c = fun(0).fun(1); 
// c.fun(2); 
// c.fun(3);