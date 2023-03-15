<template>
    <van-swipe 
    class="my-swipe" 
    :autoplay="3000" 
    :indicator-color="red">
        <van-swipe-item 
        v-for="(item, index) in props.swiper" 
        :key="index">
            <img :src="item.imgSrc" alt=""/>
        </van-swipe-item>
    </van-swipe>
</template>

<script setup>
const props = defineProps(['swiper'])
</script>

<style lang="stylus" scoped>
.my-swipe
    width 100%
    height 100%
    img
        width 500px
        height 100px
</style>