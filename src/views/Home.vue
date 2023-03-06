<template>
    <div class="header">
        <div class="header_item">
            <img src="https://i.328888.xyz/2023/03/06/hDXbU.png">
            <div>真的官方体验 买卖二手不一样 -></div>
        </div>
        <div class="header_item_right">
            <div class="text">ALL</div>
            <div>分类</div>
        </div>
    </div>
    <div>
        <NavBar />
    </div>
</template>

<script setup>

import NavBar from '../components/NavBar.vue'
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
.header
    display flex
    justify-content space-between
    .header_item
        img
            width 2.125rem /* 50/16 */
            height 1.125rem /* 50/16 */
    .header_item_right
        fd()
        justify-content  flex-end 
        .text
            font-weight bolder  
        

        

</style>