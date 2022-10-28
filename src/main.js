// import { createApp } from 'vue'
// import App from './App.vue'

// import './assets/main.css'

// createApp(App).mount('#app')


import {
    createApp
} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
import './mock/mock.js'
const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')