// 节流的原理很简单 如果你持续触发事件，每隔一段时间 执行一次。
// 节流的实现方式我这里使用定时器
// 整体的实现和防抖类似。
// 都是需要闭包来进行简单的实现。
function throttle(func, wait) {
  var previous = 0;
  return function () {
    var now = +new Date();
    var context = this;
    var args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  }
};