<template>
    <div class="price">
        <div class="price_item">
            <div class="left">
                <div class="pic">￥</div>
                <div class="number">718</div>
                <div class="discount">1.6折</div>
                <div class="text">发售价 ￥4499</div>
                <div class="text_1">| 新品价2088</div>
                <i class="iconfont icon-wenhao"></i>
            </div>
            <div class="right">
                <div class="text_right">瑕疵</div>
                <i class="iconfont icon-wenhao"></i>
            </div>
        </div>
        <div class="quan">
            <div class="zi_1">满399减30</div>
            <div class="zi">领取</div>
            <div class="zi2">以旧换新专属补贴</div>
            <div class="zi">领取</div>
        </div>
        <div class="text_bottom">瑕疵 OPPO Reno3 Pro (5G) 12G+256G 日出印象 移动5G 联通5G 电信5G 国行</div>
        <div class="bottom_wrapper" ref="scroll">
            <div class="bottom_content" ref="content">
                <div class="bottom_item">
                    <div class="content">
                        <div class="tilte">屏幕尺寸</div>
                        <div class="detail">6.5英寸</div>
                    </div>
                </div>
                <div class="bottom_item">
                    <div class="content">
                        <div class="tilte">电池容量</div>
                        <div class="detail">4025mAh</div>
                    </div>
                </div>
                <div class="bottom_item">
                    <div class="content">
                        <div class="tilte">包装配件</div>
                        <div class="detail">无配件</div>
                    </div>
                </div>
                <div class="bottom_item">
                    <div class="content">
                        <div class="tilte">cpu型号</div>
                        <div class="detail">高通 骁龙765G</div>
                    </div>
                </div>
                <div class="bottom_item">
                    <div class="content">
                        <div class="tilte">SIM卡</div>
                        <div class="detail">支持双卡</div>
                    </div>
                </div>
                <div class="bottom_item">
                    <div class="content">
                        <div class="tilte">存储容量</div>
                        <div class="detail">256G</div>
                    </div>
                </div>
                <div class="bottom_item">
                    <div class="content">
                        <div class="tilte">网络制式</div>
                        <div class="detail">全网通</div>
                    </div>
                </div>
                <div class="bottom_item">
                    <div class="content">
                        <div class="tilte">购买渠道</div>
                        <div class="detail">国行</div>
                    </div>
                </div>
                <div class="bottom_item">
                    <div class="content">
                        <div class="tilte">保修情况</div>
                        <div class="detail">不支持</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import _ from 'lodash'
import { ref, onMounted } from 'vue'
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM)

const scroll = ref(null)
const content = ref(null)
let bs = null

onMounted(() => {
    bs = new BScroll(scroll.value, {
        probeType: 3,
        scrollX: true,
        scrollY: false,
        observeDOM: true
    })
})
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.price
    margin .5rem .2rem
    border-radius 8px
    background-color #f5f5f5
    .price_item
        fj()
        .left
            display flex
            .pic
                margin .1rem
                font-weight bold
                font-size 16px
                bottom -.1rem
            .number
                left -5px
                font-weight bold
                font-size 20px
                bottom -.1rem
            .discount
                color white
                height 18px
                background-color #fe483b
                bottom -.3rem
                padding .05rem
            .text
                text-decoration line-through
                margin 0 .2rem
                bottom -.4rem
            .text_1
                bottom -.4rem
            i 
                margin 0 .2rem
                font-size 8px
                bottom -.45rem
        .right
            display flex
            .text_right
                font-size 18px
                bottom -.1rem
            i 
                bottom -.1rem
                font-size 8px
                margin .1rem
    .quan
        display flex
        margin .2rem
        color red
        .zi_1
            font-size 8px
        .zi
            font-size 1 px
            text-decoration underline
            bottom .1rem
            margin 0 .2rem
    .text_bottom
        font-size 15px
    .bottom_wrapper
        border-top dashed gray
        margin .2rem
        overflow hidden
        .bottom_content
            display inline-block
            white-space nowrap
            .bottom_item
                margin .2rem
                display inline-block
                .content
                    border-right solid
                    padding 0 .2rem
                    justify-content center
                    align-items center
                    .tilte
                        color gray
                    .detail
                        font-weight bold
</style>