/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 第一种解法,使用两个变量 i 和 他们分别表示买进这支股票和卖出这支股票，枚举它们在价格数组上可能出现的所有位置
// 编码很简单，
var maxProfit = function (prices) {
  let len = prices.length;
  if (len < 2) {
    return 0;
  }
  // 有可能不做交易，所以初始值为0
  let res = 0;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      res = Math.max(res, prices[j] - prices[i]);
    }
  }
  return res;
};
// @lc code=end

