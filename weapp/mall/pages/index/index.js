const WXAPI = require("apifm-wxapi");
Page({
  data: {
    search:'',
    onCategoryClick:0,
    categories:[],//左边的分类列表
    currentGoods:[]// 当前的商品列表
  },
  onLoad(){
    //分享
    // wx.showShareMenu({
    //   withShareTicket:ticket
    // })
    // 面向对象编程
    this.categories();
  },
// 请求分类数据
  categories(){
    wx.showLoading({
      title: '加载中...',
    })
    WXAPI
    .goodsCategory()
    .then(res => {
      // console.log(res);
      wx.hideLoading();
      //没有发生错误
      if(res.code == 0){
        const categories = res.data;
        this.setData({
          categories
        })
      }
    })

  },
  onCategoryClick(event){
const idx = event.target.dataset.idx
this.setData({
  activeCategory:idx
})
  },
  searchscan(){
    // console.log(scan);
    wx.scanCode({
      scanType:['barCode','qrCode'],
      success:res =>{
        this.setData({
          search:res.result
        })
        wx.navigateTo({
          url: `/pages/goods/list?name=${res.result}`
        })
      }
    })
  },
  bindconfirm(e){
    // console.log(e,e.detail);
// this.setData()
let search = e.detail;
this.setData({
  search
})
wx.navigateTo({
  url: `/pages/goods/list?name=${search}`
})
  }

})