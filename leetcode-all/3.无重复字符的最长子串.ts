/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
// 参数是一个 string 类型的数据 返回是是 number
function lengthOfLongestSubstring(s: string): number {
  // 创建一个string类型的数组 初始化赋值为一个空的数组
  let arr: string[] = [];
  let max: number = 0;

  for (let i = 0; i < s.length; i++) {
    let index: number = arr.indexOf(s[i])
    // 说明在数组中存在
    if (index !== -1) {
      arr.splice(0, index + 1)
    }
    arr.push(s.charAt(i));
    max = Math.max(arr.length, max)
  }
  return max;
};
// @lc code=end

