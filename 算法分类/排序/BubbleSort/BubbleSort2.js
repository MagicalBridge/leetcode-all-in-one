/*
 * @Author: your name
 * @Date: 2020-06-14 18:50:30
 * @LastEditTime: 2020-06-20 17:44:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/BubbleSort/BubbleSort2.js
 */
// 在上一个文件中代码其实可以发现其规律，这种规律就是 for循环中只有变量是不一样的，其他的部分都是一样的。
// 我们想着将这个过程用一个循环包起来。
// 外层的循环可以认为是对于流程的抽象简化

let arr = [3, 9, -1, 10, -2];
let temp = 0;
let sortFlag = false; // 设置一个 布尔变量  标识是否进行过交换
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      sortFlag = true; // 
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  if (sortFlag === false) { // 在一趟排序中一次交换都没有发生
    break;
  } else {
    sortFlag = false; // 重置flag 进行下次判断
  }
  console.log(`第${i + 1}排序的结果` + JSON.stringify(arr))
}