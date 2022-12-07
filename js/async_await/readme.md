# JS执行机制
- JS 为何而生？
      响应用户的交互， 事件， 简单
      有必要设计成为多线程吗？  JAVA C++ 有必要   而JS没必要
      线程是程序运行的最小单元
      JS 设计为单线程 优点是够简单 less is more   缺点是脆弱
      同步代码尽快运行完，耗时的任务怎么办？

      
- JS = 单线程 + Event Loop(机制)
     (setTimeout fetch eventListener) 异步的， 放入Event loop里
     
     同步代码快速运行，js 进入idle 状态 3s 再进入单线程运行
