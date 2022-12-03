- 奶茶小程序的门店选择页
1. LBS location Bsae Service
    高德 LBS 技术
    美团
2. wx.getLocatian
   lat  long 经纬度
3. 运用常规css 命名套路
  - BEM 开启一个新的功能区域
  - wx_btn  .wx_btn-primary
  - .page>.page__hd+.page__bd+.page__ft
  .cell>.cell__hd+.cell__bd+.cell__ft
  - __ Element 只做一级， 用简单单词 不重复
4. 小程序在wxss 里面 background: url(本地图片)
  - 小程序之所以小， 不要做太多事情  产品定位
  - 文件包的大小， 小于2M
  - base64 格式， 图片格式
    乱码一样， Google 图片格式， 更小
  - background: url()


5. 视频播放列表页逻辑
    - 得有远程可播放视频‘
    - 视频有一个 poster 封面
    - 显示和点击的是图片
    - currentVid 逻辑切换
      dataset.vid
         image currentVid !== vid
         video currentVid === vid  