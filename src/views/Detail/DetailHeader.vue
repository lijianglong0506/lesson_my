<template>
    <div class="pic">
        <img src="https://i.328888.xyz/2023/03/24/iVSlgp.jpeg">
    </div>
    <div class="top">
        <div class="detail_header">
            <router-link to="/Home" class="header_left">
                <i class="iconfont icon-zuojiantou"></i>
            </router-link>
            <div class="header_right">
                <div class="header_item">卖</div>
                <div class="header_item">租</div>
                <i class="iconfont icon-fenxiang"></i>
                <i class="iconfont icon-gengduo"></i>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>


<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.pic
    height 300px
    text-align center
    img
        width 100%
        height 100%
.top
    width 375px
    position absolute
    top 5px
    .detail_header 
        fj()
        .header_left
            margin .2rem
            i
                font-size 20px
                border-radius 50%
                background-color white
                padding 2px
        .header_right
            display flex
            .header_item
                font-size 17px
                margin .2rem 
                border-radius 50%
                background-color white
                padding  0 2px 
            i
                margin .2rem
                font-size 20px
                border-radius 50%
                background-color white
                padding 2px
</style>