/*
 * @Author: your name
 * @Date: 2020-04-01 11:13:46
 * @LastEditTime: 2020-04-02 06:33:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/7.整数反转.js
 */
/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (32.23%)
 * Total Accepted:    168.4K
 * Total Submissions: 512.4K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
// 遇到这个题目脑海中首先出现的思路是 将number类型变成数组符号之后单独处理
// 在原来的题解中 在反转数组的时候采用的是遍历加 concat的方法
var reverse = function (x) {
  // 将数字类型首先处理成不带符号的字符串 然后分割成数组
  let numberToArray = String(Math.abs(x)).split('')
  // 对数组进行遍历，将数组反转 这里使用了数组的另一个api
  // 这个api的作用是反转数组
  let resArr = numberToArray.reverse();

  // 将数组再变成number 这里使用三目运算符
  let resNumber = x > 0 ? Number(resArr.join('')) : -Number(resArr.join(''))
  // 最后对于边界问题进行处理
  if (resNumber < Math.pow(-2, 31) || resNumber > (Math.pow(2, 31) - 1)) {
    return 0
  } 
  return resNumber
};

let x = -123
console.log(reverse(x));


