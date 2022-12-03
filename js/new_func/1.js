var stuA = {
    name: '梅涛'
};

var stuB = {
    name: '俊华'
};

function sayHi(...args){
    console.log(arguments,...args);    //... 展开 和 收起运算符
    console.log(`你好,我是${this.name}`);
}
Object.prototype.sayHi = sayHi;

//stuA,atuB 都能 sayHi
// call 改天换命， 手动指定this 的指向
//this -> 调用对象 stuA stuB
// sayHi.call(stuB);
// sayHi.call(stuA);
// stuA.sayHi();
sayHi.call(stuB, 1,2);
sayHi.apply(stuB, [1,2]);
// var func = sayHi.bind(stuB);
// func();
