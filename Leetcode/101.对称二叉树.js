/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
// 深度周游使用的是深度优先周游算法
// 使用队列实现广度优先周游
// 树对称的条件:
// 子树对称的条件：
//  1、它们的两个根节点具有相同的值
//  2、每个树的右子树都与另外一个左子树镜像对称
var isSymmetric = function (root) {
  return isMirror(root, root)
};
var isMirror = function (tree1, tree2) {
  if (tree1 === null && tree2 === null) {
    return true
  }
  if (tree1 === null || tree2 === null) {
    return false
  }
  // 这三个条件是同时成立的
  return (tree1.val === tree2.val) && isMirror(tree1.right, tree2.left) && isMirror(tree1.left, tree2.right)
}
// @lc code=end

