/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 第一种解法是暴力解法
// 说明，暴力解法时间复杂度高，但是思路清晰，编写简单。很多时候优化的解法都是通过暴力解法优化而来的
// babcd 这个字符串的话 
// 判断的过程应该是这样的 b ba bab  babc babcd 
// i++ 之后变成 a ab abc abcd 
// i++ b bc bcd 
// i++ c cd  
// i++ d
var longestPalindrome = function (s) {
  let ans = ''; // 这个字符串临时变量
  let max = 0;
  let len = s.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      // 截取出来的字符串
      let test = s.substring(i, j);
      // 如果是回文数, 且比之前已经找到的回文数大才去进行判断
      // 否则就是浪费步长
      if (isPalindromic(test) && test.length > max) {
        // 将这次循环的字符串拿出来
        ans = s.substring(i, j);
        max = Math.max(max, ans.length);
      }
    }
  }
  return ans;
};
// 判断是否是回文串函数
function isPalindromic(s) {
  let len = s.length;
  for (let i = 0; i < parseInt(len / 2, 10); i++) {
    if (s.charAt(i) !== s.charAt(len - i - 1)) {
      return false;
    }
  }
  return true;
}
// @lc code=end

