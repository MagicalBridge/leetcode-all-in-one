## 引用

本文写给有一定Promise使用经验的人

一步步实现一个Promise

## Promise 类

首先呢，promise 肯定是一个类，同时还定义了 `resolve` 和 `reject` 方法。

```js
function Promise() {
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
function Promise() {
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
      this.state = 'reject';
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
