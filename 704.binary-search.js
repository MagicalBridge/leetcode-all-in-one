/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] Binary Search
 *
 * https://leetcode-cn.com/problems/binary-search/description/
 *
 * algorithms
 * Easy (48.54%)
 * Total Accepted:    49.4K
 * Total Submissions: 91.4K
 * Testcase Example:  '[-1,0,3,5,9,12]\n9'
 *
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的
 * target，如果目标值存在返回下标，否则返回 -1。
 * 
 * 
 * 示例 1:
 * 
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 解释: 2 不存在 nums 中因此返回 -1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 你可以假设 nums 中的所有元素是不重复的。
 * n 将在 [1, 10000]之间。
 * nums 的每个元素都将在 [-9999, 9999]之间。
 * 
 * 
 */
// 二分搜索是非常经典的算法，主要需要考虑的是边界条件
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 首先考虑边界条件，二分搜索貌似是没有边界条件的
  let l = 0;
  let r = nums.length - 1
  // 通过上述变量的设置 能够保证的是 左右边界都是可以取到的。
  while (l <= r) { // 因为我们设置的是左边和右边都是闭区间,
    let mid = parseInt((l + r) / 2, 10);

    if (nums[mid] === target) {
      return mid;
    }

    if (target > nums[mid]) {
      l = mid + 1
    } else {
      r = mid - 1;
    }
  }
  return -1;
};

