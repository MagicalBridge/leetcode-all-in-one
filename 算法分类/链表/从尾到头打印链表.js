// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
// 示例 1：

// 输入：head = [1,3,2]
// 输出：[2,3,1]
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  // 首先考虑边界条件
  // 创建一个数组用于存放节点
  let stack = [];
  let cur = head;
  // 条件就是 cur 不是null
  while (cur !== null) {
    stack.push(cur.val)
    cur = cur.next;
  };
  let printArr = [];
  // 这里需要注意，数组的pop方法会改变数组的长度，所以我们需要提前保存
  let len = stack.length;
  for (let i = 0; i < len; i++) {
    let cur = stack.pop();
    printArr.push(cur);
  }
  return printArr
};