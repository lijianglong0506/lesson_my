// pages/detail/detail.js
import {getDetail} from '../../service/detail.js'
import {GoodsBaseInfo,GoodsShopInfo} from '../../models/detail.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
 iid:0,
 topImages:[],
 baseInfo:{},
 shopInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  //1.解构参数
  const iid = options.iid;
  this.setData({
    iid
  })
  // 请求页面数据
  this._getDetailData();
  },
  _getDetailData(){
  // 页面和请求分离
  getDetail(this.data.iid)
  .then(res => {
    console.log(res);
    const data = res.result;
    const topImages = data.itemInfo.topImages;
    // 建模
    const baseInfo = new GoodsBaseInfo(data.itemInfo,data.columns,data.shopInfo.service);
    const shopInfo = new GoodsShopInfo(data.shopInfo);
    this.setData({
      topImages,
      baseInfo,
      shopInfo
    })
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})