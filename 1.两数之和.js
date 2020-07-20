/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 直接使用hashMap方式尝试解决
// var twoSum = function (nums, target) {
//   if (nums === undefined || nums.length < 2) {
//     return nums
//   }
//   let map = new Map();
//   // 第一次遍历循环数组，对每一个元素做映射:
//   for (let i = 0; i < nums.length; i++) {
//     // 对数组做map映射, key 是元素本身 value 是元素索引
//     // js中的map方法使用set方法放进去 
//     map.set(nums[i], i);
//   }
//   console.log(map); // Map { 2 => 0, 7 => 1, 11 => 2, 15 => 3 }
//   // 这里需要注意一个知识点，就是map结构也是不允许出现重复的key
//   // 否则后面的会覆盖前面的。

//   let resArr = [];

//   // 做完映射之后再使用一次遍历。
//   for (let j = 0; j < nums.length; j++) {
//     // 每遍历一个元素，将相对应的目标值找出来
//     let anotherNumber = target - nums[j];
//     // map.has 方法用来 确定是否有
//     // map.get 取到对应的value值
//     if (map.has(anotherNumber) && map.get(anotherNumber) !== j) {
//       resArr.push(j);
//       resArr.push(map.get(anotherNumber))
//       break;
//     }
//   }
//   return resArr
// };

//  0720复习两数之和
var twoSum = function (nums, target) {
  // 创建结果数组
  let resArr = [];
  // 创建一个map做数组的映射
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  console.log(map);

  for (let i = 0; i < nums.length; i++) {
    let anotherNumber = target - nums[i];
    if (map.has(anotherNumber) && map.get(anotherNumber) !== i) {
      resArr.push(i);
      resArr.push(map.get(anotherNumber))
      break;
    }
  }
  return resArr;
}

// 测试用例
let nums = [2, 1, 2, 15];
let target = 4;

console.log(twoSum(nums, target));    // [0,2]
