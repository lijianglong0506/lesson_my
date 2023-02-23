import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id:'user',
    state: () => ({
        name: '龙哥米哈游',
        isAdmin: true
    })
})