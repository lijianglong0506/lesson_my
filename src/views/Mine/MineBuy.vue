<template>
    <div class="buy">
        <div class="buy_text">
            <div class="text_1">我买的</div>
            <div class="text_2">全部 ></div>
        </div>
        <div class="buy_icon">
            <div class="buy_item">
                <i class="iconfont icon-daifukuan"></i>
                <div class="text">待付款</div>
            </div>
            <div class="buy_item">
                <i class="iconfont icon-daifahuo"></i>
                <div class="text">待发货</div>
            </div>
            <div class="buy_item">
                <i class="iconfont icon-daishouhuo"></i>
                <div class="text">待收货</div>
            </div>
            <div class="buy_item">
                <i class="iconfont icon-daipingjia"></i>
                <div class="text">待评价</div>
            </div>
            <div class="buy_item">
                <i class="iconfont icon-shouhou"></i>
                <div class="text">退款/售后</div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.buy
    margin .2rem
    height 100px
    background-color #F5F5F5
    padding .2rem
    border-radius 8px
    .buy_text
        fj()
        .text_1
            font-size 15px
            font-weight bold
        .text_2
            color rgb(183, 183,183)
    .buy_icon
        margin .2rem .3rem
        fj()
        .buy_item
            fc()
            i
                font-size 25px
                margin .2rem 0
</style>