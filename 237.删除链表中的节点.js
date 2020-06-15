/*
 * @Author: your name
 * @Date: 2020-06-15 18:23:15
 * @LastEditTime: 2020-06-15 18:56:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/237.删除链表中的节点.js
 */ 
/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 *
 * https://leetcode-cn.com/problems/delete-node-in-a-linked-list/description/
 *
 * algorithms
 * Easy (72.58%)
 * Total Accepted:    103.3K
 * Total Submissions: 126.5K
 * Testcase Example:  '[4,5,1,9]\n5'
 *
 * 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。
 * 
 * 现有一个链表 -- head = [4,5,1,9]，它可以表示为:
 * 
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: head = [4,5,1,9], node = 5
 * 输出: [4,1,9]
 * 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
 * 
 * 
 * 示例 2:
 * 
 * 输入: head = [4,5,1,9], node = 1
 * 输出: [4,5,9]
 * 解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
 * 
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 链表至少包含两个节点。
 * 链表中所有节点的值都是唯一的。
 * 给定的节点为非末尾节点并且一定是链表中的一个有效节点。
 * 不要从你的函数中返回任何结果。
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 题目思路 如果我们要删除一个节点：一般的思路是,
// 修改要删除的节点的上一个指针,
// 将该指针指向要删除的节点的下一个节点
// 但是这道题目只告诉我们要删除的节点，我们并不知道该节点的上一个节点是什么 那么我们又该如何实现呢？
// 既然我们要删除一个节点时候需要知道它的上一个节点，如果我们无法得知上一个节点，我们就找一个可以知道上一个节点的节点，把它变成要删除的节点
// 然后删除它
// 还是 [4, 5, 1, 9] 链表，还是删除节点 5。首先我们把节点5下一个节点赋值给它 让他变成一个【不需要删除】的节点
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

