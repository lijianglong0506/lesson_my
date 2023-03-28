<template>
    <DetailHeader />
    <DetailPic />
    <DetailAuthority />
    <DetailPrice />
    <DetailText/>
    <DetailAssess/>
    <router-view />
</template>

<script setup>
import DetailPrice from '@/views/Detail/DetailPrice.vue'
import DetailAuthority from '@/views/Detail/DetailAuthority.vue'
import DetailHeader from '@/views/Detail/DetailHeader.vue'
import DetailText from '@/views/Detail/DetailText.vue'
import DetailAssess from '@/views/Detail/DetailAssess.vue'
import DetailPic from '@/views/Detail/DetailPic.vue'
</script>

<style lang="stylus" scoped>

</style>