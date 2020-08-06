/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
// 关于二叉树的
var postorderTraversal = function (root) {
  let result = [];
  helper(root, result);
  return result;
};
// 
var helper = function (root, result) {
  if (root !== null) {
    if (root.left !== null) {
      helper(root.left, result)
    }
    if (root.right !== null) {
      helper(root.right, result)
    }
    result.push(root.val)
  }
}
// @lc code=end

