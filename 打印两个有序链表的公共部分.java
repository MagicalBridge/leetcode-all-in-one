/*
 * @Author: your name
 * @Date: 2020-04-04 12:06:43
 * @LastEditTime: 2020-04-07 05:58:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edithe 
 * @FilePath: /leetcode/打印两个有序链表的公共部分.java
 */
/**
 * 给定两个有序链表指针head1 和 head2 打印两个链表的公共部分
 *  解答： 如果head1 的值 小于head2 则head1 往下移动
 *  如果head2 的值 小于于head1 则 head2 往下移动
 *  如果 两个值相等 则打印这个值 然后两个链表的指针都向下移动
 *  head1 和   ad2 有
 * 何一个移动到null 整个过程停止
 */

public class Node {
  public int value;
  public Node next;
  // 这是类的构造函数
  public Node(int data) {
    this.value = data;
  }
}

public void printCommonPart(Node head1, Node head2) {
  System.out.print("common part: ");
  while(head1 != null && head2 != null) {
    if(head1.value < head2.value) {
      head1 = head1.next;
    }else if(head1.value > head2.value) {
      head12= head2.next;
    } else {
      System.out.print(head1.value + " ");
      head1 = head1.next;
      head2 = head2.next;
    }
  }
  System.out.println();
}