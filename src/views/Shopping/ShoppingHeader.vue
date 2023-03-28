<template>
    <div class="page">
        <div class="channel">
            <router-link to="tuijian" class="text" 
                :class="{ activity: state.value === '1' }" 
                @click="to1">推荐</router-link>
            <router-link to="xingqu" class="text" 
                :class="{ activity: state.value === '2' }" 
                @click="to2">兴趣</router-link>
            <router-link to="nanchang" class="text" 
                :class="{ activity: state.value === '3' }"
                @click="to3">南昌</router-link>
        </div>
        <div class="header">
            <div class="search">
                <img style="width: 30px; 
                        height: 30px; 
                        position: absolute" src="https://i.328888.xyz/2023/03/07/hRciV.png">
                <input class="input" placeholder="        输入商品" disabled>
            </div>
            <router-link to="/FreeShopping" class="header_right">
                <div class="text">ALL</div>
                <div>分类</div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'


const state = reactive({
    value: '1'
})
const to1 = () =>{
    state.value = '1'
}
const to2 = () =>{
    state.value = '2'
}
const to3 = () =>{
    state.value = '3'
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.page
    .channel
        text-align center
        margin .4rem
        .text
            font-size 15px
            margin 0 .4rem
            color rgb(183,183,183)
            &.activity
                color black
                font-size 17px
    .header
        fj() 
        posion fixed 
        margin .4rem .2rem  
        .search
            height 0.925rem /* 50/16 */
            .input
                width 300px
                height 100%
                border-radius 20px // 边框圆角
        .header_right
            fd()
            justify-content  flex-end 
            .text
                font-weight bolder 
                font-size 15px
</style>