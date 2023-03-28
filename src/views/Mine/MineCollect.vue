<template>
    <div class="collect">
        <div class="collect_item">
            <div class="collect_number">0</div>
            <div class="collect_text">收藏</div>
        </div>
        <div class="collect_item">
            <div class="collect_number">0</div>
            <div class="collect_text">足迹</div>
        </div>
        <div class="collect_item">
            <div class="collect_number">0</div>
            <div class="collect_text">红包</div>
        </div>
        <div class="collect_item">
            <div class="collect_number">0</div>
            <div class="collect_text">关注</div>
        </div>
        <div class="collect_item">
            <div class="collect_number">0</div>
            <div class="collect_text">粉丝</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.collect
    margin .2rem
    fj(space-around)
    .collect_item
        fc()
        .collect_number
            font-weight bold
            font-size 17px
        .collect_text
            color rgb(183, 183, 183)
</style>