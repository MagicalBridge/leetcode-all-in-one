/*
 * @Author: your name
 * @Date: 2020-06-08 16:46:16
 * @LastEditTime: 2020-06-12 09:30:21
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
// 链表翻转题目描述是将一个链表 翻转
// 脑海中一定要有一个图谱 这个图谱是
var reverseList = function (head) {
  // 设置一个头结点的前置节点;
  let prev = null;
  // 将头结点的赋值给curr curr 是不断向后面移动的
  // 当curr 移动到 null 的时候循环就结束了
  let curr = head;

  while (curr) {
    // 保存当前需要改变的头结点引用
    let next = curr.next;
    
    // 开始进行变化操作，首先将curr.next 指向 prev
    curr.next = prev;

    // 然后将prev 移动到curr 然后将curr 移动到next
    prev = curr;
    curr = next;
  }
  return prev
};

