/*
 * @Author: your name
 * @Date: 2020-04-01 11:14:15
 * @LastEditTime: 2020-04-08 13:23:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/14.最长公共前缀.js
 */
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
// 这道题目以第一个为基准
var longestCommonPrefix = function (strs) {
  // 判断数组的长度，判断数组为一项和多项的情况
  // 如果数组只有一个，那么判断数组这项是否为空
  if (strs.length < 2) {
    // 如果小于2 有两种可能 数组的长度是0，直接返回 '' 如果只有一个直接返回第一项
    return strs.length === 0 ? '' : strs[0];
  }
  // 剩下的情况就是数组的长度大于等于2的情况
  let firstStr = strs[0]; // 将数组的第一项取出来
  // 外层循环从第一项开始,
  for (let i = 0; i < firstStr.length; i++) {
    for (let j = 1; j < strs[j].length; j++) {
      if (firstStr[i] !== strs[j][i]) {
        return firstStr.substring(0, i);
      }
    }
  }
  return firstStr;
};

