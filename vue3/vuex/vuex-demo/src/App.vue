<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()  // provide + inject
//
// const count = ref(store.state.count)  这样写是不行的，这是私有状态
  let count = computed(() => store.state.count)  // 响应式归中央管， 从中央读到本地来   来到本地依然是数据状态
// let count = store.state.count // 从中央到组件 响应式的
// console.log(count);
// count++
const addCount = () => {
  store.commit('add')
}
</script>
<template>
  <div>{{msg2}}</div>
<div>{{$store.state.count}}</div>
  <div>{{count}}</div>
  <!-- commit 方法  提交一次修改  add  -> store  mutations  名字为add mutations  函数执行 -->
<button @click="$store.commit('add')">加1</button>
<button @click="addCount">加1</button>
</template>

<style scoped>

</style>
