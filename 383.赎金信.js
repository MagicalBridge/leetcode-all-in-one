/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// 苹果公司考过这个题目
// 这个题目的标签是 string 
// 这道题目的思路也是非常的简单，首先遍历一遍 magazine 使用map统计每一个字符出现的个数
// 然后再遍历一遍 ransomNote 字符串, 判断map 中是否有 ransomNote的字符串，如果没有 直接返回false
// 还有一种情况，数量不够也需要返回false 所以计数每找到一个计数变量-1。
var canConstruct = function (ransomNote, magazine) {
  let map = new Map();
  for (let i = 0; i < magazine.length; i++) {
    // 这句非常重要 map的get方法 如果找不到就返回 undefined;
    let count = map.get(magazine[i]) || 0;
    map.set(magazine[i], count + 1);
  }

  console.log(map);

  for (let i = 0; i < ransomNote.length; i++) {
    let count = map.get(ransomNote[i]);
    if (count === undefined || count <= 0) {
      return false;
    }
    map.set(ransomNote[i], count - 1);
  }
  return true
};
// @lc code=end

