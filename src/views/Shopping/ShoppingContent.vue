<template>
    <div class="container_1">
        <div class="container_body">
            <div class="container_item"
            v-for="(item, index) in Shopping"
            :key="index">
                <div class="picture">
                    <img :src="item.imgSrc" alt="">
                    <div class="text">
                        <div class="text_left">{{item.price}}</div>
                        <div class="text_right">{{item.addres}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { computed } from 'vue'
import { useSaleStore } from '@/store/sale.js'


const saleStore = useSaleStore()
const Shopping = computed(() => saleStore.Shopping)


onMounted(async () => {
    await saleStore.getShopping();
})
</script>

<style lang="stylus" scoped>
.container_1
    .container_body
        display flex
        flex-wrap wrap
    .container_item
        width 33%
        .picture
            margin .2rem
            img
                width 100%
                height 100px
        .text
            display flex
            justify-content space-between
            .text_left
                font-size 14px
                font-weight bold
            .text_right
                font-size 10px
                color rgb(183,183,183)
</style>