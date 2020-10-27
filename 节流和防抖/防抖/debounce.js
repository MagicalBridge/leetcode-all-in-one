/**
 * 添加immediate参数，让函数能够立刻执行，仅当事件停止触发n秒后，才能重新触发
 */
var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
  container.innerHTML = count++;
};

container.onmousemove = debounce(getUserAction, 1000);

// function debounce(func, wait) {
//   var timeout;
//   return function () {
//     var args = arguments;
//     var context = this;
//     if (timeout) {
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(function () {
//       func.apply(context, args)
//     }, wait)
//   }
// }

function debounce(func, wait) {
  let timeout;
  return () => {
    let context = this;
    let args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait);
  }
}