// 在真实的调用场景中 第一个参数是构造函数后面跟着的就是参数
// 我们使用new 操作符操作一个构造函数的时候 会创建一个对象
// 这个对象可以继承构造函数的内部属性和原型链上的方法。
// 1 用new Object() 的方式新建了一个对象 obj
// 2 取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
// 3 将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
// 4 使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
// 5 返回 obj
function objFactory() {
  var obj = new Object(),
  Constructor = Array.prototype.shift.call(arguments);
  // 下面这两个步骤其实非常的重要
  obj.__proto__ = Constructor.prototype;
  // 改变this指向构造函数中
  var ret = Constructor.apply(obj, arguments);
  return  typeof ret === 'object' ? ret : obj;
}