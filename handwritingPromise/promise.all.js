const isPromise = function (value) {
  if ((typeof value === 'object' && typeof value !== null) || typeof value === 'function') {
    if (typeof value.then === 'function') {
      return true
    }
  } else {
    return false;
  }
}

// Promise 这个方法中只要有一个失败就都失败
Promise.all = function (values) {
  // 返回一个promise
  return new Promise((resolve, reject) => {
    let arr = [];
    let index = 0; // 解决多个异步的并发问题，要使用计数器
    function processData(key, value) {
      index++
      arr[key] = value;
      if(index === value.length) {
        resolve(arr)
      }
    }

    for (let i = 0; i < values.length; i++) {
      let current = values[i];
      if (isPromise(current)) {
        current.then((data) => {
          processData(i, data);
        })
      } else {
        processData(i, current);
      }
    }
  })
};