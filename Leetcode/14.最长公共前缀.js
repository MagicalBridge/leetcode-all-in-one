/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.01%)
 * Total Accepted:    112.1K
 * Total Submissions: 324.7K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
// 这道题目最后的返回值是最长的公共前缀
// 有一个边界条件是可以分为数组没有元素 只有一个元素 还是有两个元素
var longestCommonPrefix = function (strs) {
  // 数组如果长度小于2 分为两种情况 一个元素或者没有
  if (strs.length < 2) {
    return strs.length === 0 ? '' : strs[0];
  }
  // 剩下的情况都是strs大于等于0的情况
  let firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (firstStr[i] !== strs[j][i]) {
        // 这个部分并不是很熟练 我犹豫的部分是 i 
        // substring 提取从 indexStart 到 indexEnd（不包括）之间的字符。
        return firstStr.substring(0, i)
      }
    }
  }
  return firstStr;
}
