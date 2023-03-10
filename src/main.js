import { createApp } from 'vue'
import  router from './router'
import App from './App.vue'
import 'lib-flexible/flexible' 
import './assets/base.css'
import vant from 'vant'
const app = createApp(App)

app  
    .use(vant)
    .use(router)
    .mount('#app')
