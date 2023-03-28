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
            component: () => import('@/views/Home/Index.vue')
        },
        {
            path:'/Cell',
            component: () => import('@/views/Cell/Index.vue')
        },
        {
            path:'/Shopping',
            component: () => import('@/views/Shopping/Index.vue')
        },
        {
            path:'/Message',
            component: () => import('@/views/Message/Index.vue')
        },
        {
            path:'/Mine',
            component: () => import('@/views/Mine/Index.vue'),
            meta:{
                isLogin:true
            }
        },
        {
            path:'/Login',
            component: () => import('@/views/Login/Index.vue')
        },
        {
            path:'/IsLogin',
            component: () => import('@/views/IsLogin/Index.vue'),
        },
        {
            path:'/Detail',
            component: () => import('@/views/Detail/Index.vue'),
        },
        {
            path: '/Categorize',
            component: () => import('@/views/Categorize/Index.vue'),
            redirect: 'Official',
            children: [
                {
                    path: '/Official',
                    component: () => import('@/views/Categorize/Official.vue')
                },
                {
                    path: '/FreeShopping',
                    component: () => import('@/views/Categorize/FreeShopping.vue')
                }
            ]
        },
        {
            path: '/tuijian',
            component: () => import('@/views/Shopping/Index.vue')
        },
        {
            path: '/xingqu',
            component: () => import('@/views/Shopping/Index.vue')
        },
        {
            path: '/nanchang',
            component: () => import('@/views/Shopping/Index.vue')
        },

    ];
    const router = createRouter({
        history: createWebHashHistory(),
        routes
})
export default router

