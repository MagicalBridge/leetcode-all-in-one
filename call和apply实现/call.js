// 一句话介绍call：call方法在使用一个指定的this值和若干个指的的参数值的前提下调用某一个函数或者方法。
// 知道了call的本质，也就是知道了当初的实现原理就是给一个对象添加 一个函数 然后执行这个函数。
// 在我们封装函数的时候需要知道 谁调用这个函数this 指向就是谁，将this 赋值给 context。
// 看到很多大佬的文章文章,总共分为三步 添加 执行 删除 一点毛病没有
// 实现了第一步还是远远不够的，还需要进行传递参数，使用 eval 这种形式。
// 需要执行的那个函数需要参数 这个时候已经确认了是使用arguments 对象获取。

Function.prototype.call2 = function (context) {
  var context = context || window;
  context.fn = this;
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');
  }
  var result = eval('context.fn(' + args + ')')
  delete context.fn;
  return result;
}