<template>
    <div>
        <button @click="clickedFn">
            smash me!
        </button>
        <note>Delay is set to 1000ms for this demo</note>
        <p>Button click: {{ clicked }}</p>
        <p>Event handler called: {{ updated }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useThrottleFn } from '@vueuse/core'
const updated = ref(0)
const clicked = ref(0)
const ThrottleFn = useThrottleFn(() => {
    updated.value += 1
}, 1000)

function clickedFn() {
    clicked.value += 1
    ThrottleFn()
}
</script>

<style scoped></style>