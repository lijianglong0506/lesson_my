<template>
    <div class="page">
        <div class="header">
            <div class="top">
                <i class="iconfont icon-cha" @click="toHome"></i>
            </div>
            <div class="header_item">
                <div class="text_1">卖闲置</div>
                <div class="zi">
                    <div class="text_2">二手验货服务开创者，帮助卖出</div>
                    <div class="text_3">34,033,118</div>
                    <div class="text_2">件</div>
                </div>
            </div>
        </div>
        <div class="body">
            <div class="body_top">
                <div class="top_left">验过更好卖</div>
                <div class="top_right">
                    <i class="iconfont icon-wenhao"></i>
                    <div class="read">了解读法</div>
                </div>
            </div>
            <div class="body_container">
                <div class="container_item">
                    <div class="item_left">
                        <div class="biao">
                            <i class="iconfont icon-dunpai1"></i>
                        </div>
                        <div class="word">
                            <div class="word_top">
                                <div class="zhuan">转转回收</div>
                                <div class="yan">验</div>
                            </div>
                            <div class="word_bottom">卖给平台-立即拿钱不用等</div>
                        </div>
                    </div>
                    <div class="item_right">></div>
                </div>
                <div class="container_item">
                    <div class="item_left">
                        <div class="biao_1">
                            <i class="iconfont icon-xunzhang"></i>
                        </div>
                        <div class="word">
                            <div class="word_top">
                                <div class="zhuan">高价寄卖</div>
                                <div class="yan">验</div>
                            </div>
                            <div class="word_bottom">寄放平台帮你卖-自己定价卖更多</div>
                        </div>
                    </div>
                    <div class="item_right">></div>
                </div>
            </div>
            <div class="container_item_1">
                <div class="item_left">
                    <div class="biao_2">
                        <i class="iconfont icon-xiangji"></i>
                    </div>
                    <div class="word">
                        <div class="word_top">
                            <div class="zhuan">拍图自己买</div>
                        </div>
                        <div class="word_bottom">自己定价-自己卖</div>
                    </div>
                </div>
                <div class="item_right">></div>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom_header">在转转什么都可以卖</div>
            <div class="box">
                <div class="box_2">
                    <div class="box_1">
                        <div class="pic">
                            <img src="" alt="">
                        </div>
                        <div class="text">手机</div>
                    </div>
                    <div class="box_1">
                        <div class="pic">
                            <img src="" alt="">
                        </div>
                        <div class="text">手机</div>
                    </div>
                    <div class="box_1">
                        <div class="pic">
                            <img src="" alt="">
                        </div>
                        <div class="text">手机</div>
                    </div>
                    <div class="box_1">
                        <div class="pic">
                            <img src="" alt="">
                        </div>
                        <div class="text">手机</div>
                    </div>
                    <div class="box_1">
                        <div class="pic">
                            <img src="" alt="">
                        </div>
                        <div class="text">手机</div>
                    </div>
                    <div class="box_1">
                        <div class="pic">
                            <img src="" alt="">
                        </div>
                        <div class="text">手机</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <NavBar />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import router from '../../router';

const toHome = () => {
    router.push('/home')
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.page
    background-color #f2f2f2
    .header
        .top
            text-align right
            i
                font-size 25px
        .header_item
            margin .2rem
            .text_1
                font-size 25px
                font-weight bolder
            .zi
                margin .2rem 0
                display flex
                .text_2
                    font-size 13px
                .text_3
                    font-size 15px
                    font-weight bold
                    margin .05rem .15rem
    .body
        .body_top
            border-radius 8px 8px 0 0 
            height 35px
            background-color #FFEBCD
            margin 2rem .2rem 0 .2rem
            color #FFA500
            fj()
            .top_left
                font-size 13px
                margin .2rem
            i
                margin 0 .1rem
            .top_right
                display flex
                margin .2rem
        .body_container
            background-color white
            margin 0 .2rem
            .container_item
                fj()
                border-radius 0 0 8px 8px
                background-color white
                .item_left
                    display flex
                    margin .4rem .8rem
                    .biao
                        background-color white
                        color red
                        width 50px
                        i
                            font-size 50px
                            margin 0 -.6rem
                    .biao_1
                        background-color white
                        color blue
                        i
                            font-size 50px
                    .biao_2
                        background-color white
                        color green
                        i
                            font-size 50px
                    .word
                        .word_top
                            display flex
                            .zhuan
                                font-size 17px
                                font-weight bold
                            .yan
                                font-size 10px
                                background-color #FFEBCD
                                color #FFA500
                                height 12px
                                margin .1rem
                        .word_bottom
                            font-size 10px
                            margin .2rem 0
                .item_right
                    font-size 20px
                    margin .4rem .4rem
        .container_item_1
            margin .4rem .2rem
            border-radius 8px
            fj()
            background-color white
            .item_left
                display flex
                margin 0 .8rem
                .biao
                    background-color white
                    color red
                    width 50px
                    i
                        font-size 50px
                        margin 0 -.6rem
                .biao_1
                    background-color white
                    color blue
                    i
                        font-size 50px
                .biao_2
                    background-color white
                    color green
                    i
                        font-size 50px
                .word
                    .word_top
                        display flex
                        .zhuan
                            font-size 17px
                            font-weight bold
                        .yan
                            font-size 10px
                    .word_bottom
                        font-size 10px
                        margin .2rem 0
            .item_right
                font-size 20px
                margin .4rem .4rem
    .bottom
        margin 2rem .2rem 0 .2rem
        .bottom_header
            font-size 13px
            font-weight bold
            .box
                .box_2
                    display flex
                    width 100%
                    .box_1
                        display flex
                        width 33%
                        .pic
                        .text
                            font-size 10px
</style>