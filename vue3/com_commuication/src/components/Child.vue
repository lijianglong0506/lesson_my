<template>
    <div>
        <button @click="handlerClick">按钮</button>
    </div>
 </template>
 <script setup>
 // 用法
 const emit = defineEmits(['key', 'value'])
 const handlerClick = () => {
    //内置的emit 方法
        emit("update:key", "新的key")
        emit("update:value", "新的value")
    }
 </script>
