/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] Binary Search
 *
 * https://leetcode-cn.com/problems/binary-search/description/

 *
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的
 * target，如果目标值存在返回下标，否则返回 -1。
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
// 二分搜索的关键是确认边界条件
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1; // 这样的范围是可以取到的范围是[0,数组的最后一个数字] 两边都是闭区间

  while (l <= r) { // 左边等于右边的情况也是能够取到的
    let mid = parseInt((l + r) / 2, 10); // 
    if (nums[mid] === target) {
      return mid;
    }

    // 如果目标值 大于 中间值
    if (target > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  // 找不到返回 -1  没有认真读题
  return -1
};

// 0720复习二分查找
var search = function (nums, target) {
  // 设置的区间是 左边闭区间 右边也是闭区间
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) { // 因为是闭区间，所以 等于也是成立的
    let mid = parseInt((left + right) / 2, 10);

    if (nums[mid] === target) {
      return mid
    }

    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1
    }
  }
  return -1;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 7;
console.log(search(nums, target));
