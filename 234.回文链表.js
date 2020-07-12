/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (36.44%)
 * Total Accepted:    95.4K
 * Total Submissions: 226.5K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true;
  let mid = head;
  let pre = null;
  let reversed = null;
  // end每次走两格，这个循环的时间复杂度为O(n/2)
  while (head !== null && head.next !== null) {
    // 这个赋值要在mid被修改前提前
    pre = mid
    // 遍历链表
    mid = mid.next
    head = head.next.next
    // 反转前面部分的节点，并用reversed保存
    pre.next = reversed
    reversed = pre
  }
  // 奇数mid往后走一位
  if (head) mid = mid.next
  while (mid) {
    if (reversed.val !== mid.val) return false
    reversed = reversed.next
    mid = mid.next
  }
  return true
};

