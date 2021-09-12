/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 这道题目给的标签是 数组和 hash表
// 其实思路很简单 就是首先遍历一遍数组将每个元素出现的次数
// 做一个映射，第二遍再遍历一遍数组，查看当前元素中是否大于等于2
// 如果是的话 返回true 如果不是的话返回false
var containsDuplicate = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // 这种写法真的很精巧
    let count = map.get(nums[i]) || 0;
    map.set(nums[i], count + 1)
  }

  console.log(map);

  for (let i = 0; i < nums.length; i++) {
    if(map.get(nums[i]) >= 2) {
      return true
    }
  }
  return false
};
// @lc code=end

