import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

import './assets/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
