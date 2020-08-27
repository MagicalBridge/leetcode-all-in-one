// Promise 是一个构造函数
// 使用new 操作符调用的时候，会执行函数中的内容
function Promsie(executor) {

  var resolve = function () {

  }

  var reject = function () {

  }
  executor(resolve, reject)
}

// 一个函数入参，匿名函数接收两个参数 resolve reject
new Promsie(function(resolve, Îreject){
  console.log(123)
})



