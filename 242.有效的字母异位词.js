/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 第一种方法 强使用api进行计算
// 这种也是常说的先排序再比较。
var isAnagram = function (s, t) {
  let sStr = s.split('').sort().join('');
  let tStr = t.split('').sort().join('');
  return sStr === tStr
};

// 另一种解决方法
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  // 字符串也是可以使用of进行遍历的
  for (const item of t) {
    // item 在字符串s 存在
    if (s.indexOf(item) !== -1) {
      // 这里使用了 replace 方法
      // replace 方法返回一个新的字符串，一个参数可以是一个正则
      // 表达式，也可以是正则表达式 返回一个新的字符串
      s = s.replace(item, "");
    }
  }
  return s === ""
};
// @lc code=end

