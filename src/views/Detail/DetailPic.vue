<template>
    <div class="page">
        <span class="picture_1" :class="{ activity: state.value === '1'}" @click="to1">实拍图(10) |</span>
        <span class="picture_2" :class="{ activity: state.value === '2'}" @click="to2">细节图(5) |</span>
        <span class="picture_3" :class="{ activity: state.value === '3'}" @click="to3">质检 > |</span>
        <span class="picture_4" :class="{ activity: state.value === '4'}" @click="to4">评价></span>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
const state = reactive({
    value: '1'
})
const to1 = () => {
    state.value = "1"
}
const to2 = () => {
    state.value = "2"
}
const to3 = () => {
    state.value = "3"
}
const to4 = () => {
    state.value = "4"
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.page
    position absolute 
    top 265px
    left 1.5rem
    right 100px
    white-space nowrap
    text-align center
    .picture_1
        background-color rgb(183,183,183,183)
        font-size 8px
        padding 0 8px
        border-radius 20px 0 0 20px
        &.activity
            background-color white
            color black
    .picture_2
        background-color rgb(183,183,183,183)
        font-size 8px
        padding 0 8px
        &.activity
            background-color white
            color black
    .picture_3
        background-color rgb(183,183,183,183)
        font-size 8px
        padding 0 8px
        &.activity
            background-color white
            color black
    .picture_4
        background-color rgb(183,183,183,183)
        font-size 8px
        padding 0 8px
        border-radius 0 20px 20px 0
        &.activity
            background-color white
            color black
</style>