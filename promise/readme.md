# Promise A+ 规范

- Promise 类 then catch resolve reject all race finally.....
- 传一个参数，函数，也叫executor, 立即执行
- executor有两个参数  resolve,  reject  都是函数
- 三个状态  pending  fullfilled rejected    
    - pending, 可以转化为 fulfilled 和 rejected
        不可以多次执行同一个promise 不可逆
    - 成功时不可转为其他状态， 且拥有一个不可改变的值
    - 失败时不可转为其他状态， 且拥有一个不可改变的原因
    - executor 报错， 直接reject()


- then(onFulfilled, onRejected)
    - state 转为fulfilled, this.value -> onFulfilled 运行
    - state 转为rejected， this.value -> onRejected 运行

- then
    1. 如果异步， 先存储起来 当状态发生改变的时候，再来执行它
    2. 解决了回调地狱问题
        - 回调地狱发生的情况： 
            控制执行顺序 thenable 链式调用
            前一个promise then 怎么执行下一个then?
            return promise  比如是一个数字2 或者是 Object 作为下一个promise的value 