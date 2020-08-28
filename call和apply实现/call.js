// 这个call函数接收一个context作为参数，也就是执行上线文
Function.prototype.call2 = function (context) {
  // 总共分为三个步骤：
  // 1、将调用call的函数赋值给 contex.fn
  // 2、执行这个函数
  // 3、删除这个函数
  // 需要处理的两个问题：
  // 1、函数传递参数的问题
  // 2、函数的返回值问题
  var context = context || window;
  context.fn = this;
  var args = [];
  for (var i = 1, len = arguments.len; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
  // 使用eval方法 进行调用
  var result = eval('context.fn(' + args + ')');
  delete context.fn
  return result;
}