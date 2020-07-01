/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
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
// 这道题目给定两个链表，让我们从头到尾依次往后加
// 主要注意的是进制相关的内容
var addTwoNumbers = function (l1, l2) {
  // 创建一个虚拟头结点来作为新的创建链表的头结点的前置节点
  let dummy = new ListNode(-1);
  // 这个节点是不能动的，我们把它赋值给一个变量cur
  let cur = dummy;
  // 还需要一个变量用于计算sum 这个值 val1+val2+carry
  let sum = 0;
  // 进位
  let carry = 0;

  // 循环的条件是 l1 和 l2 只要有一个不为空就可以
  // 在循环的内部需要注意判空
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    // cur 是作为移动的那个目标前进的。
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    // 这个进制 如果是 大于等于10 则进制是1 否则是0
    carry = sum >= 10 ? 1 : 0
    // 然后开始移动指针 
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  // 循环结束 add 如果为1 在后面加一个add
  carry && (cur.next = new ListNode(carry));
  // 返回 头结点
  return dummy.next;
};
// @lc code=end

