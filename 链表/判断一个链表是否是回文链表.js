// 编写一个函数，检查输入的链表是否是回文的。

// 示例 1：

// 输入： 1->2
// 输出： false 

// 示例 2：

// 输入： 1->2->2->1
// 输出： true 

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
// => 这道题目使用快慢指针可以解决:
// 思路:采用快慢两个指针，去寻找链表的中间节点。
// 根据链表的中间节点翻转一半的链表
// 迭代比较链表前一半和后一半的节点，判断节点的值是否相等，得出是否为回文。
// 这里有一个技巧，就是两个指针 快指针和慢指针，开始的时候快慢指针都指向第一个元素，然后
// 慢指针走一步，快指针走两步,当快指针走到链表结尾的时候，慢指针正好处于链表中间节点。


// 链表翻转 这就是206题的知识点
var reverseLinked = function (head) {
  let pre = null;
  let cur = head;

  while (cur !== null) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

// 寻找链表的中间节点
// 这个可以单独的出一道题目了。使用快慢指针的思路,将链表的中间节点找出来
var findMidNode = function (head) {
  let fast = head;
  let low = head;
  while (fast.next !== null && fast.next.next != null) {
    fast = fast.next.next;
    low = low.next;
  }
  return low;
}

var isPalindrome = function (head) {
  // 两个辅助函数已经书写完了，开始实现核心逻辑
  // 边界条件 一个节点没有，我们也认为是 回文链表
  if (head === null) {
    return true
  }
  let midNode = findMidNode(head);
  // 中间节点的下一个节点作为需要翻转部分的头部。
  let secondHalfHead = reverseLinked(midNode.next);
  // 将两个头分别赋值给两个变量循环需要使用到。
  let curr1 = head;
  let curr2 = secondHalfHead;
  // 标志位
  let palindrome = true;
  while (palindrome && curr2 != null) {
    if (curr1.val != curr2.val) {
      palindrome = false;
    }
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  return palindrome;
};
