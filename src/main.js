import { createApp } from 'vue'
import  router from './router'
import App from './App.vue'
import 'lib-flexible/flexible' 
import './assets/base.css'
import '@/mock/index'   // 模拟数据
import {createPinia} from 'pinia'
import { 
    Swipe, 
    SwipeItem, 
    Tabs,
    Lazyload ,
    Tab,
    Field,
} from 'vant'
import 'vant/lib/index.css' 
const app = createApp(App)

app 
    .use(Field)
    .use(createPinia())
    .use(Lazyload)
    .use(Tab)
    .use(Tabs)
    .use(Swipe)
    .use(SwipeItem)
    .use(router)
    .mount('#app')
