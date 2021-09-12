/*
 * @lc app=leetcode.cn id=27 lang=javascript
 0719 复习 移除数组中的元素，题目给的一个例子是 [3,2,2,3] 
移除之后 数组的长度是 2 且数组的前两项分别是: 2,2
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
// 指针非常好理解其实就是当前的for循环的指针。另外一个指针是什么呢 另一个指针也从0开始。
var removeElement = function (nums, val) {
  // 我在写这道题目的时候在思考一个问题，你真的理解什么是双指针吗？
  let k = 0; // 这是第二个指针
  for (let i = 0; i < nums.length; i++) {
    // 通过题目的描述可以知道，这里面有一个覆盖的操作。
    // 将后面的数字覆盖到了前面，那么就肯定有赋值的操作
    // 这里总感觉是快慢指针的思路, 遇到不同的，覆盖当前k位置，k就进行自增操作
    // 自增操作之后循环完毕整个数组之后, 返回的k 就是 不相同的数字的个数。
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k
};

// 使用jsliang的这一种解题思路
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      // splice改变了原数组，因此要重新检查当前索引
      i--;
    }
  }
  return nums.length;
};

let nums = [3, 2, 2, 3];
let val = 3;

console.log(removeElement(nums, val));

// 这道题目还给了另外一种可能性，当需要删除的元素很少的时候,
