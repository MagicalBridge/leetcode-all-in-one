/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (55.84%)
 * Total Accepted:    149.1K
 * Total Submissions: 263.9K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */
/**
 * @param {number} x
 * @return {boolean}
 */
// 回文数 这道题目最快的方法 是修改成回文字符串的形式
// 1 2 2 1
// 0 1 2 3  
var isPalindrome = function (x) {
  let numberToArray = String(x).split('')
  console.log(numberToArray)
  // 对数组进行遍历 这里面涉及到一个算法 回文数 因为是对称的，所以只需要
  // 遍历数组的长度一半就可以。
  for (let i = 0; i < numberToArray.length / 2; i++) {
    if(numberToArray[i] !== numberToArray[numberToArray.length - (i + 1)]) {
      return false
    }
  }
  return true
};

let x = 1221;
console.log(isPalindrome(x));


