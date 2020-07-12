/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (53.82%)
 * Total Accepted:    163.8K
 * Total Submissions: 267.2K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明:
 * 
 * 
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 * 
 * 
 */
// 第一种思路是扫描一遍数组,看看有多少非零元素，将非零元素填补到
// 数组的前面的位置，没有填补的部分用0进行填充。这是最简单的一种思路。
// 第一种方法的时间复杂度是O(n)级别的。
// 空间复杂度是O(n) 我们这种算法不是原地算法 利用了额外的空间
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   let nonZeroElements = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nonZeroElements.push(nums[i]);
//     }
//   };

//   // 将nonZeroElements 放回原来的数组
//   // 经过这次循环我们可以知道 现在nums中从0到nonZeroElements.length-1 部分的元素
//   // 都是原来数组中非零的元素
//   for (let i = 0; i < nonZeroElements.length; i++) {
//     nums[i] = nonZeroElements[i];
//   }

//   // 剩下的元素简单的赋值为0 就好了
//   for(let i = nonZeroElements.length;i<nums.length;i++) {
//     nums[i] = 0;
//   }
// };


// 这里使用双指针的这种解题的思路，设置一个k变量作为突破口
// var moveZeroes = function (nums) {
//   let k = 0; // k的含义是从[0,k) 前闭后开的区间内 全部都是非零元素。

//   // 遍历到第i个元素后，保证[0,i] 中所有的非零元素
//   // 都按照顺序排列在[0,k) 中

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[k] = nums[i];
//       k++;
//     }
//   };

//   for (let i = k; i < nums.length; i++) {
//     nums[i] = 0;
//   }
// };

var moveZeroes = function (nums) {
  let k = 0; // k的含义是从[0,k) 前闭后开的区间内 全部都是非零元素。

  // 遍历到第i个元素后，保证[0,i] 中所有的非零元素
  // 都按照顺序排列在[0,k) 中
  // 同时【k,i】为0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== k) {
        [nums[k], nums[i]] = [nums[i], nums[k]];
        k++;
      } else {
        k++
      }

    }
  };
};

