## call

一句话介绍call:
> call 使用指定的this和若干个参数的情况下，调用某一个函数(我的理解)
> call 方法在使用一个指定的this值和若干个指定的参数值的前提下，调用某一个函数或者方法。（老师的版本）

举个例子:

```js
var foo = {
  value: 1
}

function bar() {
  console.log(this.value)
}

bar.call(foo); // 1 
```

注意两点：
* 1、call 改变了this指向，指向了foo
* 2、bar 函数执行了

## 模拟实现的第一步

试想，在我们调用call的时候，把foo对象改造成如下:

```js
var foo = {
  value: 1, 
  bar: function() {
    console.log(this.value)
  }
}
foo.bar() // 1
```

这个this就指向了foo。

但是这样就给foo 添加了一个属性,我们想办法，将它删除掉。

所以我们模拟可以分为三个步骤:

* 1、将函数设置为对象的属性
* 2、执行该函数
* 3、删除该函数

以上的例子:
```js
// 第一步
foo.fn = bar
// 第二步
foo.fn()
// 第三步
delete foo.fn
```
fn是对象的属性名，反正最后也要删除，所以起什么名字无所谓。

根据这个思路，我们可以尝试着去写第一版的 call2 函数：

context是传入指定的this指向。
```js
Function.prototype.call2 = function(context) {
  // 首先我们需要获取调用call的函数，这里可以使用this获取
  context.fn = this;
  context.fn();
  //
  delete context.fn;
}

// 测试一下
var foo = {
  value: 1
};

function bar() {
  console.log(this.value);
}

bar.call2(foo); // 1
```


## 模拟实现的第二步:

最开始也说了，call函数还能给定参数执行函数。举个例子。

```js
var foo = {
  value: 1
};

function bar(name, bar) {
  console.log(name)
  console.log(age)
  console.log(this.value)
}

bar.call(foo, 'kevin', 18);
// kevin 
// 18
// 1
```

传入的参数个数可能不固定，应该如何处理?

我们可以使用arguments对象取值，取出从第二个参数到最后一个参数，然后放进一个数组里面。

```js
// 以上个例子为例，此时的arguments为：
var arguments = {
  0: foo,
  1: 'kevin',
  2: 18,
  length: 3
}
// 因为arguments是类数组对象，所以可以使用for循环
var args = [];
for(var i = 1; len < arguments.length; i < len; i++) {
  args.push('arguments[' + i + ']');
}

// 执行后 args为 ["arguments[1]", "arguments[2]", "arguments[3]"]
```
不定长参数的问题解决了, 我们接着要把这个参数数组放在要被执行的函数的参数里面去。

我们可以使用eval方法拼接成一个函数，类似于这样:

```js
eval('context.fn('+args+')')
```

这里的args会自动的调用Array.toString()这个方法。

所以我们的第二个版本克服了两个问题，代码如下。

```js
// 第二版 入参context所指代的还是 this所指向的那个对象
Function.prototype.call2 = function(context){
  context.fn = this;
  // 声明一个空的数组
  var args = [];
  // 使用for循序，将从第二个参数到最后的放进数组中
  for(var i = 1, len = arguments.length;i < len; i++) {
    args.push('arguments['+ i +']');
  }
  // 执行这个函数，就会调用toString方法，然后传递进去这个参数
  eval('context.fn(' + args + ')');
  delete context.fn
}
```

## 模拟实现的第三步:

现在还存在两个问题:
1、this的参数可以传递null，当为null的时候 视为指向window
2、函数是可以拥有返回值的













