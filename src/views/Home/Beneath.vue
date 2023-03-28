<template>
        <div class="beneath">
            <div class="beneath_item">苹果笔记本</div>
            <div class="beneath_item">苹果耳机</div>
            <div class="beneath_item">苹果平板</div>
            <div class="beneath_item">iphone 11</div>
        </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.beneath
    fj(space-around)
    margin .2rem 0
    .beneath_item
        padding 4px 15px 
        border-radius 10px
        background-color #f2f2f2
</style>