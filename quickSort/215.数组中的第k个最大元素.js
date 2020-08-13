/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 快速排序的算法
var quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);

  var pivot = arr.splice(pivotIndex, 1)[0];

  var left = [];

  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
};
// 这道题目可以先使用快速排序，首先需要复习一下快速排序算法
// 然后返回 k-1 的位置。
// 快速排序算法的思想其实很简单
// 一：在数据集中，选择一个元素作为基准
// 所有小于基准的元素都移动到基准的左边，所有大于基准的元素都移动到基准的右边
// 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
var findKthLargest = function (nums, k) {
  if (nums.length === 1) {
    return nums[0]
  }
  let sortArr = quickSort(nums);
  // 排序完毕的数组找到 第K个最大的元素
  return sortArr[nums.length - k + 1]
};
// var nums = [3, 2, 1, 5, 6, 4];
// findKthLargest(nums)
// @lc code=end

