var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
  container.innerHTML = count++;
};

container.onmousemove = throttle(getUserAction, 1000);

// function throttle(func, wait) {
//   var previous = 0;
//   return function () {
//     var now = +new Date();
//     var context = this;
//     var args = arguments;
//     if (now - previous > wait) {
//       func.apply(context, args);
//       previous = now;
//     }
//   }
// };

function throttle(func, wait) {
  let previous = 0;
  return () => {
    let args = arguments;
    let context = this;
    let now = +new Date();
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  }
}

