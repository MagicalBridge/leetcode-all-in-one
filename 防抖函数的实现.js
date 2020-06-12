/*
 * @Author: your name
 * @Date: 2020-06-12 09:36:37
 * @LastEditTime: 2020-06-12 09:41:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/防抖函数的实现.js
 */
// 不断地总结和实现 这中间的过程
function debounce(func, wait) {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}
// 虽然写出来了但是明显的感觉是没有真正的掌握这个核心和精髓
