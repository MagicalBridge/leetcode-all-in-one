/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (37.73%)
 * Total Accepted:    155K
 * Total Submissions: 386.9K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
// what is the valid 什么是有效的括号
// 在js中可以使用数组模拟栈的操作，如果的当前的括号是左边的括号，push 进去
// 数组中，如果遇到右边的括号，若这个时候栈为空，则直接返回false，如果不为空
// 则取出栈顶元素，若为对应的左半边的括号，则继续循环，反之返回false，
// 这里需要知道一个点，pop方法用于删除并且返回数组的最后一个元素，，并且把数组的长度减一，
// 如果数组本身就是一个空值，这个时候，pop方法不改变数组，返回undefined。
// 
var isValid = function (s) {
  // 创建一个模拟栈的数组，用户存放括号字符串数据
  let stackArr = [];
  // 对传入进来的字符串进行循环
  for (let i = 0; i < s.length; i++) {
    if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
      // 如果发现 是右边括号类型的 直接push 进去数组
      stackArr.push(s[i]);
    }else { // 进入这个循环的都是右括号
      // 首先判读一下 执行完一轮操作后，这个数组内括号的情况。
      if(stackArr.length === 0) { // push 完之后数组还是空的，说明根本就匹配不到嘛直接返回false
        return false;
      }
      // 如果括号是右边括号且是小括号 将数组的最后一个元素 pop出来 笔记 不等直接返回false
      if (s[i] === ')' && stackArr.pop() !== '(') {
        return false
      }

      if (s[i] === ']' && stackArr.pop() !== '[') {
        return false
      }

      if (s[i] === '}' && stackArr.pop() !== '{') {
        return false
      }
    }
  }
  // 执行完毕操作之后，数组内的长度是零 否则就是说明存在没有匹配到的括号
  return stackArr.length === 0
};

