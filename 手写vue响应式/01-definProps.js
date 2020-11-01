// 这个函数接收三个参数 当前对象 对象的key 和对应的value
function defineReactive(obj, key, val) {
  // 递归进行调用
  Observe(val)

  // 对传入的obj进行访问拦截 第三个对象是对象描述符
  Object.defineProperty(obj, key, {
    get() {
      console.log('get ' + key);
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set ' + key + ':' + newVal);
        // 如果传递进来newVal 依然是obj 需要进行响应化处理
        val = newVal;
      }
    }
  })
}

// 使用这个方法可以轻松的遍历所有的对象
function Observe(obj) {
  if (typeof obj !== 'object' || obj == null) {
    // 希望传入的是obj 这个判断算是递归的基线条件
    return
  }
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
};

// 响应式数据
const obj = { foo: 'foo', bar: 'bar', baz: { a: 1 } };

// 使用 Observer响应化处理
Observe(obj);
obj.foo
obj.foo = 'fooooooooooo'
console.log('------------');
obj.bar
obj.bar = 'barrrrrrrrrr'
console.log('------------');
obj.baz
obj.baz.a = 2;
console.log('------------');
// 






