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
// var lengthOfLongestSubstring = function (s) {
//   // 创建一个新的数组 作为滑动窗口的数组保存下
//   let arr = [];
//   // 最大值变量,用于记录最大值的数据
//   let max = 0;
//   // 对字符串进行循环遍历
//   for (let i = 0; i < s.length; i++) {
//     // indexOf 返回的是第一个指定元素的位置索引。
//     let index = arr.indexOf(s[i]);
//     // 说明已经在数组中存在了
//     if (index !== -1) {
//       // splice 为什么是 index+1 而不是index？
//       // 第二参数的含义是 删除多少个 如果刚好 这个参数
//       // 就拿这个  abcabcbb 这个字符串为例子, 当走到 第二个a的时候,
//       // index 是 0 删除肯定要删除一个 所以这里 +1 
//       // 同样的b 也是这种情况 c 也是这样情况。第一轮结束之后。
//       // index 这个也是从0 开始计数的，索引和数量正好相差1.
//       arr.splice(0, index + 1)
//     }
//     arr.push(s.charAt(i));
//     // 留在数组中的部分数量。是不重复的元素。每一轮都更新一下。
//     max = Math.max(arr.length, max);
//   }
//   return max;
// };

// 在这里回忆一下解决方案，这个题目是没有重复的最长公共子串
// 是维护一个数组 这个数组就是滑动窗口。


// 入参是一个字符串
var lengthOfLongestSubstring = function (s) {
  // 这道题目也没有边界条件，不过没有关系，边界条件可能没有
  // 但是必须是需要思考的
  let arr = [];// 设置一个空的数组作为滑动窗口
  // 最终返回出去的是这个值。
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    // 这个index 应该如取值呢？就是看看数组中是否有
    // 这个对应的字符串 数组的indexOf 方法 查找每一个字符串
    // 这个api的核心能力就是 在数组中查找这个字符串第一次出现的位置
    // 如果查到了就返回第一个索引，如果没有查询到返回 -1;
    let index = arr.indexOf(s[i]);

    // 说明这个字符串在这个数组的内部，这个时候需要做的就是
    // 将这个字符串和之前的元素全部清除。
    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    // s.charAt(i) 返回的是 当前的元素 将元素push进去。
    arr.push(s.charAt(i));
    max = Math.max(arr.length, max)
  }
  return max
}
// @lc code=end
