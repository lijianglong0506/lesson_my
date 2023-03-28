<template>
    <van-tabs v-model="active" color="white" title-inactive-color="#ccc">
        <van-tab title="推荐">
            <div class="box_1">
                <div class="box">
                    <div class="swiper_1">
                        <img src="https://i.328888.xyz/2023/03/24/iVSlgp.jpeg" @click="detail_1">
                    </div>
                    <div class="add">
                        <div class="top">
                            <div class="item">
                                <div class="item_left">官方验</div>
                                <div class="item_right">9成新</div>
                            </div>
                            <div class="detail">OPPO Reno3</div>
                        </div>
                        <div class="detail_1">Pro(5G) 12G+256G日出印象</div>
                        <div class="protect">
                            <div class="left">七天无理由</div>
                            <div class="right">一年平台质保</div>
                        </div>
                        <div class="text">
                            <div class="price">￥1638</div>
                            <div class="text_1">券前价￥1758</div>
                        </div>
                    </div>
                </div>
                <div class="swiper" @click="detail_2">
                    <HomeSwiper :swiper="swiper" />
                </div>
            </div>
            <div class="tab">
                <div class="tab-item" v-for="(item, index) in props.products" :key="index">
                    <img :src="item.imgSrc" @click="detail" alt="" />
                    <div class="top_1">
                        <div class="item_1">
                            <div class="item_left_1">{{ item.black }}</div>
                            <div class="item_right_1">{{ item.white }}</div>
                        </div>
                        <div class="detail_3">{{ item.detail }}</div>
                    </div>
                    <div class="detail_2">{{ item.detail_1 }}</div>
                    <div class="protect_1">
                        <div class="left_1">{{ item.left }}</div>
                        <div class="right_1">{{ item.right }}</div>
                    </div>
                    <div class="text_3">
                        <div class="price_1">{{ item.price }}</div>
                        <div class="text_2">{{ item.text }}</div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="手机">
            <div class="box_1">
                <div class="box">
                    <div class="swiper_1">
                        <img src="https://i.328888.xyz/2023/03/24/iVSlgp.jpeg" @click="detail_1">
                    </div>
                    <div class="add">
                        <div class="top">
                            <div class="item">
                                <div class="item_left">官方验</div>
                                <div class="item_right">9成新</div>
                            </div>
                            <div class="detail">OPPO Reno3</div>
                        </div>
                        <div class="detail_1">Pro(5G) 12G+256G日出印象</div>
                        <div class="protect">
                            <div class="left">七天无理由</div>
                            <div class="right">一年平台质保</div>
                        </div>
                        <div class="text">
                            <div class="price">￥1638</div>
                            <div class="text_1">券前价￥1758</div>
                        </div>
                    </div>
                </div>
                <div class="swiper" @click="detail_2">
                    <HomeSwiper :swiper="swiper" />
                </div>
            </div>
            <div class="tab">
                <div class="tab-item" v-for="(item, index) in props.products" :key="index">
                    <img :src="item.imgSrc" @click="detail" alt="" />
                    <div class="top_1">
                        <div class="item_1">
                            <div class="item_left_1">{{ item.black }}</div>
                            <div class="item_right_1">{{ item.white }}</div>
                        </div>
                        <div class="detail_3">{{ item.detail }}</div>
                    </div>
                    <div class="detail_2">{{ item.detail_1 }}</div>
                    <div class="protect_1">
                        <div class="left_1">{{ item.left }}</div>
                        <div class="right_1">{{ item.right }}</div>
                    </div>
                    <div class="text_3">
                        <div class="price_1">{{ item.price }}</div>
                        <div class="text_2">{{ item.text }}</div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="平板">
            <div class="box_1">
                <div class="box">
                    <div class="swiper_1">
                        <img src="https://i.328888.xyz/2023/03/24/iVSlgp.jpeg" @click="detail_1">
                    </div>
                    <div class="add">
                        <div class="top">
                            <div class="item">
                                <div class="item_left">官方验</div>
                                <div class="item_right">9成新</div>
                            </div>
                            <div class="detail">OPPO Reno3</div>
                        </div>
                        <div class="detail_1">Pro(5G) 12G+256G日出印象</div>
                        <div class="protect">
                            <div class="left">七天无理由</div>
                            <div class="right">一年平台质保</div>
                        </div>
                        <div class="text">
                            <div class="price">￥1638</div>
                            <div class="text_1">券前价￥1758</div>
                        </div>
                    </div>
                </div>
                <div class="swiper" @click="detail_2">
                    <HomeSwiper :swiper="swiper" />
                </div>
            </div>
            <div class="tab">
                <div class="tab-item" v-for="(item, index) in props.products" :key="index">
                    <img :src="item.imgSrc" @click="detail" alt="" />
                    <div class="top_1">
                        <div class="item_1">
                            <div class="item_left_1">{{ item.black }}</div>
                            <div class="item_right_1">{{ item.white }}</div>
                        </div>
                        <div class="detail_3">{{ item.detail }}</div>
                    </div>
                    <div class="detail_2">{{ item.detail_1 }}</div>
                    <div class="protect_1">
                        <div class="left_1">{{ item.left }}</div>
                        <div class="right_1">{{ item.right }}</div>
                    </div>
                    <div class="text_3">
                        <div class="price_1">{{ item.price }}</div>
                        <div class="text_2">{{ item.text }}</div>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="笔记本"></van-tab>
        <van-tab title="耳机"></van-tab>
        <van-tab title="包袋"></van-tab>
        <van-tab title="饰品"></van-tab>
        <van-tab title="家电"></van-tab>
        <van-tab title="智能手表"></van-tab>
        <van-tab title="电脑办公"></van-tab>
        <van-tab title="游戏智能"></van-tab>
        <van-tab title="图书"></van-tab>
        <van-tab title="潮鞋"></van-tab>
        <van-tab title="腕表"></van-tab>
        <van-tab title="服装"></van-tab>
        <van-tab title="手写笔"></van-tab>
        <van-tab title="摄影摄像"></van-tab>
    </van-tabs>
</template>

<script setup>
import HomeSwiper from '@/views/Home/HomeSwiper.vue';
import router from '../../router';

const props = defineProps({
    products: {
        type: Array,
        default: []
    },
    swiper: {
        type: Array,
        default: []
    }
})
const detail = () => {
    router.push('/Detail')
}
const detail_1 = () => {
    router.push('/Detail')
}
const detail_2 = () => {
    router.push('/Detail')
} 
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.box_1
    margin 0 .2rem
    fj()
    .box
        margin .2rem 0 0 0
        width 48%
        height 200px
        .swiper_1 
            img
                width 100%
                height 115.38px
        .add
            .top
                display flex   
                .item
                    border 1px solid black
                    height 16px
                    display flex
                    width 74px
                    .item_left
                        font-size 10px
                        background-color black
                        color white
                        width 40px
                    .item_right
                        text-align center
                        background-color white
                        width 40px
                        font-size 10px
                .detail
                    margin 0 .1rem
                    font-size 13px
            .detail_1
                font-size 13px
                margin .1rem 0
            .protect
                display flex
                .left
                    border 1px solid gray
                    color rgb(183,183,183)
                    font-size 10px
                .right
                    border 1px solid gray
                    color rgb(183,183,183)
                    margin 0 .2rem
                    font-size 10px
            .text
                display flex
                margin .2rem 0
                height 20px
                .price
                    font-size 17px
                    font-weight bold
                .text_1
                    font-size 8px
                    margin .1rem .2rem
    .swiper
        width 48%
        height 200px
.tab
    margin .4rem .2rem 51.2px .2rem
    fj()
    flex-wrap wrap
    .tab-item
        margin .2rem .0
        width 48%
        height 200px
        img
            width  100%
            height 115.38px
    .top_1
        display flex 
        .item_1
            border 1px solid black
            height 16px
            display flex
            width 74px
            .item_left_1
                font-size 10px
                background-color black
                color white
                width 40px
            .item_right_1
                text-align center
                background-color white
                width 40px
                font-size 10px
        .detail_3
            margin 0 .1rem
            font-size 13px
    .detail_2
        font-size 13px
        margin .1rem 0
    .protect_1
        display flex
        .left_1
            border 1px solid gray
            color rgb(183,183,183)
            font-size 10px
        .right_1
            border 1px solid gray
            color rgb(183,183,183)
            font-size 10px
            margin 0 .2rem
    .text_3
        display flex
        margin .2rem 0
        height 20px
        .price_1
            font-size 17px
            font-weight bold
        .text_2
            font-size 8px
            margin .1rem .2rem

</style>