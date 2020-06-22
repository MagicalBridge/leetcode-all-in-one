/*
 * @Author: your name
 * @Date: 2020-06-22 09:11:39
 * @LastEditTime: 2020-06-22 12:40:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/数组去重/unique.js
 */
let array = [1, 1, '1', '1'];
// 使用最原始的方式进行
function unique(array) {
  // res 从来保存结果
  let res = [];
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++) {
      if (array[i] === res[j]) {
        break;
      }
    }
    // 如果array[i] 是唯一的，那么执行完循环，j 等于 reslen
    // 这是因为如果遇到相同的 执行了break j和 resLen 不等了。
    if (j === resLen) {
      res.push(array[i]);
    }
  }
  return res;
}

console.log(unique(unique(array)));
// 在这个方法中 我们使用循环嵌套 外城循环 array 里面循环res 如果array[i]的值跟res[j]的值相等
// 就跳出循环，如果都不等于，说明元素是唯一的，这个时候j的值等于 res的长度 根据这个特点进行判断，将值添加进res

// 看起来很简单，这个方法的好处是兼容性非常好


// 自己的思考: 很多时候，能不能够理解只在一瞬间，耐下心，自己自信的调试一遍，印象会更加深刻。
// 这种双重for循环的问题还是需要单步进行调试，才能说得清楚。
// 第一次循环的时候 已经能够确定的是 数组的长度是4, 走到内层循环的时候 初始化的时候 resLen=0 j<resLen 不符合直接跳出内层
// 走到判断逻辑。j === resLen 这句话的时候 直接添加进去。 此时 res -> [1]

// 接下来 i++ 变成 1 开始判断第二个 每次循环的时候 j都是从0 开始计数的，因此 j=0 走到 内层的 判断逻辑
// array[1] 和 res[1] 是相同的 直接跳出循环,跳出循环的时候，j并不会执行++ 操作。 走到下面的if操作 不符合

// 接下来 i++ 变成2 开始执行第三次循环 每次循环的时候 j都是从0 开始计数的 因此 j=0 走到 内层的 判断逻辑
// array[2] 和 res[1] 不相同 


// 第二种方法 使用indexOf 简化内层循环
function unique2(array) {
  var res = [];
  for (var i = 0, len = array.length; i < len; i++) {
    var current = array[i];
    if (res.indexOf(current) === -1) {
      res.push(current)
    }
  }
  return res;
}

console.log(unique2(array));

// 排序后去重
// 试想我们将数组使用sort方法排序后，相同的值会放在一起，然后我们就可以只判断当前的
// 元素和上一个元素是否相同，相同就说明重复，不同就添加进去 
// 这里面为什么使用concat方法呢，其实很简单 这个api并不会改变原数组，而是一个拷贝的数组。
function unique3(array) {
  var res = [];
  var sortedArray = array.concat().sort();
  var seen;
  for (var i = 0, len = sortedArray.length; i < len; i++) {
    // 如果是第一个元素或者相邻的元素不相同
    if (!i || seen !== sortedArray[i]) {
      res.push(sortedArray[i])
    }
    seen = sortedArray[i];
  }
  return res;
}
