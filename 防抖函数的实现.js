// 不断地总结和实现 这中间的过程
function debounce(func, wait) {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}
// 虽然写出来了但是明显的感觉是没有真正的掌握这个核心和精髓
