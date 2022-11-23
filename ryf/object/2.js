// 构造函数
// js 没有calss， 不是传统面向对象OOP
// constructor
// js 用 function  代替  class   类的封装
// 基于对象
function Person(name,age){
    this.name = name;
    this.age = age;
}
// 实例化的过程
const lllp = new Person('楠楠', 22);
console.log(lllp.name);