-   项目配置在根目录app.json
  - 隐藏并定制navigationBar
    "navigationStyle": "custom"
  - 启动定位功能

- 使用了BEM 国际css命名规范
  tst_banners  广告位 Block
  tst_banners__img  Element
  
- css 技巧
  1. 能不用定位就不要用定位
    脱离文档流
  2. 移动端多用弹性布局 

- 滴滴swiper 多页活动菜单功能
    用户体验 less is more 摆在第一位 
    菜单太多， 用户的密集恐惧症， 把重要的放在首页
    其他的可以多放一些
    技术难度  
    1. swiper > 2 swiper-item
    2. swiper 高度  变化的     等高的
      2行
      4行的高度 
      swiper height 响应式的数据   
    3. class="didi_menus {{'higher_menus'}}"
      {{}} 占位符  返回值是替换的值
      js运行区域 
    4. swiper bindchange  事件
      event 对象中
        event.detail.current 当前是第几个swiper-item?
        menu_type 
        this.setData()


- 数据响应式编程  
  他是一个思想， 有别于DOM 编程API 
  设置一些页面效果， 操作的不是DOM, 
  操作是数据， 因为数据一旦发生改变， 页面会自动刷新。 
  1. 滴滴可变高度的首页菜单 
  2. tabbar 组件
    data  添加  tab 属性， 表示当前哪个tab被激活
    tab-item 添加bindtap  事件
    tab-item data-tab 数据属性 data- 
    e.currentTarget 点击当前元素
    e.currentTarget.dataset.tab 数据

  3. 外卖品类级菜单数据设计
     2 个scroll-view, 数据是有相关性
     2层嵌套的json解构

- css的技巧
  1. 选择器优先级
    p.md2  11
    p.md2 + div.md3    11 + 11   22
    标签1<类名10<id 100< 计算表达式
    行内样式， 优先级更高  少用
    !important 最高 慎用
  2. 弹性布局
    移动端 flex 可以解决大部分问题 
    div  块级
    布局的一种  跟外部不一样的布局， 桃花源记 
    flex  内部   块级能力丢失  BFC 
    Block formating context   
  3. BEM 国际命名规范
    Block 开始  rx_tab  新的组件
    Element  内部元素的申明  rx_tab__item
    Modifier rx_tab__item-on
- 中大型应用 建议采用框架
为什么小程序不用框架， 小程序之所以小    因为小程序的空间文件上传不能超过2m
  有赞 vant 
  1. 小程序 变成node 项目
  npm init -y  多了一个package.json
  2.  npm i @vant/weapp -S --production   安装vant  多了一个 node_modules/@vant
  3. 工具 -> 构建npm   多了一个miniprogram_npm
  4. 去除app.json
  v2
  5. 引用要用的组件

  

    