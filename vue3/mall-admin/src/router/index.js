import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),    // 两种路由的其中之一，这里用的是createWebHashHistory
    routes: [
        {
            path: '/',   // 根路径   login 
            // http 状态码  302 跳转 浏览器 
            redirect: '/introduce'  // 跳转
        },
        {
            path: '/add',
            name: 'add',
            meta:{
                login:true
            },
            component: () => import('@/views/add.vue')
        },
        {
        path:'/login',
        name:'login',
        component: () => import('@/views/Login.vue')

        },
    ]
})

export default router
