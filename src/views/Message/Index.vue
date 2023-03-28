<template>
    <div class="page">
        <div class="top">
            <div class="header">
                <div class="header_left">
                    <div class="header_left_item">消息 (7)</div>
                    <i class="iconfont icon-saozhou_"></i>
                </div>
                <div class="header_right">
                    <i class="iconfont icon-shezhi"></i>
                </div>
            </div>
            <div class="nav">
                <div class="nav_left">
                    <i class="iconfont icon-cha"></i>
                    <div class="nav_left_item">关注公众号，随时掌握交易信息</div>
                </div>
                <div class="nav_right">去关注 ></div>
            </div>
            <div class="content">
                <div class="content_top">
                    <div class="icon">
                        <i class="iconfont icon-xiaoxiong"></i>
                    </div>
                    <div class="content_top_item">
                        <div class="text">
                            <div class="text_left">转转客服</div>
                            <div class="text_right">官方</div>
                        </div>
                        <div class="text_1">点击查看详情</div>
                        <div class="text_2">03-18</div>
                    </div>
                </div>
                <div class="content_top">
                    <div class="icon">
                        <i class="iconfont icon-weiduxiaoxi"></i>
                    </div>
                    <div class="content_top_item">
                        <div class="text">
                            <div class="text_left">通知互动</div>
                        </div>
                        <div class="text_1">转转回收:嗨~这里有iPhone13可以0元领!</div>
                        <div class="text_2">03-18</div>
                    </div>
                </div>
            </div>
            <div class="message_box">
                <div class="message">
                    <div class="img">
                        <img src="https://i.328888.xyz/2023/03/22/a1VSt.jpeg">
                    </div>
                    <div class="zi">
                        <div class="message_text">星星pjiuhe36</div>
                        <div class="message_text_1">在?</div>
                        <div class="message_text_2">2020-08-23</div>
                    </div>
                </div>
                <div class="message">
                    <div class="img">
                        <img src="https://i.328888.xyz/2023/03/22/au9uz.jpeg">
                    </div>
                    <div class="zi">
                        <div class="message_text">史上第一可爱下单异常问我</div>
                        <div class="message_text_1">低价产品需要倒计时结束才能购买</div>
                        <div class="message_text_2">2020-08-29</div>
                    </div>
                </div>
                <div class="message">
                    <div class="img">
                        <img src="https://i.328888.xyz/2023/03/22/auapL.jpeg">
                    </div>
                    <div class="zi">
                        <div class="message_text">坤6uf5t1k2</div>
                        <div class="message_text_1">自己选择一款皮肤 99元包出荣耀水晶</div>
                        <div class="message_text_2">2020-08-23</div>
                    </div>
                </div>
            </div>
        </div>
        <NavBar></NavBar>
    </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.page
    .header
        margin .2rem
        fj()
        .header_left
            display flex
            .header_left_item
                font-size 15px
                margin 0 .2rem
        .header_right
            i
                font-size 20px
    .nav
        justify-content center
        align-items center
        height 25px
        background-color #FFFFE0
        color orange
        margin .4rem .2rem
        fj()
        .nav_left
            display flex
            i
                font-size 16px
                margin 0 .2rem
            .nav_left_item
                font-size 12px
        .nav_right
            font-size 12px
    .content
        border-bottom 2px solid #f5f5f5
        fd()
        .content_top
            margin .4rem .2rem
            display flex
            .icon
                text-align center
                height 30px
                width 30px
                border 1px solid white
                padding 6px 0
                border-radius 50%
                background-color #f5f5f5
        .content_top_item
                margin 0 .4rem
            .text
                fj()
                .text_left
                    font-size 13px
                .text_right
                    text-align center
                    margin 0 .2rem
                    height 14px
                    color white
                    background-color red
            .text_1
                margin .2rem 0
                color rgb(183,183,183)
            .text_2
                color rgb(183,183,183)
    .message
        display flex
        margin .4rem .2rem
        .img
            text-align center
            height 35px
            width 35px
            border 1px solid white
            padding 6px 0
            border-radius 50%
            background-color #B0E0E6
            img
                width 20px
                height 20px
        .zi
            margin 0 .4rem
            .message_text
                font-size 13px
            .message_text_1
                margin .2rem 0
                color rgb(183,183,183)
            .message_text_2
                color rgb(183,183,183)

</style>