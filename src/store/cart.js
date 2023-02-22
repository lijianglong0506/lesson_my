// - 区别于vuex 形式简洁
// 原来的modules 取而代之 defineStore
import { defineStore } from 'pinia'
// use 开头 有点类似于hooks的概念
// 一个状态模块就是一个defineStore函数
export const useCartStore = defineStore({
    id: 'cart', // 名字
    state: () => ({
        rawItems: []
    }),
    getters: {
      items:(state) => state.rawItems.reduce((items, item) => {   // map的高级版本
          const existingItem = items.find(it => it.name === item)
          if(!existingItem) {
            items.push({ name: item, amount:1})
          }else {
            existingItem.amount++;
          }
          return items
      },[])
    },
    actions: {
        addItem(name) {
            this.rawItems.push(name)
        },
        removeItem(name){
            const i = this.rawItems.lastIndexOf(name)
            if(i > -1) this.rawItems.splice(i,1)
        },
        async purchaseItems() {

        }
    }
})