<template>
    <div class="container">
        <div class="scroll_wrapper">
            <div class="scroll_content">
                <div class="scroll_item">
                    <div class="channel">
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/h7pkU.jpeg">
                            <div>手机</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/54Uud.jpeg">
                            <div>数码</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/24/iiM14p.jpeg">
                            <div>美妆</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/24/iiMQNU.jpeg">
                            <div>四坑</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/24/iiPVT8.jpeg">
                            <div>周边明星</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/24/iiP4pF.jpeg">
                            <div>母婴</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/5A6jp.jpeg">
                            <div>游戏账号</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/24/iiPnNE.jpeg">
                            <div>交通工具</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/07/5AISo.jpeg">
                            <div>图书小说</div>
                        </div>
                        <div class="pic">
                            <img src="https://i.328888.xyz/2023/03/24/iiPthC.jpeg">
                            <div>家电</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
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