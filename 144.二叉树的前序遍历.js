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

// 利用栈来记录遍历的过程，实际上，递归就使用了调用栈，所以这里我们可以用栈来模拟递归的过程
// 本题使用的是广度优先的算法:
// 迭代实现:
// 首先根元素入栈，将根节点出栈，将根节点的值放入结果数组中。
// 然后遍历左子树，右子树 因为栈树先入后出，所以我们先右子树入栈 然后左子树入栈
// 继续出栈（左子树被出栈）
// var preorderTraversal = function (root) {
//   // 初始化这个list 其实就是最终返回的数组
//   const list = [];
//   // 借助栈这种数据结构,先入后出
//   const stack = [];
//   // 当根节点不为空的时候，将根节点入栈
//   if (root) {
//     stack.push(root);
//   }
//   // 循环的条件是栈不为空
//   while (stack.length > 0) {
//     // 将栈顶的元素弹出来
//     const curNode = stack.pop();
//     // 第一步的时候，先访问的是根节点
//     list.push(curNode.val);

//     // 我们先打印左子树，然后是右子树
//     // 所以先加入栈的是右子树，然后是左子树
//     if (curNode.right !== null) {
//       stack.push(curNode.right)
//     }
//     if (curNode.left !== null) {
//       stack.push(curNode.left)
//     }
//   }
//   return list
// };


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 有两种通用的遍历树的策略：
// 深度优先搜素 （DFS）:
// 在这个策略中，我们采用深度作为优先级，以便从根开始一直到达某个确定的叶子，然后返回到根到达另一个分支深度优先遍历有可以根据根、左孩子、右孩子 分为 前序遍历、中序遍历、后续遍历
// 广度优先搜索（BFS）:
// 我们按照高度顺序一层层的访问整棵树，高层次的节点, 会比低层次的节点优先访问到，
// 使用非递归的写法，需要借助栈这种数据结构的辅助解答

// 0803 树的前序遍历的复习
// 这种借助递归辅助函数的写法真的非常棒。
// 这也是 在做前中后序遍历的基础
var preorderTraversal = function (root) {
  // 因为最后的结果是
  let result = [];
  helper(root, result);
  return result;
}

var helper = function (root, result) {
  if (root !== null) {
    result.push(root.val)

    if (root.left !== null) {
      helper(root.left, result)
    }
    if (root.right !== null) {
      helper(root.right, result)
    }
  }
}

// 0803 复习二叉树的非递归写法
// 首先非递归写法需要使用到 stack 这个数据结构的辅助
// 同时需要创建 结果数组返回，这个结果数组在递归的写法中也是存在的
// 这是题目要求的
var preorderTraversal = function (root) {
  let result = [];
  let stack = [];

  // 首先将根节点压入栈中。这是后悔遍历的前提条件
  if (root !== null) {
    stack.push(root)
  }

  while (stack.length > 0) {
    // 将当前的栈顶元素取出来
    const curNode = stack.pop();
    result.push(curNode.val);

    // 栈的特点是后进先出 因为我们是先序遍历，先是 root 然后是左节点 然后是右节点
    if (curNode.right !== null) {
      stack.push(curNode.right)
    }
    if (curNode.left !== null) {
      stack.push(curNode.left)
    }
  }
  return result
} 
