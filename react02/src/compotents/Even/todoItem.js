import React from 'react';
class TodoItem extends React.Component {

  // 在子组件中 经常用它；
  // 应该使用这个方法，否则无论props是否有变化都将会导致组件跟着重新渲染
  // 是render 渲染前呗调用的函数；
  shouldComponentUpdate(nextProps, nextState) {
    // 为什么总是 undefined;
    // console.log('nextProps', nextProps);
    // console.log('nextProps.someThings', nextProps.someThings);
    // console.log('111111', nextProps, nextState, this.props);
    // 这里someThings因该是stete里面的状态；
    if (nextProps.someThings === this.props.someThings) {
      return false;
    }
  }

  //state和props发生变化就会调用; 
  // 只要父组件的render 发生变化 就会更新render;
  render() {
    // onclick 为什么不能绑定父组件的方法；
    console.log('我是todolist里的render');
    return (<div onClick={this.handleOptions.bind(this)}>{this.props.content}</div>);
  }



  handleOptions() {
    console.log(this.props.index);
    console.log(this.props);
    this.props.delete(this.props.index);
  }
}

// 下面是路由传递参数
// history.push({
//   pathname: '/FragmentSubMenu',
//   query: {
//     name: this.state.name
//   }
// });
// console.log(this.props.location.query.name);

export {
  TodoItem
};