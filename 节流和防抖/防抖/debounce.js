/**
 * 添加immediate参数，让函数能够立刻执行，仅当事件停止触发n秒后，才能重新触发
 */
var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
  container.innerHTML = count++;
};

container.onmousemove = debounce(getUserAction, 1000);

// 第四版
function debounce(func, wait) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait); 
  }
}