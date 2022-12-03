// 立即运行函数
//指向window
//this 找到外层的this
(() => {
    // 不会分配this给他
    console.log(this);
})()