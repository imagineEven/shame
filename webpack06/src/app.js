import './comment/index.css';
if (module.hot) {
  module.hot.accept();
}
let nihao = 'this is hot'
function app() {
  console.log(nihao);
}

app();