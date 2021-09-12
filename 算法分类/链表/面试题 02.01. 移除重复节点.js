// 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
// 示例1:
// 输入：[1, 2, 3, 3, 2, 1]
// 输出：[1, 2, 3]
// 示例2:
// 输入：[1, 1, 1, 1, 2]
// 输出：[1, 2]

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
// 这道题目有一个信息比较简单的题目，题目要求将链表中的重复节点移除
// 链表是没有经过排序的移除重复让我想到的模式识别就是使用set 集合这种数据结构作为辅助解决问题。
// 题目还说明了保留第一个节点
var removeDuplicateNodes = function (head) {
  if (head === null) {
    return null
  }
  let set = new Set();
  let cur = head;
  // 存入第一个节点的值，但是有一点需要注意访问节点的val 和next 时候要做非空处理
  set.add(cur.val);

  while (cur !== null && cur.next !== null) {
    // 将当前节点的下一个节点取出来
    let next = cur.next;
    // 如果set中不存在相同值的节点
    // 将节点的值加入set中
    if (!set.has(next.val)) {
      set.add(next.val);
      // 同时将cur节点向后移动一位
      cur = cur.next;
    } else {
      // 如果节点已经存在则跳过这个节点
      cur = cur.next.next;
    }
  }
  return head;
};