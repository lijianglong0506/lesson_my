import { createApp } from 'vue'
import App from './App.vue' // 根组件
// - 启用路由  路由接管项目
import router from '@/router' // 路由的配置  模块化
// - 引入组件库  按需加载
import {
   ElContainer,
   ElAside,
   ElMenu,
   ElSubMenu,
   ElMenuItemGroup,
   ElMenuItem,
   ElForm,
   ElFormItem,
   ElInput,
   ElButton,
   ElCheckbox
} from 'element-plus'
import 'element-plus/dist/index.css'

// - 样式的重置  css reset .....
// - 全局要做的， 在这做


const app = createApp(App)  // web app

app
   .use(router)
   //    把 ElContainer 升级为全局组件，每个页面都可以用
   .use(ElContainer)
   .use(ElAside)
   .use(ElMenu)
   .use(ElSubMenu)
   .use(ElMenuItemGroup)
   .use(ElMenuItem)
   .use(ElForm)
   .use(ElFormItem)
   .use(ElInput)
   .use(ElButton)
   .use(ElCheckbox)
   .mount('#app') // 挂载
