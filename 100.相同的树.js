/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 *
 * https://leetcode-cn.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (52.54%)
 * Total Accepted:    72.6K
 * Total Submissions: 127.5K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * 
 * 示例 1:
 * 
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 * 
 * ⁠       [1,2,3],   [1,2,3]
 * 
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入:      1          1
 * ⁠         /           \
 * ⁠        2             2
 * 
 * ⁠       [1,2],     [1,null,2]
 * 
 * 输出: false
 * 
 * 
 * 示例 3:
 * 
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 * 
 * ⁠       [1,2,1],   [1,1,2]
 * 
 * 输出: false
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 靠直觉，最简单的方式是使用递归 首先判断 p 和 q 是不是null然后判断他们的值是否相等
// 如果以上判断都通过，则递归对子节点做相同的操作
var isSameTree = function (p, q) {
  // 上面的这三个判断其实递归的终止条件
  // 两个节点都是null
  if (p === null && q === null) {
    return true
  }
  // 有一个为null 另一个不是 肯定不相同
  if (p === null || q === null) {
    return false
  }
  // 说明这个节点不是null 就比较两个值的大小
  if (p.val !== q.val) {
    return false
  }
  // 同时满足才行
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
