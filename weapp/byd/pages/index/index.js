
// var Mock = require("../../utils/WxMock.js"); 
Page({
    data: {
        navbar: ['推荐', '动态', '圈子', '专区', '活动', '直播'],
        currentTab: 0,
        contentTxt: [{
            title: '这是一个视频',
            typeIndex: 0,
            // src:'./'
        }, {
            title: '这是四张图片',
            typeIndex: 1,

        }, {
            title: '这是第三种情况',
            typeIndex: 2
        }]
    },
    navbarTap: function (a) {
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
        // let data = Mock.mock({
        //     'name': "@cname"
        // })
        // console.log(data);
        const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
        this.setData({
            navBarHeight: menuButtonInfo.height,
            menuRight: 20,
            menuTop: menuButtonInfo.top,
            menuHeight: menuButtonInfo.height,
        })
    }
})