// 对象就是属性和方法的集合
// OOP Object Oriented Programming
let obj = {
    name: '楠楠',
    sayHi () {
        console.log('hello')
    }
}
obj.name
// 对象
const lllp = new Object; // [] Array  {} js  Object 函数  也是对象
// 一般情况下  对象字面量都基于 Object 来构造， 原型式面向对象

lllp.name = '楠楠'
lllp.sayHi = function(){
    console.log('hello');
}
console.log(lllp);