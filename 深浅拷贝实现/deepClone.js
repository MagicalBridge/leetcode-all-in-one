function deepclone(obj, hash = new WeakMap()) {
  if (obj === null) {
    return null
  }
  if (typeof obj === Date) {
    return new Date(obj);
  }
  if (typeof obj === RegExp) {
    return new RegExp(obj);
  }
  // 我们必须处理对象这种数据结构
  if (typeof obj !== 'object') {
    return;
  }
  // 解决循环引用的问题
  if (hash.get(obj)) {
    return hash.get(obj);
  }

  // 如果是数组就生成一个数组，如果是对象就生成一个空的对象
  let newObj = Array.isArray(obj) ? [] : {};
  // 做一个对象的映射。
  hash.set(obj, newObj);
  //  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepclone(obj[key], hash) : obj[key];
    }
  }
  return newObj;
}

let obj = { name: 'louis', address: { a: 1 } }
obj.o = obj;
console.log(deepclone(obj)); 