<template>
    <ShoppingHeader />
    <div class="scroll">
        <div class="warn">
            <div class="fuhao">"'</div>
            <div class="zi">自由市场商品由个人发布，未经官方验货，请自行交流购买</div>
            <div class="fuhao">"'</div>
        </div>
        <ShoppingChannel />
        <ShoppingContent />
    </div>
    <NavBar />
</template>

<script setup>
import ShoppingContent from '@/views/Shopping/ShoppingContent.vue'
import ShoppingChannel from '@/views/Shopping/ShoppingChannel.vue';
import ShoppingHeader from '@/views/Shopping/ShoppingHeader.vue'
import NavBar from '@/components/NavBar.vue';
</script>

<style lang="stylus" scoped>
.scroll
    overflow hidden
    height 75vh
    overflow-y scroll
    .warn
        display flex
        justify-content center
        align-items center
        .fuhao
            color rgb(183,183,183)
</style>