/*
 * @Author: your name
 * @Date: 2020-06-20 20:47:54
 * @LastEditTime: 2020-06-20 21:16:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/SelectSort/selectSort.js
 */
// 使用逐步讲解的方式来解决这个排序问题。
// 第一轮：   原始数组 101 34 119 1
// 第一轮排序：1 34 119 101

let arr = [101, 34, 119, 1];


// 第一轮
// 首先假定最小的索引是0
let minIndex = 0;
// 假定最小的值是：
let min = arr[minIndex];

// 从数组的第二个元素开始进行比较
for (j = 0 + 1; j < arr.length; j++) {
  // 如果假定的最小值大于了j 说明我们假定的值并不是最小的
  if (min > arr[j]) {
    min = arr[j]; // 重置最小值
    minIndex = j; // 重置最小索引
  }
}

// 将最小值 放在我们找到的真实的最小值的位置
arr[minIndex] = arr[0]; // 第一个位置
arr[0] = min; // 最小值放在第一个位置

console.log(`第一轮后:` + JSON.stringify(arr));



// 第2轮
// 首先假定最小的索引是0
minIndex = 1;
// 假定最小的值是：
min = arr[1];

// 从数组的第二个元素开始进行比较
for (j = 1 + 1; j < arr.length; j++) {
  // 如果假定的最小值大于了j 说明我们假定的值并不是最小的
  if (min > arr[j]) {
    min = arr[j]; // 重置最小值
    minIndex = j; // 重置最小索引
  }
}

// 将最小值 放在我们找到的真实的最小值的位置
arr[minIndex] = arr[1]; // 第一个位置
arr[1] = min; // 最小值放在第一个位置

console.log(`第2轮后:` + JSON.stringify(arr));


// 第3轮
// 首先假定最小的索引是0
minIndex = 2;
// 假定最小的值是：
min = arr[2];

// 从数组的第二个元素开始进行比较
for (j = 2 + 1; j < arr.length; j++) {
  // 如果假定的最小值大于了j 说明我们假定的值并不是最小的
  if (min > arr[j]) {
    min = arr[j]; // 重置最小值
    minIndex = j; // 重置最小索引
  }
}

// 将最小值 放在我们找到的真实的最小值的位置
arr[minIndex] = arr[2]; // 第一个位置
arr[2] = min; // 最小值放在第一个位置

console.log(`第3轮后:` + JSON.stringify(arr));
