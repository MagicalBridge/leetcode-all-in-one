// 首先我们来创建一个dep 它的主要作用是存放 watcher  观察者对象s
class Dep {
  constructor() {
    // 用来存放watcher 对象的数组
    this.subs = [];
  }
  // 在subs 中添加一个watcher 对象
  addSub(sub) {
    this.subs.push(sub)
  }
  // 通知所有Watcher对象更新视图
  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    })
  }
}

// 为了便于理解，我们只实现了添加的部分代码，主要是两件事情。
// 1、用addSub 方法可以在目前的Dep对象中添加一个 watcher 的订阅操作
// 2、用 notify 方法通知目前 Dep 对象的 subs 中的所有 Watcher 对象触发更新操作。

class Watcher {
  constructor() {
    /* 在new一个Watcher对象时将该对象赋值给Dep.target，在get中会用到 */
    Dep.target = this;
  }
  /* 更新视图的方法 */
  /* 更新视图的方法 */
  update() {
    console.log("视图更新啦～");
  }
}
Dep.target = null;