<script setup>
import router from './router';

router.beforeEach((to, from) => {
    if(JSON.stringify(localStorage) != '{}'){
        if(to.meta.isLogin){
            router.push('/isLogin')
        }
    }
}) 
</script>

<template>
    <router-view />
</template>

<style lang="stylus" scoped>
</style>
