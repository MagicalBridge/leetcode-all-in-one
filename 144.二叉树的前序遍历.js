/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (59.15%)
 * Total Accepted:    119.5K
 * Total Submissions: 181.5K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [1,2,3]
 * 
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * @param {TreeNode} root
 * @return {number[]}
 */
// 有两种通用的遍历树的策略：
// 深度优先搜素 （DFS）:
// 在这个策略中，我们采用深度作为优先级，以便从根开始一直到达
// 某个确定的叶子，然后返回到根到达另一个分支
// 深度优先遍历有可以根据根、左孩子、右孩子 分为 前序遍历、中序遍历、后续遍历
// 广度优先搜索（BFS）
// 我们按照高度顺序一层层的访问整棵树，高层次的节点，高层次的节点
// 会比低层次的节点优先访问到，
// 这道题目使用非递归的写法，我们需要借助栈这种数据结构的辅助
// 
var preorderTraversal = function (root) {
  // 用于返回的数组
  let result = []
  // 这是递归的函数 接收一个node节点作为参数
  var preOrderTraverseNode = (node) => {
    // 如果node存在的话
    if (node) {
      // 先根节点
      result.push(node.val)
      // 然后遍历左子树
      preOrderTraverseNode(node.left)
      // 再遍历右子树
      preOrderTraverseNode(node.right)
    }
  }
  preOrderTraverseNode(root)
  return result
};
