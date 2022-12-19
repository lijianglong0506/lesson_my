- @vant/weapp
 企业级开发框架
 赋能快速开发


- 电商项目页面组件化的框架用法
- 小程序层级关系
  项目>页面>组件(一堆标签，一个特定使命)>标签(view)
- 如何用vant 去搭页面组件
  - 经验
  - 如果要自定义或修改框架组件的样式，可以
  使用custom-class="业务类名"

   const formatPrice = `￥${(goods.price / 100).toFixed(2)}`  
   //``字符串模板所以formatPrice是字符串数据类型  //#表示常量，//只取小数点后面两位

- 页面布局 layout
   row col
   vant 默认一行有 24
- vant 提供了项目开发中60%-70%的组件  通用组件库
   
    