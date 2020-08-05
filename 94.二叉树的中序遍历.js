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
// 再次说明一下,我们遍历使用的两种方式, BFS DFS 
// 所谓的 BFS 是一层一层的遍历
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

// 如果不使用递归的解法，这道题目应该如何解决呢？
// 中序遍历我看图解使用的是DFS的算法,看这个写法就知道
var inorderTraversal = function (root) {
  // 创建一个数组用于保存最后输出的值
  let res = [];
  // 创建一个stack栈，用于辅助存储结构。
  let stack = [];
  // 将root指针赋值给 curr
  let curr = root;
  // 这个循环条件之后再慢慢体会
  while (curr !== null || stack.length > 0) {
    // 把 node 放进stack 不断的判断 curr
    // 不为 null 就一直向里面push左孩子
    while (curr != null) {
      stack.push(curr);
      curr = curr.left;
    }
    // 把stack里的node放进res
    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }
  return res
};
// @lc code=end

