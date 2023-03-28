<template>
    <!-- 头部组件 -->
    <AppHeader />
    <!-- <搜索框索引> -->
    <Beneath />
    <!-- 频道组件 -->
    <HomeChannel />
    <!-- <转转回收> -->
    <Retrieve />
    <!-- <品牌> -->
    <Brand />
    <!-- <标签> -->
    <Tag  :products="products" :swiper="swiperList" />
    <!-- 底部导航栏组件 -->
    <NavBar />
</template>

<script setup>
import { onMounted } from 'vue'
import AppHeader from '@/views/Home/AppHeader.vue'
import Beneath from '@/views/Home/Beneath.vue'
import HomeChannel from '@/views/Home/HomeChannel.vue'
import Retrieve from '@/views/Home/Retrieve.vue'
import Brand from '@/views/Home/Brand.vue'
import Tag from '@/views/Home/Tag.vue'
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