/*
 * @Author: your name
 * @Date: 2020-06-08 16:46:16
 * @LastEditTime: 2020-06-11 09:42:17
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
// 这个题目也是非常经典的一套题目，题目要求使用两种方式，一种是常规的解法。循环
// 一种是使用递归的这种方法进行
// 思路是首先创建一个空的节点，让头结点指向它，指向之前要注意，首先要将后继节点保存下来
// 保存的目的是，当已经改变了head的next 执行null之后，这个时候取next 肯定就是null 了 而不是2 这个节点
// 边界条件是 head 不是空的 且 链表 仅有一个节点的时候 不需要翻转
var reverseList = function (head) {
  // 链表的相关问题一般都是可以通过递归或者普通遍历实现
  if(head === null || head.next === null) {
    return head; // 这是边界条件 如果本身是空，或者只有一个节点 无需翻转
  }
  let prev = null; // 设置一个虚拟头节点
  let curr = head; // 将头结点的引用赋值给curr变量

  while(curr) { // 是curr 不断的向后移动
    let next = curr.next; // 将curr的next引用保存起来，防止做变换的时候引用错乱
    curr.next = prev; // 将当前的节点next指针之前前置节点 null

    prev = curr;
    curr = next;
  }
  return prev;
};

