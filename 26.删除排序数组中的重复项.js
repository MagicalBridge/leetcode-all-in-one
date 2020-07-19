/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 
 * 示例 1:
 * 
 * 给定数组 nums = [1,1,2], 
 * 
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 示例 2:
 * 
 * 给定 nums = [0,0,1,1,1,2,2,3,3,4],
 * 
 * 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 删除数组的重复项,这道题目和 27就地修改数组的问题
// 还是使用双指针的问题。
// 解题思路是开始的时候快慢指针都指向0 这个位置,
// 如果是pre 和cur 相同 则快指针向前走一步，如果不同，则快慢指针都向前走一步
var removeDuplicates = function (nums) {
  let pre = 0;
  let cur = 0;
  let n = nums.length;
  while (cur < n) {
    // 如果快指针指向的当前值和慢指针相同，那么,
    if (nums[cur] === nums[pre]) {
      cur++;
    } else {
      pre++;
      nums[pre] = nums[cur];
      cur++
    }
  }
  return pre + 1;
};

// 这是第二种解法，根据js梁的说法，是另外一种的
// 双指针思路。
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
};

// 数组完成排序后，我们可以放置两个指针 i 和 j 其中 i 是 慢指针，j 是快指针,
// 只要nums[i] = nums[j] 我们就递增 j 跳过重复项。

// 当我们遇到 nums[j] 不等于 nums[i] 的时候，跳过重复项的运行已经结束，因此我们
// 必须把 nums[j]的值赋值给 nums[i+1]，然后递增i,接着我们将再次重复相同的过程，直到 jj 到达数组的末尾为止。

var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

