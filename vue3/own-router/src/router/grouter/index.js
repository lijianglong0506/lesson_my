import { inject, ref } from 'vue'
import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'
// 让router对象如何跨页面 跨组件可以访问到
const ROUTER_KEY = '__router__' // 查找router对象的key
// option routes history
// 返回一个路由对象
// app.use(router) router-link router-view 生效
const createRouter = (options) => {
     return new Router(options)
}
       
const useRouter = () => {
    return inject(ROUTER_KEY)
}

const createWebHashHistory = () =>{
    function bindEvents(fn) {
        window.addEventListener('hashchange',fn)
    }
     return {
        bindEvents,
        url: window.location.hash.slice(1)  // '/' // 默认首页, 指定的链接进入
     }
}
class Router{
    constructor(options) {
        this.history = options.history   // hash or history
        this.routes = options.routes   //路由的配置数组
        this.current = ref(this.history.url) // 响应式的当前路由 修改它， 自动更新
        this.history.bindEvents(() =>{
              this.current.value = window.location.hash.slice(1) //维护了current值的正确性，维持了current值 和 hash值的绑定
        })
    }
    install(app){
        // 路由对象， 提供给全局访问
        app.provide(ROUTER_KEY, this)
        //全局组件 Vue 全局中的组件
        app.component('router-link', RouterLink)
        app.component('router-view', RouterView)
        //console.log('//////////////');
    }
}

export {
    useRouter,
    createRouter,   // 返回路由实例
    createWebHashHistory    // 返回hash 事件监听
}