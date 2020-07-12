/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 这道题目的思路其实很简单，就是先遍历一遍字符串
// 将字符串出现的次数记录下来，第二遍的时候 看看第一个是1的字符串的索引
// 然后返回出来
var firstUniqChar = function (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    // 这里可以换一种写法 如果取不到说明没有出现过赋值为0
    let count = map.get(s[i]) || 0;
    // 将值映射进去
    map.set(s[i], count + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i
    }
  }
  return -1
};
// @lc code=end

