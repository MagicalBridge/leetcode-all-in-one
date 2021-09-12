// 实现一种算法，删除单向链表中间的某个节点（即不是第一个或最后一个节点），假定你只能访问该节点。
// 输入：单向链表a->b->c->d->e->f中的节点c
// 结果：不返回任何数据，但该链表变为a->b->d->e->f
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 这道题目有个小问题，只给了中间节点的值 没有给头节点，应该如何去做呢
// 因为这道题目并没有给头结点，所以没有办法使用常规的遍历方式，但是这里有一个技巧
// 我们可以将当前要删除节点的下一个节点的值赋值给当前节点，然后跳过下一个节点就好了。
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};