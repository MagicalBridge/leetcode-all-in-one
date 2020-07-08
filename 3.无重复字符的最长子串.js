/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 解法一：维护数组
// 使用一个数组来维护滑动窗口 (数组的滑动窗口真的是感觉很经典呀)
// 遍历字符串，判断字符串是否在滑动窗口里
// 不在则push进数组
// 在则删除滑动窗口数组里相同字符以及相同字符前的字符，然后将
// 当前字符串push进数组
// 然后将max更新为当前最长子串的长度
var lengthOfLongestSubstring = function (s) {
  // 创建一个新的数组 作为滑动窗口的数组保存下
  let arr = [];
  // 最大值变量,用于记录最大值的数据
  let max = 0;
  // 对字符串进行循环遍历
  for (let i = 0; i < s.length; i++) {
    // indexOf 返回的是第一个指定元素的位置索引。
    let index = arr.indexOf(s[i]);
    // 说明已经在数组中存在了
    if (index !== -1) {
      // splice 为什么是 index+1 而不是index？
      // 这里牵扯出来了 另外一个问题。
      arr.splice(0, index + 1)
    }
    arr.push(s.charAt(i));
    max = Math.max(arr.length, max);
  }
  return max;
};
// @lc code=end

