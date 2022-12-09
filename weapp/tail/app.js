// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)



    wx.getSystemInfo({
      success:res =>{
        let menuButtonObject =
        wx.getMenuButtonBoundingClientRect();
        // console.log(menuButtonObject);
        let statusBarHeight = res.statusBarHeight;
        // console.log(statusBarHeight);
        let navHeight = statusBarHeight 
        + menuButtonObject.height
        + (menuButtonObject.top - statusBarHeight)*2;
        console.log(navHeight);
        let navTop = menuButtonObject.top;
        console.log(navTop);
        let windowHeight = res.windowHeight;
        Object.assign(this.globalData,{
          navHeight,
          navTop,
          windowHeight,
          menuButtonObject
        })
      }
    })




    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    navHeight:0,
    navTop:0,
    windowHeight:0,
    menuButtonObject: null,
    userInfo: null
  }
})
