<template>
    <div class="sale">
        <div class="sale_item">
            <i class="iconfont icon-baobao"></i>
            <div class="sale_text">我卖的</div>
        </div>
        <div class="sale_item">
            <i class="iconfont icon-zhaoxiangji"></i>
            <div class="sale_text">我发布的</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.sale
    margin .2rem
    height 50px
    background-color #F5F5F5
    display flex
    border-radius 8px
    .sale_item
        margin 0 1.5rem 0 .2rem
        display flex
        align-items center
        i
            background-color white
            padding 5px
            border-radius 50%
            margin 0 .4rem
            font-size 25px
        .sale_text
            font-size 14px
            font-weight bold
</style>