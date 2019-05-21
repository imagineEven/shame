import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { HashRouter, Route, Switch } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';
import '../node_modules/antd/dist/antd.min.css';
import '../src/util/moment-locale';

moment.locale('zh-cn');

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route path="/" component={App}>
      </Route>
    </Switch>
  </HashRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
