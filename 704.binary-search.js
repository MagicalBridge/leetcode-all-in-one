/*
 * @Author: your name
 * @Date: 2020-06-23 21:54:41
 * @LastEditTime: 2020-06-23 22:03:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/704.binary-search.js
 */
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
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1; // 在[l...r] 的范围里面寻找target
  while (l <= r) { // 当l === r 时候 区间[l...r] 依然是有效的
    let mid = parseInt((l + r) / 2, 10);
    if (nums[mid] === target) {
      return mid;
    }

    if (target > nums[mid]) {
      l = mid + 1; // target 在 [mid+1 ... r] 中
    } else {
      r = mid - 1 // target 在 [l...mid-1]中
    }
  }
  return -1
};

