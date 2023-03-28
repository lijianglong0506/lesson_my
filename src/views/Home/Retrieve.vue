<template>
    <div class="sell">
        <div class="content">
            <div class="text_1">转转回收 →</div>
            <div class="text_2">省心卖-24小时必卖</div>
        </div>
        <div class="pic">
            <div class="sell_one"><img src="https://i.328888.xyz/2023/03/14/9QihV.png"></div>
            <div class="sell_two"><img src="https://i.328888.xyz/2023/03/14/9Qx0t.png"></div>
            <div class="sell_three"><img src="https://i.328888.xyz/2023/03/14/9QF5N.png"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
.sell
    margin .2rem 0
    .content
        margin .2rem
        display flex
        align-item center
        justify-content space-between
        .text_1
            font-size 15px
            font-weight bold
        .text_2
            color rgb(183, 183,183)
    .pic
        display flex
        align-item center
        justify-content space-between
        .sell_one
            margin 0 .2rem
            width 40%
            img
                width 100%
                height 50px
        .sell_two
            width 25%
            img
                width 100%
                height 50px
        .sell_three
            margin 0 .2rem
            width 25%
            img
                width 100%
                height 50px
</style>