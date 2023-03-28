<template>
    <div class="page">
        <router-link to="/Home" class="header_left">
            <i class="iconfont icon-zuojiantou"></i>
        </router-link>
        <div class="header">
            <router-link to="/Official" class="text" :class="{ activity: state.defaultOpen === '1' }"
                @click="to1"><span>官方验</span></router-link>
            <router-link to="/FreeShopping" class="text" :class="{ activity: state.defaultOpen === '2' }"
                @click="to2"><span>自由市场</span></router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const state = reactive({
    defaultOpen: '1'

})
const to1 = () => {
    state.defaultOpen = "1"
}
const to2 = () => {
    state.defaultOpen = "2"
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.page
    position fixed
    .header_left
        i
            margin .2rem 0
            font-size 20px
    .header
        fj(space-around)
        margin 0 3rem
        .text
            font-size 12px
            margin 0 .387rem
            &.activity
                font-weight bold
                font-size 14px
                padding-bottom 5px
                border-bottom 3px solid red
</style>