/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 这道题目今天是0809 学习算法课程的时候.
// 这道题目中给定的标签是map 这道题目应该有比较多的解法
var intersection = function (nums1, nums2) {
  // 首先创建一个 set
  let set = new Set();
  // 创建一个数组,将最后值放进去
  let resultArr = [];
  // 因为在测试用例中,遇到了一个场景，就是数组2中也可能
  // 出现相同的元素。因此,还是需要将数组转换为set
  // 循环遍历数组
  for (let i = 0; i < nums1.length; i++) {
    // 要不是编辑器的提示，我根本不知道这是个啥
    set.add(nums1[i]);
  }
  // 经过上一步的处理之后 set中的数据变成了 {1,2,1}
  // 再进行一次for循环 这次循环遍历是第二个数组
  for (let i = 0; i < nums2.length; i++) {
    // 如果set中含有数组中的某一个值，将值放入数组中
    if(set.has(nums2[i])) {
      resultArr.push(nums2[i])
    }
  }
  // 数组去重的写法，这里应用上了
  return [...new Set(resultArr)]
};
// @lc code=end

