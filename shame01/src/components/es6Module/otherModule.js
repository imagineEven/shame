//导出多个数据,单个数据也一样。

//方式二(推荐)可以一起在模块结束位置输出
let age = 0;
let height = 14;


// export
// export命令规定的是对外的接口,必须与模块内部的变量建立一一对应关系。动态绑定关系； 指向的是这个对象地址；不是copy;
// 而commen.js 模块化暴漏的是拷贝后的变量;
// 动态绑定关系；
// 先执行关键字；让关键字指向undefined;
// 在 import的时候可以使用 as 关键字；

// export default
// export default就是输出一个叫做default的变量或方法;
// 不可以使用as 关键字； 
export {
  height
}