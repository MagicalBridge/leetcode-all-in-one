/**
 *编写代码: 移除未排序链表中的重复节点，保留最开始出现的节点:
  输入：[1, 2, 3, 3, 2, 1]
  输出：[1, 2, 3]
  
  输入：[1, 1, 1, 1, 2]
  输出：[1, 2]

  链表长度在[0, 20000]范围内。
  链表元素在[0, 20000]范围内。
 * 
 * 
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
var removeDuplicateNodes = function (head) {
  // 写这种链表的题目重要的是要弄清楚边界条件
  // 在这里判空也是有原因的, 下面取了head.val 如果不判断空的话, 下面直接取val会有空指针的问题
  // 每一行代码都应该有它应有的含义。
  if (head === null) {
    return head;
  }
  // 这里按照给的提示，我们使用散列表 set 这种数据结构
  let ouucSet = new Set();
  ouucSet.add(head.val);
  let preNode = head;
  // 枚举前驱节点; 这里条件是因为要取next 节点的值。
  while (preNode.next !== null) {
    // 当前要删除的节点
    let cur = preNode.next
    if (!ouucSet.has(cur.val)) {
      ouucSet.add(cur.val)
      preNode = preNode.next;
    } else {
      preNode.next = preNode.next.next;
    }
  }
  preNode.next = null;
  return head
};