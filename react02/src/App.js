import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { EvenTwo } from './compotents/Even/Even';

// 一切皆是组件；class EvenTwo extends React.Component {
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>我是app组件</div>
        <Link to="/todolist">todolist</Link>
        <div></div>
        <Link to="/other">other</Link>
        <div>
          <Route path="/todolist" component={EvenTwo}></Route>
          <Route path="/other" component={Other}></Route>
        </div>
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
