/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 移除链表元素是常规操作之一，非常普通和简单
// 思考如果删除的节点是中间节点，那这个其实还是比较简单
// 选择要删除的节点的前一个节点，prev，将prev的next 指向要删除的节点的next
// 但是要删除的节点一个或者多个位于链表的头部的时候事情将变得非常复杂
// 可以通过哨兵节点去节点去解决它，它们是纯功能的，通常不保存任何数据
// 其主要的目的是使得链表标准化，如使得链表永远不为空，永不无头，简化插入和删除
// 这道题目哨兵节点用作伪头
// 算法：
// 初始化哨兵节点ListNode(0) 且设置sentinel.next = head
// 初始化两个指针，curr 和 prev指向当前节点和前继节点
// 当curr !== null比较当前节点和要删除的节点
// 若当前节点就是要删除的节点：则 prev.next = curr.next。
// 否则设 prve = curr。
// 遍历下一个元素：curr = curr.next。
// 返回 sentinel.next。
var removeElements = function (head, val) {
  let dummyHead = new ListNode(0);
  // 这个步骤就是做一个链接将虚拟头结点和链表做一个关联
  dummyHead.next = head;
  // 前置节点
  let prev = dummyHead;
  // 将head赋值给另一个变量
  let curr = head;

  while (curr !== null) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr
    }
    curr = curr.next;
  }
  return dummyHead.next
};
// @lc code=end

