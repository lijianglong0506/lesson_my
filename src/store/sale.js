import { defineStore } from 'pinia'
import { getShopping } from '@/service/sale.js'
// 每个子仓库都是一个函数 函数以 use开头 store结尾  叫hooks函数 useHomeStore
export const useSaleStore = defineStore('shopping', {
    state: () => {
        return {
            // 响应式
            Shopping: []
        }
    },
    actions: {  // 接管了数据请求
        async getShopping() {
            const res = await getShopping();
            this.Shopping = res.result
        }
    }
})
