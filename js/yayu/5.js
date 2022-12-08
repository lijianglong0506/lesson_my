var add = function(a, b, c) {
    return a + b + c
}
function memorize(f) {
    // 缓存结果 {}  key  
    // 
    // console.log(fn, args);
    var cache = {
        // key 字符串
        // "lu": "抖音"
    };
    
    // 作用域 
    return function(){
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        if (key in cache) { // in json 运算符
            return cache[key] // 没有运行  f
        } else {
            return cache[key] = f.apply(this, arguments)
        }
    }
}
// memorize 高阶函数
// memorize 内部生成了闭包函数，并且return 给 memorizedAdd
  var memorizedAdd = memorize(add)
//   memorizedAdd(1,2,3)
  console.time('not use memorize') // 计时开始
  for(var i = 0; i < 100000; i++) {
  memorizedAdd(1,2,3)
// add(1,2,3)
  }
  console.timeEnd('not use memorize')