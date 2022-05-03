/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */
// 使用ts 复习二分搜索 
// parseInt        l          r
// 如果测试用例是:  [-1,0,3,5,9,12] 9 
// @lc code=start
function search(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;
  while (left <= right) {
    let middle: number = Math.floor((left + right) / 2);
    if (target === nums[middle]) {
      return middle;
    }

    if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1
};
let nums: number[] = [-1, 0, 3, 5, 9, 12];
let target = 9;

search(nums, target)
// @lc code=end  

