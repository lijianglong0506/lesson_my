<template>
    <div class="box"></div>
    <div class="page">
        <div class="categorize">
            <ul>
                <li v-for="item in categoryNavSide" :key="item.categoryId" v-text="item.name" v-show="categoryNavSide"
                    class="nav-side" :class="{ 'active': state.currentIndex === item.categoryId }"
                    @click="selectMenu(item.categoryId)">
                </li>
            </ul>
        </div>
        <div class="search_content">
            <div>
                <div class="swiper_container">
                    <div class="swiper_wrapper">
                        <template v-for="(category, index) in categoryContent">
                            <div class="swiper_slide" v-if="state.currentIndex === category.categoryId"
                                :key="category.categoryId">
                                <div class="zii">
                                    <p class="category-title">{{ category.title }}</p>
                                </div>
                                <div class="category_list" v-for="(products, index) in category.categorycontainer"
                                    :key="index">
                                    <div class="picture">
                                        <img :src="products.imgSrc" alt="" />
                                        <p class="category-text">{{ products.text }}</p>
                                    </div>
                                </div>
                                <div class="body">
                                    <div class="zi">
                                        <p class="category-title_1">{{ category.title1 }}</p>
                                    </div>
                                    <div class="categorybottom" v-for="(body, index) in category.categorybody" :key="index">
                                        <div class="picture_1">
                                            <img :src="body.imgSrc" alt="" />
                                            <p class="category-text_1">{{ body.text }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { computed } from 'vue'
import { useCategoryStore } from '@/store/category.js'
import { reactive } from 'vue';



const categoryStore = useCategoryStore()
const categoryNavSide = computed(() => categoryStore.categoryNavSide)
const categoryContent = computed(() => categoryStore.categoryContent)
const state = reactive({
    currentIndex: 15
})
const selectMenu = (index) => {
    state.currentIndex = index

}
onMounted(async () => {
    await categoryStore.getCategoryNavSide();
    await categoryStore.getCategoryContent();
})
</script>

<style lang="stylus" scoped>
    @import '../../common/style/mixin.styl'
    .page
        display flex
        background-color #f2f2f2
        margin .4rem 0
        .categorize
            margin 0 .2rem
            background-color white
            text-align center
            overflow hidden
            overflow-y scroll
            height 90vh
            width 80px
            li
                &.active
                    background-color #f2f2f2
            .nav-side
                width 100%
                padding 12px 0
                font-size 14px
        .search_content
            width 280px
            .swiper_container   
                .swiper_wrapper
                    .swiper_slide    
                        display flex
                        flex-wrap wrap
                        background-color white
                        overflow hidden
                        overflow-y scroll
                        height 90vh
                        margin 0 .2rem 0 0
                        .zii
                            width 100%
                            height 40px
                            background-color #f2f2f2
                            .category-title
                                margin .2rem 0
                                font-size 13px 
                                font-weight bold 
                        .category_list
                            width 33%
                            .picture
                                margin .2rem 0
                                fd()
                                align-items center
                                img
                                    width 40px
                                    height 40px
                                .category-text
                                    font-size 10px
                                    margin .2rem
                                    text-align center
                        .body
                            margin 1rem 0
                            display flex
                            flex-wrap wrap
                            background-color white
                            .zi
                                width 100%
                                background-color #f2f2f2
                                height 40px
                                .category-title_1
                                    font-size 13px
                                    margin .4rem 0
                                    font-weight bold
                            .categorybottom
                                width 33%
                                padding .2rem 0
                                .picture_1
                                    img
                                        width 40px
                                        height 40px
                                        fd()
                                        align-items center
                                        margin 0 .7rem
                                    p   
                                        font-size 10px
                                        margin .2rem
                                        text-align center                             

    </style>