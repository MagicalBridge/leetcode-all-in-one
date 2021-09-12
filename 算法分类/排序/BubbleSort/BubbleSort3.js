function bubbleSort(arr) {
  let temp = 0;
  let sortFlag = false; // 设置一个 布尔变量  标识是否进行过交换
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        sortFlag = true; // 只要一趟排序中交换过 标志位置为 true。
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
    // console.log(`第${i + 1}排序的结果` + JSON.stringify(arr))
  }
}
// 测试冒泡排序的时间复杂度给定8万个数据规模进行测试。
let arr = [];
// Math.random 生成一个 [0，1) 随机数, 然后 [0，8000000) 这样的数。散开
for (let i = 0; i < 80000; i++) {
  arr[i] = parseInt(Math.random() * 8000000, 10);
};

let startTime = new Date();
bubbleSort(arr);
let endTime = new Date();

let elapsed = endTime.getTime() - startTime.getTime(); // 运行时间的毫秒值

console.log(`使用冒泡排序排列8万个整数花费了${elapsed / 1000}秒`);



