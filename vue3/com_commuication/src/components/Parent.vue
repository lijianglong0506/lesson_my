<template>
    <child v-model:key="key" v-model:value="value"></child>
</template>

<script setup>
import Child from './Child.vue'
 import { ref } from "vue"

const key = ref("1111")
const value = ref("2222")
</script>