function say(who, love) {
  console.log(who + love + '说话');
}

Function.prototype.before = function (beforeCallback) {
  // this = say 因为是 say 是调用者
  // 箭头函数：没有this 没有arguments 没有prototype
  return (...args) => { // newFn 这里传递参数使用的是剩余运算符，
    console.log(args);
    beforeCallback();
    this(...args); // 展开运算符
  }
}

let newFn = say.before(function () {
  console.log('说话前');
})

newFn('我', '爱');

/**
 * 1、函数say构造函数
 * 2、在Function原型上面添加一个 before 方法，所有的函数都可以使用
 * 3、before函数是一个高阶函数，满足高阶函数的两个特点: 参数是函数、返回值也是一个函数。
 * 4、在before函数中的返回值中使用this，会自动的向上一个执行上下文查找this指向
 * 5、箭头函数：没有this 没有arguments 没有prototype
 * 6、剩余运算符只能在最后一个参数里使用
 */