// app.js
App({
  // 启动的时候，会有的生命周期
  onLaunch() {
    // this
    // 任何 page onload 更早
    wx.request({
      // json 除了是对象字面量，还是数据交换的格式
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success: (response) => {
        const {slides, stories, vehicles} = response.data
        // this?
        // console.log(slides, stories,vehicles);
        this.globalData.slides = slides;
        this.globalData.stories = stories;
        this.globalData.vehicles = vehicles;
      }
    })
   
  },
  // 全局数据
  globalData: {
   slides:null,
   stories:null,
   vehicles: null,
  }
})
