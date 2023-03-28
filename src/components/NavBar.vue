<template>
    <div class="page">
        <router-link to="/home" class="page_item">
            <div class="block" v-show="!state.show"></div>
            <div v-show="state.show">
                <i class="iconfont icon-shouye"></i>
                <div class="shouye">首页</div>
            </div>
        </router-link>
        <router-link to="/Shopping" class="page_item">
            <i class="iconfont icon-ziyoushichang"></i>
            <div class="ziyoushichang">自由市场</div>
        </router-link>
        <router-link to="/Cell" class="page_item">
            <i class="iconfont icon-jiahao"></i>
            <div class="jiahao">卖闲置</div>
            <div class="text">Z H U A N</div>
        </router-link>
        <router-link to="/Message" class="page_item">
            <i class="iconfont icon-xiaoxi"></i>
            <div class="xiaoxi">消息</div>
        </router-link>
        <router-link to="/Mine" class="page_item">
            <i class="iconfont icon-31wode"></i>
            <div class="31wode">我的</div>
        </router-link>
    </div>
    <back-top :show="state.show" />
</template>

<script setup>
import { reactive } from 'vue';
import BackTop from '@/views/Home/BackTop.vue'
const state = reactive({
    show: true
})
window.addEventListener('scroll', () => {
    if (window.pageYOffset > window.innerHeight) {
        state.show = false
    }
    if (window.pageYOffset == 0) {
        state.show = true
    }
})

</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
.page 
    border-top 2px solid #DDD
    width 100%
    display flex
    justify-content space-between // 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
    position fixed
    z-index 9999
    bottom 0
    background-color white
    .page_item
        fd()
        justify-content center
        align-items center
        .block
            width 23.89px
            height 52.8px
        .iconfont
            font-size 0.575rem /* 30/16 */
        .text
            font-weight 700
</style>