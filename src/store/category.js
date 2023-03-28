import { defineStore } from 'pinia'
import { getCategoryNavSide, getCategoryContent } from '@/service/category.js'
export const useCategoryStore = defineStore('category', {
    state: () => {
        return {
            // 响应式
            categoryNavSide: [],
            categoryContent:[]
        }
    },
    actions: {  // 接管了数据请求
        async getCategoryNavSide() {
            const res = await getCategoryNavSide();
            this.categoryNavSide = res.result
        },
        async getCategoryContent() {
            const res = await getCategoryContent();
            this.categoryContent = res.result
        }

    }
})