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

// 浅拷贝的原理其实也是非常简单 可以受用 Object.assingn() 也可以使用
// for in 循环 来实现
// function shallowCopy(obj) {
//   if (typeof obj !== 'object') {
//     return
//   }
//   // 这个部分写错了 真的很不应该
//   let newObj = Array.isArray(obj) ? [] : {}
//   for (let key in obj) {
//     if(obj.hasOwnProperty(key)) {
//       newObj[key] = obj[key]
//     }
//   }
//   return newObj
// }