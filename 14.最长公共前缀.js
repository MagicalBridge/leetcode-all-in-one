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
// 最长公共前缀，我在之前有有用过图解法解决过，其实思路还是比较清晰的
var longestCommonPrefix = function (strs) {
  // 首先还是判断边界条件，判断数组的长度为0的情况
  // 如果数组为空 直接返回 '' 如果数组 是只有一个元素，返回这一个元素即可。
  if (strs.length < 2) {
    return strs.length === 0 ? '' : strs[0]
  }
  // 我们以第一个元素为基准
  let firstStr = strs[0];
  // 外层for循环，就是以第一个字符串为 标尺 挨个进行遍历
  // 然后和数组的其他的几项同个位置的元素进行比较，待不同的时候直接返回
  for (let i = 0; i < firstStr.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (firstStr[i] !== strs[j][i]) {
        return firstStr.substring(0, i)
      }
    }
  };
  return firstStr;
}
