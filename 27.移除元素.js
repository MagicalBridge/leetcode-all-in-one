/*
 * @Author: your name
 * @Date: 2020-04-01 11:14:28
 * @LastEditTime: 2020-06-08 09:14:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * 
 * @FilePath: /leetcode/27.移除元素.js
 */
/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 *
 * https://leetcode-cn.com/problems/remove-element/description/
 *
 * algorithms
 * Easy (54.50%)
 * Total Accepted:    56.3K
 * Total Submissions: 102.8K
 * Testcase Example:  '[3,2,2,3]\n3'
 *
 * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
 * 
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 
 * 示例 1:
 * 
 * 给定 nums = [3,2,2,3], val = 3,
 * 
 * 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 示例 2:
 * 
 * 给定 nums = [0,1,2,2,3,0,4,2], val = 2,
 * 
 * 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
 * 
 * 注意这五个元素可为任意顺序。
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 说明:
 * 
 * 为什么返回数值是整数，但输出的答案是数组呢?
 * 
 * 请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 * 
 * 你可以想象内部操作如下:
 * 
 * // nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
 * int len = removeElement(nums, val);
 * 
 * // 在函数里修改输入数组对于调用者是可见的。
 * // 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 这道题目给的一个提示标签是 array 和 two-pointers
// 原地删除的意思是 不能使用额外的空间，不能创建中间变量
// 并返回移除后数组的新的长度
// 看这个题目的意思是将数组中所有的重复的元素全部移除。
// 数组移除数据的题目很容易就能想到双指针的思路，其中的一个
// 指针非常好理解其实就是当前的for循环的指针。
// 另外一个指针是什么呢 另一个指针也从0开始。
// 描述下自己的思路
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    // 如果发现 循环遍历的当前元素和目标元素不同时候
    if(nums[i] !== val) {
      nums[k] = nums[i];
      k++
    }
  }
  //根据最后的实践结果
  return k;
};

let nums = [3,2,2,3];
let val = 3;

console.log(removeElement(nums,val));
