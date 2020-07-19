// 首先我们来定义一个cb函数，这个函数是用来模拟视图更新的
// 调用它即代表更新视图，内部可以是一些更新视图的方法。
function cb(val) {
  /* 渲染视图 */
  console.log(`视图更新啦～, 新的的数据是 ${val}`);
}

// 我们定义一个 defineReactive 这个方法 通过 Object.defineProperty
// 来试下对对象的【响应式】化，入参是一个 obj(需要绑定的对象) key （obj的某一个属性）
// val（具体的值）
// 经过 defineReactive 处理以后，我们的 obj 的 key 属性在「读」的时候会触发 
// reactiveGetter 方法，而在该属性被「写」的时候则会触发 reactiveSetter 方法。
function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    enumerable: true,       /* 属性可枚举 */
    configurable: true,     /* 属性可被修改或删除 */
    get: function reactiveGetter() {
      return val;         /* 实际上会依赖收集，下一小节会讲 */
    },
    set: function reactiveSetter(newVal) {
      if (newVal === val) return;
      cb(newVal);
    }
  });
}

// 当然上面这样的还是不够的，我们还需要在上面封装一层 observer 
// 这个函数需要传入一个value（需要响应式化的对象），通过遍历所有属性的
// 方式对对象的每一个属性都使用defineReactive处理
// （注：实际上 observer 会进行递归调用，为了便于理解去掉了递归的过程）
function observer(value) {
  if (!value || (typeof value !== 'object')) {
    return;
  }
  // 使用Object.keys 将value 中所有的可以枚举的属性都拿到
  // 返回的一个数组, 数组中的每一项都是对应的 key  value[key] -> val
  Object.keys(value).forEach((key) => {
    defineReactive(value, key, value[key]);
  });
}

class Vue {
  constructor(options) {
    this._data = options.data;
    observer(this._data);
  }
}

let o = new Vue({
  data: {
    test: "I am test."
  }
});

o._data.test = "hello,world.";  /* 视图更新啦～ */