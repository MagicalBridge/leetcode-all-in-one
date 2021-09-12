// 冒泡排序有一个规律就是大循环的其实是比较了 数组的 长度-1次，因为每一次都能能确认一个最大的数
// 所以每一趟排序之后，范围就-1了
// 最后剩下一个数时候就不需要进行排序了。
let arr = [3, 9, -1, 10, -2];

// 临时变量用于交换
let temp = 0;
// 第一趟排序就是将数组中最大的一个放在最后面
for (let j = 0; j < arr.length - 1 - 0; j++) {
  if (arr[j] > arr[j + 1]) {
    temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
  }
}
console.log('第一趟排序' + JSON.stringify(arr));

// 第二趟排序将数组中第二大的排在倒数第二位
for (let j = 0; j < arr.length - 1 - 1; j++) {
  if (arr[j] > arr[j + 1]) {
    temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
  }
}

console.log('第二趟排序' + JSON.stringify(arr));

// 第三趟排序将数组中第三大的排在倒数第三位
for (let j = 0; j < arr.length - 1 - 2; j++) {
  if (arr[j] > arr[j + 1]) {
    temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
  }
}

console.log('第三趟排序' + JSON.stringify(arr));


// 第四趟排序将数组中第四大的排在倒数第四位
for (let j = 0; j < arr.length - 1 - 3; j++) {
  if (arr[j] > arr[j + 1]) {
    temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
  }
}

console.log('第四趟排序' + JSON.stringify(arr));


