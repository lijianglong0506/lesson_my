// 2.0 文档
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
Vue.use(VueRouter) // 给vue 添加router 模块
import './assets/stylus/index.styl'

new Vue({
    el:'#app',
    router,
    render: h => h(App)
})