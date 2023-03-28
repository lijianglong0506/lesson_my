<template>
    <div class="page">
        <div class="page_header">
            <MineHeader />
        </div>
            <div class="page_login">
                <div class="page_text">
                    <div class="text_1">Hi, 小可爱</div>
                    <div class="text_2">开启转转的世界， 一起助力环保吧~</div>
                </div>
                <div class="page_button">
                    <router-link to="/Login" class="button">立即登录</router-link>
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
    .page_login
        fj()  
        margin 40px .2rem 0 .2rem 
        .page_text  
            .text_1
                margin .2rem 0
                font-size 20px
                font-weight bold
            .text_2
                color rgb(183, 183,183)
        .page_button
            margin .4rem .2rem
            border 1px solid pink
            border-radius 20px
            padding .2rem .4rem
            background-color #fe483b
            .button
                color white
</style>