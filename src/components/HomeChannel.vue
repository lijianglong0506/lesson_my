<template>
<div class="hd">
        <div class="pic">
            <img src="https://i.328888.xyz/2023/03/07/h7pkU.jpeg">
            <div>苹果手机</div>  
        </div>
        <div class="pic">
            <img src="https://i.328888.xyz/2023/03/07/hTrTV.jpeg">
            <div>安卓手机</div>  
        </div>
        <div class="pic">
            <img src="https://i.328888.xyz/2023/03/07/5VM08.jpeg">
            <div>耳机</div>  
        </div>
        <div class="pic">
            <img src="https://i.328888.xyz/2023/03/07/5yTIQ.jpeg">
            <div>电脑平板</div>  
        </div>
        <div class="pic">
            <img src="https://i.328888.xyz/2023/03/07/54Uud.jpeg">
            <div>智能手表</div>  
        </div>
        <div class="pic">
            <img src="https://i.328888.xyz/2023/03/07/54ray.jpeg">
            <div>电脑办公</div>  
        </div>
        <div class="pic">
            <img src="https://i.328888.xyz/2023/03/07/54Rk5.jpeg">
            <div>潮牌轻奢</div>  
        </div>
        <div class="pic">
            <img src="https://i.328888.xyz/2023/03/07/54o5N.jpeg">
            <div>旧机换钱</div>  
        </div>
        <div class="pic">
            <img src="https://i.328888.xyz/2023/03/07/5AISo.jpeg">
            <div>图书小说</div>  
        </div>
        <div class="pic">
            <img src="https://i.328888.xyz/2023/03/07/5A6jp.jpeg">
            <div>游戏交易</div>  
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl'
.hd
    display flex
    flex-wrap wrap
    .pic
        justify-content center
        align-items center
        margin .2rem 0
        fd()
        width 20%
        img 
            width 0.9rem /* 40/16 */
            height 0.9rem /* 40/16 */
</style>