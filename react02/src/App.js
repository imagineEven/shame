import React from 'react';
import './App.css';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import { EvenTwo } from './compotents/Even/Even';

// 一切皆是组件；class EvenTwo extends React.Component {
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <div className="list">
              <Link to="/eventwo">我要去todoList页面</Link>
              <Link to="/other">我要去其他页面</Link>
              <div className="routeWrapper">
                <Route path="/eventwo" component={EvenTwo}></Route>
                <Route path="/other" component={Other}></Route>
              </div>
            </div>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

class Other extends React.Component {
  render() {
    return (
      <div>我是other组件</div>
    );
  }
}

export default App;
