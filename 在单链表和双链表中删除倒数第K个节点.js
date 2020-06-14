/*
 * @Author: your name
 * @Date: 2020-04-04 12:23:39
 * @LastEditTime: 2020-06-14 13:16:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/在单链表和双链表中删除倒数第K个节点.java
 */
/**
 * 分别实现两个函数，一个可以删除单链表中倒数第K个节点，另一个可以删除双链表
 * 中倒数第K个节点
 * 
 * 要求：如果链表长度为N 时间复杂度达到 O(N) 额外的空间复杂度达到 O（1）
 * 解答: 
 */
var removeLastKthNode = function (head, k) {
  // 如果链表为空 或者k的值小于1 这种情况下
  if (head === null || k < 1) {
    return head;
  }
  // 将head的指针赋值给一个临时变量
  let cur = head;
  // 执行for循环  
  while (cur !== null) {
    k--;
    cur = cur.next;
  }
  // while 循环之后开始根据k的值,进行判断该如何处理
  if (k === 0) {
    head = head.next; // 说明倒数第K个节点正好是第一个节点
  }
  // 如果k值小于0, 重新从头结点开始走，每移动一步 就让k的值加1
  // 当k等于0的时候移动停止，移动到的节点就是要删除的节点的前一个节点。
  if (k < 0) {
    cur = head;
    while (++k !== 0) {
      cur = cur.next;
    }
    cur.next = cur.next.next;
  }
  return head;
};
