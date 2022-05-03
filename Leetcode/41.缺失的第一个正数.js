/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 通过对于数组中元素的规律探寻可以看到
// 一旦数组中出现 小于等于0 的数, 或者出现 大于等于 n+1 的数
// 那么1-n 中必定会有数字缺失，这里 n 指的是数组的长度
// 缺失的第一个正数肯定在 [1.....n+1] 这个闭区间内。这是非常重要的一点。
// 对于[1,2,0] 这个数组来说, 数组的长度是3 且数组中包含0  那么 [1 - 4] 区间中必然包含缺失的元素。


// 解法一 能够想要的一个解法是使用 set 这种数据结构
var firstMissingPositive = function (nums) {
  // 创建一个set
  let set = new Set();

  nums.forEach(x => set.add(x));

  console.log(set); // Set { 3, 4, -1, 1 }

  let res = 1; // 思考为什么从1开始，是因为寻找的是正整数所以从1 开始
  let n = nums.length; // n 是数组第一个没有元素的位置。

  while (res <= n) { // n 是能够取到了 假设数组是[1,2,3,4] 最后返回的 res 是++ 之后的
    // 说明没有找到对应的数字 将这个数字返回即可
    // 如果找到了 res加一
    if (set.has(res) === false) {
      return res
    } else {
      res++
    }
  }
  return res;
};

var firstMissingPositive = function (nums) {
  // 创建一个set
  let set = new Set();

  nums.forEach(x => set.add(x));

  console.log(set); // Set { 3, 4, -1, 1 }
  // for 循环遍历这个数组
  // [1,2,3,4] 
  let res = 1;
  let n = nums.length; // 4
  for (let i = 0; i < n; i++) {
    if (set.has(res) === false) {
      return res
    } else {
      res++;
    }
  }
  return res;
};

firstMissingPositive([3, 4, -1, 1])
// @lc code=end

