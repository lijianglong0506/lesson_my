import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
const routes = [ 
        {
            path:'/',
            component : Home 
        },
        {  
            // 路由的懒加载
            path:'/Home',
            component: () => import('@/views/Home/index.vue')
        },
        {
            path:'/Cell',
            component: () => import('@/views/Cell/index.vue')
        },
        {
            path:'/Shopping',
            component: () => import('@/views/Shopping/index.vue')
        },
        {
            path:'/Message',
            component: () => import('@/views/Message/index.vue')
        },
        {
            path:'/Mine',
            component: () => import('@/views/Mine/index.vue')
        },
    ];
    const router = createRouter({
        history: createWebHashHistory(),
        routes
})
export default router

