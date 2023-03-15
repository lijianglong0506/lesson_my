<template>
    <van-tabs 
    v-model="active" 
    color="white" 
    title-inactive-color="#ccc">
        <van-tab title="推荐">
            <div class="tab">
                <div
                    class="tab-item"
                    v-for="(item, index) in props.products" 
                    :key="index">
                    <img :src="item.imgSrc" alt=""/>
                </div>
            </div>
        </van-tab>
        <van-tab title="手机"></van-tab>
        <van-tab title="平板"></van-tab>
        <van-tab title="笔记本"></van-tab>
        <van-tab title="耳机"></van-tab>
        <van-tab title="包袋"></van-tab>
        <van-tab title="饰品"></van-tab>
        <van-tab title="家电"></van-tab>
        <van-tab title="智能手表"></van-tab>
        <van-tab title="电脑办公"></van-tab>
        <van-tab title="游戏智能"></van-tab>
        <van-tab title="图书"></van-tab>
        <van-tab title="潮鞋"></van-tab>
        <van-tab title="腕表"></van-tab>
        <van-tab title="服装"></van-tab>
        <van-tab title="手写笔"></van-tab>
        <van-tab title="摄影摄像"></van-tab>
    </van-tabs>
</template>

<script setup>
const props = defineProps(['products'])
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
.tab
    margin 0 .2rem
    fj()
    flex-wrap wrap
    .tab-item
        margin .2rem .0
        width 48%
        height 200px
        img
            width  100%
            height 100%
</style>