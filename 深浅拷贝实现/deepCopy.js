// 再写一个深拷贝的例子;
var deepCopy = function (obj) {
  if (typeof obj !== 'object') {
    return;
  }
  let newObj = obj instanceof Array ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 因为是深拷贝，所以这里需要做一些简单的判断
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}

