/*
 * @Author: your name
 * @Date: 2020-06-21 15:01:37
 * @LastEditTime: 2020-06-21 15:19:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/InsertSort/insertSort.js
 */
// 第一轮 {101, 34, 119, 1} => {34, 101, 119, 1} 

// 定义需要插入的是哪一个数字，我们在刚开始的时候已经确认了插入排序的思想，就是从无序中找出一个放在有序中的适当的位置。
let insertVal = arr[1];
let insertIndex = 1 - 1; // 因为我们想要插入的是第一个数，那么我们就是思考 想要插入的前面的数。arr[1] 前面数的下标

// 给insertVal 找到一个合适的位置。这里使用的是while循环
// insertIndex >= 0 保证了数组的位置不会越界。
// insertVal < arr[insertIndex] 待插入的数据还没有找到合适的位置
// 如果没有找到合适的位置，当前的insertIndex对应的值需要往后面进行移动
//  arr[insertIndex + 1] =  arr[insertIndex]; 这句话就是代表将 值后移 执行完之后 {101, 101, 119, 1}
while (insertIndex >= 0 && insertVal < arr[insertIndex]) {
  arr[insertIndex + 1] = arr[insertIndex];
  insertIndex--; // 
}

// 当退出while 循环的时候 插入的位置找到了 这个位置是 insertIndex+1 的位置 
arr[insertIndex + 1] = insertVal;


