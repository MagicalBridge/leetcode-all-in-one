/*
 * @Author: your name
 * @Date: 2020-06-20 21:18:23
 * @LastEditTime: 2020-06-20 21:30:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/SelectSort/selectSort1.js
 */

// 外面包一层 for循环 为什么条件是  arr.length - 1 因为
// 和冒泡排序的思想类似，最后一轮不需要循环了。大循环的次数总是数组长度的-1
// 每一次大循环之后 最小的一个也就确定了.
function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 第一轮
    // 首先假定最小的索引是0
    let minIndex = i;
    // 假定最小的值是：
    let min = arr[minIndex];

    // 从数组的第i+1个元素开始进行比较
    for (j = i + 1; j < arr.length; j++) {
      // 如果假定的最小值大于了j 说明我们假定的值并不是最小的
      if (min > arr[j]) {
        min = arr[j]; // 重置最小值
        minIndex = j; // 重置最小索引
      }
    }

    if (minIndex !== i) {
      // 将最小值 放在我们找到的真实的最小值的位置
      arr[minIndex] = arr[i]; // 第一个位置
      arr[i] = min; // 最小值放在第一个位置
    }
  }
}

// 测试冒泡排序的时间复杂度给定8万个数据规模进行测试。
let arr = [];
// Math.random 生成一个 [0，1) 随机数, 然后 [0，8000000) 这样的数。散开
for (let i = 0; i < 80000; i++) {
  arr[i] = parseInt(Math.random() * 8000000, 10);
};

let startTime = new Date();
selectSort(arr);
let endTime = new Date();

let elapsed = endTime.getTime() - startTime.getTime(); // 运行时间的毫秒值

console.log(`使用选择排序排列8万个整数花费了${elapsed / 1000}秒`);


