<template>
    <div class="container">
        <div class="scroll_wrapper" ref="scroll">
            <div class="scroll_content" ref="content">
                <div class="scroll_item">
                    <div class="channel">
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/h7pkU.jpeg">
                            <div>苹果手机</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/hTrTV.jpeg">
                            <div>安卓手机</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/5VM08.jpeg">
                            <div>耳机</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/5yTIQ.jpeg">
                            <div>电脑平板</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/54Uud.jpeg">
                            <div>智能手表</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/54ray.jpeg">
                            <div>电脑办公</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/54Rk5.jpeg">
                            <div>潮牌轻奢</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/54o5N.jpeg">
                            <div>旧机换钱</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/5AISo.jpeg">
                            <div>图书小说</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/5A6jp.jpeg">
                            <div>游戏交易</div>
                        </div>
                    </div>
                </div>
                <div class="scroll_item">
                    <div class="channel">
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/h7pkU.jpeg">
                            <div>苹果手机</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/hTrTV.jpeg">
                            <div>安卓手机</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/5VM08.jpeg">
                            <div>耳机</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/5yTIQ.jpeg">
                            <div>电脑平板</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/54Uud.jpeg">
                            <div>智能手表</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/54ray.jpeg">
                            <div>电脑办公</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/54Rk5.jpeg">
                            <div>潮牌轻奢</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/54o5N.jpeg">
                            <div>旧机换钱</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/5AISo.jpeg">
                            <div>图书小说</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/5A6jp.jpeg">
                            <div>游戏交易</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pointer-wrapper">
                <div class="inner" :style="{ left: innerLeft }"></div>
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
const innerLeft = ref('0px')
const scroll = ref(null)
const content = ref(null)
let wrapperWidth = 0
let contentWidth = 0
let bs = null

onMounted(() => {
    wrapperWidth = scroll.value.offsetWidth
    contentWidth = content.value.offsetWidth
    bs = new BScroll(scroll.value, {
        probeType: 3,
        scrollX: true,
        scrollY: false,
        observeDOM: true
    })

    const onScroll = position => {
        let percent = Math.abs(position.x) / (contentWidth - wrapperWidth)
        let moveLeft = percent * 16
        innerLeft.value = `${moveLeft}px`

    }
    bs.on('scroll', _.throttle(onScroll, 50))
})
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.container
    .scroll_wrapper
        white-space nowrap
        overflow hidden
        position relative
        .scroll_content
            display inline-block
            width 200vw
            .scroll_item
                display inline-block
                width 100vw

                .channel
                    display flex
                    fj()
                    flex-wrap wrap
                    .pic
                        justify-content center
                        align-items center
                        margin .2rem 0
                        fd()
                        width 70px
                        img 
                            width 0.9rem /* 40/16 */
                            height 0.9rem /* 40/16 */
        .pointer-wrapper
            border-radius 90px
            position absolute
            bottom 2px
            width 24px
            height 3px
            background #DDD
            left 50%
            margin-left -12px
            .inner
                border-radius 90px
                position absolute
                background gray
                width 8px
                height 100%
</style>