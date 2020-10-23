一句话介绍bind:
> bind 方法会创建一个新的函数，当这个新的函数调用的时候，bind()的第一个参数将作为它运行时候的this，之后的序列参数将会在传递的实参前传入作为它的参数。

由此我们可以得出bind函数的两个特点：

1、返回一个函数
2、可以传递参数


### 返回函数的模拟实现
从第一个函数开始，我们举个例子

```js
var foo = {
  value: 1,
}
function bar() {
  console.log(this.value)
}
// 返回一个函数
var bindFoo = bar.bind(foo);
bindFoo(); // 1
```
关于指定的this的指向，我们可以使用call和apply实现。
我们来写第一版代码:

```js
Function.prototype.bind2 = function(context) {
  var self = this;
  return function() {
    return self.apply(context)
  }
}
```

此外，之所以 return self.apply(context), 是需要考虑绑定函数可能是有返回值的 依然是这个例子：

```js
var foo = {
  value: 1
}
function bar() {
  return this.value
}
var bindFoo = bar.bind(foo);

console.log(bindFoo()); // 1;
```

### 传参的模拟实现
接下来看第二点，可以传入参数，这个就有点让你费解了，我在bind的时候是否可以传递参数呢？ 我在执行bind返回的函数的时候，可不可以传递参数呢？让我们看个例子：

```js
var foo = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);

}

var bindFoo = bar.bind(foo, 'daisy');
bindFoo('18');
// 1
// daisy
// 18
```
函数需要传递 name 和 age 两个参数，竟然还可以在bind的时候，只传递一个，在执行的时候再传递另一个age!,这个可咋办，不急，我们使用arguments来处理。
第二版

```js
// 第二版
Function.prototype.bind2 = function (context) {
  
  var self = this;
  // 获取bind2函数从第二个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1);

  return function () {
    // 这个时候的arguments是指bind返回的函数传入的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context, args.concat(bindArgs));
  }
}
```

### 构造函数的效果的实现
完成了这两点，最难的部分到了，因为bind 还有一个特点，就是
>一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当做构造器，提供的this值被忽略，同时调用时的参数被提供给模拟函数。

也就是说当bind返回的函数作为构造函数的时候，bind时指定的this值会失效，但是传入的参数依然生效，举个例子:

```js
var value = 2;

var foo = {
  value: 1
};

function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.prototype.friend = 'kevin';
var bindFoo = bar.bind(foo, 'daisy');
var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
```
注意：尽管在全局和foo中都声明了value，但是最后依然返回了undefined，说明绑定this失效了，如果大家了解了new的实现就知道这个时候this已经指向了obj。

所以，我们可以通过修改返回的函数的原型来实现：
