<template>
    <!-- 头部组件 -->
    <AppHeader />
    <!-- 频道组件 -->
    <HomeChannel />
    <!-- <转转回收> -->
    <Retrieve />
    <!-- <品牌> -->
    <Brand />
    <!-- <标签> -->
    <Tag  :products="products"/>
    <!-- 轮播图组件 -->
    <HomeSwiper :swiper="swiperList" />
    <!-- 底部导航栏组件 -->
    <NavBar />
</template>

<script setup>
import { onMounted } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import HomeChannel from '@/components/HomeChannel.vue'
import Retrieve from '@/components/Retrieve.vue'
import Brand from '@/components/Brand.vue'
import Tag from '@/components/Tag.vue'
import HomeSwiper from '@/components/HomeSwiper.vue'
import NavBar from '@/components/NavBar.vue'
import { computed } from 'vue'
import { useHomeStore } from '@/store/home.js'


const homeStore = useHomeStore()
const swiperList = computed(() => homeStore.swiperList)
const products = computed(() => homeStore.products)


onMounted(async () => {
    await homeStore.getSwiperList();
    await homeStore.getProducts();
})
</script>

<style lang="stylus" scoped>

</style>