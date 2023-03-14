<script setup>
import Input from './components/Input.vue'
import { ref } from 'vue'
const tel = ref('')
// 组件通信的角度 如何？
// tel 跟 Input 组件双向绑定 而不是标签
// 父子组件之间props 单向的   props  ->
// 子组件 emit 将 input 标签的change 传回来 修改tel
setTimeout(() => {
    // tel.value = '13888888888'
})
</script>

<template>
{{tel}}
<!-- <Input :modelValue="tel" @updata:modelValue="tel=$event" /> -->
<Input v-model="tel" :disabled="false" placeholder="请输入手机号" />
</template>

<style scoped>

</style>
