- 内置了很多好用的组件
   （"section hero white"）方便复用
   swiper> swiper-item  组件

- wxml 里 {{}}  模板
    在页面上显示出来
    页面上如果有多个循环片段需要输出的话
    wx:for（循环） 指令 slides  wx:key   唯一值
    每次遍历时  item
- css 在那些？
     page/xxx.wxss   业务样式， 更具体页面相关
     如果有些通用样式呢？  放到app.wxss(全局样式)

- 模块化  面向对象思想

- 事件  bindtap  移动端tap 事件
    事件处理函数在 Page({

        ]})声明就可以了

- wx.navigateTo({

})
wx  命名空间  源源不断的微信查克拉能量



- color: rgba(0,0,0,0.85)   前三个值（红绿蓝）的范围为0到255之间的整数或者0%到100%之间的百分数。这些值描述了红绿蓝三原色在预期色彩中的量。
第四个值，alpha值，制订了色彩的透明度/不透明度，它的范围为0.0到1.0之间，0.5为半透明。

rgba(255,255,255,0)则表示完全透明的白色；
rgba(0,0,0,1)则表示完全不透明的黑色；
rgba(0,0,0,0)则表示完全不透明的白色,也即是无色；