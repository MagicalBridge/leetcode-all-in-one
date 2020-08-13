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
// var twoSum = function (nums, target) {
//   // 创建结果数组
//   let resArr = [];
//   // 创建一个map做数组的映射
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], i);
//   }
//   console.log(map);

//   for (let i = 0; i < nums.length; i++) {
//     let anotherNumber = target - nums[i];
//     if (map.has(anotherNumber) && map.get(anotherNumber) !== i) {
//       resArr.push(i);
//       resArr.push(map.get(anotherNumber))
//       break;
//     }
//   }
//   return resArr;
// }

// 0725 复习两数之和 
// 这道题目的要求是 给定一个数组和一个目标值，数组中的两个数的和等于目标值
// 返回这两个索引
var twoSum = function (nums, target) {
  // 边界条件: 数组的长度小于2 的时候已经不符合题目要求
  if (nums.length < 2 || nums === undefined) {
    return nums
  }
  let resArr = []; // 创建结果数组
  // 唯手熟尔 使用map这种映射，映射的是 数字是啥和数字出现的位置
  // 使用map 建立映射关系
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // 创建映射关系
    map.set(nums[i], i);
  }

  // 第二次遍历, 每遍历一个数字就在map中寻找看是否存在
  for (let i = 0; i < nums.length; i++) {
    // 另外一个数字，是目标的值减去当前的值
    let anotherNumber = target - nums[i]
    // 这个判断是 map中包含这个值,且不是当前这个值
    if (map.has(anotherNumber) && map.get(anotherNumber) !== i) {
      // push 进去的是索引
      resArr.push(i);
      resArr.push(map.get(anotherNumber));
      break;
    }
  }
  return resArr;
}
// 现在我们不仅要将代码写出来，还需要做的其实是，找到比较优秀的解法:
// 这里面还有一个解法就是将两个for循环合并成一个
// 这个题目开始的时候疑惑点是为什么没有
var twoSum = function (nums, target) {
  let map = new Map();
  let resArr = [];
  for (let i = 0; i < nums.length; i++) {
    // 因为是一次for循环 且map 中不能存在两个相同的key
    // [2,3,2,5] target 是 4 返回的索引是 [0,2]
    // 其实是一个边放数字边判断的过程
    if (map.has(target - nums[i])) {
      resArr[0] = i;
      resArr[1] = map.get(target - nums[i])
      break;
    }
    map.set(nums[i], i)
  }
  return resArr
}

// 测试用例
let nums = [2, 1, 2, 15];
let target = 4;

console.log(twoSum(nums, target));    // [0,2]
