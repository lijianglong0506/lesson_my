# 从代码到能力的转变
- 把一个项目完整的走一遍
  不写代码  读代码 理解小程序完整项目开发

- page
   - components
   组成页面的组件
   把一部分页面的功能分离，有利于以后的复用
- 标签  view div p ....

- component 语法重点
  1. 思想
     组件看过去复杂，封装一次，多次复用， 到处使用
  2. 地位
     组件仅次于页面，是高级使用技巧
  3. 创建
     和页面差不多
  4. 引入
     页面要使用组件，需要引入 usingComponents  /根目录
  5. properties  属性
     page 和components 通信的约定
      {
        type:Array 类型
         value:[] 默认值
      }
       <w-tab-control title="" bind:/>
       bind:绑定事件
   6. 私有属性
       data  自己的运转
   7. 向外通信
       this.triggerEvent('event_name', {index:1});    
- scroll-view
 1. 移动端页面 优先考虑scroll-view
    可滚动内容的容器
 2. scroll-top 0
    回到顶部
 3. bindscroll
    滚动事件 频繁
 4. binidscrolltolower  滚动底部 加载更多
    bindscrolltoupper 滚动顶部
 5. scroll-with-animation 配合 scroll-top 0 使用


- 数据请求事项
  1. 找到生命周期
   onload 最适合
  2. 不要再onload 写太多代码， 有可能有很多事情要做， 用函数封装
     取数据的 getData fetchData ......
  3. 高手还会把 数据请求 模块化独立于page
     service 网络服务 新的目录
  4. 模块化 import  from''    

- 列表数据渲染
  1. scroll-view
     bindscroll  回到首页
     binidscrolltolower="loadMore' 底部，  加载更多
     concat  分页   ?page=1
     切换tab ?type=

- 小程序的架构
  - components 组件
    细化界面开发，  方便复用
- service 跟api 接口相关
   直接wx.request  缺点？ 不易管理
   统一管理

- 接入接口
  page  home 不直接调用wx.request 
  从service 提供  
  映入模块
  import {
    getMultiData
  } from '../../service/home.js'

  getMultiData  得是支持then  函数
  函数返回值是Promise 实例就可以
  // 向外提供了getMultiData 方法   service/home.js 
  <!-- return new Promise(() => {
    // network.js 会提供一个通用的 request 方法给我们

  }) -->
  return request({
    url: '/home/multidata'
  })

  export const getProduct = (type,page) => {

  }

  request 函数 必须返回promise 实例  
  异步， 请求完成 success timeout 解决掉 promise 




- 页面开发，新思路
  页面不在由标签构成，而由组件构成
  把一个页面任务，分成若干组件开发任务，
   - 共享，多个页面 /components
   - 不共享，只在特定的页面上出现，页面简洁， 就放到page目录下


- 首页列表复杂业务梳理
1. 查询参数有两个
   page
   type
   先测试接口
   http://152.136.185.210:7878/api/hy66/home/data?page=${page}&type=${type}
2. goods 列表
    数据驱动的列表
3. 默认 type POP page = 1
4. goods:{
  [POP]:{
    list:[],
    page:1
  },
   [NEW]:{
    list:[],
    page:1
  },
   [SELL]:{
    list:[],
    page:1
  }
}
开始时都请求一下，切换的tab时，马上出来
getProductData(type)

- w-goods  w-goods-item  组合
1. 页面是由组件构成的， 而不是标签
2. 组件就负责渲染，一个业务，properties  triggerEvent
3. 容器组件
   w-goods 容器组件  集合
   w-goods-item   功能

- 小程序组件语法
 1. Component({

 })
 2. 通用组件 components
   组成页面的组件， 不怎么复用的， 就放在相应page 目录下
   页面简单，可读性提升， 便于维护
 3. 数据有 properties(派发) + data(私有)
 4. 方法是放在 methods
    this.triggerEvent(页面的自定义事件，传递的参数)
 5. 页面上 <demo data={} bind:event="">
   自定义事件， 添加在页面等待回调的函数


- 详情页开发套路
关注点在组件和交互
  1. onLoad 解析请求参数 id
  2. 将请求方法封装
  3. 页面和请求分离
  4. service/
    添加了一个detail方法
    每个page 都会在 service 下有个对应的文件
  5. 页面的组件化
     看设计稿，划分组件
     工作任务会以组件为单位
  6. 分析数据， 数据驱动的界面或组件开发
    切页面 wxml + wxss 应该发生在组件里，而不是page下
  7. 组件功能及表现，如果不清楚，去找后端，设计师，产品
  8. 页面的重要数据进行建模， models/
    严格把关数据的过程


- serverice 目录架构思路
1. 管理所有的网络请求
  baseURL 统一的request 方法
2. 每个页面 一个单独的.js 文件， 提供请求方法
  代码的可读性和管理
3. 高效发出请求
   不用每个请求 都重复 wx.request()

- 组件的思维
  1. 页面由组件构成
  2. components (共享)组件和组成单个页面的组件(可读)
  3. 跨页面， 跨项目， 开源到npm市场
    vant ？商业项目 大型一些可以采用
    使用第三方组件， 加快开发速度


