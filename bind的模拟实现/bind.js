// bind的模拟实现。bind函数 返回一个 函数 支持传递参数
// 且返回的函数支持new 的方式调用
// ES3中提供的方法 
Function.prototype.bind2 = function (context) {
  var self = this;
  // 处理参数，绑定的时候参数获取 从第一个参数往后截取
  var bindArgs = Array.prototype.slice.call(arguments, 1);
  var fBound = function () {
    var args = Array.prototype.slice.call(arguments);
    // 处理new 的指向问题
    return self.apply(this instanceof fBound ? this : context, bindArgs.concat(args));
  }
  fBound.prototype = this.prototype;
  return fBound;
}

// 第三版
Function.prototype.bind2 = function (context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
  }
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  fBound.prototype = this.prototype;
  return fBound;
}



