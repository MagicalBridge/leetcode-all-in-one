/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (29.66%)
 * Total Accepted:    75.2K
 * Total Submissions: 229.8K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。
 * 
 * 如果不存在最后一个单词，请返回 0 。
 * 
 * 说明：一个单词是指仅由字母组成、不包含任何空格字符的 最大子字符串。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入: "Hello World"
 * 输出: 5
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
//
var lengthOfLastWord = function (s) {
  // end 是 字符串最后一位的下标，仔细思考为什么不是 length 而是 -1 操作
  let end = s.length - 1;

  // 循环遍历开始处理end 去除 尾部的空格。
  while (end >= 0 && s[end] == ' ') {
    // 假设最后一位是是空格且字符串的长度是 12 处理之后的end 就是10
    end--
  }
  // 处理完空格之后，判断一下如果 ' ' end 就是 0 end -- 是 -1 说明本来就是空的
  if (end < 0) {
    return 0
  }
  let start =  end;

  while(start >= 0  && s[start] !== ' ') {
    start --;
  }
  return end - start;
};

