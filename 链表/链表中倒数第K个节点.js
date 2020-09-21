// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，
// 本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，
// 从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。

// 示例：
// 给定一个链表: 1->2->3->4->5, 和 k = 2.

// 返回链表 4->5.


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
// 其实我是这样思考的，倒数第k个 是不是应该先找到整个链表的长度
// 看到了答案就已经明白了这个题目可以使用快慢指针
// 快指针比慢指针先走k步，当快指针走到链表结束的位置时候,慢指针正好在倒数第k个位置
var getKthFromEnd = function (head, k) {
  let fast = head;
  let slow = head;

  // 让快指针提前走k步
  for (let i = 0; i < k; i++) {
    if (fast !== null) {
      fast = fast.next;
    }
  }
  // 这里其实slow可以不判断。
  while (fast !== null && slow !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};