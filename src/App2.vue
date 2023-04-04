<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import useMouse from './hooks/mouse'
const { x, y } = useMouse()
</script>

<template>
    <div>
        x: {{ x }}
        y: {{ y }}
    </div>
</template>

<style scoped>

</style>
