/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (54.17%)
 * Total Accepted:    151.4K
 * Total Submissions: 258.2K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 合并两个有序链表，看到这个题目，那天一整天都在思考这方面的问题

var mergeTwoLists = function (l1, l2) {
  // 这里应该初始化新的链表 头结点 值是什么并不重要 最终我们返回的是头结点的
  // next指针
  let mergeHead = new ListNode(-1);
  // 将这个头节点 赋值给一个curr 变量，这也是一个指针，这个指针的作用是
  // 跟随者另外两个合并指针一起运动
  let curr = mergeHead;
  // 循环的条件
  while (l1 !== null && l2 !== null) {
    // 比较一下 将较小的那个给这节点
    if (l1.val > l2.val) {
      curr.next = l2;
      l2 = l2.next;
    } else {
      curr.next = l1;
      l1 = l1.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return mergeHead.next;
};

