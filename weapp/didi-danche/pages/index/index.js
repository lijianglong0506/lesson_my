// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
   latitude:28.68194,
   longitude:115.96191,
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
//   wx.showLoading({
//       title:'加载中...',
//   })
  wx.getLocation({
      type:'gcj02',
      isHighAccuracy: true,
    //   箭头函数  可以不用写function
      success: (res) => {
        //   wx.hideLoading()
            console.log(res, '////')
            // es6 的解构  数组  JSON对象 上可以用
            // es6 漂亮的语法 数据 一部分 解析出来
            // 并成为局部变量
             let { latitude, longitude} = res; //json
            //  console.log( latitude, longitude,' latitude, longitude');
             console.log( this.data.latitude, this.data.longitude,' latitude, longitude');
             this.setData({
                 latitude: 28.68194,
                 longitude: 115.96191
             })
             console.log( this.data.latitude, this.data.longitude,' latitude, longitude');
      }
  })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
