<template>
   <component :is = "component"></component>
</template>

<script setup>
// 拿到router 对象
// 拿到router.routes
// 当前的url 找到   组件
// 显示到router-view
import { useRouter } from './index'   // router
import { computed } from 'vue' 

const router = useRouter()
console.log(router,'////');
const component = computed(() =>{
    const route = router.routes.find(
        (item) => item.path === router.current.value
    )
    return route ? route.component : null
})
// routes
// fineOne component
</script>

<style scoped>

</style>