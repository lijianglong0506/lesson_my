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
    <div class="search">
        <img 
        style="width: 30px; 
        height: 30px; 
        position: absolute" 
        src="https://i.328888.xyz/2023/03/07/hRciV.png">
        <input  
        class="input" 
        placeholder="        输入商品" 
        disabled>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
.header
    display flex
    justify-content space-between
    margin .2rem .2rem
    .header_item
        img
            width 2.125rem /* 50/16 */
            height 1.125rem /* 50/16 */
    .header_item_right
        fd()
        justify-content  flex-end 
        .text
            font-weight bolder 
.search
    margin  0 .2rem
    height 1.625rem /* 50/16 */
    .input
        width 100%
        height 50%
        border-radius 20px // 边框圆角
</style>