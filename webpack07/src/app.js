import './style/main.css';
import dom from './components/component.html';
let nihao = 'it is remind you of sth'
function app() {
  console.log(nihao)
}
app();
let appDom = document.querySelector('#app');
appDom.innerHTML = dom;