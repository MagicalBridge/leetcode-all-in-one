/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (45.40%)
 * Total Accepted:    60.4K
 * Total Submissions: 124.8K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 
 * 示例 1:
 * 
 * 输入: 1->1->2
 * 输出: 1->2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
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
// 这道题目让我想起来了第26题和27题，那两道题目是关于数组的解法
// 这道题目是链表相关 如果当前节点的值和下一个节点的值相同 说明是 重复的
// var deleteDuplicates = function (head) {
//   let current = head;
//   while (current !== null && current.next !== null) {
//     if (current.val === current.next.val) { // 如果这个val相同的话
//       current.next = current.next.next;
//     }else {
//       current = current.next;
//     }
//   }
//   return head;
// };

// 这道题目中,第一个节点肯定是需要保留的
// 
var deleteDuplicates = function (head) {
  let cur = head; // 首先将头节点赋值给一个cur变量,意思是初始化的时候指向 之后会向后面移动
  // 思路是比较当前的节点和下一个节点的v  al值，所以为了防止空指针的异常，前提条件就是
  while (cur != null && cur.next !== null) {
    if (cur.val === cur.next.val) {
      // 将cur的next指针指向下一个元素的下一个元素
      cur.next = cur.next.next;
    } else {
      cur = cur.next
    }
  }
  return head;
};


