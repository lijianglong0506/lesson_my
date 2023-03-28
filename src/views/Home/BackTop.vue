<template>
    <div   
        class="backtop" 
        :style="{ bottom: `${bottom}px`, left: `${left}px` }" 
        @click="toTop"
        v-show="!Props.show">
        <div class="back">
            <i class="iconfont icon-huidaodingbu"></i>
            <div>回顶部</div>
        </div>
    </div>
    <div class="box"></div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const bottom = ref(-3)
const left = ref(-8)
const Props = defineProps({
    show: {
        type: Boolean,
        default: true
    }
})
const state = reactive({
    duration: 500
})

const toTop = () => {
    const sTop = document.documentElement.scrollTop || document.body.scrollTop
    // console.log(sTop);
    scrollTop(window, sTop, 0 , state.duration)
}
const scrollTop = (el, from , to , duration ) => {
    const difference = Math.abs(from - to)
    const step = difference / duration * 50
    function scroll(start, end, step) {
        if (start <= end) {
            return
        }
        let d = (start + step > end) ? end : start + step;
        if (start > end) {
            d = start - step < end ? end : start - step
        }
        window.scrollTo(d, d)
        window.requestAnimationFrame(() => scroll(d, end, step))
    }
    scroll(from , to , step)
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl';
.backtop
    position fixed
    z-index  9999
    .back
        padding .2rem
        // background-color #20BDCB
        // background-image: linear-gradient(to bottom right, #29CDC4, #038FEF);
        border-radius 50%
        fc()
        i
            font-size 25px 
            color black 
            font-weight bold
            text-align center
</style>