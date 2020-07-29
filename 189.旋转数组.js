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

// 0729复习 这道题目 考博老说 说如果没见过不好做
// 但是这道题目可以采用三次翻转得到。
// 第一次翻转 我们全部倒过来 7654321
// 第二次 我们根据翻转的次数 分成两边
// 765 | 4321 
// 左边翻转 变成 567  
// 右边再进行翻转变成 1234
var rotate = function (nums, k) {
  // 首先求余数 比方说我这里有7 个数  我翻转7次 还是这个样子
  k %= nums.length;
  // 首先整个数组翻转
  reverse(nums, 0, nums.length - 1);
  // 然后翻转 翻转 前k个元素
  reverse(nums, 0, k - 1);
  // 翻转从k 到最后一位
  reverse(nums, k, nums.length - 1);
}

// 数组和字符串的翻转
function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++
    end--;
  }
}
rotate([1, 2, 3, 4, 5, 6, 7], 3);
// @lc code=end

