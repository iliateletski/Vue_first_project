import { createApp, ref, type Ref } from 'vue'
import { createPinia } from 'pinia'
import './styles/index.css'
import App from './App.vue'
import { router } from './router/router'
import { paginationProvide, queryProvide } from './store/store'

const app = createApp(App)
app.provide('query', queryProvide)
app.provide('pagination', paginationProvide)
app.use(router)

app.mount('#app')
