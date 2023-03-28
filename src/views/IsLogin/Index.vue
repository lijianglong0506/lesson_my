<template>
    <div class="page">
        <div class="page_header">
            <MineHeader />
        </div>
        <div class="page_profile">
            <div class="title">
                <img src="https://i.328888.xyz/2023/03/16/JaCvF.png">
            </div>
            <div class="text">
                <div class="text_1">江楠</div>
                <div class="text_2">+ 获得更多关注</div>
            </div>
        </div>
        <MineCollect />
        <MineSale />
        <MineBuy />
        <MineWallet />
        <MineTools />
    </div>
    <NavBar />
</template>

<script setup>
import MineTools from '@/views/Mine/MineTools.vue'
import MineWallet from '@/views/Mine/MineWallet.vue'
import MineBuy from '@/views/Mine/MineBuy.vue'
import MineSale from '@/views/Mine/MineSale.vue'
import MineCollect from '@/views/Mine/MineCollect.vue'
import MineHeader from '@/views/Mine/MineHeader.vue'
import NavBar from '@/components/NavBar.vue';
</script>
<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.page
    .page_profile
        display flex
        align-items center
        margin .8rem 0 .2rem .2rem
        .title
            border-radius 50%
            width 70px
            height 70px
            img
                width 100%
                height 100%
        .text
            .text_1
                margin .2rem 0
                font-size 15px
                font-weight bold
</style>