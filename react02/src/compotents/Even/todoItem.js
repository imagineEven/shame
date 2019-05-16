import React from 'react';

class TodoItem extends React.Component {

  handleOptions() {
    console.log(this.props.index);
    console.log(this.props);
    this.props.delete(this.props.index);
  }

  render() {
    // onclick 为什么不能绑定父组件的方法；
    return (<div onClick={this.props.delete}>{this.props.content}</div>);
  }
}

export {
  TodoItem
};