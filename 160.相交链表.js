/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let set = new Set();

  let cur1 = headA;
  let cur2 = headB;

  while (cur1) {
    set.add(cur1);
    cur1 = cur1.next;
  }
  while (cur2) {
    if (set.has(cur2)) {
      return cur2
    }
    cur2 = cur2.next;
  }
  return null
};
// @lc code=end

