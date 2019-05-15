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
      list: ['study English', 'study React']
    };
    // this.createUI();
  }

  handleClickButton() {
    console.log('我被点击了');
    console.log('arr', this.arr);
    // this.arr.push('abc');
  }

  // 提供组件显示的内容；提供需要渲染的dom;
  render() {
    this.arr = [123, 123, 123];
    return (
      // jsx 里面只能写表达式，不能写语句列如 {if(true) {return 234}}
      // 但是语句里面可以写标签；
      <div>
        <input/>
        <button onClick={this.handleClickButton}>add</button>
        <ul>
          {console.log('arr', this.arr)}
          {console.log('list', this.state.list)}
          {[
            <li>asdf</li>,
            <li>asdfasdf</li>
          ]}
        </ul>
      </div>
    );
  }
}

export {
  EvenOne,
  EvenTwo
};