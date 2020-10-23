// 这里只讨论数组和对象，因为要考虑函数或者正则的话边界有些大。
// 首先写浅拷贝的实现
var shallowCopy = function (obj) {
  if (typeof obj !== 'object') {
    return;
  }
  // 首先判断 obj 是 数组还是 对象 创建返回值
  let newObj = obj instanceof Array ? [] : {};
  // 可以使用for in 循环 遍历对象和数组
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}