- 滴滴swiper 多页活动菜单功能
    用户体验 less is more  摆在第一位
    菜单太多， 用户的密集恐惧症， 把重要的放在首页
    其他的可以多放一些
    技术难度  
    1. swiper > 2个 swiper-item
    2. swiper 高度  变化的   等高的
      2行
      4行的高度
      swiper height 响应式的数据
    3. class="didi_menus {{'height_menus'}}"
        {{}} 占位符  返回值是替换的值
        js运行区域

- css的技巧
   1. 选择器优先级
     p.md2  11
     p.md2 + div.md3    11+11   22
     标签1< 类名10 < id 100 < 计算表达式
   2. 行内样式， 优先级更高   少用
   3. ！important 优先级最高 慎用
    