import { defineStore } from 'pinia'
import { getSwiperList, getProducts } from '@/service/home.js'
// 每个子仓库都是一个函数 函数以 use开头 store结尾  叫hooks函数 useHomeStore
export const useHomeStore = defineStore('home', {
    state: () => {
        return {
            // 响应式
            swiperList: [],
            products: []
        }
    },
    actions: {  // 接管了数据请求
        async getSwiperList() {
            const res = await getSwiperList();
            this.swiperList = res.result
        },
        async getProducts() {
            const res = await getProducts();
            this.products = res.result
        }

    }
})