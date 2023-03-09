<template>
    <div
        :style="{right: `${right}px`, bottom:`${bottom}px`}"
        v-show="backTop"
        class="backtop"
        @click="toTop"
    >
        <slot></slot>
    </div>
</template>

<script setup>
import _ from 'lodash'
import { ref, onMounted, onBeforeUnmount } from 'vue'
const backTop = ref(false)
const right = ref(0)
const bottom = ref(0)
const props = defineProps({
    showHeight: {
        type:Number,
        value: 0
    },
    duration: {
        type: Number,
        default: 500
    }
})
const handleSroll = () => {
    backTop.value = window.pageYOffset >= props.showHeight
}
const throllleHandleScroll = _.throttle(handleSroll,100)
const debounceHandleScroll = _.debounce(handleSroll,100)
onMounted(() => {
    window.addEventListener('scroll', _.throttle(handleSroll,100))
    window.addEventListener('resize', _.debounce(handleSroll,100))
})
onBeforeUnmount(() => {
    window.removeEventListener('srcoll',throllleHandleScroll)
    window.removeEventListener('resize',debounceHandleScroll)
})
const toTop = () => {
    // window.scrollTo(0,0)
    const sTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(sTop);
    scrollTop(window, sTop, 0, props.duration)
}
const scrollTop = (el, from = 0, to, duration = 500) => {
    const difference = Math.abs(from - to);
    // difference 要走的路程 duration 要花的时间  所以step表示速度， 这里表示它的速度乘以50倍
    const step = difference / duration  * 50 


    function scroll(start, end, step){
        if( start <= end) {
            return
        }

        let d = (start + step > end) ? end : start + step;
        if(start > end) {
            d = start - step < end ? end : start - step
        }
        window.scrollTo(d, d)

        window.requestAnimationFrame(() => scroll(d, end, step))
    }
    scroll(from, to, step)
}
</script>

<style lang="stylus" scoped>
.backtop    
    position fixed
</style>