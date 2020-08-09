/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 明显的看通过率的话没有349题那么多,这道题目要求
// 还要考虑到元素出现次数。
// 真的是每一次看相同的知识点都能感觉到不一样的感觉
var intersect = function (nums1, nums2) {
  // 首先用一个hashMap 记录每个元素出现的次数
  let map = new Map();
  let resArr = [];
  // 遍历一遍数组,将map做一个映射
  for (let i = 0; i < nums1.length; i++) {
    // 如果map中存在, 首先获取到当前的count 然后+1更新一下map
    if (map.has(nums1[i])) {
      let count = map.get(nums1[i]);
      map.set(nums1[i], count + 1)
    } else { // 
      map.set(nums1[i], 1)
    }
  }
  // 遍历第二个数组，检查数字在hashmap 中是否存在
  // 如果存在且计数为正，则将数字添加到答案并减少HashMap中的计数
  // 检查数组的大小并对较小的数组进行hash映射是一个小的技巧，当其中一个数组
  // 比较大时，会减少内存的使用
  for (let i = 0; i < nums2.length; i++) {
    // 判断nums2是否在map中存在
    let currentCount = map.get(nums2[i])
    if (currentCount > 0) { // 出现过
      resArr.push(nums2[i]);
      map.set(nums2[i], currentCount - 1)
    }
  }

  return resArr;
};
// @lc code=end

