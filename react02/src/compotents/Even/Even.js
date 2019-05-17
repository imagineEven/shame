import React from 'react';
import { TodoItem } from './todoItem';
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
  // 组件的生命周期；

  // 组件将要挂载
  componentWillMount() {
    console.log('conponentWillMount', '组件即将挂载');
  }


  // 提供组件显示的内容；提供需要渲染的dom;
  render() {
    // 不会同步页面；why? 这里的状态不会做任何的监听
    console.log('我是Even里的render？');
    return (
      // jsx 里面只能写表达式，不能写语句列如 {if(true) {return 234}}
      // 但是语句里面可以写标签；
      <React.Fragment>
        <input value={this.state.inputValue} onChange={this.clickChangeInput.bind(this)}/>
        <button style={{background: 'yellow'}} className='red-btn' onClick={this.handleClickButton.bind(this)}>add</button>
        <button style={{height:'30px', width: '100px'}} onClick={this.clickTest.bind(this)}></button>
        <ul>
          {this.state.list.map((item, index) => {
            // 循环将会执行循环次数的组件生命周期；
            return <TodoItem key={index} content={item} index={index} delete={this.deletOption.bind(this, index)}/>;
          })}
        </ul>
      </React.Fragment>
    );
  }

  // 组件已经挂载完成
  componentDidMount() {
    console.log('compomentDisMount', '挂载完成');
  }

  clickTest() {
    this.setState({
      'list': [...this.state.list]
    });
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
}

export {
  EvenOne,
  EvenTwo
};