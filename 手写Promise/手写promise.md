## 引用

本文写给有一定Promise使用经验的人

一步步实现一个Promise

## Promise 类

首先呢，promise 肯定是一个类，同时还定义了 `resolve` 和 `reject` 方法。

```js
function Promise(executor) {
  // 初始化state 为等待状态
  this.state = 'pending';
  // 成功回调
  this.value = undefined;
  // 失败的原因
  this.reason = undefined;
  // 存放fn1的回调
  this.fn1Callback = [];
  // 存放fn2的回调
  this.fn2Callback = [];
  // 成功
  let resolve = () => {};
  // 失败
  let reject = () => {};
  
  executor(resolve,reject);
}
```

上面的代码实现了 Promise的构造函数的主体，但是有两个问题:

1、 executor 有可能会出错，对吧，毕竟是用户传进来的方法，类似于下面这样，如果executor出错，报错我们需要用 try catch 捕获一下，Promise 应该被其throw出的值reject。

```js
new Promise(function(resolve, reject){
  console.log(a)
})
```

2、resolve，reject 还是空的函数，我们需要在里面补上逻辑。

```js
function Promise(executor) {
  // 初始化state 为等待状态
  this.state = 'pending';
  // 成功回调
  this.value = undefined;
  // 失败的原因
  this.reason = undefined;
  // 存放fn1的回调
  this.fn1Callback = [];
  // 存放fn2的回调
  this.fn2Callback = [];
  // 成功
  let resolve = (value) => {
    // state 改变 resolve调用就会失败
    if(this.state === 'pending') {
      // resolve 调用后，state 转化为成功状态
      this.state = 'fullfilled'
      // 储存成功的值
      this.value = value;
    }
  };
  // 失败
  let reject = (reason) => {
    // state改变 reject调用就会失败
    if(this.state === 'pending') {
      // reject 调用后， state 转化为失败态
      this.state = 'rejected';
      // 存储失败的原因
      this.reason = reason
    }
  };
  // executor 执行函数 直接执行reject
  try {
    executor(resolve,reject);
  } catch (err){
    reject(err)
  }
}
```

## 实现then方法

Promise 对象有一儿then方法用来注册在这个Promise状态确定后的回调。当Promise的状态发生了变化，不论是成功或者是失败都会调用then方法。

then的方法使用的方式如下:

```js
// then 方法传入两个方法作为参数，fn1 和 fn2 方法
p1.then(function fn1(data) {
  // fn1 方法的参数 用于获取promise对象的值
},function fn2(err){
  // fn1 方法的参数， 用于获取失败的原因
})
```

从上面的例子，很明显，我们得出结论:

1、then 方法可以在 p1 实力上调用，因此 then 方法的实现是在Promise 的 prototype上面的。
2、then 方法会返回一个Promise，而且是返回一个Promise对象。
3、可以多次调用 then 方法，也就是链式调用，并且每次会返回一个新的Promise对象，promise状态是不确定的，可能是fullfined，也可能是resolve 取决于那一次调用then时，fn1的返回值。

所以 then 方法的实现也很简单，根据Promise状态来调用不同的回调函数即可。

```js
Promise.prorotype.then = function(fn1, fn2) {
  var self = this;

  var promise2

  // 首先对入参fn1 fn2做判断

  fn1 = typeof fn1 === 'function' ? fn1: function(v) {}
  fn2 = typeof fn2 === 'function' ? fn2: function(r) {}

  if(self.state === 'resolve') { // ? 额这个 为什么会有resolve这种状态
    return promise2 = new Promise(function(resolve,reject){
      // todo
    })
  }

  if(self.state === 'reject') {
    return promise2 = new Promise(function(resolve,reject){
      // todo
    })
  }

  if(self.state === 'pending') {
    return promise2 = new Promise(function(resolve,reject){
      // todo
    })
  }
}
```

首先 对fn1 和 fn2 做判断，规范中说，fn1 和 fn2 都是可选参数

也就是说可以传递也可以不传递，传入的回调函数也不是一个函数类型，那怎么办？ 规范中说忽略它就好，因此需要判断一下回调函数的类型，如果确定是函数才去执行它。

其次，Promise总共有三种可能的状态 我们分别使用 三个if来处理，在里面都分别返回一个 new Promise

所以接下来的逻辑是:

* 如果 promise 状态是 resolved 需要执行 fn1;
* 如果 promise 状态是 rejected 需要执行 fn2;
* 如果 promise 状态是 pending 我们并不能确定是调用 fn1 还是调用 fn2 只能先把方法都存起来 fn1Callback fn2Callback 数组中，等到 Promise 的状态确定后再做处理。



