// function Animal() {
//   this.name = '动物';
// }

// function Dog() {

// }
// // 原型链继承
// Dog.prototype  = new Animal();
// let dog = new Dog();
// console.log(dog.name);

// 这种是基于原型链的继承
// 有一个明显的缺点就是，如果属性是 对象类型，则所有的实例都会共享这个属性
function Animal() {
  this.name = ['red','blue','yellow'];
}

function Dog() {}

// 原型链继承
Dog.prototype  = new Animal();
let dog = new Dog();
dog.name.push('pop');

let dog2 = new Dog();
console.log(dog2.name);
