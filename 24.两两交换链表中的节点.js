/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (59.26%)
 * Total Accepted:    109.9K
 * Total Submissions: 167.2K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 * 
 * 示例:
 * 
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
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
 * @param {ListNode} head
 * @return {ListNode}
 */
// 这道题目其实梳理清楚了也不是很难，整体的思路和206题那个链表翻转差不多
// 链表翻转那道题目设置了三个变量。这道题目需要设置4个变量
var swapPairs = function (head) {
  let dummyHead = new ListNode(0); // 添加虚拟头结点 加0
  // 将虚拟头结点的next指针指向 head。
  dummyHead.next = head;
  // 将dummyHead 赋值给一个变量。
  // 其实这种题目做多了就会感觉是一个套路，为什么要赋值给一个变量
  let shao = dummyHead
  // 这中间就是迭代替换的过程
  while (shao.next != null && shao.next.next != null) {
    let start = shao.next; // 代表第一次的1
    let end = shao.next.next; // 代表第一次的2
    shao.next = end; // 0 指向 2
    start.next = end.next; // 1 指向 3
    end.next = start; // 2 指向 1
    shao = start; // 将此时的1 也就是交换后的1当哨兵 继续循环
  }
  return dummyHead.next // 返回的是最初哨兵的前一个 就是链表头
};

