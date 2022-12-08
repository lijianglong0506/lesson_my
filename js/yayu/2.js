// 本分 函数做它该做的就行了
function add(a, b) {
    return a + b;
}
// fn 是形参 是等待着被优化的函数
// 闭包  函数内部还有函数
function memorize(f) {
    //  缓存结果  {}   key
    
    // console.log(fn, args);
    var cache ={
        // "long":"字节"
    };     //cache是缓存的意思
    // 作用域 
    return function(){
    //   console.log('我是inner function',cache.long);
    // console.log( Array.prototype.join.call(arguments, ","),'////');
    var key = arguments.length + Array.prototype.join.call(arguments, ",");    //为什么一定要用.join 因为json对象的类型一定要是字符串
    // console.log(key,'////');
        if (key in cache) { // in json 运算符
            console.log("缓存");
            return cache[key]  // []查找  // 没有运行 f 
        }
        else {
            console.log('add。。。。。');
        // apply call 都可以运行函数， 手动指定内部的this
        // apply 数组集合， 作为f 的参数
         return cache[key] = f.apply(this, arguments)    //优先级问题， return后面话有一个赋值操作，优先做赋值操作
        // cache[key] = f.call(this, ...arguments) ...arguments es6新语法
        }
    }
}
// 函数运行完后就销毁
//函数进入执行栈  创建函数作用域，
var memorizedAdd = memorize(add)   //运行才会生成闭包函数
//出栈？ 内存的回收  cache 这个时候应该就没有了  但却没有， cache 被 接下来的函数引用着
memorizedAdd(1,2); //运行时可以找到生成时 上下文环境中的变量
memorizedAdd(1,2);  