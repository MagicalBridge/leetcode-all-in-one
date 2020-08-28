/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
// 问题: 1、如何使用ts 声明一个数组 突然忘记了 已经添加了记忆卡片
function twoSum(nums: number[], target: number): number[] {
  let resultArr: number[] = []; 
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === target - nums[j]) {
        resultArr.push(i);
        resultArr.push(j);
      }
    }
  }
  return resultArr
};
// @lc code=end

