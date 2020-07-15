/*
 * @lc app=leetcode.cn id=141 lang=javascript
 * [141] 环形链表
 * 给定一个链表，判断链表中是否有环。
 * 
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 * 示例 1：
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1,2], pos = 0
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 输入：head = [1], pos = -1
 * 输出：false
 * 解释：链表中没有环。
 * 
 * 
 * 进阶：
 * 
 * 你能用 O(1)（即，常量）内存解决此问题吗？
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
// 这道题目给的标签是linklist 和 双指针
// 思路：我们可以通过检查一个节点，此前是否被访问过来判断是否为环形链表，常用的方法就是使用hash表
// 算法：我们遍历所有的节点，并在hash表中存储每一个节点的引用（或者内存地址），如果当前节点为空节点（null）
// 即已经检测到链表尾巴的下一个节点，那么我们已经遍历完了整个链表，并且链表不是环形链表。如果当前节点的引用已经存在于hash表中
// 返回true，即整个链表为环形链表
var hasCycle = function (head) {
  let nodeSeenSet = new Set();
  // 循环的条件是head 不等于null 否则的话说明已经循环到了链表的尾部 这
  //  肯定不是环形链表
  while (head !== null) {
    if(nodeSeenSet.has(head)) {
      return true;
    }else {
      nodeSeenSet.add(head);
    }
    head = head.next;
  }
  return false;
};

