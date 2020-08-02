/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 第一种方法就是使用递归， 很多的解法中，递归都有辅助函数
// 有了递归辅助函数，写递归是不是就轻松很多。
var inorderTraversal = function (root) {
  // 创建一个数组，用于存储数据的结果
  let res = [];
  helper(root, res);
  return res
};

// 这个递归辅助函数非常重要
function helper(root, res) {                                                                                                                     
  if (root !== null) {
    if (root.left !== null) {
      helper(root.left, res);
    }
    res.push(root.val);
    if (root.right !== null) {
      helper(root.right, res);
    }
  }
}
// @lc code=end

