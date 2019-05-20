import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="list">
          <Link to="/todoList">我要去todoList页面</Link>
          <Link to="/other">我要去其他页面</Link>
        </div>
        <div className="RouteWrapper">
          <Route to="/todoList"></Route>
          <Route to="/other"></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
