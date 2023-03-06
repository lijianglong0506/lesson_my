import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shopping from '../views/Shopping.vue'
import Cell from '../views/Cell.vue'
import Message from '../views/Message.vue'
import Mine from '../views/Mine.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'Home',
            component: Home
        },
        {
            path:'/Shopping',
            name:'Shopping',
            component:Shopping
        },
        {
            path:'/Cell',
            name:'Cell',
            component:Cell
        },
        {
            path:'/Message',
            name:'Message',
            component: Message
        },
        {
            path:'/Mine',
            name:'Mine',
            component:Mine
        }
    ]
})
export default router

