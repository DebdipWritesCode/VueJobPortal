import { createApp } from 'vue'
import Toast from "vue-toastification";
import './style.css'
import 'primeicons/primeicons.css'
import "vue-toastification/dist/index.css";

import router from './router'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(Toast)

app.mount('#app')
