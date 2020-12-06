import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter, createWebHistory } from 'vue-router';

import Starrytky from './components/Starrytky.vue';
import Starrytky2 from './components/Starrytky2.vue';

const history = createWebHistory()
const router = createRouter({
    history: history,
    routes: [
        {
            path: '/', component: Starrytky
        },
        {
            path: '/tky', component: Starrytky2
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
