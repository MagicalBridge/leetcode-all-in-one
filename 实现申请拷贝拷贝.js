/*
 * @Author: your name
 * @Date: 2020-06-09 09:38:32
 * @LastEditTime: 2020-06-09 10:00:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/实现申请拷贝拷贝.js
 */
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

// 再写一个深拷贝的例子;
var deepCopy = function (obj) {
  if (typeof obj !== 'object') {
    return;
  }
  let newObj = obj instanceof Array ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 因为是深拷贝，所以这里需要做一些简单的判断
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}

