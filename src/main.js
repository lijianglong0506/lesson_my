import { createApp } from 'vue'
import App from './App.vue'
import  router from './router/index'
import 'lib-flexible/flexible' 
import './assets/base.css'

const app = createApp(App)

app  
    .use(router)
    .mount('#app')
