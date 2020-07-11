/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (38.05%)
 * Total Accepted:    76.2K
 * Total Submissions: 196.4K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 * 
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 * 
 * 示例 1:
 * 
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 * 
 * 
 * 说明:
 * 
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 * 
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 实现的方式是使用滑动窗口, 沿着字符串逐步移动滑动窗口，将窗口内的字符串和needle字符串比较
// 虽然实现起来貌似比较简单，但是
var strStr = function (haystack, needle) {
  // 分别保存两个数字的长度。
  let l = needle.length;
  let n = haystack.length;

  // 这个地方循环的条件为什么是 n - l + 1;
  // 这其实是一种算法，假设 haystack 是8  needle 是 4
  // 那么 滑动的次数就是 8 - 4 + 1 = 5 次
  // 这仿佛是一种 算法逻辑
  for (let i = 0; i < n - l + 1; i++) {
    // 循环的次数 substring 这种情况下  i = 0  i+2 = 2
    // 不包含 i+l 这个元素。
    if (haystack.substring(i, i + l) === needle) {
      return i
    }
  }
  // 找不到返回-1;
  return -1;
};

