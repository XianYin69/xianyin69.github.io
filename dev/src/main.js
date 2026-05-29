import './assets/main.css'
import { createApp } from 'vue'
import main from './main.vue'
import { createPinia } from "pinia"

// 1. 创建 Vue 实例并赋值给 app 变量
const app = createApp(main)

// 2. 创建 Pinia 实例
const pinia = createPinia()

// 3. 先注册 Pinia 插件
app.use(pinia)

// 4. 最后再挂载应用
app.mount('#main')