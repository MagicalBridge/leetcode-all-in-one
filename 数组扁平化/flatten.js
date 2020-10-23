/**
 * 递归实现
 * @param {*} arr 
 */
function flatten(arr) {
  let res = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) { // 如果发现数组内部某一项还是数组 需要启动递归调用
      res = res.concat(flatten(arr[i]));
    } else {
      res.push(arr[i])
    }
  }
  return res;
}
const arr = [1, [2, 3, 4, 5, [7, 8, 9]]]
const res = flatten(arr);
console.log(res);

