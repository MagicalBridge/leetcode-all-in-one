// 程序员代码面试指南中解题思路:
// 在设计的时候，我们使用两个栈，一个栈用来保存当前栈中的元素，其功能和一个正常的栈没有区别，这个栈即为stackData, 另一个栈用于
// 保存每一步的最小值，这个栈记为stackMin。

// 压入数据规则(1)
// 假设当前的数据为newNum，先将其压入stackDate 然后判断stackMin是否为空：
// 如果为空，则newNum也压入stackMin.
// 如果不为空，则比较newNum和stackMin的栈顶元素中哪一个更小：
//   如果 newNum更小或者两者两等，则newNum也压入stackMin;
//   如果stackMin的栈顶元素小，则stackMin不压入任何内容。

// 举例依次压入 3，4，5，1，2，1的过程中，stackData和stackMin的变化如图所示。

// 弹出数据规则(2)
// 先在stackData中弹出栈顶元素,记做value,然后比较当前的stackMin的栈顶元素和value哪一个更小。
// 通过上文提到的压入规则可知，stackMin中存在的元素是从栈底到栈顶逐渐变小的,stackMin的栈顶元素是stackMin的最小值
// 也是当前stackDate的栈的最小值，所以不会出现value比stackMin的栈顶元素更小的情况，value只可能大于或者等于stackMin的栈顶元素
// 当value等于 stackMin的栈顶元素时候，stackMin弹出栈顶元素，当value大于stackMin的栈顶元素时候，stackMin不弹出栈顶元素，返回value。
// 很明显的看出压入如弹出规则是对应的。

// 查询当前栈中的最小值操作
// 由于上文中中压入和弹出的数据的规则可知,stackMin始终记录着stackData中的最小值。所以，stackMin的栈顶元素始终是当前stackData中的最小值

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  // 初始化两个栈，一个是数据栈，用于存储数据，一个是min栈，用于存放最小的值。
  // 我们更加愿意说是维护一个新的栈结构来做这件事情。
  this.stackDate = [];
  this.stackMin = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
// 突然感觉到了 push 和 pop 很有讲究。
// 这里的stack使用的是js中数组模拟实现的。
MinStack.prototype.push = function (x) {
  // 入栈操作首先判断 min栈有没有元素，将数据压入stackDate的同时也需要将数据压入min栈中
  if (this.stackMin.length === 0) {
    this.stackMin.push(x);
  } else if (x <= this.getMin()) { // 如果不为空 判断当前push的值和min栈顶值的关系
    this.stackMin.push(x)
  }
  this.stackDate.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // pop操作首先需要判空，如果Date栈已经空了抛出一个异常
  if (this.stackDate.length === 0) {
    throw new Error('stackDate is empty');
  }
  // pop 方法会删除并返回数组中的最后一个元素，这个方法会改变数组的长度
  let value = this.stackDate.pop();
  // min的栈顶元素是 min栈中最小的也是date栈中最小的
  if (value === this.getMin()) {
    this.stackMin.pop();
  }
  return value;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stackDate.length === 0) {
    throw new Error('stackDate is empty')
  }
  return this.stackDate[this.stackDate.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.stackMin.length === 0) {
    throw new Error('stacMin is empty')
  }
  return this.stackMin[this.stackMin.length - 1];
};

// 下面这段代码的意思是 top 和 getMin 这个函数都是拥有返回值的
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


 let minStack = new MinStack();
 minStack.push(-2);
 minStack.push(0);
 minStack.push(-3);

 let min = minStack.getMin();
 console.log(min);

 minStack.pop();
 let val = minStack.pop();
 console.log(val);

 let min2 = minStack.getMin();
 console.log(min2);








