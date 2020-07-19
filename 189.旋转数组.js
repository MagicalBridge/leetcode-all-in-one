/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 这道题目标记为easy 应该不是很难
// 思考这道题目中的条件
// i = 0 i 小于 3 符合条件 执行循环 数组变成了  [7,1,2,3,4,5,6]
// i = 1 i 小于 3 符合条件 执行循环 数组变成了  [6,7,1,2,3,4,5]
// i = 2 i 小于3 符合条件  执行循环 [5,6,7,1,2,3,4]
// 但是使用这种方法比较low 但是能够解决问题。
var rotate = function (nums, k) {
  // 首先还是考虑边界条件
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};

// 解法2 
// 使用的还是那种映射的关系 （i+k）% n --> i
// 这样的解法还是需要一个中间数组来作为变量
var rotate = function (nums, k) {
  // 创建一个空的数组用于中转使用
  let a = [];
  for (let i = 0; i < nums.length; i++) {
    a[(i + k) % nums.length] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = a[i];
  }
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);


// @lc code=end

