import React from 'react';

// 定义组件；
function EvenOne() {
  return (
    <div>我是EvenOne组件</div>
  );
}

// 定义组件类
class EvenTwo extends React.Component {
  constructor(props) {
    super(props);
    // 定义状态；
    this.state = {
      list: ['study English', 'study React'],
      inputValue: ''
    };
  }

  handleClickButton() {
    // 出发update流程；改变视图
    // 有可能是异步的 所以参与计算的时候 尽量使用函数
    this.setState({
      'list': [...this.state.list, this.state.inputValue]
    });
    this.setState({
      inputValue: ''
    });
    // 这样写的话 防止异步带来的干扰；
    // this.setState((prevState, props) => {
    //   return { 'list': [...prevState.list, 'hello world'] };
    // });

  }

  clickChangeInput(e) {
    this.setState({
      'inputValue': e.target.value
    });
  }

  deletOption(index) {
    let newArr = [...this.state.list];
    newArr.splice(index, 1);
    this.setState({
      'list': newArr
    });
  }

  // 提供组件显示的内容；提供需要渲染的dom;
  render() {
    // 不会同步页面；why? 这里的状态不会做任何的监听
    this.arr = [123, 123, 123];
    return (
      // jsx 里面只能写表达式，不能写语句列如 {if(true) {return 234}}
      // 但是语句里面可以写标签；
      <div>
        <input value={this.state.inputValue} onChange={this.clickChangeInput.bind(this)}/>
        <button onClick={this.handleClickButton.bind(this)}>add</button>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index} onClick={this.deletOption.bind(this, index)}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export {
  EvenOne,
  EvenTwo
};