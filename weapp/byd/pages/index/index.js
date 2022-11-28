Page({
    data: {
        navbar: ['推荐','动态','圈子','专区','活动','直播'],
        currentTab:0
    },
    navbarTap:function(a){
        this.setData({
            currentTab: a.currentTarget.dataset.idx
        })
        
    },

    onLoad() {
        wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#000000',
            animation: {
                duration: 400,
                timingFunc: 'easeIn'
            },
        })
        const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
        this.setData({
            navBarHeight: menuButtonInfo.height,
            menuRight: 20,
            menuTop: menuButtonInfo.top,
            menuHeight: menuButtonInfo.height,
        })
    }
})