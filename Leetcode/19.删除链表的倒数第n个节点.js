/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (33.36%)
 * Total Accepted:    184.9K
 * Total Submissions: 476.3K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 
 * 说明：
 * 
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 
 * 你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
// 思考: 首先这是一道链表题目，然后考察的是链表的删除操作，题目中给定了head 头结点 还有n -> 对应的是倒数第n个节点
// 这个题目要求是使用一趟扫描就做出来，题目解析区的大神,说思路肯定是快慢指针。
// 这道题目需要首先实现,两遍遍历算法
// 思路: 这个问题很容易简化成另外一个问题：删除从链表开头第 (L- n + 1) 个节点 其中 L 是链表的长度,只要我们找到链表的长度L 这个问题就
// 很容易解决。
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 按照上面 这个为例 删除倒数第二个也就是 4 对应的这个节点，链表的长度是 5 那根据上面提到的算法，L-n+1 对应的也是4这个节点。
// 算法：
// 首先，我们将添加一个哑结点作为辅助节点，该节点位于链表头部，哑结点用于简化某些极端操作，例如链表中只有一个节点，或者
// 需要删除链表的头部，在第一次遍历中，我们找出链表的长度L，然后，设置一个指向哑结点的指针，并移动它来遍历链表
// 直到它达到 （L-n）个节点那里，我们把第 (L - n)(L−n) 个结点的 next 指针重新链接至第 (L - n + 2)(L−n+2) 个结点，完成这个算法。
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0); // 创建一个哑结点，哑结点的作用是处理某些极端问题
  dummy.next = head; // 将哑结点next指向 head。

  let length = 0; // 设置一个变量 用于之后存储链表的长度

  let first = head; // 保留头指针的索引

  // 使用while循环 开始遍历 链表
  while (first !== null) {
    length++;
    first = first.next; // 向后移动指针
  };

  // 根据上面的算法这个第二次遍历的length 长度 是 length - n
  length = length - n;

  // 遍历完链表之后 first 指针已经跑到了最后 这个时候将dummy 指针赋值给first
  first = dummy; 

  while(length > 0) {
    length --;
    first = first.next;
  };

  first.next = first.next.next;

  return dummy.next;
};

