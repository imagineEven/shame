import React from 'react';
import ReactDOM from 'react-dom';
// 全局样式， 格式化样式；
import './index.css';

// 组件app 比喻以大写字母开头
import App from './App';
import { EvenOne, EvenTwo } from './compotents/Even/Even';

import * as serviceWorker from './serviceWorker';

// 将虚拟dom 插入节点；
// <EvenTwo /> 为jsx标签；自定义便签名字；
// jsx作用, 将类转换成虚拟dom;
ReactDOM.render(<EvenTwo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
