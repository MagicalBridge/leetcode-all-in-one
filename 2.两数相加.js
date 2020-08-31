/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 这道题目给定两个链表，让我们从头到尾依次往后加
// 主要注意的是进制相关的内容
var addTwoNumbers = function (l1, l2) {
  // 创建一个虚拟头结点来作为新的创建链表的头结点的前置节点
  let dummy = new ListNode(-1);
  // 这个节点是不能动的，我们把它赋值给一个变量cur
  let cur = dummy;
  // 还需要一个变量用于计算sum 这个值 val1+val2+carry
  let sum = 0;
  // 进位
  let carry = 0;

  // 循环的条件是 l1 和 l2 只要有一个不为空就可以
  // 在循环的内部需要注意判空
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    // cur 是作为移动的那个目标前进的。
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    // 这个进制 如果是 大于等于10 则进制是1 否则是0
    carry = sum >= 10 ? 1 : 0
    // 然后开始移动指针 
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  // 循环结束 add 如果为1 在后面加一个add
  carry && (cur.next = new ListNode(carry));
  // 返回 头结点
  return dummy.next;
};

// 0728 复习
var addTwoNumbers = function (l1, l2) {
  // 创建一个虚拟的头结点作为新的链表头结点的前置节点
  let dummy = new ListNode(-1);
  // 这个节点是不能动的, 我们把它赋值给一个变量cur
  let cur = dummy;
  // 还需要一个变量用于计数sum 这个值是 val1+val2+carry
  let sum = 0
  // 进位
  let carry = 0

  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    // cur 是作为移动的那个目标前进的。
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    // 这个进制 如果是 大于等于10 则进制是1 否则是0
    carry = sum >= 10 ? 1 : 0
    // 然后开始移动指针 
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  // 循环结束 add 如果为1 在后面加一个add
  carry && (cur.next = new ListNode(carry));
  // 返回 头结点
  return dummy.next;
}

// 0826 复习算法题解
var addTwoNumbers = function (l1, l2) {
  // 这仿佛已经成为一种套路,两个链表相加
  // 为什么这里需要创建哑结点,这是一个值得思考的问题
  // 使用虚拟头结点可以省去很多的边界条件的判断
  let dummyHead = new ListNode(-1)
  // 之后有个指针不断地向后移动，但是dummmy不能移动
  let temp = dummyHead;
  let sum = 0;
  let carry = 0;

  while (l1 || l2) {
    // 初始化的时候就要将sum加起来 
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    temp.next = new ListNode(sum % 10);
    // 将temp 指针向后移动
    temp = temp.next;

    carry = sum >= 10 ? 1 : 0;
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  carry && (temp.next = new ListNode(carry));
  return dummyHead.next
}

// 0831复习
var addTwoNumbers = function (l1, l2) {
  // 这道题目使用虚拟头结点
  let dummyHead = new ListNode(-1);
  let temp = dummyHead;
  let sum = 0;
  let carry = 0;
  while (l1 || l2) {
    // 先计算出和是多少
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    // 加起来的数最大应该是19，只保留这个1 9 作为进位使用
    temp.next = new ListNode(sum % 10);
    temp = temp.next;
    // 保存进位
    carry = sum >= 10 ? 1 : 0
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  carry && (temp.next = new ListNode(carry));
  return dummyHead.next;
}
// @lc code=end

