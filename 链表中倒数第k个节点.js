/*
 * @Author: your name
 * @Date: 2020-06-14 16:12:10
 * @LastEditTime: 2020-06-14 16:35:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/链表中倒数第k个节点.js
 */
// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 示例：

// 给定一个链表: 1->2->3->4->5, 和 k = 2

// 返回链表 4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 这道题目 双指针的方法真的是大开眼界。
// 初始化的时候设置两个指针，一个快指针 former 一个慢指针 latter
// 然后 快指针向前移动k个节点 移动结束之后，两个指针分别向前移动
// 直到快指针指向尾结点时候，这个时候慢指针 letter 与尾结点的距离为k-1
// 那latter 就是自然而然的倒数第k个节点了。
// 这道题目的巧妙之处在于设置了快慢指针之间的距离
var getKthFromEnd = function (head, k) {
  let former = head;
  let latter = head;

  for (let i = 0; i < k; i++) {
    former = former.next;
  }

  while (former !== null) {
    former = former.next;
    latter = latter.next;
  }
  return latter;
};



