import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// add global ghostAPI variable, so when use we have to do:
// import { getCurrentInstance } from 'vue'
// const app = getCurrentInstance()
// console.log(app.appContext.config.globalProperties.ghostAPI)
import GhostContentAPI from '@tryghost/content-api'
app.config.globalProperties.ghostAPI = new GhostContentAPI({
    url: import.meta.env.VITE_GHOST_URL,
    key: import.meta.env.VITE_GHOST_KEY,
    version: "v5.0"
})

// mount app
app.mount('#app')
