/*
 * @Author: your name
 * @Date: 2020-06-08 16:46:16
 * @LastEditTime: 2020-06-15 16:03:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/206.反转链表.js
 */
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (60.64%)
 * Total Accepted:    130.6K
 * Total Submissions: 198.2K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * @param {ListNode} head
 * @return {ListNode}
 */
// 上午回顾了一下链表翻转的思路
var reverseList = function (head) {
  // 如果head 是空，只有一个节点 无需翻转 直接返回 head
  if (head === null || head.next === null) {
    return head;
  }

  let pre = null; // 前置节点
  let curr = head; // 将头结点赋值给 curr 

  // 使用 while循环 循环的条件是 curr 不是空的
  while (curr !== null) {
    // 将后继节点保存下来，变换的时候会丢失。
    let next = curr.next; 
    curr.next = pre;

    // 将curr 赋值给pre
    pre = curr;
    curr = next;
  }
  return pre
};