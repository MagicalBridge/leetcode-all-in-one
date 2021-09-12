/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (60.64%)
 * Total Accepted:    130.6K
 * Total Submissions: 198.2K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * @return {ListNode}
 */
// 链表翻转的精髓在于对指针的把握
// 思考这样一个问题: 
var reverseList = function (head) {
  // 首先考虑边界条件 链表本身为空,或者只有一个节点。
  if(head === null || head.next === null) {
    return head;
  }
  // 创建变量 虚拟头结点 之后会作为尾结点存在
  let pre =  null; 
  // cur 是当前操作的节点, 将头节点赋值给cur之后这个cur会发生移动。
  let cur = head; 

  // 循环的条件是 cur 不是null 在链表中我们无论是访问 一个具体节点的value 
  // 还是next 指针都要首先保证这个节点四不为空的
  // next 指针是依存于cur指针的，只有cur 存在的情况下才去取
  while(cur !== null) {
    // 这里有一个技巧，在保证 cur 不是 null 的情况下 保存指针。
    let next = cur.next;
    // 通过回忆动画可以知道，这一步是一个反转，将cur 原本指向后一个节点的指针转向前面
    cur.next = pre;
    // 反转之后就要更新现在所有的指针了
    // pre移动到cur现在的位置
    pre = cur; 
    // 将cur移动到next位置 这样cur 存放的就是下一次需要处理的元素
    cur = next; 
  }
  return pre;
};